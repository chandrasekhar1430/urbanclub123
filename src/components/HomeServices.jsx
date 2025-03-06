import React from "react";
import { FaStar, FaUsers } from "react-icons/fa"; // Importing Star and Users Icons

const services = [
  { name: "Women’s Salon & Spa", img: "/images/women_salon.jpg" },
  { name: "Men’s Salon & Massage", img: "/images/men_salon.jpg" },
  { name: "AC & Appliance Repair", img: "/images/ac_repair.jpg" },
  { name: "Cleaning & Pest Control", img: "/images/cleaning.jpg" },
  { name: "Electrician, Plumber & Carpenter", img: "/images/electrician.jpg" },
  { name: "Native Water Purifier", img: "/images/water_purifier.jpg" },
  { name: "Painting & Waterproofing", img: "/images/painting.jpg" },
  { name: "Wall Panels", img: "/images/wall_panels.jpg" },
];

const HomeServices = () => {
  return (
    <section className="py-10 px-6 bg-gray-100 flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left w-fit">
          Home services at your doorstep
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left side: Square box with services and ratings */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-8 shadow rounded-lg w-full max-w-md aspect-square flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-center">What are you looking for?</h3>
              <div className="grid grid-cols-3 gap-4">
                {services.slice(0, 6).map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center bg-gray-100 p-2 rounded-lg shadow">
                    <img src={service.img} alt={service.name} className="w-14 h-14 rounded-lg object-cover mb-2" />
                    <span className="text-xs text-gray-700 font-medium">{service.name}</span>
                  </div>
                ))}
                <div className="col-span-3 flex gap-4">
                  {services.slice(6, 8).map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-gray-100 p-2 rounded-lg shadow w-1/2">
                      <img src={service.img} alt={service.name} className="w-16 h-16 rounded-lg object-cover mb-2" />
                      <span className="text-xs text-gray-700 font-medium">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Service Rating and Customers Count */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-500 text-2xl" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-800">4.8</span>
                  <span className="text-gray-600 text-sm">Service Rating</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-blue-500 text-2xl" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-800">12M+</span>
                  <span className="text-gray-600 text-sm">Customers Globally</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Masonry-style grid with Service 1 and Service 2 starting together, Service 3 and Service 4 ending together */}
          <div className="grid grid-cols-2 gap-4 md:masonry-2-cols items-start">
            <div className="flex flex-col gap-4">
              <img src="/images/service1.jpg" alt="Service 1" className="rounded-lg w-full object-cover h-full" />
              <img src="/images/service3.jpg" alt="Service 3" className="rounded-lg w-full object-cover h-full" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/service2.jpg" alt="Service 2" className="rounded-lg w-full object-cover h-full " />
              <img src="/images/service4.jpg" alt="Service 4" className="rounded-lg w-full object-cover h-full object-cover h-[360px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
