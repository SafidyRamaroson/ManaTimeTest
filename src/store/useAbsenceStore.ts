import { create } from "zustand";
import type { AbsenceDataType } from "../types/Absence";
import { AbsencesData } from "../data/AbsencesData";

interface AbsenceState {
  absenceList: AbsenceDataType[];
}

interface AbsenceAction {
  addNewAbsence: (absenceData: AbsenceDataType) => void;
  deleteAbsence: (absenceData: AbsenceDataType) => void;
  checkDuplicate: (absenceData: AbsenceDataType) => boolean;
}

export const useAbsenceStore = create<AbsenceState & AbsenceAction>((set,get) => ({
  absenceList: [...AbsencesData],
  addNewAbsence: (absenceData) =>
    set((state) => ({
      absenceList: [...state.absenceList, absenceData],
    })),
  deleteAbsence: (absenceData) =>
    set((state) => ({
      absenceList: state.absenceList.filter(
        (absence) =>
          !(
            absence.utilisateur === absenceData.utilisateur &&
            absence.categorie === absenceData.categorie &&
            absence.periode === absenceData.periode
          )
      ),
    })),
    checkDuplicate: (absenceData) => {

        const isDuplicate = get().absenceList.some(
          (row) =>
            (row.utilisateur === absenceData.utilisateur &&
            row.categorie.toLowerCase() === absenceData.categorie.toLowerCase() &&
            row.periode === absenceData.periode)
        );
        return isDuplicate
    }
}));
