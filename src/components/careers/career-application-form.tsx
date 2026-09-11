"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, FileText, Loader2, Upload, X } from "lucide-react";

import { submitCareerApplication } from "@/actions/career-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ACCEPTED_CV_TYPE,
  MAX_CV_SIZE_BYTES,
  careerApplicationSchema,
  type CareerApplicationValues,
} from "@/lib/validation/career-schema";

function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function CareerApplicationForm({ jobTitle }: { jobTitle?: string }) {
  const router = useRouter();
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareerApplicationValues>({
    resolver: zodResolver(careerApplicationSchema),
  });

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setCvError(null);

    if (!file) {
      setCvFile(null);
      return;
    }
    if (file.type !== ACCEPTED_CV_TYPE) {
      setCvError("CV yalnızca PDF formatında yüklenebilir.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_CV_SIZE_BYTES) {
      setCvError("Dosya boyutu 5 MB'ı geçemez.");
      event.target.value = "";
      return;
    }
    setCvFile(file);
  }

  async function onSubmit(values: CareerApplicationValues) {
    setSubmitError(null);
    const result = await submitCareerApplication(values, cvFile);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    router.push("/kurumsal/kariyer/basvuru/onay");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {jobTitle && (
        <div className="rounded-md bg-secondary px-4 py-3 text-sm text-secondary-foreground">
          <span className="font-medium">Başvurulan Pozisyon:</span> {jobTitle}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Ad" htmlFor="firstName" error={errors.firstName?.message}>
          <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
        </FormField>
        <FormField label="Soyad" htmlFor="lastName" error={errors.lastName?.message}>
          <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="E-posta" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField label="Telefon" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FormField>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="cv" className="text-sm font-medium text-foreground">
          CV (PDF, maks. 5 MB)
        </label>
        {cvFile ? (
          <div className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
            <span className="inline-flex items-center gap-2 text-sm text-foreground">
              <FileText className="h-4 w-4 text-primary" />
              {cvFile.name}
            </span>
            <button
              type="button"
              onClick={() => setCvFile(null)}
              aria-label="CV dosyasını kaldır"
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="cv"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border px-4 py-8 text-center transition-colors hover:border-primary/40"
          >
            <Upload className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Dosya seçmek için tıklayın veya sürükleyip bırakın
            </span>
            <input id="cv" type="file" accept="application/pdf" onChange={handleFileChange} className="sr-only" />
          </label>
        )}
        {cvError && <p className="text-xs text-destructive">{cvError}</p>}
      </div>

      <FormField label="Ön Yazı (opsiyonel)" htmlFor="coverNote" error={errors.coverNote?.message}>
        <textarea
          id="coverNote"
          rows={4}
          {...register("coverNote")}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </FormField>

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
            Başvuruyu Gönder
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
