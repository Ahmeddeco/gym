'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import MembershipSlider from './MembershipSlider'

const Membership = () => {
	return (
		<motion.section
			variants={fadeIn('up', 0.2)}
			initial='hidden'
			whileInView={'show'}
			viewport={{ once: false, amount: 0.2 }}
			id='prices'
			className='section bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10 '
		>
			<div className='container mx-auto text-white flex flex-col relative z-20 xl:pt-40 gap-8 pb-24'>
				<motion.h2
					variants={fadeIn('up', 0.4)}
					initial='hidden'
					whileInView={'show'}
					className='h2 text-center '
				>
					Membership
				</motion.h2>
				<motion.div
					variants={fadeIn('up', 0.6)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.2 }}
					className=''
				>
					<MembershipSlider />
				</motion.div>
			</div>
		</motion.section>
	)
}

export default Membership
