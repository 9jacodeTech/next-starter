import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from '@/components/atom/hamburger-menu';
import NavLinks, { NavLinksProps } from '@/components/atom/navLinks';
import { paths } from 'config/paths';
import CTALinks from '@/components/atom/CTALinks';
import { COMPANY_LOGO } from 'config/constants';

type LogoProps = {
  url: string;
};
const Logo = (props: LogoProps) => {
  const { url } = props;
  return (
    <Link href={url} className="relative h-[50px] w-[160px]">
      <Image src={COMPANY_LOGO} alt="logo" fill />
    </Link>
  );
};

type NavbarProps = {
  isAdmin?: boolean;
  navLinks: NavLinksProps['navLinks'];
};

const Navbar = (props: NavbarProps) => {
  const { isAdmin = false, navLinks } = props;
  const prefix = isAdmin ? '/admin' : '/';

  const btn2 = { label: 'Volunteer', href: '#' };

  if (isAdmin) {
    btn2.href = paths.signout;
    btn2.label = 'Sign out';
  }

  return (
    <div className="sticky top-0 z-50 shadow-md flex flex-wrap md:justify-start md:flex-nowrap  w-full bg-main_bg_color text-sm py-4 ">
      <nav className=" w-full md:flex md:items-center  md:justify-between sticky top-0 items-center lg:px-20 px-4 ">
        <div className="flex relative items-center justify-between ">
          <Logo url={prefix} />

          <HamburgerMenu htmlFor="navbar-collapse-basic" />
        </div>

        <div className="md:block hidden md:h-full">
          <NavLinks prefix={prefix} navLinks={navLinks} />
        </div>
        <div className="md:block  hidden md:h-full ">
          <CTALinks
            label1="Submit"
            href1="/submit"
            label2={btn2.label}
            href2={btn2.href}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
