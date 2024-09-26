import React, { useState } from "react";
import BurgerIcon from "./../assets/ManaTime_Assets/Burger button.svg";
import AjouterIcon from "./../assets/ManaTime_Assets/Utils/Ajouter.svg";
import AccueilIcon from "./../assets/ManaTime_Assets/Accueil.svg";
import MonEspaceIcon from "./../assets/ManaTime_Assets/Mon espace.svg";
import ValidationIcon from "./../assets/ManaTime_Assets/Validation.svg";
import IndicateursIcon from "./../assets/ManaTime_Assets/Indicateurs.svg";
import GraphicIcon from "./../assets/ManaTime_Assets/Graphic.svg";
import RechercheIcon from "./../assets/ManaTime_Assets/Utils/Recherche.svg";
import SoldesIcon from "./../assets/ManaTime_Assets/Soldes.svg";
import { useModalStore } from "../store/useModalStore";
import { MenuItem } from "../components/SideBar/MenuItem";

interface SideBarProps {
  openDrawer: () => void;
}


export const SideBar: React.FC<SideBarProps> = React.memo(({ openDrawer }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleModal = useModalStore((state) => state.toggleAbsenceModal);

  const menuItems = [
  {
    icon: MonEspaceIcon,
    label: "Mon espace",
    subMenu: [
      "Gestion des soldes",
      "Ajouter un solde",
      "Compteurs",
      "Historiques",
    ],
  },
  {
    icon: ValidationIcon,
    label: "Validation",
    subMenu: [
      "Gestion des soldes",
      "Ajouter un solde",
      "Compteurs",
      "Historiques",
    ],
  },
  {
    icon: IndicateursIcon,
    label: "Indicateurs",
    subMenu: [
      "Gestion des soldes",
      "Ajouter un solde",
      "Compteurs",
      "Historiques",
    ],
  },
  {
    icon: SoldesIcon,
    label: "Soldes",
    subMenu: [
      "Gestion des soldes",
      "Ajouter un solde",
      "Compteurs",
      "Historiques",
    ],
  },
  {
    icon: RechercheIcon,
    label: "Recherche",
    subMenu: [
      "Gestion des soldes",
      "Ajouter un solde",
      "Compteurs",
      "Historiques",
    ],
  },
];


 
  return (
    <div className="flex flex-row relative">
      <div className="bg-gradient-to-b from-[#094694] to-[#0281E3] w-[200px] min-h-[1080px] relative">
        <div className="bg-white flex flex-row justify-center items-center w-full h-[66px]">
          <button onClick={openDrawer} aria-label="Open menu">
            <img src={BurgerIcon} alt="Burger menu" />
          </button>
        </div>
        <div className="bg-[#0090F5]">
          <div className="flex flex-row gap-3 justify-center py-7 border-[1px] border-t-[#00A6FF] border-b-[#0084E1] cursor-pointer">
            <img src={AccueilIcon} alt="Accueil Icon" />
            <span className="mr-[68px] text-white">Accueil</span>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-center py-7 border-[1px] border-t-[#00A6FF] border-b-[#0084E1] cursor-pointer">
              <button
                type="button"
                onClick={toggleModal}
                className="flex flex-row gap-3"
                aria-label="Add new item"
              >
                <img src={AjouterIcon} alt="Ajouter Icon" />
                <span className="mr-[68px] text-white">Ajouter</span>
              </button>
            </div>
          </div>
        </div>
        {/* Menu Navigation */}
        <div>
          {menuItems.map(({ icon, label, subMenu }, index) => (
            <MenuItem
              key={index}
              icon={icon}
              label={label}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              subMenu={subMenu}
            />
          ))}
          <div className="absolute bottom-0 left-0">
            <img src={GraphicIcon} alt="Graphic Icon" />
          </div>
        </div>
      </div>
    </div>
  );
});
