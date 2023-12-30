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
          ? "text-gray-800 border-gray-500 dark:text-white dark:border-gray-500"
          : "text-gray-600 border-transparent dark:text-gray-400"
      } hover:text-gray-800 hover:border-gray-500 dark:hover:text-white dark:hover:border-gray-500`}
    >
      {children}
    </button>
  );
};

export default TabButton;
