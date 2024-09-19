import InputWithText from '@/components/ui/inputWithText';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormikProps } from 'formik';

interface Props {
	formikProps: FormikProps<any>;
}

export default function ReservationsPersonalInfoForm({ formikProps }: Props) {
	const { values, handleChange, errors, touched } = formikProps;

	return (
		<>
			<InputWithText
				label="First Name *"
				value={values.name}
				onChange={handleChange}
				name="name"
				id="name"
				placeholder="Enter your first name"
				touched={!!touched.name}
				error={errors.name?.toString()}
			/>

			<InputWithText
				label="Last Name *"
				value={values.lastName}
				onChange={handleChange}
				name="lastName"
				id="lastName"
				placeholder="Enter your last name"
				touched={!!touched.lastName}
				error={errors.lastName?.toString()}
			/>

			<InputWithText
				label="Phone Number *"
				id="phone"
				type="tel"
				name="phone"
				maxLength={12}
				value={values.phone}
				touched={!!touched.phone}
				onChange={handleChange}
				placeholder="Enter your phone number"
				error={errors.phone?.toString()}
			/>

			<div>
				<Label htmlFor="obs" className="block mb-1.5">
					Observations
				</Label>
				<Textarea
					rows={2}
					id="obs"
					name="obs"
					value={values.obs}
					onChange={handleChange}
					className="resize-none"
					placeholder="Enter any observations"
				/>
			</div>
		</>
	);
}
