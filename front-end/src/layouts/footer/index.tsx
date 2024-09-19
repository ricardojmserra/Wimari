import { Facebook, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import FooterTitle from './footerTitle';
import OpeningHours from './openingHours';
import {
	RESTAURANT_ADDRESS,
	RESTAURANT_LOCATION,
	RESTAURANT_PHONE_NUMBER,
	RESTAURANT_POSTAL_CODE,
} from '@/constants/consts';

const QUICK_LINKS = [
	{
		label: 'Menu',
		href: '/menu/',
	},
	{
		label: 'Reservations',
		href: '/#reservations',
	},
	{
		label: 'About Us',
		href: '/#aboutUs',
	},
];

export default function Footer() {
	return (
		<footer className="bg-slate-900 text-white relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-10 py-12 md:py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 max-md:gap-10 max-md:justify-items-center">
					<div className="space-y-4 flex flex-col max-md:items-center">
						<h2 className="text-3xl font-bold">O Marisco</h2>
						<p className="text-sm text-gray-300">
							Elevating culinary experiences to new heights.
						</p>
						<div className="flex items-center space-x-4">
							<a
								href="https://www.facebook.com/Omarisco97"
								className="hover:text-primary transition-colors transform hover:scale-110"
								aria-label="Facebook"
							>
								<Facebook size={24} />
							</a>
							<a
								href="https://www.tripadvisor.pt/Restaurant_Review-g227947-d2068221-Reviews-Restaurante_O_Marisco-Vilamoura_Quarteira_Faro_District_Algarve.html"
								className="hover:text-primary transition-colors transform hover:scale-110"
								aria-label="Trip Advisor"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.64em"
									height="1em"
									viewBox="0 0 2304 1408"
								>
									<path
										fill="currentColor"
										d="M651 805q0 39-27.5 66.5T558 899q-39 0-66.5-27.5T464 805q0-38 27.5-65.5T558 712q38 0 65.5 27.5T651 805m1154-1q0 39-27.5 66.5T1711 898t-66.5-27.5T1617 804t27.5-66t66.5-27t66.5 27t27.5 66m-1040 1q0-79-56.5-136T572 612t-136.5 56.5T379 805t56.5 136.5T572 998t136.5-56.5T765 805m1153-1q0-80-56.5-136.5T1725 611q-79 0-136 56.5T1532 804t56.5 136.5T1725 997t136.5-56.5T1918 804m-1068 1q0 116-81.5 197.5T572 1084q-116 0-197.5-82T293 805t82-196.5T572 527t196.5 81.5T850 805m1154-1q0 115-81.5 196.5T1725 1082q-115 0-196.5-81.5T1447 804t81.5-196.5T1725 526q116 0 197.5 81.5T2004 804m-964 3q0-191-135.5-326.5T578 345q-125 0-231 62T179 575.5T117 807t62 231.5T347 1207t231 62q191 0 326.5-135.5T1040 807m668-573q-254-111-556-111q-319 0-573 110q117 0 223 45.5T984.5 401t122 183t45.5 223q0-115 43.5-219.5t118-180.5T1491 284t217-50m479 573q0-191-135-326.5T1726 345t-326.5 135.5T1264 807t135.5 326.5T1726 1269t326-135.5T2187 807m-266-566h383q-44 51-75 114.5T2189 470q110 151 110 337q0 156-77 288t-209 208.5t-287 76.5q-133 0-249-56t-196-155q-47 56-129 179q-11-22-53.5-82.5T1024 1168q-80 99-196.5 155.5T578 1380q-155 0-287-76.5T82 1095T5 807q0-186 110-337q-9-51-40-114.5T0 241h365Q514 141 720 84.5T1152 28q224 0 421 56t348 157"
									/>
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col max-md:items-center">
						<FooterTitle>Quick Links</FooterTitle>
						<ul className="space-y-2 max-md:text-center">
							{QUICK_LINKS.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full transition-colors hover:translate-x-1 inline-block"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col max-md:items-center">
						<FooterTitle>Contact Us</FooterTitle>
						<ul className="space-y-2 flex flex-col max-md:items-center">
							<li className="flex items-center group">
								<MapPin
									size={18}
									className="mr-2 text-teal-400 transition-colors"
								/>
								<span className="w-full transition-colors">
									{RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION},{' '}
									{RESTAURANT_POSTAL_CODE}
								</span>
							</li>
							<li className="flex items-center group">
								<Phone
									size={18}
									className="mr-2 text-teal-400 transition-colors"
								/>
								<span className="transition-colors">
									{RESTAURANT_PHONE_NUMBER}
								</span>
							</li>
							<li className="flex items-center group">
								<Mail
									size={18}
									className="mr-2 text-teal-400 transition-colors"
								/>
								<span className="transition-colors">info@omarisco.com</span>
							</li>
						</ul>
					</div>
					<OpeningHours />
				</div>
				<div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-gray-300 mb-4 md:mb-0">
						© {new Date().getFullYear()} O Marisco. All rights reserved.
					</p>
					<div className="flex space-x-4 text-sm">
						<Link
							href="/privacy-policy"
							className="transition-colors cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full transition-colors inline-block"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="transition-colors cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full transition-colors inline-block"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
