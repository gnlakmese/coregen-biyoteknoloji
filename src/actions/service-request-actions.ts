"use server";

import { prisma } from "@/lib/prisma";
import { serviceRequestSchema } from "@/lib/validation/service-request-schema";

export type SubmitServiceRequestResult =
  | { success: true; requestNumber: string }
  | { success: false; error: string };

export async function submitServiceRequest(data: unknown): Promise<SubmitServiceRequestResult> {
  const parsed = serviceRequestSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Form bilgileri eksik veya hatalı." };
  }

  const requestNumber = `TS-${Date.now().toString(36).toUpperCase()}`;

  await prisma.serviceRequest.create({
    data: {
      requestNumber,
      fullName: parsed.data.fullName,
      institutionAndRole: parsed.data.institutionAndRole,
      phone: parsed.data.phone,
      address: parsed.data.address,
      invoiceDate: parsed.data.invoiceDate || null,
      deviceBrandModelSerial: parsed.data.deviceBrandModelSerial,
      problemDescription: parsed.data.problemDescription,
      accessoriesIncluded: parsed.data.accessoriesIncluded,
      usedInMicrobiology: parsed.data.usedInMicrobiology === "evet",
      note: parsed.data.note || null,
    },
  });

  return { success: true, requestNumber };
}
