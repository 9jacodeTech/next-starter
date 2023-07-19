import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { programmes } from './constants';
import { IoShieldSharp } from 'react-icons/io5';

const Programmes = () => {
  const programmeImg = '/assets/images/programmesImage.jpg';

  return (
    <div className="xl:flex sm:block items-start">
      <div className="p-[10px] object-cover ">
        <Image src={programmeImg} alt="desc" width={204} height={98} />
      </div>

      <div className="xl:flex sm:block font-roboto">
        {programmes.map((program, index) => (
          <div key={index} className="p-[10px]">
            <h2 className="text-[14px] text-[rgb(102,102,102)] font-[700] cursor-pointer px-[15px] ">
              {program.heading}
            </h2>
            <ul className="py-[10px]">
              {program.courses.map((course, index) => (
                <Link
                  key={index}
                  href={course.href}
                  target={course.target}
                  className="flex p-[5px_15px] text-[rgb(51,51,102)] hover:text-main_bg_color hover:bg-[rgb(51,51,102)]  "
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
    </div>
  );
};

export default Programmes;
