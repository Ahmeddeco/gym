'use client'

import { links } from '@/constant/data'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Nav = ({ containerStyles }: { containerStyles: string }) => {
	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return (
					<ScrollLink
						offset={link.offset}
						to={link.target}
						smooth
						spy
						activeClass='active'
						key={index}
						className='cursor-pointer hover:text-accent transition-all'
					>
						{link.name}
					</ScrollLink>
				)
			})}
		</nav>
	)
}

export default Nav
