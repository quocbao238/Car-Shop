import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const testimonialData = [
	{
		message:
			'They truly exceeded my expectations and made my car rental experience a delight',
		avatar:
			'https://quocbao238.github.io/Car-Shop/images/testimonial/avatar.png',
		name: 'John Son',
		job: 'Photographer & Videographer',
	}, //
	{
		message:
			'They truly exceeded my expectations and made my car rental experience a delight',
		avatar:
			'https://quocbao238.github.io/Car-Shop/images/testimonial/avatar.png',
		name: 'Thuy Tien',
		job: 'Singer & Actor',
	},
]

const TestimonialSlider = () => {
	return (
		<motion.div
			className="container mx-auto"
			variants={fadeIn('up', 0.4)}
			initial="hidden"
			whileInView={'show'}
			viewport={{ once: true, amount: 0.6 }}>
			<Swiper
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className="h-[450px] xl:h-[400px]">
				{testimonialData.map((person, index) => {
					const { message, avatar, name, job } = person
					return (
						<SwiperSlide key={index}>
							<div className="flex flex-col justify-center items-center text-center">
								<FaQuoteLeft className="text-7xl text-accent mb-6" />
								<div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
									{message}
								</div>
								<Image
									width={64}
									height={64}
									src={avatar}
									alt=""
								/>
								<div className="text-lg font-medium">{name}</div>
								<div className="text-secondary">{job}</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</motion.div>
	)
}

export default TestimonialSlider
