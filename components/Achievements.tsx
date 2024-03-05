'use client'

import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '@/constant/data'
import { statsContainerVariant, statsItem } from '@/lib/variants'

const Achievements = () => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	return (
		<section className=''>
			<div className='container mx-auto'>
				<motion.div
					variants={statsContainerVariant}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='grid grid-cols-2 md:grid-cols-4 gap-16'
				>
					{stats.map((item, index) => {
						return (
							<motion.div
								variants={statsItem}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.3 }}
								className='flex flex-col justify-center items-center '
								key={index}
							>
								{/* circle outer */}
								<div className='border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
									{/* circle inner & count number */}
									<div
										ref={ref}
										className='border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full '
									>
										{isInView && (
											<CountUp
												end={item.number}
												start={0}
												duration={6}
											/>
										)}
									</div>
								</div>
								{/* text */}
								<div className='flex flex-col justify-center items-center text-center'>
									<item.icon className='text-3xl mb-2 ' />
									<h4 className='h4'>{item.text}</h4>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Achievements
