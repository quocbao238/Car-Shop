'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function BackToTopBtn() {
	const [isActive, setIsActive] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setIsActive(true)
			} else {
				setIsActive(false)
			}
		}
		window.addEventListener('scroll', handleScroll)

		// cleanup event

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})
	return (
		<Link
			to="home"
			smooth={true}
			className={`${
				!isActive && 'hidden'
			} fixed bg-accent hover:bg-accent-hover w-12 h-12 right-8 bottom-10 z-10 w-f
			cursor-pointer flex justify-center items-center text-white border-2 border-white`}>
			<FaChevronUp className="text-xl" />
		</Link>
	)
}
