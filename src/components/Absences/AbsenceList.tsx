import React from "react";
import { Categories } from "../../data/AbsencesData";
import AjusterIcon from "./../../assets/ManaTime_Assets/Utils/Ajuster.svg";
import TransfererIcon from "./../../assets/ManaTime_Assets/Utils/Transferer.svg";
import SolderIcon from "./../../assets/ManaTime_Assets/Solder.svg";
import { useAbsenceStore } from "../../store/useAbsenceStore";
import toast from "react-hot-toast";

export const AbsenceList: React.FC = () => {
  const handleDeleteAbsence = useAbsenceStore((state) => state.deleteAbsence);
  const absencesList = useAbsenceStore((state) => state.absenceList);
  return (
    <div className="min-w-[1718px] min-h-[1014px] px-[30px] pt-[30px] ">
      <table className="table-fixed bg-blue-300 w-full rounded-[4px]">
        <thead>
          <tr className="bg-white h-[38px]">
            <th className="text-left pl-[15px]">Utilisateurs</th>
            <th className="text-left pl-[15px]">Catégorie</th>
            <th className="text-left pl-[15px]">Période</th>
            <th className="text-left pl-[15px]">Solde actuel</th>
            <th className="text-left pl-[15px]">Solde pris</th>
            <th className="text-left pl-[15px]">Solde futur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {absencesList.map((absence, index) => (
            <tr
              key={index}
              className={`${index % 2 == 0 ? "bg-[#F2F2F2]" : "bg-white"}`}
            >
              <td className="w-[450px] h-[38px] pl-[15px]">
                {absence.utilisateur}
              </td>
              <td className="w-[450px] h-[38px] pl-[15px] flex flex-row items-center gap-[5px]">
                <div
                  className={`w-3 h-3
                     ${
                       Categories.CongésPayés == absence.categorie
                         ? "bg-[#FF8851]"
                         : "bg-[#A851FF]"
                     } rounded-full`}
                />
                {absence.categorie}
              </td>
              <td className="w-[120px] h-[38px] pl-[15px]">
                {absence.periode}
              </td>
              <td className="w-[120px] h-[38px] pl-[15px]">
                {absence.soldesActuels}
              </td>
              <td className="w-[120px] h-[38px] pl-[15px]">
                {absence.soldesPris}
              </td>
              <td className="w-[120px] h-[38px] pl-[15px]">
                {absence.soldesFutur}
              </td>
              <td className="w-[270px] h-[38px] pl-[15px] flex flex-row items-center gap-[45px]">
                <img src={AjusterIcon} alt="Ajuster Icon" className="w-8 " />
                <img
                  src={TransfererIcon}
                  alt="Transferer Icon"
                  className="w-8"
                />
                <button
                  type="button"
                  onClick={() => {
                    toast.success("Absence supprimée", {
                      duration: 2000,
                      position: "top-center",
                    });
                    handleDeleteAbsence(absence);
                  }}
                >
                  <img src={SolderIcon} alt="Solder Icon" className="w-8" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
