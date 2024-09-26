import React from "react";

interface SubMenuProps {
  items: string[];
}

export const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <ul className="text-right pr-2 py-2 bg-white">
      {items.map((item, index) => (
        <li key={index} className="font-light mb-2 cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  );
};
