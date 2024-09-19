'use client';

import Link from 'next/link';
import FooterTitle from '../footerTitle';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function OpeningHours() {
	useEffect(() => {}, []);

	return (
		<div className="flex flex-col max-md:items-center">
			<FooterTitle>Opening Hours</FooterTitle>
			<ul className="space-y-2 max-md:text-center">
				<li>Monday - Friday: 11am - 10pm</li>
				<li>Saturday - Sunday: 10am - 11pm</li>
			</ul>
			<Link href={'/#reservations'}>
				<Button className="mt-4 bg-primary hover:bg-primary max-lg:w-fit transition-colors duration-300 ease-in-out transform hover:scale-105">
					Make a Reservation
				</Button>
			</Link>
		</div>
	);
}
