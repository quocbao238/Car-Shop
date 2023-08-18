import React from 'react'

import Image from 'next/image'

const Copyright = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center border-t w-full shadow-sm max-h-[360px]">
			<a href="https://www.youtube.com/@cristianmihai01">
				<div className="flex flex-row justify-center items-center w-full max-h-120 place-items-center mr-8">
					<Image
						id=""
						src="https://quocbao238.github.io/Car-Shop/icons/youtube.png"
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
			<h4 className=" h-4 font-semibold text-center pb-16 pt-8 text-sm border-t lg:pb-0 lg:pt-0 lg:pl-4 lg:border-l lg:border-t-0">
				This project to learnNext JS, Tailwind CSS
			</h4>
		</div>
	)
}

export default Copyright
