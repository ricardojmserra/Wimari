import * as Yup from 'yup';

export const personalInfoValidationSchema = Yup.object({
	name: Yup.string().required('You must insert your first name'),
	lastName: Yup.string().required('You must insert your last name'),
	phone: Yup.string()
		.matches(/^(\+\d{1,3})?\d{9}$/, 'Phone number is not valid')
		.required('You must insert your phone number'),
	obs: Yup.string(),
});

export const reservationInfoValidationSchema = Yup.object({
	date: Yup.date().required('You must select a date'),
	time: Yup.string(),
	// .required('You must select a reservation time'),
	persons: Yup.number()
		.typeError('You must select a number of persons')
		.required('You must select a number of persons')
		.min(1, 'You must select at least 1 person'),
});
