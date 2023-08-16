'use client'

import React from 'react';
import Image from 'next/image'
import {Link} from 'react-scroll';
import SearchMobile from "@/app/components/SearchMobile";

import {useContext, useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {BiMenuAltRight, BiX} from "react-icons/bi";


const Header = () => {
    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)

    const desktopMode = useMediaQuery(
        {
            query: '(min-width: 1300px)'
        }
    );

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true)

            } else {
                setHeader(false)
            }

        }
        // add event listener
        window.addEventListener('scroll', handleScroll);

        //remove event listener

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    })
    console.log(desktopMode)

    console.log(header)

    return (
        <header
            className={
                `${header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"}
            fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`
            }
        >
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className="flex justify-between items-center px-4">
                    {/*    Logo*/}
                    <Link>
                        <Image
                            width={194}
                            height={64}
                            src='/icons/logo.svg' alt=''>

                        </Image>
                    </Link>
                    {/* Nav Open  Menu  */}
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer xl:hidden"
                    >
                        {nav ? (<BiX className="text-4xl">

                            </BiX>) :
                            (<BiMenuAltRight
                                className="text-4xl"
                            ><
                            /BiMenuAltRight>)

                        }
                    </div>
                </div>
                {/* nav */}
                <nav
                className={`${nav? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"} 
                flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max`}
                >
                    <Link className="cursor-pointer" to="home" activeClass="active" smooth={desktopMode} spy={true}>
                        Home
                    </Link>

                    <Link className="cursor-pointer" to="card" activeClass="active" smooth={desktopMode} spy={true}>
                        Cars
                    </Link>

                    <Link className="cursor-pointer" to="about" activeClass="active" smooth={desktopMode} spy={true}>
                        About
                    </Link>

                    <Link className="cursor-pointer" to="why" activeClass="active" smooth={desktopMode} spy={true}>
                        Why us
                    </Link>

                    <Link className="cursor-pointer" to="testomonial" activeClass="active" smooth={desktopMode} spy={true}>
                        Testimonial
                    </Link>

                    <Link className="cursor-pointer" to="contact" activeClass="active" smooth={desktopMode} spy={true}>
                        Contacts
                    </Link>

                    <Link className="
                    xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto
                    " to="home" activeClass="active" smooth={desktopMode} spy={true}>
                        See all cards
                    </Link>

                </nav>
            </div>
        </header>
    );
};

export default Header;