import React from 'react';
import Image from 'next/image';
import { paths } from 'config/paths';
import AppLink from './app-link';

export function Logo() {
  const logoUrl = '/assets/images/PAU-Logo.png';

  return (
    <AppLink href={paths.home} className="h-10 inline-block  w-20 relative">
      <Image src={logoUrl} fill alt="logo" className="object-contain" />
    </AppLink>
  );
}
