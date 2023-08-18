import React from 'react'

import Image from 'next/image'

const Copyright = () => {
	return (
		<div className="flex flex-col justify-center items-center border-t w-full shadow-sm">
			<a href="https://www.youtube.com/@cristianmihai01">
				<div className="flex flex-row justify-center items-center w-full max-h-120 place-items-center">
					<Image
						id=""
						src="/icons/youtube.png"
						width={80}
						height={120}
					/>
					<h3 className="h3 font-medium text-secondary mr-2 text-center justify-center items-center my-auto">
						Author:{' '}
					</h3>
					<h3 className="h3 text-center text-accent my-auto">
						Cristian Mihai
					</h3>
				</div>
			</a>
			<h5 className="text-center pb-16 pt-8 text-sm border-t">
				This project to learnNext JS, Tailwind CSS
			</h5>
			
		</div>
	)
} 

export default Copyright
