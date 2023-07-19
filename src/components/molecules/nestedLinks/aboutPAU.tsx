import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoShieldSharp } from 'react-icons/io5';
import NestedLinkDesc from '../nestedLinkDesc';
import { aboutPAU } from './constants';

const AboutPAU = () => {
  const aboutPAUImg = '/assets/images/aboutPAU.jpg';
  return (
    <div className="xl:flex sm:block justify-between p-[10px] font-roboto object-cover ">
      <Image src={aboutPAUImg} alt="desc" width={300} height={146} />

      <div className="xl:flex sm:block ">
        {aboutPAU.map((program, index) => (
          <div key={index} className="p-[10px]">
            <h2 className="text-[14px] text-[rgb(102,102,102)] font-[700] cursor-pointer px-[15px] ">
              {program.heading}
            </h2>
            <ul className="py-[10px]">
              {program.courses.map((course, index) => (
                <Link
                  key={index}
                  href={course.href}
                  // target={course.}
                  className="flex p-[5px_15px] text-[rgb(51,51,102)] hover:text-main_bg_color hover:bg-[rgb(51,51,102)]"
                >
                  <span className="mt-[3px] mr-[6px]">
                    <IoShieldSharp size={13} />
                  </span>
                  <p className="font-[700] text-[13px]">{course.title}</p>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <NestedLinkDesc
        description="We form competent and socially responsible professionals who are
          committed to the promotion of the common good of society and the
          advancement of the profession”."
        readMoreHref="https://pau.edu.ng/?page_id=13851"
      />
    </div>
  );
};

export default AboutPAU;
