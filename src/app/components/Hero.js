'use client'
import React, { useContext } from 'react'

// components
import Search from './Search'

// context
import { SearchContext } from '../context/search'

import Image from 'next/image'

// motion
import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from '/variants'

const Hero = () => {
	const { searchActive } = useContext(SearchContext)
	return (
		<section
			className="h-screen xl:h-[80vh] bg-[#b2b7c2]/10"
			id="home">
			<div className="container mx-auto h-full pt-10">
				<div
					className="flex flex-col justify-center items-center h-full
				xl:flex-row xl:justify-start ">
					<div
						className="text-center mt-16
					xl:max-w-xl xl:text-left xl:mt-0">
						<motion.h1
							variants={fadeIn('down', 0.2)}
							initial="hidden"
							whileInView="show"
							viewport={{
								once: true,
								amount: 0.6,
							}}
							className="h1">
							Explore the Finest
							<span className="text-accent"> Global</span> Offers
						</motion.h1>
						<motion.p
							variants={fadeIn('down', 0.2)}
							initial="hidden"
							whileInView="show"
							viewport={{
								once: true,
								amount: 0.6,
							}}
							className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
							Find your ideal ride for any adventure with our diverse
							range of affordable and dependable car rentals
						</motion.p>
						<motion.div
							variants={fadeIn('down', 0.2)}
							initial="hidden"
							whileInView="show"
							viewport={{
								once: true,
								amount: 0.6,
							}}
							className="flex gap-x-3 justify-center
						xl:justify-start
						">
							<button className="btn-cta">
								<Image
									width={132}
									height={36}
									src={
										'https://quocbao238.github.io/Car-Shop/icons/buttons/app-store.svg'
									}
									alt=""
								/>
							</button>
							<button className="btn-cta">
								<Image
									width={132}
									height={36}
									src={
										'https://quocbao238.github.io/Car-Shop/icons/buttons/google-play.svg'
									}
									alt=""
								/>
							</button>
						</motion.div>
					</div>
					<motion.div
						variants={fadeIn('left', 0.6)}
						initial="hidden"
						whileInView="show"
						viewport={{
							once: true,
							amount: 0.6,
						}}
						className="relative w-full h-full

					">
						<Image
							fill
							style={{ objectFit: 'contain' }}
							src={
								'https://quocbao238.github.io/Car-Shop/images/hero/car.svg'
							}
							alt=""
						/>
					</motion.div>
				</div>
			</div>
			{searchActive ? (
				<motion.div
					initial={{ y: '-100%' }}
					animate={{ y: 0 }}
					translate={{ ease: easeInOut }}
					className="fixed top-[80px] z-10 w-full ">
					<Search />
				</motion.div>
			) : (
				<div className="-mt-12 w-full max-w-[1300px] mx-auto">
					<motion.div
						variants={fadeIn('up', 0.8)}
						initial="hidden"
						whileInView="show"
						viewport={{
							once: true,
							amount: 0.2,
						}}>
						<Search />
					</motion.div>
				</div>
			)}
		</section>
	)
}

export default Hero
