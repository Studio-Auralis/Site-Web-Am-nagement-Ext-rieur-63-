"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, X, Loader2, CheckCircle2 } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  ville: z.string().min(2, "Veuillez indiquer votre ville"),
  typeProjet: z.enum(["portail", "terrasse", "cloture", "autre"]),
  budget: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxSize: MAX_FILE_SIZE,
    maxFiles: 3,
    onDrop: (acceptedFiles) => {
      if (files.length + acceptedFiles.length <= 3) {
        setFiles((prev) => [...prev, ...acceptedFiles].slice(0, 3));
      }
    },
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      files.forEach((file) => {
        formData.append("photos", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSubmitSuccess(true);
      reset();
      setFiles([]);

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitSuccess && (
        <div className="bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          <p className="text-sm font-medium">
            Votre demande a bien été envoyée ! Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="text-sm font-medium">{submitError}</p>
        </div>
      )}

      {/* Nom & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nom">
            Nom complet <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nom"
            {...register("nom")}
            placeholder="Jean Dupont"
            className={errors.nom ? "border-red-500" : ""}
          />
          {errors.nom && (
            <p className="text-sm text-red-500">{errors.nom.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jean.dupont@exemple.fr"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Téléphone & Ville */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telephone">
            Téléphone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="telephone"
            type="tel"
            {...register("telephone")}
            placeholder="06 00 00 00 00"
            className={errors.telephone ? "border-red-500" : ""}
          />
          {errors.telephone && (
            <p className="text-sm text-red-500">{errors.telephone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="ville">
            Ville (Puy-de-Dôme) <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ville"
            {...register("ville")}
            placeholder="Clermont-Ferrand"
            className={errors.ville ? "border-red-500" : ""}
          />
          {errors.ville && (
            <p className="text-sm text-red-500">{errors.ville.message}</p>
          )}
        </div>
      </div>

      {/* Type de projet & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="typeProjet">
            Type de projet <span className="text-red-500">*</span>
          </Label>
          <select
            id="typeProjet"
            {...register("typeProjet")}
            className={`flex h-11 w-full rounded-lg border bg-white px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
              errors.typeProjet ? "border-red-500" : "border-neutral-300"
            }`}
          >
            <option value="">Sélectionnez un type</option>
            <option value="portail">Portail</option>
            <option value="terrasse">Terrasse</option>
            <option value="cloture">Clôture</option>
            <option value="autre">Autre</option>
          </select>
          {errors.typeProjet && (
            <p className="text-sm text-red-500">{errors.typeProjet.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget estimé (optionnel)</Label>
          <Input
            id="budget"
            {...register("budget")}
            placeholder="Ex: 5000€ - 8000€"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Décrivez votre projet..."
          rows={5}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Upload Photos */}
      <div className="space-y-2">
        <Label>Photos de votre terrain (optionnel, max 3)</Label>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-primary-600 bg-primary-50"
              : "border-neutral-300 hover:border-primary-400"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-10 w-10 mx-auto mb-3 text-neutral-400" />
          <p className="text-sm text-neutral-600 mb-1">
            Glissez-déposez vos photos ici, ou cliquez pour sélectionner
          </p>
          <p className="text-xs text-neutral-500">
            JPG, PNG ou WebP - Max 5MB par photo - {files.length}/3
          </p>
        </div>

        {/* Fichiers uploadés */}
        {files.length > 0 && (
          <div className="space-y-2 mt-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-neutral-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded overflow-hidden bg-neutral-200">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-700">
                      {file.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-neutral-200 rounded transition-colors"
                >
                  <X className="h-5 w-5 text-neutral-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RGPD Consent */}
      <div className="text-xs text-neutral-500">
        En soumettant ce formulaire, vous acceptez que vos données soient
        utilisées pour traiter votre demande. Vos données ne seront pas stockées
        et seront uniquement envoyées par email.
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>
    </form>
  );
}
