import React, { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import { absenceFormSchema } from "./../../schema/absenceFormSchema";
import { useAbsenceStore } from "../../store/useAbsenceStore";
import { useModalStore } from "../../store/useModalStore";
import type { AbsenceDataType } from "../../types/Absence";
import { initialValueAbsenceForm } from "../../schema/InitialValueAbsenceForm";
import toast from "react-hot-toast";

type Errors = Partial<AbsenceDataType & { unique?: string }>;

export const AbsenceAddForm: React.FC = () => {
  const addNewAbsence = useAbsenceStore((state) => state.addNewAbsence);
  const checkDuplicate = useAbsenceStore((state) => state.checkDuplicate);
  const toggleModal = useModalStore((state) => state.toggleAbsenceModal);
  const users = ["Alice", "Bob", "Charlie", "Diana"];

  const [formData, setFormData] = useState<AbsenceDataType>(
    initialValueAbsenceForm
  );

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    try {
      absenceFormSchema.parse(formData);
      // Check for uniqueness
      const isDuplicate = checkDuplicate(formData);

      if (isDuplicate) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          unique:
            "Cette combinaison d'Utilisateur, Catégorie et Période existe déjà.",
        }));
        return false;
      }
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Errors = {};
        err.errors.forEach((error) => {
          const field = error.path[0] as keyof AbsenceDataType;
          if (field in formData) {
            newErrors[field] = error.message;
          }
        });
      }
      return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const newRow = {
        id: Date.now(),
        ...formData,
      };
      toast.success("Absence crée", {
        duration: 2000,
        position: "top-center",
      });
      addNewAbsence(newRow);
      setFormData(initialValueAbsenceForm);
      setErrors({});
      toggleModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-w-44">
      {/* Background */}
      <div className="fixed inset-0 bg-black bg-opacity-50 blur-sm w-full"></div>

      {/* Form Modal */}
      <div className="bg-white rounded-lg w-11/12 max-w-md p-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Ajouter une Absence</h2>
          <button
            onClick={toggleModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✖️
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Utilisateur */}
          <div>
            <label
              htmlFor="utilisateur"
              className="block text-sm font-medium text-gray-700"
            >
              Utilisateur
            </label>
            <select
              id="utilisateur"
              name="utilisateur"
              value={formData.utilisateur}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.utilisateur ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            >
              <option value="">-- Sélectionnez un utilisateur --</option>
              {users.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
            {errors.utilisateur && (
              <p className="text-red-500 text-sm mt-1">{errors.utilisateur}</p>
            )}
          </div>

          {/* Catégorie */}
          <div>
            <label
              htmlFor="categorie"
              className="block text-sm font-medium text-gray-700"
            >
              Catégorie
            </label>
            <input
              type="text"
              id="categorie"
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.categorie ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            />
            {errors.categorie && (
              <p className="text-red-500 text-sm mt-1">{errors.categorie}</p>
            )}
          </div>

          {/* Période */}
          <div>
            <label
              htmlFor="periode"
              className="block text-sm font-medium text-gray-700"
            >
              Période (Année)
            </label>
            <input
              type="number"
              id="periode"
              name="periode"
              value={formData.periode}
              onChange={handleChange}
              min="1900"
              max="2100"
              className={`mt-1 block w-full rounded-md border ${
                errors.periode ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            />
            {errors.periode && (
              <p className="text-red-500 text-sm mt-1">{errors.periode}</p>
            )}
          </div>

          {/* Soldes Actuels */}
          <div>
            <label
              htmlFor="soldesActuels"
              className="block text-sm font-medium text-gray-700"
            >
              Soldes Actuels
            </label>
            <input
              type="number"
              id="soldesActuels"
              name="soldesActuels"
              value={formData.soldesActuels}
              onChange={handleChange}
              min="0"
              className={`mt-1 block w-full rounded-md border ${
                errors.soldesActuels ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            />
            {errors.soldesActuels && (
              <p className="text-red-500 text-sm mt-1">
                {errors.soldesActuels}
              </p>
            )}
          </div>

          {/* Soldes Pris */}
          <div>
            <label
              htmlFor="soldesPris"
              className="block text-sm font-medium text-gray-700"
            >
              Soldes Pris
            </label>
            <input
              type="number"
              id="soldesPris"
              name="soldesPris"
              value={formData.soldesPris}
              onChange={handleChange}
              min="0"
              className={`mt-1 block w-full rounded-md border ${
                errors.soldesPris ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            />
            {errors.soldesPris && (
              <p className="text-red-500 text-sm mt-1">{errors.soldesPris}</p>
            )}
          </div>

          {/* Soldes Futur */}
          <div>
            <label
              htmlFor="soldesFutur"
              className="block text-sm font-medium text-gray-700"
            >
              Soldes Futur
            </label>
            <input
              type="number"
              id="soldesFutur"
              name="soldesFutur"
              value={formData.soldesFutur}
              onChange={handleChange}
              min="0"
              className={`mt-1 block w-full rounded-md border ${
                errors.soldesFutur ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2`}
            />
            {errors.soldesFutur && (
              <p className="text-red-500 text-sm mt-1">{errors.soldesFutur}</p>
            )}
          </div>

          {/* Uniqueness Error */}
          {errors.unique && (
            <div className="text-red-500 text-sm">{errors.unique}</div>
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
              onClick={toggleModal}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
