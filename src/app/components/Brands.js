'use client'

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { fadeIn } from '/variants'

const Brands = () => {
	return (
		<section className="xl:pt-16 xl:h-[160px] bg-white flex flex-col justify-center">
			<motion.div
				className="container mx-auto"
				variants={fadeIn('up', 0.6)}
				initial="hidden"
				whileInView="show"
				viewport={{
					once: false,
					amount: 0.2,
				}}>
				<div
					className="
				grid grid-cols-3 gap-6 place-content-center
				xl:flex xl:flex-wrap xl:gap-x-6 xl: justify-between
				">
					<div>
						<Image
							width={85}
							height={32}
							src={'icons/brands/ford.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={60}
							height={60}
							src={'icons/brands/mercedes.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={85}
							height={50}
							src={'icons/brands/audi.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={60}
							height={60}
							src={'icons/brands/bmw.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={60}
							height={60}
							src={'icons/brands/vw.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={60}
							height={60}
							src={'icons/brands/skoda.svg'}
							alt=""
						/>
					</div>
					<div>
						<Image
							width={62}
							height={50}
							src={'icons/brands/mazda.svg'}
							alt=""
						/>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Brands
