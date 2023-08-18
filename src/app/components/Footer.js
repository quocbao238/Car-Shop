'use client'

import Image from 'next/image'

import { FaPhone, FaEnvelope, FaP } from 'react-icons/fa6'

import Copyright from './Copyright'

import { motion } from 'framer-motion'

import { fadeIn } from '/variants'

import { Link } from 'react-scroll'

const Footer = () => (
	<footer
		className="pt-20 bg-white z-20"
		id="contact">
		<div className="container mx-auto mb-24">
			{/*Grid*/}
			<motion.div
				// className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-14"
				className="flex flex-col gap-x-8 justify-between gap-y-14 lg:flex-row
				"
				variants={fadeIn('up', 0.2)}
				initial="hidden"
				whileInView={'show'}
				viewport={{ once: false, amount: 0.2 }}>
				<div className="flex flex-col flex-1 gap-y-8">
					{/* Logo*/}
					<Link
						className="cursor-pointer"
						to="home"
						smooth={true}
						spy={true}>
						<Image
							width={200}
							height={200}
							src="https://quocbao238.github.io/Car-Shop/icons/logo.svg"
							alt=""
						/>
					</Link>
					{/* Text*/}
					<div className="text-secondary">
						Lorem Ipsum is simply dummy text of the printing and
					</div>
					{/* Phone and email*/}
					<div className="flex flex-col gap-y-4 font-semibold">
						{/* Phone */}
						<div className="flex items-center gap-x-[10px]">
							<FaPhone />
							<div className="font-medium">(123) 456-7891</div>
						</div>
						{/* Email */}
						<div className="flex items-center gap-x-[10px]">
							<FaEnvelope />
							<div className="font-medium">office@carshop.com</div>
						</div>
					</div>
				</div>
				{/* Link */}
				<div className="flex-1 lg:ml-20">
					<h3 className="h3 font-bold">Company</h3>
					<ul className="flex flex-col gap-y-4 font-medium justify-center">
						<li>
							<a href="">New York</a>
						</li>{' '}
						<li>
							<a href="">Careers</a>
						</li>{' '}
						<li>
							<a href="">Mobile</a>
						</li>{' '}
						<li>
							<a href="">Blog</a>
						</li>{' '}
						<li>
							<a href="">How we work</a>
						</li>
					</ul>
				</div>
				{/* Program */}
				<div className="flex-1 flex-col">
					<h3 className="h3 font-bold">Working Hours</h3>
					<div className="flex flex-col gap-y-4 text-secondary">
						<div className="flex gap-x-2">
							<div>Mon-Fri:</div>
							<div className="font-bold">09:30AM 09:00PM</div>
						</div>
						<div className="flex gap-x-2">
							<div>Sat:</div>
							<div className="font-bold">09:30AM - 16:00PM</div>
						</div>
						<div className="flex gap-x-2">
							<div>Sun:</div>
							<div className="font-bold">Close</div>
						</div>
					</div>
				</div>
				{/* NewSletter */}
				<div className="flex-1">
					<h3 className="h3 font-bold">Newsletter</h3>
					<div className="mb-4 text-secondary">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
						sunt modi repellat?
					</div>
					<form className="flex flex-col gap-x-2 gap-y-4">
						<input
							type="text"
							placeholder="Your Email"
							className=" outline-none bg-white border rounded-lg pl-4 focus:border-accent h-[54px]"
						/>
						<button
							type="submit"
							className="btn btn-sm btn-accent w-full">
							Submit
						</button>
					</form>
				</div>
			</motion.div>
		</div>
		{/* Copyright */}
		<Copyright />
	</footer>
)

export default Footer
