'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import SearchMobile from '@/app/components/SearchMobile'

import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BiMenuAltRight, BiX } from 'react-icons/bi'

// context
import { SearchContext } from '../context/search'

const Header = () => {
	const [header, setHeader] = useState(false)
	const [nav, setNav] = useState(false)
	const { setSearchActive } = useContext(SearchContext)

	const desktopMode = useMediaQuery({
		query: '(min-width: 1300px)',
	})

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 40 ? setHeader(true) : setHeader(false)

			//Search
			window.scrollY > 800 ? setSearchActive(true) : setSearchActive(false)
		}
		// add event listener
		window.addEventListener('scroll', handleScroll)

		//remove event listener

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})
	console.log(desktopMode)

	console.log(header)

	return (
		<header
			className={`${
				header
					? 'bg-white shadow-md py-2'
					: 'bg-transparent shadow-none py-4'
			}
            fixed w-full  mx-auto z-20 transition-all duration-300`}>
			<div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
				<div className="flex justify-between items-center px-4">
					<Link>
						<Image
							width={194}
							height={64}
							src="https://quocbao238.github.io/Car-Shop/icons/logo.svg"
							alt=""></Image>
					</Link>
					<div
						onClick={() => setNav(!nav)}
						className="cursor-pointer xl:hidden">
						{nav ? (
							<BiX className="text-4xl"></BiX>
						) : (
							<BiMenuAltRight className="text-4xl"></BiMenuAltRight>
						)}
					</div>
				</div>
				<nav
					className={`${
						nav
							? 'max-h-max py-8 px-4 xl:py-0 xl:px-0'
							: 'max-h-0 xl:max-h-max'
					} 
                flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold text-center text-sm uppercase
                xl:font-medium xl:flex-row xl:w-max xl:gap-8 xl:h-max xl:bg-transparent xl:text-left xl:text-[15px] xl:normal-case
                transition-all duration-150
                `}>
					<Link
						onClick={() => setNav(false)}
						className="cursor-pointer"
						to="home"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						Home
					</Link>

					<Link
						onClick={() => setNav(false)}
						className="cursor-pointer"
						to="cars"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						Cars
					</Link>

					<Link
						onClick={() => setNav(false)}
						className="cursor-pointer"
						to="about"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						About
					</Link>

					<Link
						onClick={() => setNav(!nav)}
						className="cursor-pointer"
						to="why"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						Why us
					</Link>

					<Link
						onClick={() => setNav(false)}
						className="cursor-pointer"
						to="testimonial"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						Testimonial
					</Link>

					<Link
						onClick={() => setNav(false)}
						className="cursor-pointer"
						to="contact"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						Contacts
					</Link>

					<Link
						onClick={() => setNav(!nav)}
						className="
                    xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto
                    "
						to="home"
						activeClass="active"
						smooth={desktopMode}
						spy={true}>
						See all cards
					</Link>

					<SearchMobile />
				</nav>
			</div>
		</header>
	)
}

export default Header
