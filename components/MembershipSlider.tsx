'use client'

import { MdClose } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { membershipData } from '@/constant/data'
import CustomButton from './CustomButton'

const MembershipSlider = () => {
	return (
		<Swiper
			slidesPerView={1}
			modules={[Pagination]}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}}
			className='min-h-[680px]'
		>
			{membershipData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto '>
							<div className='py-5 px-[60px] border-b border-accent'>
								<h4 className='h4'>{item.title}</h4>
							</div>
							{/* benefits */}
							<div className='py-[30px] px-[60px]'>
								<ul className='flex flex-col gap-5 mb-7'>
									{item.benefits.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center gap-2'
											>
												<item.icon className='text-accent text-lg' />
												{item.text}
											</li>
										)
									})}
								</ul>
								{/* price & button */}
								<p className=' mb-8 flex gap-1 items-center'>
									<sup className='text-4xl '>$</sup>
									<strong className='text-6xl'>
										{item.price}
									</strong>
									<em className='self-end text-2xl'>
										/month
									</em>
								</p>
								<CustomButton text='buy now' containerStyles='w-[196px] h-[62px]'/>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default MembershipSlider
