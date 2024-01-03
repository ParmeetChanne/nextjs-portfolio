// TabButton.tsx

import React from "react";

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`inline-block p-4 border-b-2 rounded-t-lg ${
        active
          ? "text-white border-gray-500"
          : "border-transparent text-gray-400"
      } hover:text-white hover:border-gray-500`}
    >
      {children}
    </button>
  );
};

export default TabButton;
