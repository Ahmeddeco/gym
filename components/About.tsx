'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { featured } from '@/constant/data'
import Achievements from './Achievements'

const About = () => {
	return (
		<section
			className='section pt-8  lg:pt-16  '
			id='about'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center gap-2 mb-8'>
					<motion.h2
						variants={fadeIn('up', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.2 }}
						className='h2 text-center'
					>
						About us
					</motion.h2>
					<motion.p
						variants={fadeIn('up', 0.6)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.2 }}
						className='max-w-[600px] mx-auto text-center'
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Commodi natus quidem maxime? Possimus, at obcaecati iste
						recusandae voluptate cum odit tempora laborum delectus
						nam quis, aliquam corrupti molestiae laboriosam ut.
					</motion.p>
				</div>

				{/* featured items */}
				<motion.div
					variants={fadeIn('up', 0.8)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
				>
					{featured.map((feature, index) => {
						return (
							<div
								className='flex flex-col justify-center items-center gap-4 border p-10'
								key={index}
							>
								<div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex items-center justify-center'>
									{feature.icon}
								</div>
								<div className='flex flex-col justify-center items-center gap-2 text-center'>
									<h4 className='h4 text-accent'>
										{feature.title}
									</h4>
									<p className=''>{feature.subtitle}</p>
								</div>
							</div>
						)
					})}
				</motion.div>

				{/* achievements */}
				<motion.div
					variants={fadeIn('up', 1)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className=''
				>
					<Achievements />
				</motion.div>
			</div>
		</section>
	)
}

export default About
