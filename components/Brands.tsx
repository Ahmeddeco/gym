'use client'

import { brandContainerVariant, brandImages, brandItem } from '@/constant/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Brands = () => {
	return (
		<section
			id='contact'
			className='py-8'
		>
			<div className='container mx-auto'>
				<motion.div
					variants={brandContainerVariant}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.3 }}
					className='grid grid-cols-2 lg:grid-cols-5 py-8'
				>
					{brandImages.map((img, index) => {
						return (
							<motion.div
								variants={brandItem} 
								className=''
								key={index}
							>
								<Link
									href={img.href}
									className='group'
								>
									<Image
										className='opacity-50 group-hover:opacity-100 transition-all mx-auto'
										src={img.src}
										alt='brand logo'
										height={106}
										width={204}
									/>
								</Link>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Brands
