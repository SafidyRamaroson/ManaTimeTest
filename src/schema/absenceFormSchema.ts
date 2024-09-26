import { z } from "zod";

export const absenceFormSchema = z.object({
  utilisateur: z.string().min(1, "Utilisateur est requis."),
  categorie: z.string().min(1, "Catégorie est requise."),
  periode: z
    .string()
    .min(1, "Période est requise.")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val >= 1900 && val <= 2100, {
      message: "Période doit être une année valide (e.g., 2023).",
    }),
  soldesActuels: z
    .string()
    .min(1, "Soldes Actuels est requis.")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: "Soldes Actuels doit être un entier.",
    }),
  soldesPris: z
    .string()
    .min(1, "Soldes Pris est requis.")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: "Soldes Pris doit être un entier.",
    }),
  soldesFutur: z
    .string()
    .min(1, "Soldes Futur est requis.")
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: "Soldes Futur doit être un entier.",
    }),
});
