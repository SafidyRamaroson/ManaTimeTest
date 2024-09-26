import React from "react"

interface ModuleProps {
  label:string;
  icon:React.ReactElement
}

export const Module: React.FC<ModuleProps> = ({label,icon}) => {
  return (
    <div className="group w-[170px] h-[170px] border-[1px] border-[#D4D4D4] rounded-[10px] m-[6px] hover:border-[#0090F5] hover:border-[2px] cursor-pointer">
      <div className="flex flex-col justify-center items-center">
        {icon}
        <span className="group-hover:text-[#0090F5]">{label}</span>
      </div>
    </div>
  );
};
