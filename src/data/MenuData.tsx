import React from "react";
import modulePlanningIcon from "./../assets/ManaTime_Assets/Modules/Module_Planning.svg";
import moduleAbsencesIcon from "./../assets/ManaTime_Assets/Modules/Module_Absences.svg";
import moduleHeuresIcon from "./../assets/ManaTime_Assets/Modules/Module_Heures.svg";
import moduleNotesdefraisIcon from "./../assets/ManaTime_Assets/Modules/Module_NotedeFrais.svg";
import moduleCompétencesIcon from "./../assets/ManaTime_Assets/Modules/Module_Compétences.svg";
import moduleDocumentsIcon from "./../assets/ManaTime_Assets/Modules/Mdule_Documents.svg";
import moduleMatérielsIcon from "./../assets/ManaTime_Assets/Modules/Module_Matériels.svg";
import moduleRHIcon from "./../assets/ManaTime_Assets/Modules/Module_RH.svg";
import moduleSalaireEtPaiecon from "./../assets/ManaTime_Assets/Modules/Module_SalaireetPAie.svg";
import moduleEntretienIcon from "./../assets/ManaTime_Assets/Modules/Module_Entretiens.svg";

interface IMenuData {
  label: string;
  icon: React.ReactElement;
}

export const MenuData: IMenuData[] = [
  {
    label: "Planning",
    icon: <img src={modulePlanningIcon} alt="Module Planning Icon" />,
  },
  {
    label: "Absences",
    icon: <img src={moduleAbsencesIcon} alt="Module Absences Icon" />,
  },
  {
    label: "Heures",
    icon: <img src={moduleHeuresIcon} alt="Module Heures Icon" />,
  },
  {
    label: "Notes de frais",
    icon: <img src={moduleNotesdefraisIcon} alt="Module Notes de frais Icon" />,
  },
  {
    label: "Présence",
    icon: <img src={moduleHeuresIcon} alt="Module Présences Icon" />,
  },
  {
    label: "Compétences",
    icon: <img src={moduleCompétencesIcon} alt="Module Compétences Icon" />,
  },
  {
    label: "Salaire et paie",
    icon: <img src={moduleSalaireEtPaiecon} alt="Module Salaire et paie Icon" />,
  },
  {
    label: "Entretiens",
    icon: <img src={moduleEntretienIcon} alt="Module Entretiens Icon" />,
  },
  {
    label: "Matériels",
    icon: <img src={moduleMatérielsIcon} alt="Module Matériels Icon" />,
  },
  {
    label: "Documents",
    icon: <img src={moduleDocumentsIcon} alt="Module Documents Icon" />,
  },
  {
    label: "RH",
    icon: <img src={moduleRHIcon} alt="Module RH Icon" />,
  },
];
