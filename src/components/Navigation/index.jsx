import React, { useState } from "react";
import Button from "@mui/material/Button";

import { RiMenu2Fill } from "react-icons/ri";

import { FaAngleDoubleDown } from "react-icons/fa";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";


const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-10">
          <div className="col_1 w-[15%] ">
            
          Explore Our Top Services
              
          </div>
          <div className="col_2 w-[70%]  ">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/Carpenter"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Carpenter 🔨
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/Carpenter/Residential"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Residential Carpenter
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Carpenter/Commercial"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Commercial Carpenter
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Carpenter/Trim"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Trim Carpenter
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Carpenter/Cabinet"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Cabinet Maker
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Carpenter/Roof"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Roof Carpenter
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/Electrician"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                  Electrician  🏠
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                  <li className="list-none w-full">
                        <Link to={"/Electrician/Repairing"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Repairing 
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                        <Link to={"/Electrician/Residential_electrician"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Residential Electrician
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Electrician/Commercial"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Commercial Electrician
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Electrician/Maintenance"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Maintenance Electrician
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Electrician/Lineman"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Lineman
                      </Button>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                
              

              </li>



              <li className="list-none">
                <Link
                  to={"/Painter"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Painter 🎨
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                  <li className="list-none w-full">
                        <Link to={"/Painter/House-Painter"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      House Painter
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                        <Link to={"/Painter/Commercial-Painter"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                       Commercial Painter
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Painter/Industrial-Painter"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Industrial-Painter
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Painter/Automotive-Painter"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Automotive Painter
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Painter/Furniture"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                      Furniture
                      </Button>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/Plumber"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Plumber
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/Plumber/Residential-Carpenter"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Residential Plumber
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Plumber/Commercial-Plumber"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Commercial Plumber
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Plumber/Sanitary-Plumber"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Sanitary Plumber
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Plumber/Water-Supply-Plumber"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Water Supply Plumber
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Plumber/Pipefitter"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Pipefitter
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>




              </li>
              <li className="list-none">
                <Link
                  to={"/Cleaner"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Cleaner
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/Cleaning/Full-home-cleaning"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Full Home Cleaning 
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Cleaning/Bathroom-Cleaning"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Bathroom Cleaning
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Cleaning/kitchen Cleaning"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Kitchen Cleaning 
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Cleaning/Mini-Services"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Mini Services
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Cleaning/Roof-Cleaning"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Roof Cleaning 
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/Men"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Men
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/Men/Haircut-styling"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Haircut & Styling
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Men/beard-trimming"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Beard Stylinf & Trimming
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Men/Facial-Clean"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Facial & Clean up
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Men/Massage"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Head & Shoulder Massage 
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Men/Manicure-pedicure"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Manicure & Pedicure
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to={"/Women"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Women
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/Women/Haircut-Styling"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Haircut & Styling
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Women/Makeup"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Makeup Services
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Women/Threading-Eyebrow"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Threading & Eyebrow Shaping
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/Women/Waxing-polishing"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Waxing & Body Polishing
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/Women/Manicure-pedicure"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Manicure and Pedicure
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>     

              <li className="list-none">
                <Link
                  to={"/labour"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    Labour
                  </Button>
                </Link>


                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/labour/Domestic-labourer"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                       Domestic Labourer 
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/labour/Garderner"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Garderner
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/labour/Construction-labour"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Construction Labour
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/labour/Housekeepers"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        HouseKeepers
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/labour/Industrial Labour"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Industrial Labour
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/On-Demand-Services"}
                  className="link transition text-[14px] font-[500]  "
                >
                  <Button className="link transition z1font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]">
                    On Demand Services
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md  opacity-1  transition-all ">
                  <ul>
                    
                    <li className="list-none w-full">
                        <Link to={"/On-Demand-Services/Home Tutor"} className="w-full" >
                        
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Home Tutor
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/On-Demand-Services/Doctor Visit"}  className="w-full"  >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Doctor Visit
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/On-Demand-Services/Mobile Repaire"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Mobile Repaire
                      </Button>
                      </Link>
                    </li>
                    <li className=" list-none w-full">
                    <Link to={"/On-Demand-Services/Laptop Repaire"}  className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Laptop Repair
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/On-Demand-Services/E-Risckshaw"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        E-Rickshaw
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/On-Demand-Services/Good-Pickup"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Goods Pickup
                      </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                    <Link to={"/On-Demand-Services/Stick-Work"} className="w-full" >
                      <Button className="!text-[rgba(0,0,0,0.8)] !text-left !justify-start !rounded-none w-full">
                        Stick Work
                      </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[10%]  ">
            <p className="text-[14px] font-[500]  flex items-center gap-3 mb-0 mt-0 ">
              <GoRocket className="text-[18px]" />
              
            </p>
          </div>
        </div>
      </nav>

      {/*this is going to be the Category panel and we are calling it from aother file  */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
