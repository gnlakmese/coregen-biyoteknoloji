export type AdminTableColumn<T> = {
  header: string;
  cell: (row: T) => React.ReactNode;
  className?: string;
};

export function AdminDataTable<T>({
  columns,
  rows,
  getRowKey,
}: {
  columns: AdminTableColumn<T>[];
  rows: T[];
  getRowKey: (row: T) => string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={getRowKey(row)} className="hover:bg-accent/40">
              {columns.map((column) => (
                <td key={column.header} className={column.className ?? "px-4 py-3 text-foreground"}>
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
