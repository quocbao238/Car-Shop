'use client'
import { Menu } from '@headlessui/react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import React, { useState } from 'react'

//react date
import { DateRange } from 'react-date-range'
import { format, addDays } from 'date-fns'

//react date range css
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

const DateSelection = () => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	])

	return (
		<Menu
			as="div"
			className="w-full h-full flex xl:">
			<div className={`relative flex flex-1`}>
				<Menu.Button
					className={`dropdown-btn w-full h-full flex flex-col justify-center items-center 
					xl:pl-8 xl:items-start`}>
					<div
						className="flex flex-col items-center
                            xl:flex-row xl:gap-x-2 gap-y-2 xl:gap-y-0">
						<FaCalendarAlt className="text-accent" />
						<div className="text-[15px] font-semibold">Select Date</div>
					</div>
					<div className="flex">
						<div className="text-align font-medium text-[13px] text-secondary">
							{date[0].startDate
								? format(date[0].startDate, 'dd MMMM yyyy')
								: 'Start Date'}
						</div>
						<div className="mx-2 mt-0.5">
							<FaArrowRightLong className="text-accent" />
						</div>
						<div className="text-align font-medium text-[13px] text-secondary">
							{date[0].endDate
								? format(date[0].endDate, 'dd MMMM yyyy')
								: 'End Date'}
						</div>
					</div>
				</Menu.Button>
				<Menu.Items
					className="dropdown-menu shadow-lg absolute -top-96 left-1/2 z-50 transform -translate-x-1/2
                             xl:top-[90px] xl:left-0 xl:translate-x-0 rounded-[10px] overflow-hidden">
					<DateRange
						editableDateInputs={true}
						ranges={date}
						rangeColors={['#ed1d24']}
						onChange={(item) => {
							var item = item.selection
							console.log(item.startDate)
							console.log(item.endDate)
							setDate([item])
						}}
						minDate={addDays(new Date(), 0)}
					/>
				</Menu.Items>
			</div>
		</Menu>
	)
}

export default DateSelection
