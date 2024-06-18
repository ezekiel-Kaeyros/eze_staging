'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import usersImage from '../../../../../../public/images/usersGroup.png';
import IFYARLogo from '../../../../../../public/images/ifyarLogo.png';

type CheckboxCommunityChipProps = {
  name: string | undefined;
  id: string | undefined;
  value: string | undefined;
  description: string;
  label?: string;
  register: any;
  gettopic: any
  item:any
};

const CheckboxCommunityChip: React.FC<CheckboxCommunityChipProps> = ({
  name,
  id,
  value,
  label,
  description,
  register,
  gettopic,
  item
}) => {
  const [check,setCheck]=useState(false)
  return (
    <div
      className="p-1 h-72 w-72"
      onClick={() => {
        // alert(check)
        setCheck((preview) => !preview);
        gettopic(item);
      }}
    >
      <div className="flex justify-center items-center mr-0 mb-0 h-full ">
        {/* <input
          {...register}
          id={id}
          type="checkbox"
          value={value}
          name={name}
          className={`${`w-4 h-4 peer hidden text-primaryColor bg-white focus:ring-primaryColor focus:ring-2`} `}
        /> */}
        <label
          htmlFor={`${id}`}
          className={`w-fit h-full my-1 max-w-xs bg-[#FFE6EF] px-4 ml-0 text-sm  cursor-pointer select-none rounded-2xl py-6 ${check && 'border-primaryColor border-2  text-secondaryColor'}   font-medium text-secondaryColor flex flex-col`}
        >
          <div className="flex  justify-between space-x-4">
            <Image className="w-fit" src={IFYARLogo} alt="IFYAR logo" />

            <Image src={usersImage} alt="User image" />
          </div>
          <h1 className="font-bold text-xl my-2 truncate">{label}</h1>
          <p className='h-[155px] overflow-hidden'>{description}</p>
        </label>
      </div>
    </div>
  );
};

export default CheckboxCommunityChip;
