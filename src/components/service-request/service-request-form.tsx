"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Loader2 } from "lucide-react";

import { submitServiceRequest } from "@/actions/service-request-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serviceRequestSchema, type ServiceRequestValues } from "@/lib/validation/service-request-schema";

function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function ServiceRequestForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServiceRequestValues>({
    resolver: zodResolver(serviceRequestSchema),
  });

  async function onSubmit(values: ServiceRequestValues) {
    setSubmitError(null);
    const result = await submitServiceRequest(values);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    router.push(`/teknik-servis/onay?ref=${encodeURIComponent(result.requestNumber)}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Adınız / Soyadınız" htmlFor="fullName" required error={errors.fullName?.message}>
          <Input id="fullName" {...register("fullName")} />
        </Field>
        <Field
          label="Firma/Kurum Adı ve Göreviniz"
          htmlFor="institutionAndRole"
          required
          error={errors.institutionAndRole?.message}
        >
          <Input id="institutionAndRole" {...register("institutionAndRole")} />
        </Field>
      </div>

      <Field label="Telefon Numaranız" htmlFor="phone" required error={errors.phone?.message}>
        <Input id="phone" type="tel" {...register("phone")} />
      </Field>

      <Field label="Adresiniz" htmlFor="address" required error={errors.address?.message}>
        <textarea
          id="address"
          rows={2}
          {...register("address")}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </Field>

      <Field label="Cihazın Fatura Tarihi (opsiyonel)" htmlFor="invoiceDate" error={errors.invoiceDate?.message}>
        <Input id="invoiceDate" type="date" {...register("invoiceDate")} />
      </Field>

      <Field
        label="Cihazın Markası / Modeli ve Seri Numarası"
        htmlFor="deviceBrandModelSerial"
        required
        error={errors.deviceBrandModelSerial?.message}
      >
        <Input id="deviceBrandModelSerial" placeholder="ör. DLAB D2012S — Seri No: 12345" {...register("deviceBrandModelSerial")} />
      </Field>

      <Field
        label="Cihaz ile İlgili Yaşadığınız Problem Nedir?"
        htmlFor="problemDescription"
        required
        error={errors.problemDescription?.message}
      >
        <textarea
          id="problemDescription"
          rows={3}
          {...register("problemDescription")}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </Field>

      <Field
        label="Cihaz ile Birlikte Göndereceğiniz Aksesuarlar Nelerdir?"
        htmlFor="accessoriesIncluded"
        required
        hint="Aksesuar göndermiyorsanız &quot;Yok&quot; yazabilirsiniz."
        error={errors.accessoriesIncluded?.message}
      >
        <Input id="accessoriesIncluded" {...register("accessoriesIncluded")} />
      </Field>

      <Field label="Cihazı Mikrobiyolojide Kullandınız mı?" htmlFor="usedInMicrobiology" required error={errors.usedInMicrobiology?.message}>
        <select
          id="usedInMicrobiology"
          {...register("usedInMicrobiology")}
          defaultValue=""
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <option value="" disabled>
            Seçiniz
          </option>
          <option value="hayir">Hayır</option>
          <option value="evet">Evet</option>
        </select>
      </Field>

      <Field label="Not (opsiyonel)" htmlFor="note" error={errors.note?.message}>
        <textarea
          id="note"
          rows={3}
          {...register("note")}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </Field>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="kvkkConsent"
          type="checkbox"
          {...register("kvkkConsent")}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <label htmlFor="kvkkConsent" className="text-sm leading-relaxed text-muted-foreground">
          KVKK Aydınlatma Metni&apos;ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.
        </label>
      </div>
      {errors.kvkkConsent && <p className="text-xs text-destructive">{errors.kvkkConsent.message}</p>}

      {submitError && (
        <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{submitError}</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            Talebi Gönder
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
