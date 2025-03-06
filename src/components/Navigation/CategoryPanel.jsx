import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { CiSquarePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const closeDrawer = () => setIsOpenCatPanel(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [openInnerSubmenus, setOpenInnerSubmenus] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleInnerSubmenu = (index) => {
    setOpenInnerSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoClose onClick={closeDrawer} className="cursor-pointer text-[20px]" />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          {/* Category: Fashion */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {openSubmenus[0] ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(0)} />
            ) : (
              <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(0)} />
            )}
            {openSubmenus[0] && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {openInnerSubmenus[0] ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(0)} />
                  ) : (
                    <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(0)} />
                  )}
                  {openInnerSubmenus[0] && (
                    <ul className="inner_submenu w-full pl-3">
                      {["T-shirt", "Watch", "Rolling Diamond", "Apparel"].map((item, idx) => (
                        <li key={idx} className="list-none relative mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Category: Outwear */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Outwear
              </Button>
            </Link>
            {openSubmenus[1] ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(1)} />
            ) : (
              <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleSubmenu(1)} />
            )}
            {openSubmenus[1] && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {openInnerSubmenus[1] ? (
                    <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(1)} />
                  ) : (
                    <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => toggleInnerSubmenu(1)} />
                  )}
                  {openInnerSubmenus[1] && (
                    <ul className="inner_submenu w-full pl-3">
                      {["T-shirt", "Watch", "Rolling Diamond", "Apparel"].map((item, idx) => (
                        <li key={idx} className="list-none relative mb-1">
                          <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpenCatPanel} onClose={closeDrawer}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
