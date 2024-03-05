import { FaUsers, FaUser } from 'react-icons/fa'
import { IoIosPricetags } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'

export const links = [
	{ name: 'home', target: 'home', offset: -100 },
	{ name: 'about', target: 'about', offset: -80 },
	{ name: 'class', target: 'class', offset: -800 },
	{ name: 'team', target: 'team', offset: 0 },
	{ name: 'prices', target: 'prices', offset: -40 },
	{ name: 'testimonial', target: 'testimonial', offset: 0 },
	{ name: 'blog', target: 'blog', offset: 0 },
	{ name: 'contact', target: 'contact', offset: 0 },
]

export const featured = [
	{
		icon: <FaUsers />,
		title: 'award-winning trainers',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
	{
		icon: <IoIosPricetags />,
		title: 'excellent prices',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
	{
		icon: <FaDumbbell />,
		title: 'modern equipments',
		subtitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
]

export const stats = [
	{
		number: 19,
		icon: FaBriefcase,
		text: 'training courses',
	},
	{
		number: 879,
		icon: FaClock,
		text: 'working hours',
	},
	{
		number: 150,
		icon: ImUsers,
		text: 'happy customers',
	},
	{
		number: 9,
		icon: FaTrophy,
		text: 'international awards',
	},
]
