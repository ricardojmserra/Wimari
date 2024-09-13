import ErrorMessage from '@/components/ui/errorMessage';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import getPersonsBoundaries from '@/requests/management/getPersonsBoundaries';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

interface Props {
	name: string;
}

export default function ReservationsPersonsNumberSelector({ name }: Props) {
	const [field, meta, helpers] = useField(name);
	const [minPersons, setMinPersons] = useState<number>();
	const [maxPersons, setMaxPersons] = useState<number>();

	const handleChange = (value: string) => {
		helpers.setValue(value.replaceAll(' people', ''));
	};

	useEffect(() => {
		getPersonsBoundaries()
			.then((resp: any) => {
				setMinPersons(resp.data.min);
				setMaxPersons(resp.data.max);
			})
			.catch((ex) => {
				console.log('eerror', ex);
			});
	}, []);

	return (
		<div>
			<Label htmlFor="party" className="block mb-1.5">
				Persons *
			</Label>
			<Select value={field.value} onValueChange={handleChange}>
				<SelectTrigger id="party" className="w-full h-10">
					<SelectValue placeholder="Select the number of persons" />
				</SelectTrigger>
				<SelectContent>
					{minPersons &&
						maxPersons &&
						Array.from({ length: maxPersons - minPersons }, (_, index) => (
							<SelectItem
								key={index + minPersons}
								value={`${index + minPersons + 1}`}
							>
								{index + minPersons + 1} people
							</SelectItem>
						))}

					{!minPersons && (
						<SelectItem disabled value={`loading`}>
							<CircularProgress size={15} className="mr-2" />
							Loading...
						</SelectItem>
					)}
				</SelectContent>
			</Select>

			{meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
		</div>
	);
}
