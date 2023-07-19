import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoShieldSharp } from 'react-icons/io5';
import NestedLinkDesc from 'components/molecules/nestedLinkDesc';

type Courses = {
  href: string;
  title: string;
};

type SideLinks = {
  heading: string;
  courses: Courses[];
};

type NestedLinkLayoutProps = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  readMoreHref: string;
  sideLinks: SideLinks[];
};

const NestedLinkLayout = (props: NestedLinkLayoutProps) => {
  const {
    imageSrc,
    imageWidth,
    imageHeight,
    description,
    readMoreHref,
    sideLinks,
  } = props;

  return (
    <div className="xl:flex sm:block justify-between p-[10px] font-roboto object-cover ">
      <Image
        src={imageSrc}
        alt="description"
        width={imageWidth}
        height={imageHeight}
      />

      <NestedLinkDesc description={description} readMoreHref={readMoreHref} />

      <div className="xl:flex sm:block ">
        {sideLinks.map((program, index) => (
          <div key={index} className="p-[10px]">
            <h2 className="text-[14px] text-[rgb(102,102,102)] font-[700] cursor-pointer px-[15px] ">
              {program.heading}
            </h2>
            <ul className="py-[10px]">
              {program.courses.map((course, index) => (
                <Link
                  key={index}
                  href={course.href}
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
    </div>
  );
};

export default NestedLinkLayout;
