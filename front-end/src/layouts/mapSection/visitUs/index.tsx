'use client';

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
			className="w-full h-full md:w-1/2 lg:w-2/5 p-12 flex flex-col justify-center items-start space-y-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-800">
				Visit Us
			</h2>
			<div className="flex items-center space-x-4">
				<MapPin className="text-teal-400" />
				<p className="text-xl text-gray-700">
					{RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}, {RESTAURANT_POSTAL_CODE}
				</p>
			</div>
			<div className="flex items-center space-x-4">
				<Phone className="text-teal-400" />
				<p className="text-xl text-gray-700">{RESTAURANT_PHONE_NUMBER}</p>
			</div>
			<div className="flex items-center space-x-4">
				<Clock className="text-teal-400" />
				<div>
					<p className="text-xl text-gray-700">Mon-Fri: 11am - 10pm</p>
					<p className="text-xl text-gray-700">Sat-Sun: 10am - 11pm</p>
				</div>
			</div>
			<a href={GOOGLE_MAPS_LINK} target="_blank">
				<Button className="bg-primary p-6 rounded-md text-lg hover:bg-primary-hover hover:scale-105 active:scale-95">
					Get Directions
				</Button>
			</a>
		</motion.div>
	);
}
