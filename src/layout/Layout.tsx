import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { ModuleDrawer } from "./components/drawer/ModuleDrawer";
import AbsenceIcon from "./../assets/ManaTime_Assets/Absence_Icon.svg";
import StripeIcon from "./../assets/ManaTime_Assets/stripe2.svg";
import SoldesIcon from "./../assets/ManaTime_Assets/Soldes.svg";
import HelpIcon from "./../assets/ManaTime_Assets/Utils/Help.svg";
import SettingIcon from "./../assets/ManaTime_Assets/Utils/Settings.svg";
import PersonnaPhoto from "./../assets/ManaTime_Assets/Photo.png";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <React.Fragment>
      <div className="flex flex-row">
        <SideBar openDrawer={toggleDrawer} />
        <div className="bg-[#E3E3E3] w-full flex flex-row relative">
          <ModuleDrawer isOpen={isOpen} />
          <div className="w-full  h-full bg-white/30 backdrop-blur-sm backdrop-opacity-60">
            {/* Haeder */}
            <div className="min-w-[1720px]  h-[66px] bg-white"> 
              <div className="flex flex-row items-center justify-between h-full">
                {/* TODO : dynamic  for  this  navigation  */}
                <div className="flex flex-row items-center">
                  <img
                    src={AbsenceIcon}
                    alt="Absence Icon"
                    className="w-[38px] h-[38px] mx-[30px]"
                  />
                  <span className="font-bold">Absences</span>
                  <img
                    src={StripeIcon}
                    alt="Stripe Icon"
                    className="mx-[30px]"
                  />
                  <img
                    src={SoldesIcon}
                    alt="Solde Icon"
                    className="w-[26px] h-[23px]"
                  />
                  <span className="font-normal mx-[30px]">Sous module</span>
                  <img src={StripeIcon} alt="Stripe Icon" />
                  <span className="font-normal ml-[30px]">
                    Sous sous module
                  </span>
                </div>
                <div className="flex flex-row ">
                    <div className="flex flex-row items-center gap-[10px]">
                     <img src={HelpIcon} alt="Help Icon" className="w-[42px] h-[42px]" />
                     <img src={SettingIcon} alt="Setting Icon" className="w-[42px] h-[42px]"/>
                    </div>
                    <div></div>
                    <div className="flex flex-col items-center justify-center mx-[30px]">
                        <span className="font-bold">Nom et Prénoms </span> 
                        <span className="font-normal">Entreprise</span>
                    </div>
                    <img src={PersonnaPhoto} alt="Personna Photo" className="w-[42px] h-[42px] mx-[30px]"/>
                </div>
              </div>
            </div>
            {/* Content of each page */}
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
