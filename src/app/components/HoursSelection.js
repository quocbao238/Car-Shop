'use client'

import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import { FaClock } from 'react-icons/fa'
import { format } from 'date-fns'
import { FaArrowRightLong } from 'react-icons/fa6'

const hours = ['10:00 AM', '12:00 AM', ' 14:00 AM']

const HoursSelection = () => {
	const [hour, setHour] = useState('10:00 AM')
	const [hourEnd, setHourEnd] = useState('14:00 AM')

	return (
		<Menu
			as="div"
			className="w-full h-full flex xl:">
			<div className="relative flex flex-1">
				<Menu.Button
					className={`dropdown-btn w-full h-full flex flex-col justify-center items-center
                xl:pl-8 xl:items-start`}>
					<div
						className="flex flex-col  items-center
                                xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
						<FaClock className="text-accent" />
						<div className="text-[15px]  font-semibold">Select Hours</div>
					</div>

					<div className="flex">
						<div className="text-align font-medium text-[13px] text-secondary">
							{hour}
						</div>
						<div className="mx-2 mt-0.5">
							<FaArrowRightLong className="text-accent" />
						</div>
						<div className="text-align font-medium text-[13px] text-secondary">
							{hourEnd}
						</div>
					</div>
				</Menu.Button>
				<Menu.Items
					className="dropdown-menu shadow-lg absolute -top-56 left-1/2 z-50 transform -translate-x-1/2 text-sm text-center
                	xl:top-[90px] xl:left-0 xl:translate-x-0 xl:text-left xl:w-full
                 	bg-white max-w-[332ox] py-6 rounded-[10px] overflow-hidden ">
					{hours.map((hour, index) => {
						return (
							<div
								onClick={() => setHour(hour)}
								key={index}
								className="cursor-pointer py-4 text-[13px] text-center
								hover:bg-gray-50 p-8 xl:pl-10">
								{hour}
							</div>
						)
					})}
				</Menu.Items>
			</div>
		</Menu>
	)
}

export default HoursSelection
