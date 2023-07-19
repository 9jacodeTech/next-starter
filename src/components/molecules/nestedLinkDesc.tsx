import Link from 'next/link';
import React from 'react';

type NestedLinkDescProps = {
  description: string;
  readMoreHref: string;
};

const NestedLinkDesc = ({ description, readMoreHref }: NestedLinkDescProps) => {
  return (
    <div className="xl:w-[350px] lg:w-[350px] md:w-[350px] px-[20px]">
      <p className="leading-[25px] text-[rgb(102,102,102)] pb-[10px] ">
        {description}
      </p>

      <div className="p-[10px_15px]  inline-block ">
        <Link
          href={readMoreHref}
          target="_blank"
          className="bg-[#333366] p-[5px_20px] text-main_bg_color text-[15px] hover:bg-black "
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default NestedLinkDesc;
