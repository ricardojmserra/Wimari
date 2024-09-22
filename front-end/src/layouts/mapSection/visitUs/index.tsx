'use client';

import SectionTitle from '@/components/sectionTitle';
import { Button } from '@/components/ui/button';
import {
	RESTAURANT_ADDRESS,
	RESTAURANT_LOCATION,
	RESTAURANT_PHONE_NUMBER,
	RESTAURANT_POSTAL_CODE,
} from '@/constants/consts';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';

const GOOGLE_MAPS_LINK = `https://www.google.com/maps/dir//O+Marisco,+Marina+de+Vilamoura,+8125-403+Quarteira,+Portugal/@37.079131,-8.120329,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd1ab52d80e9b0cd:0x1e4210c0f819b8e!2m2!1d-8.1203295!2d37.0791308!3e0?hl=pt-PT&entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D`;

export default function VisitUs() {
	return (
		<motion.div
			className="w-full h-full md:w-1/2 lg:w-2/5 p-12 flex flex-col justify-center items-start space-y-8"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
		>
			<SectionTitle className="lg:text-6xl">
				Visit
				<br />
				<span className="text-primary">Our Space</span>
			</SectionTitle>
			<div className="flex items-center space-x-4">
				<div className="bg-primary-100 p-3 rounded-full shadow-md">
					<MapPin className="text-primary" size={28} />
				</div>
				<p className="text-lg xs:text-xl text-gray-700 font-light">
					{RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}, {RESTAURANT_POSTAL_CODE}
				</p>
			</div>
			<div className="flex items-center space-x-4">
				<div className="bg-primary-100 p-3 rounded-full shadow-md ">
					<Phone className="text-primary" size={28} />
				</div>

				<p className="text-lg xs:text-xl text-gray-700 font-light">
					{RESTAURANT_PHONE_NUMBER}
				</p>
			</div>
			<div className="flex items-center space-x-4">
				<div className="bg-primary-100 p-3 rounded-full shadow-md">
					<Clock className="text-primary" size={28} />
				</div>
				<div>
					<p className="text-lg xs:text-xl text-gray-700 font-light">
						Mon-Fri: 11am - 10pm
					</p>
					<p className="text-lg xs:text-xl text-gray-700 font-light">
						Sat-Sun: 10am - 11pm
					</p>
				</div>
			</div>
			<Button
				externalLink
				href={GOOGLE_MAPS_LINK}
				className="bg-primary px-10 py-6 rounded-md text-lg hover:bg-primary-hover hover:scale-105 active:scale-95"
				// whileHover={{
				// 	scale: 1.05,
				// 	boxShadow:
				// 		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				// }}
				// whileTap={{ scale: 0.95 }}
			>
				Get Directions
			</Button>
		</motion.div>
	);
}
