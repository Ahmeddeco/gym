import React from 'react'
import HeroSlider from './HeroSlider'

const Hero = () => {
	return (
		<section
			className='bg-hero bg-cover bg-center bg-no-repeat'
			id='home'
		>
			<div className='container mx-auto h-auto'>
				{/* slider */}
				<HeroSlider />
			</div>
		</section>
	)
}

export default Hero
