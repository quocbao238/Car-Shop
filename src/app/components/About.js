'use client'

import React from 'react'

import Image from 'next/image'
import {
	MdOutlineMapsHomeWork,
	MdOutlineBuildCircle,
	MdOutlineDirectionsCar,
	MdOutlineDirections,
} from 'react-icons/md'

import CountUp from 'react-countup'

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '/variants'

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})

	return (
		<section
			className="section flex items-center"
			id="about"
			ref={ref}>
			<div className="container mx-auto">
				<div
					className="flex flex-col
				xl:flex-row xl:justify-between
				">
					<motion.div
						className="flex-1 mb-8 xl:mb-0"
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.8 }}>
						<Image
							className="rounded-[20px]"
							alt=""
							src="https://quocbao238.github.io/Car-Shop/images/about/car01.png"
							width={600}
							height={448}
						/>
					</motion.div>

					{/*text & starts*/}
					<div
						className="flex-1 flex items-center
					 xl:justify-center">
						<div
							className="
						xl:max-w-[517px]">
							<motion.h2
								className="h2"
								variants={fadeIn('up', 0.2)}
								initial="hidden"
								whileInView={'show'}
								viewport={{ once: false, amount: 0.8 }}>
								Car services simplified
							</motion.h2>
							<motion.p
								className="mb-[16px] max-w-md"
								variants={fadeIn('up', 0.6)}
								initial="hidden"
								whileInView={'show'}
								viewport={{ once: false, amount: 0.8 }}>
								Rent, choose, and repair with ease. Our convenient
								location, diverse car types, and reliable repair points
								ensure a seamless car experience
							</motion.p>
							<motion.div
								className="flex items-center gap-x-8 mb-12"
								variants={fadeIn('up', 0.8)}
								initial="hidden"
								whileInView={'show'}
								viewport={{ once: false, amount: 0.2 }}>
								{/* Car Type */}
								<div className="flex flex-col w-[100px]">
									<MdOutlineDirectionsCar className="text-5xl text-accent" />
									<div className="text-3xl font-black mb-2">
										{inView ? (
											<CountUp
												start={0}
												end={50}
												duration={3}
												delay={1}
											/>
										) : null}
										+
									</div>
									<div className="uppercase text-[13px] font-semibold text-secondary">
										car <br /> type
									</div>
								</div>
								{/* Rental Outlets */}
								<div className="flex flex-col w-[100px]">
									<MdOutlineMapsHomeWork className="text-5xl text-accent" />
									<div className="text-3xl font-black mb-2">
										{inView ? (
											<CountUp
												start={0}
												end={135}
												duration={3}
												delay={1}
											/>
										) : null}
										+
									</div>
									<div className="uppercase text-[13px] font-semibold text-secondary">
										renter <br /> outlets
									</div>
								</div>
								{/* Repair points */}
								<div className="flex flex-col w-[100px]">
									<MdOutlineBuildCircle className="text-5xl text-accent" />
									<div className="text-3xl font-black mb-2">
										{inView ? (
											<CountUp
												start={0}
												end={35}
												duration={3}
												delay={1}
											/>
										) : null}
										+
									</div>
									<div className="uppercase text-[13px] font-semibold text-secondary">
										repair <br /> points
									</div>
								</div>
							</motion.div>
							<motion.button
								className="hidden xl:block bg-accent rounded-[10px] w-full h-16 uppercase font-medium text-white
								tracking-[2px] text-[13px] max-w-[184px] hover:bg-accent/40"
								variants={fadeIn('up', 1)}
								initial="hidden"
								whileInView={'show'}
								viewport={{ once: false, amount: 0.6 }}>
								See all cars
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
