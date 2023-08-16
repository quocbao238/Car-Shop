'use client'
import React from 'react';
import {Menu} from '@headlessui/react';
import {FaMapMarker, FaMapMarkerAlt} from "react-icons/fa";
import {useState} from "react";


const locations = [
    "Main Street 123, United States",
    "Business Avenue 456, Canada",
    "VinHome Part 789, VietNam"
]

const LocationSelection = () => {

    const [location, setLocation] = useState(null)


    return (
        <Menu as='div'
              className='w-full h-full flex xl:flex-row'
        >
            <div
                className={`relative flex-1`}>
                {/*    btn*/}
                <Menu.Button
                    className={`dropdown-btn w-full h-full flex flex-col justify-center items-center 
                xl:pl-8 xl:items-start
                `}
                >
                    <div
                        className="w-full h-16 xl:h-full flex-col justify-center flex-1
                        xl:justify-start xl:border-r xl:border-black/10"
                    >
                        <div
                            className='flex flex-col justify-center'
                        >
                            <div
                                className="flex flex-col items-center
                            xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                <FaMapMarkerAlt
                                    className="text-accent"
                                />
                                <div
                                    className="text-[15px]  font-semibold"
                                >
                                    Select Location
                                </div>
                            </div>
                            <div
                                className=" font-medium text-[13px] text-secondary text-center
                                xl:ml-6 xl:text-left "
                            >
                                {location}
                            </div>
                        </div>
                    </div>
                </Menu.Button>
                {/*    item*/}
                <Menu.Items
                    className="dropdown-menu shadow-lg absolute -top-56 left-1/2 z-50 transform -translate-x-1/2 text-sm text-center
                xl:top-[90px] xl:left-0 xl:translate-x-0 xl:text-left xl:w-full
                 bg-white max-w-[332ox] py-6 rounded-[10px] overflow-hidden
                "
                >
                    {locations.map((location, index) => {
                        return <div
                            onClick={() => setLocation(location)}
                            key={index}
                            className="cursor-pointer py-4 text-[13px] hover:bg-gray-50 p-8
                            xl:pl-10
                            "
                        >
                            {location}
                        </div>
                    })}
                </Menu.Items>

            </div>

        </Menu>
    );
};

export default LocationSelection;