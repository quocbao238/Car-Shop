'use client'
import {Menu} from '@headlessui/react';
import {FaCalendarAlt} from "react-icons/fa";
import {FaArrowRightLong} from "react-icons/fa6";
import React, {useState} from "react";

//react date
import { DateRange } from 'react-date-range'
import {format, addDays} from "date-fns";

//react date range css
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';


const DateSelection = () => {

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        },
    ]);


    return (
        <Menu as='div'
              className='w-full h-full flex xl:flex-row'
        >
            <div
                className={`relative flex flex-1`}>
                {/*    btn*/}
                <Menu.Button
                    className={`dropdown-btn w-full h-full flex flex-col justify-center items-center
                xl:pl-8 xl:items-start
                `}
                >

                    <div
                        className="flex flex-col items-center
                            xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
                        <FaCalendarAlt
                            className="text-accent"
                        />
                        <div
                            className="text-[15px] uppercase font-bold"
                        >
                            Select Date
                        </div>

                    </div>
                    <div
                        className="uppercase font-medium text-[13px] text-secondary text-center
                                xl:ml-6 xl:text-left "
                    >
                        {'256'}
                    </div>
                </Menu.Button>

                <Menu.Items
                    className="dropdown-menu shadow-lg absolute -top-96 left-1/2 z-50 transform -translate-x-1/2
                xl:top-[90px] xl:left-0 xl:translate-x-0 rounded-[10px] overflow-hidden
                "
                >
                    <DateRange
                        editableDateInputs={true}
                        ranges={date}
                        rangeColors={['#ed1d24']}
                        onChange={(item) => setDate([item.selection])}
                        minDate ={addDays(new Date(),0)}
                    />
                </Menu.Items>

            </div>

        </Menu>
    );
};

export default DateSelection;