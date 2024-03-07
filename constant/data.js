import { FaUsers, FaUser, FaCheck } from 'react-icons/fa'
import { IoIosPricetags } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

export const links = [
	{ name: 'home', target: 'home', offset: -100 },
	{ name: 'about', target: 'about', offset: -60 },
	{ name: 'class', target: 'class', offset: -100 },
	{ name: 'team', target: 'team', offset: -100 },
	{ name: 'prices', target: 'prices', offset: 0 },
	// { name: 'testimonial', target: 'testimonial', offset: -100 },
	// { name: 'blog', target: 'blog', offset: -100 },
	{ name: 'contact', target: 'contact', offset: 0 },
]

export const social = [
	{
		name: 'facebook',
		icon: FaFacebook,
		link: 'www.facebook.com',
	},
	{
		name: 'twitter',
		icon: FaTwitter,
		link: 'www.twitter.com',
	},
	{
		name: 'youtube',
		icon: FaYoutube,
		link: 'www.youtube.com',
	},
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

export const classes = [
	{
		name: 'body building',
		img: '/assets/img/classes/bodybuilding.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
	{
		name: 'cardio',
		img: '/assets/img/classes/cardio.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
	{
		name: 'fitness',
		img: '/assets/img/classes/fitness.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
	{
		name: 'crossfit',
		img: '/assets/img/classes/crossfit.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
	},
]

export const trainerData = [
	{
		image: '/assets/img/trainers/david.jpg',
		name: 'David Williams',
		role: 'Body builder coach',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
		social: [
			{ icon: FaFacebook, href: 'http://facebook.com' },
			{ icon: FaTwitter, href: 'http://twitter.com' },
			{ icon: FaYoutube, href: 'http://youtube.com' },
		],
	},
	{
		image: '/assets/img/trainers/rosy.jpg',
		name: 'Rosy Rivera',
		role: 'Body builder coach',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
		social: [
			{ icon: FaFacebook, href: 'http://facebook.com' },
			{ icon: FaTwitter, href: 'http://twitter.com' },
			{ icon: FaYoutube, href: 'http://youtube.com' },
		],
	},
	{
		image: '/assets/img/trainers/matt.jpg',
		name: 'Matt Stoner',
		role: 'Body builder coach',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
		social: [
			{ icon: FaFacebook, href: 'http://facebook.com' },
			{ icon: FaTwitter, href: 'http://twitter.com' },
			{ icon: FaYoutube, href: 'http://youtube.com' },
		],
	},
	{
		image: '/assets/img/trainers/sofia.jpg',
		name: 'Sofia Lauren',
		role: 'Body builder coach',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum aspernatur asperiores fugit laudantium.',
		social: [
			{ icon: FaFacebook, href: 'http://facebook.com' },
			{ icon: FaTwitter, href: 'http://twitter.com' },
			{ icon: FaYoutube, href: 'http://youtube.com' },
		],
	},
]

export const membershipData = [
	{
		title: 'standard',
		price: '30',
		benefits: [
			{
				icon: FaCheck,
				text: 'Includes membership',
			},
			{
				icon: FaCheck,
				text: 'Access to all gym facilities',
			},
			{
				icon: MdClose,
				text: 'Diet plan included',
			},
			{
				icon: FaCheck,
				text: 'Health and fitness tips',
			},
			{
				icon: MdClose,
				text: 'Monday-Friday gym access',
			},
			{
				icon: FaCheck,
				text: 'Full access to everything',
			},
			{
				icon: MdClose,
				text: 'No additional amenities',
			},
		],
	},
	{
		title: 'ultimate',
		price: '45',
		benefits: [
			{
				icon: FaCheck,
				text: 'Includes membership',
			},
			{
				icon: FaCheck,
				text: 'Access to all gym facilities',
			},
			{
				icon: FaCheck,
				text: 'Diet plan included',
			},
			{
				icon: FaCheck,
				text: 'Health and fitness tips',
			},
			{
				icon: FaCheck,
				text: 'Monday-Friday gym access',
			},
			{
				icon: FaCheck,
				text: 'Full access to everything',
			},
			{
				icon: MdClose,
				text: 'No additional amenities',
			},
		],
	},
	{
		title: 'professional',
		price: '60',
		benefits: [
			{
				icon: FaCheck,
				text: 'Includes membership',
			},
			{
				icon: FaCheck,
				text: 'Access to all gym facilities',
			},
			{
				icon: FaCheck,
				text: 'Diet plan included',
			},
			{
				icon: FaCheck,
				text: 'Health and fitness tips',
			},
			{
				icon: FaCheck,
				text: 'Monday-Friday gym access',
			},
			{
				icon: FaCheck,
				text: 'Full access to everything',
			},
			{
				icon: FaCheck,
				text: 'No additional amenities',
			},
		],
	},
]

export const brandImages = [
	{
		src: '/assets/img/brands/brand-1.png',
		href: '',
	},
	{
		src: '/assets/img/brands/brand-2.png',
		href: '',
	},
	{
		src: '/assets/img/brands/brand-3.png',
		href: '',
	},
	{
		src: '/assets/img/brands/brand-4.png',
		href: '',
	},
	{
		src: '/assets/img/brands/brand-5.png',
		href: '',
	},
]

export const brandContainerVariant = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
			duration: 0.5,
			ease: 'linear',
		},
	},
}
export const brandItem = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.6, 0.3, 0.8],
		},
	},
}
