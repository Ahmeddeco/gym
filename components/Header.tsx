'use client'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { MdClose, MdMenu } from 'react-icons/md'

const Header = () => {
	const [headerActive, setHeaderActive] = useState(false)
	const [openNav, setOpenNav] = useState(false)

	useEffect(() => {
		const hadleScroll = () => {
			// detect scroll
			setHeaderActive(window.scrollY > 50)
		}
		// add scroll event
		window.addEventListener('scroll', hadleScroll)
		// clear scroll event
		return () => {
			window.removeEventListener('scroll', hadleScroll)
		}
	}, [])

	return (
		<header
			className={`${
				headerActive ? 'h-[100px]' : 'h-[124px]'
			} fixed left-0 right-0 w-full bg-primary-200/90  transition-all z-50 top-0 `}
		>
			<div className='container mx-auto h-full flex items-center justify-between'>
				{/* logo */}
				<Link href='/'>
					<Image
						src={'/assets/img/logo.png'}
						alt={'logo'}
						width={117}
						height={55}
						priority={true}
					/>
				</Link>
				{/* mobile nav - hidden on large devices */}
				<MobileNav
					containerStyles={`${
						headerActive ? 'top-[90px]' : 'top[124px]'
					} ${
						openNav
							? 'max-h-max pt-8 pb-10 border-t border-white/10'
							: 'max-h-0 pt-0 pb0 overflow-hidden border-white/0'
					} xl:hidden text-white flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium transition-all`}
				/>
				{/* desktop nav - hidden on small devices */}
				<Nav containerStyles='gap-4 hidden xl:flex text-white text-base font-medium transition-all uppercase' />
				{/* hide/open menu button */}
				<div className='flex items-center gap-4'>
					{/* login & register button*/}
					<div className='text-white flex items-center gap-4'>
						<button className='hover:text-accent transition-all uppercase text-base font-medium'>
							login
						</button>
						<button className='hover:text-accent transition-all uppercase text-base font-medium'>
							register
						</button>
					</div>
					<button
						onClick={() => setOpenNav(!openNav)}
						className='text-white xl:hidden '
					>
						{openNav ? (
							<MdClose className='text-4xl ' />
						) : (
							<MdMenu className='text-4xl ' />
						)}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
