import React, { useContext } from 'react'

import LocationSelection from './LocationSelection'

import { SearchContext } from '../context/search'
import DateSelection from './DateSelection'
import HoursSelection from './HoursSelection'

const Search = () => {
	const { searchActive } = useContext(SearchContext)

	return (
		<div
			className={`hidden xl:block w-full relative shadow-lg
			${
				searchActive
					? 'bg-white rounded-none xl:h-[80px] py-6'
					: 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
			}`}>
			<div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
				<LocationSelection />
				<DateSelection />
				<HoursSelection />
				<div className="xl:h-full flex items-center px-6 xl:px-0">
					<button
						className="btn btn-sm btn-accent hover:bg-accent/60
                        xl:w-[164px]">
						Search
					</button>
				</div>
			</div>
		</div>
	)
}

export default Search
