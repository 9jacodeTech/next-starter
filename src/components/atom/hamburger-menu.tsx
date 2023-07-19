import React from 'react';
import Sidebar from '../organism/Sidebar';
import { useToggle } from 'hooks';
import { NAV_LINKS } from 'config/constants';

export type HamburgerMenuProps = {
  htmlFor: string;
};

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { htmlFor } = props;

  const [showSidebar, toggleSidebar] = useToggle();

  return (
    <div className="md:hidden flex flex-col items-center ">
      <button
        type="button"
        className="hs-collapse-toggle p-2 items-center gap-2 rounded-md bg-main_bg_color text-tertiary_color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-main_bg_color transition-all text-sm dark:text-tertiary_color-400 dark:hover:text-main_bg_color"
        data-hs-collapse={`#${htmlFor}`}
        aria-controls={htmlFor}
        aria-label="Toggle navigation"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
        >
          <g opacity="0.88">
            <path
              d="M25 1L1 1"
              stroke="#212447"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 8.93066L4 8.93066"
              stroke="#212447"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 17L1 17"
              stroke="#212447"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>

      <Sidebar
        navLinks={NAV_LINKS}
        visible={showSidebar}
        onClose={toggleSidebar}
      />
    </div>
  );
};

export default HamburgerMenu;
