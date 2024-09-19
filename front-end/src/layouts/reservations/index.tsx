'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q0U2TN5hN13
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ReservationFormState from '@/types/reservationFormState';
import ReservationConfirmation from './reservationConfirmation';
import ReservationsPersonalInfoForm from './reservationsPersonalInfoForm';
import {
	personalInfoValidationSchema,
	reservationInfoValidationSchema,
} from './validationSchemas';
import ReservationInfoForm from './reservationInfoForm';
import postReservation from '@/requests/reservations/postReservation';
import { Reservation } from '@/types/reservation';

const initialValues: Reservation = {
	date: new Date(),
	time: '',
	persons: '',
	name: '',
	lastName: '',
	phone: '',
	obs: '',
};

const variants = {
	initial: { x: '100%', opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: '-70%', opacity: 0 },
};

const RESERVATION_INFO_STATE = 'Reservation Info';
const PERSONAL_INFO_STATE = 'Personal Info';
const CONFIRMATION_STATE = 'Confirmation';

const getSubmitButtonText = (state: ReservationFormState, isSubmitting: boolean) => {
	if (isSubmitting) {
		return 'Reserving table...';
	}

	switch (state) {
		case RESERVATION_INFO_STATE:
			return 'Continue';
		case PERSONAL_INFO_STATE:
			return 'Reserve Table';
	}
};

const getValidationSchema = (state: ReservationFormState) => {
	switch (state) {
		case RESERVATION_INFO_STATE:
			return reservationInfoValidationSchema;
		case PERSONAL_INFO_STATE:
			return personalInfoValidationSchema;
		default:
			return reservationInfoValidationSchema;
	}
};

export default function ReservationsLayout() {
	const [state, setState] = useState<ReservationFormState>(RESERVATION_INFO_STATE);

	const formValidation = (values: any) => {
		const errors: any = {};

		getValidationSchema(state)
			.validate(values, { abortEarly: false })
			.catch((err) => {
				// Collect errors from both schemas
				err.inner.forEach((error: any) => {
					errors[error.path] = error.message;
				});
			});

		return errors;
	};

	const handleSubmit = (values: any, form: any) => {
		switch (state) {
			case RESERVATION_INFO_STATE:
				setState(PERSONAL_INFO_STATE);
				form.setSubmitting(false);
				break;
			case PERSONAL_INFO_STATE:
				postReservation(values, { retry: 10 })
					.then(() => {
						setState(CONFIRMATION_STATE);
						form.setSubmitting(false);
					})
					.catch((error: any) => {
						// if there's a reason for the error show the reason
						// else show some error
						console.log('error', error);
					});
				break;
		}

		console.log('submit', values);
	};

	return (
		<section id="reservations" className="flex flex-col min-h-screen">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
				<div className="bg-card rounded-lg shadow-md overflow-hidden">
					<div className="grid md:grid-cols-2">
						<div className="relative h-[650px] overflow-hidden">
							<Image
								src="/img/paella.webp"
								alt="Paella background"
								layout="fill"
								className="absolute inset-0 object-cover"
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
								validationSchema={reservationInfoValidationSchema}
								onSubmit={handleSubmit}
								validate={formValidation}
							>
								{(formikProps) => (
									<Form className="mx-auto max-w-96 grid gap-4">
										<AnimatePresence mode="wait">
											<motion.div
												className="grid gap-4"
												key={state}
												initial="initial"
												animate="animate"
												exit="exit"
												variants={variants}
												transition={{ duration: 0.3 }}
											>
												{state === RESERVATION_INFO_STATE && (
													<ReservationInfoForm />
												)}
												{state === PERSONAL_INFO_STATE && (
													<ReservationsPersonalInfoForm
														formikProps={formikProps}
													/>
												)}
												{state === CONFIRMATION_STATE && (
													<ReservationConfirmation
														reservation={formikProps.values}
													/>
												)}

												{state !== CONFIRMATION_STATE && (
													<Button
														type="submit"
														size="lg"
														disabled={formikProps.isSubmitting}
													>
														{getSubmitButtonText(
															state,
															formikProps.isSubmitting
														)}
													</Button>
												)}
											</motion.div>
										</AnimatePresence>
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
