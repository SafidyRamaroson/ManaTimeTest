import React from "react";
import { Module } from "./Module";
import Logo from "../../../assets/ManaTime_Assets/Logo.svg";
import { MenuData } from "../../../data/MenuData";

interface ModuleDrawerProps {
  isOpen: boolean;
}

export const ModuleDrawer: React.FC<ModuleDrawerProps> = ({ isOpen }) => {
  return (
    <React.Fragment>
      <div
      className={`absolute top-0 left-[1px] z-20 min-w-full h-full backdrop-blur-50 bg-white/10 border-0 transform -translate-x-2 ${
          isOpen ? "transition-opacity duration-500 ease-out opacity-1" : "transition-opacity duration-500 ease-out opacity-0 hidden"
        }`}
      >
        <div className="flex flex-col bg-white w-[800px] h-[1080px] rounded-e-[40px]">
          <div className="pt-[118px] pl-[224px] h-[309px]">
            <img src={Logo} alt="Logo Entreprise" />
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {MenuData.map((item, index) => (
              <Module key={index} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
