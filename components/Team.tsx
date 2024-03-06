'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { trainerData } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const Team = () => {
	return (
		<section
			id='team'
			className='py-12'
		>
			<div className='container mx-auto flex flex-col h-full items-center justify-center'>
				<motion.h2
					variants={fadeIn('up', 0.4)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className='h2 text-accent mb-6'
				>
					Our Trainer
				</motion.h2>
				{/* Trainer grid */}
				<motion.div
					variants={fadeIn('up', 0.6)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12'
				>
					{trainerData.map((trainer, index) => {
						return (
							<div
								className='flex flex-col justify-center gap-4 '
								key={index}
							>
								{/* image */}
								<div className='relative w-[320px] h-[360px] mx-auto '>
									<Image
										src={trainer.image}
										alt={trainer.name}
										fill
									/>
								</div>
								{/* text */}
								<div className='flex flex-col gap-1 items-center text-center'>
									{/* name */}
									<h4 className='h4'>{trainer.name}</h4>
									{/* role */}
									<p className='uppercase text-xs tracking-tight text-accent'>
										{trainer.role}
									</p>
									{/* description */}
									<p className='max-w-80'>
										{trainer.description}
									</p>
								</div>
								{/* socials */}
								<div className='flex gap-12 justify-center'>
									{trainer.social.map((social, index) => {
										return (
											<div
												className=' '
												key={index}
											>
												<Link
													href={social.href}
													className='hover:text-accent'
												>
													<social.icon className='text-lg' />
												</Link>
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</motion.div>
				{/* btn */}
				<motion.div
					variants={fadeIn('up', 0.8)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className=''
				>
					<CustomButton
						text='See all trainers'
						containerStyles='w-[196px] h-[62px]'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default Team
