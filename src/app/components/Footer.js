'use client'

import Image from 'next/image'

import { FaPhone, FaEnvelope, FaP } from 'react-icons/fa6'

import Copyright from './Copyright'

import { motion } from 'framer-motion'

import { fadeIn } from '/variants'

import { Link } from 'react-scroll'

const Footer = () => {
	return (
		<footer>
			<div className="container mx-auto mb-24">
				{/*Grid*/}
				<motion.div
					className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
					variants={fadeIn('up', 0.2)}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}>
					<div className="flex flex-col flex-1 gap-y-8">
						{/*	Logo*/}
						<Link
							className="cursor-pointer"
							to="home"
							smooth={true}
							spy={true}>
							<Image
								width={200}
								height={200}
								src="/icons/logo.svg"
								alt=""
							/>
						</Link>
						{/*	Text*/}
						<div>
							Lorem Ipsum is simply dummy text of the printing and
						</div>
						<div className="felx flex-col gap-y-4 font-semibold">
							<div>
								<FaPhone />
								<div>(123) 456-7891</div>
							</div>
							<div>
								<FaEnvelope />
								<div>office@carshop.com</div>
							</div>
						</div>
					</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
				</motion.div>
			</div>
		</footer>
	)
}

export default Footer
