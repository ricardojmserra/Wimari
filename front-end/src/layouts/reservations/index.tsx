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
import * as Yup from 'yup';
import Image from 'next/image';
import ReservationsCalendar from './reservationsCalendar';
import ReservationsTimeSelector from './reservationsTimeSelector';
import ReservationsPersonsNumberSelector from './reservationsPersonsNumberSelector';
import { Formik, Form, Field } from 'formik';

const validationSchema = Yup.object({
	date: Yup.date().required('Date is required'),
	time: Yup.string().required('Time is required'),
	persons: Yup.number()
		.required('Number of persons is required')
		.min(1, 'Must be at least 1 person'),
});

const initialValues = {
	date: new Date(),
	time: '',
	persons: 1,
};

export default function ReservationsLayout() {
	const handleSubmit = () => {
		console.log('submit');
	};

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
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ errors, touched }) => (
									<Form className="mx-auto max-w-96 grid gap-4">
										<div>
											<ReservationsCalendar name="date" />
										</div>
										<div>
											<ReservationsTimeSelector />
										</div>
										<div>
											<ReservationsPersonsNumberSelector />
										</div>
										<Button type="submit" size="lg">
											Reserve Table
										</Button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
