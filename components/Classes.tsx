'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { classes } from '@/constant/data'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { fadeIn } from '@/lib/variants'

const Classes = () => {
	return (
		<section
			id='class'
			className=''
		>
			<motion.div
				variants={fadeIn('up', 0.6)}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.2 }}
				className='grid grid-cols-1 lg:grid-cols-2 '
			>
				{classes.map((item, index) => {
					return (
						<div
							className='relative w-full h-[300px] lg:h-[485px] flex flex-col items-center justify-center '
							key={index}
						>
							{/* overlay */}
							<div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>
							<Image
								src={item.img}
								alt={item.name}
								fill
								className='object-cover'
							/>
							{/* text & btn */}
							<div className='z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4'>
								<motion.h3
									variants={fadeIn('up', 0.4)}
									initial='hidden'
									whileInView={'show'}
									viewport={{ once: false, amount: 0.2 }}
									className='h3 text-accent'
								>
									{item.name}
								</motion.h3>
								<motion.p
									variants={fadeIn('up', 0.6)}
									initial='hidden'
									whileInView={'show'}
									viewport={{ once: false, amount: 0.2 }}
									className='text-white'
								>
									{item.description}
								</motion.p>
								<motion.div
									variants={fadeIn('up', 0.8)}
									initial='hidden'
									whileInView={'show'}
									viewport={{ once: false, amount: 0.2 }}
									className=''
								>
									<CustomButton
										text='Read more'
										containerStyles='w-[164px] h-[46px] '
									/>
								</motion.div>
							</div>
						</div>
					)
				})}
			</motion.div>
		</section>
	)
}

export default Classes
