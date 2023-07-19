import React from 'react';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { AiOutlineCopyright } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-secondary_color pt-[16px] pb-[25px] text-white flex flex-col items-center justify-center font-roboto text-[16px] font-[400] ">
      <div className="flex gap-[23px]">
        <Link href="">
          <RiLinkedinBoxLine size={20} />
        </Link>

        <Link href="">
          <RxEnvelopeClosed size={20} />
        </Link>
      </div>

      <p className="flex items-center mt-[14px] ">
        <span>
          <AiOutlineCopyright />
        </span>
        2023, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
