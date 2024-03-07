'use client'

import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhoneAlt,
	FaFacebook,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { social, trainerData } from '@/constant/data'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-primary-300 pt-24'>
			<div className='container mx-auto pb-24'>
				<div className='text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12'>
					{/* info */}
					<div className='flex flex-col gap-4'>
						<Link href='/'>
							<Image
								src='/assets/img/logo.png'
								alt='logo'
								width={117}
								height={55}
							/>
						</Link>
						<p className='max-w-sm'>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Ullam veritatis veniam molestias?
						</p>
						<ul className='flex flex-col gap-4'>
							<li className='flex items-center gap-4'>
								<FaMapMarkerAlt className='text-xl text-accent' />
								<span>Lincoln Park Chicago, Illinois</span>
							</li>
							<li className='flex items-center gap-4'>
								<FaPhoneAlt className='text-xl text-accent' />
								<span>(510) 710 6589 - (510) 987 6325</span>
							</li>
							<li className=''>
								<Link
									href='#'
									className='flex items-center gap-4'
								>
									<FaEnvelope className='text-xl text-accent' />
									<span>ajhfjuwiopjfa@email.com</span>
								</Link>
							</li>
						</ul>
					</div>
					{/* blog */}
					<div className=''>
						<h4 className='h4 text-accent mb-4'>
							recent blig posts
						</h4>
						{/* post */}
						<div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>
							<Link
								href='#'
								className='hover:text-accent transition-all'
							>
								<h5 className='h5 leading-snug'>
									how to sttay motivation for all exercises
								</h5>
								<p className='text-gray-400 txt-[12px] tracking-[3px] uppercase'>
									December 22, 2023
								</p>
							</Link>
						</div>
						{/* post */}
						<div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>
							<Link
								href='#'
								className='hover:text-accent transition-all'
							>
								<h5 className='h5 leading-snug'>
									Lorem ipsum dolor sit.
								</h5>
								<p className='text-gray-400 txt-[12px] tracking-[3px] uppercase'>
									September 22, 2023
								</p>
							</Link>
						</div>
						{/* post */}
						<div className=' flex flex-col gap-3 pb-3 mb-4'>
							<Link
								href='#'
								className='hover:text-accent transition-all'
							>
								<h5 className='h5 leading-snug'>
									Lorem ipsum dolor sit amet.
								</h5>
								<p className='text-gray-400 txt-[12px] tracking-[3px] uppercase'>
									June 22, 2023
								</p>
							</Link>
						</div>
					</div>
					{/* gallery */}
					<div className=''>
						<h4 className='h4 text-accent mb-4'>gallery</h4>
						{/* gallery imgs */}
						<div className='flex flex-wrap gap-2'>
							{trainerData.map((img, index) => {
								return (
									<Link
										href='#'
										key={index}
									>
										<Image
											src={img.image}
											width={100}
											height={100}
											alt={img.name}
										/>
									</Link>
								)
							})}
						</div>
					</div>
					{/* newsletter */}
					<div className=''>
						<h4 className='h4 text-accent mb-4'>newsletter</h4>
						<div className='flex flex-col gap-4'>
							<p className=''>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nam porro voluptates id ullam,
								assumenda ipsum possimus alias repellendus.
							</p>
							<form
								action=''
								className='flex items-center '
							>
								<input
									type='text'
									placeholder='Email'
									className='h-[50px] outline-none px-4 text-primary-300 w-40 '
								/>
								<CustomButton
									text='Send'
									containerStyles='h-[50px] px-6 '
								/>
							</form>
						</div>
					</div>
				</div>
				{/* copyright */}
				<div className='text-white border-t border-white/20 py-12 '>
					<div className='container mx-auto h-full'>
						<div className='flex items-center justify-between'>
							<span className=''>
								&copy; copyright 2024 Fitphydique
							</span>
							<div
								className='flex items-center justify-center gap-12
							'
							>
								{social.map((item, index) => {
									return (
										<ul
											className=''
											key={index}
										>
											<li>
												<Link
													// target='_blank'
													href={item.link}
													className='text-white hover:text-accent transition-all'
												>
													<item.icon />
												</Link>
											</li>
										</ul>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
