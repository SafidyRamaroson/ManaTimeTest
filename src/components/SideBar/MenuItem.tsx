import React from "react";
import { SubMenu } from "./SubMenu";
import StripeIcon from "./../../assets/ManaTime_Assets/Stripe.svg";

interface MenuItemProps {
  icon: string;
  label: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  subMenu?: string[];
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  index,
  openIndex,
  setOpenIndex,
  subMenu,
}) => {
  const isOpen = openIndex === index;
  const handleMenuClick = () => setOpenIndex(isOpen ? null : index);

  return (
    <div>
      <div
        className={`flex flex-row gap-3 justify-between items-center py-7 border-y-[2px] border-y-[#0569C2] cursor-pointer ${
          isOpen ? "bg-white text-[#084693] border-y-[#FFF]" : "text-white"
        }`}
      >
        <button
          className="flex flex-row gap-3 ml-5 items-center"
          onClick={handleMenuClick}
        >
          <img src={icon} alt={`${label} Icon`} />
          <span className={`${isOpen ? "text-[#084693]" : "text-white"}`}>
            {label}
          </span>
        </button>
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mr-[15px] ${isOpen ? "rotate-180":"rotate-0"}`}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.05558 6.74375C5.74874 7.08546 5.25126 7.08546 4.94442 6.74375L0.23013 1.49375C-0.0767112 1.15204 -0.0767111 0.59802 0.23013 0.256312C0.536971 -0.0853968 1.03446 -0.0853967 1.3413 0.256312L5.5 4.88759L9.6587 0.256313C9.96554 -0.0853959 10.463 -0.0853959 10.7699 0.256313C11.0767 0.598021 11.0767 1.15204 10.7699 1.49375L6.05558 6.74375Z"
            fill={`${isOpen ? "#084693": "#FFF"}`}
          />
        </svg>
      </div>
      {isOpen && subMenu && <SubMenu items={subMenu} />}
    </div>
  );
};
