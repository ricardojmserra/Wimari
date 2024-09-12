'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q0U2TN5hN13
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select';
import Image from 'next/image';
import ReservationsCalendar from './reservationsCalendar';
import ReservationsTimeSelector from './reservationsTimeSelector';

export default function ReservationsLayout() {
	return (
		<section className="flex flex-col min-h-screen">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
				<div className="bg-card rounded-lg shadow-lg overflow-hidden">
					<div className="grid md:grid-cols-2">
						<div className="relative h-[650px] overflow-hidden">
							<Image
								src="/img/paella.jpeg"
								alt="Paella background"
								layout="fill"
								objectFit="cover"
								className="absolute inset-0"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8 md:p-12 lg:p-16">
								<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-white">
									Reserve Your Table
								</h2>
								<p className="mt-2 text-white md:text-lg lg:text-xl">
									Choose your preferred date, time, and party size.
								</p>
							</div>
						</div>
						<div className="p-8 md:p-12 lg:p-16">
							<form className="mx-auto max-w-96 grid gap-4">
								<div>
									<ReservationsCalendar />
								</div>
								<div>
									<ReservationsTimeSelector />
								</div>
								<div>
									<Label htmlFor="party" className="block mb-1">
										Persons
									</Label>
									<Select id="party">
										<SelectTrigger className="w-full h-10">
											<SelectValue placeholder="Persons" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">1 person</SelectItem>
											<SelectItem value="2">2 people</SelectItem>
											<SelectItem value="3">3 people</SelectItem>
											<SelectItem value="4">4 people</SelectItem>
											<SelectItem value="5">5 people</SelectItem>
											<SelectItem value="6">6 people</SelectItem>
											<SelectItem value="7">7 people</SelectItem>
											<SelectItem value="8">8 people</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button type="submit" size="lg">
									Reserve Table
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
