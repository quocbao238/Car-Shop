import React, {useContext} from 'react';

import LocationSelection from "./LocationSelection";


import {SearchContext} from "../context/search";
import DateSelection from "./DateSelection";

const Search = () => {

    const {searchActive} = useContext(SearchContext)

    return (
        <div
            className={`${searchActive
                ? "bg-white rounded-none xl:h-[80px] py-6"
                : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"}
            hidden xl:block w-full relative shadow-lg`
            }
        >
            <div
                className="xl:h-full flex items-center px-6 xl:px-0 justify-center"
            >
                <LocationSelection/>
                <DateSelection/>
            </div>
        </div>
    );
};

export default Search;