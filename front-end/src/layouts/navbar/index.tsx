'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const navItems = [
	{
		label: 'HOME',
		href: '/',
	},
	{
		label: 'MENU',
		href: '/menu/',
	},
	{
		label: 'LOCATION',
		href: '/#location',
	},
	{
		label: 'ABOUT',
		href: '/#about',
	},
];

const MotionLink = motion(Link);

export default function Component() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					<Link href={'/#reservation'}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="max-sm:hidden bg-primary text-white px-8 py-3 text-sm font-medium transition-colors duration-300 ease-in-out"
						>
							RESERVE
						</motion.button>
					</Link>
					<Link href={'/'}>
						<h1 className="text-3xl font-light tracking-wider text-gray-800">
							O Marisco
						</h1>
					</Link>
					<Link href={'/order/'}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="max-sm:hidden bg-primary text-white px-8 py-3 text-sm font-medium transition-colors duration-300 ease-in-out"
						>
							ORDER
						</motion.button>
					</Link>
				</div>
			</div>
			<div className="border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="hidden sm:flex justify-between items-center h-16">
						{navItems.map((item, index) => (
							<MotionLink
								key={index}
								href={item.href}
								className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out text-sm font-medium"
								whileHover={{ y: -2 }}
								whileTap={{ y: 0 }}
							>
								{item.label}
							</MotionLink>
						))}
					</div>
					<div className="sm:hidden flex justify-end h-16 items-center">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-600 hover:text-black focus:outline-none"
						>
							<Menu className="h-6 w-6" />
						</motion.button>
					</div>
				</div>
			</div>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden bg-white border-t border-gray-200"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className="text-gray-600 hover:text-black hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out"
							>
								{item.label}
							</Link>
						))}

						<Link
							href={'/#reservation'}
							className="text-white bg-primary hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out"
						>
							Reserve
						</Link>
						<Link
							href={'/order/'}
							className="text-white bg-primary hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out"
						>
							Order
						</Link>
					</div>
				</motion.div>
			)}
		</nav>
	);
}
