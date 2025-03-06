import React from 'react';
import "../Search/style.css"
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";



const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 flex items-center">
      <input 
        type="text" 
        placeholder="Search for the Services..." 
        className="w-full h-[35px] focus:outline-none bg-transparent p-2 text-[15px]" 
      />
     <Button className="absolute top-[0px] z-50 !w-[38px] !min-w-[38px] h-[38px] !rounded-full !text-black ">
  <  IoMdSearch  className='text-black text-[25px]' />
</Button>


    </div>
  );
};

export default Search;
