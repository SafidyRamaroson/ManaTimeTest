import type { AbsenceDataType } from "../types/Absence";

export enum Categories {
  CongésPayés = "Congés payés",
  RTT = "RTT",
}

export const AbsencesData: AbsenceDataType[] = [
  {
    utilisateur: "Darlène Menson Dujon ",
    categorie: Categories.CongésPayés,
    periode: "2020-2021",
    soldesActuels: 16,
    soldesPris: 10,
    soldesFutur: 34,
  },
  {
    utilisateur: "Marlon Brandon",
    categorie: Categories.RTT,
    periode: "2020",
    soldesActuels: 3,
    soldesPris: 25,
    soldesFutur: 20,
  },
  {
    utilisateur: "Darlène Menson Dujon",
    categorie: Categories.CongésPayés,
    periode: "2020-2021",
    soldesActuels: 16,
    soldesPris: 10,
    soldesFutur: 34,
  },
];
