import * as Yup from 'yup';

export const personalInfoValidationSchema = Yup.object({
	name: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	phone: Yup.string()
		.matches(/^(\+\d{1,3})?\d{9}$/, 'Phone number is not valid')
		.required('Phone number is required'),
	obs: Yup.string(),
});

export const reservationInfoValidationSchema = Yup.object({
	date: Yup.date().required('Date is required'),
	time: Yup.string(),
	// .required('Time is required'),
	persons: Yup.number()
		.required('Number of persons is required')
		.min(1, 'Must be at least 1 person'),
});
