import ErrorMessage from '@/components/ui/errorMessage';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';

const MIN_PEOPLE: number = 4;
interface Props {
	name: string;
}

export default function ReservationsPersonsNumberSelector({ name }: Props) {
	const [field, meta, helpers] = useField(name);
	const [maxPersons, setMaxPersons] = useState<number>();

	const handleChange = (value: string) => {
		helpers.setValue(value.replaceAll(' people', ''));
	};

	useEffect(() => {
		// getMaxNumberOfPersons().then((resp: any) => {
		// 	setMaxPersons(resp.data);
		// });
	}, []);

	return (
		<div>
			<Label htmlFor="party" className="block mb-1.5">
				Persons *
			</Label>
			<Select value={field.value} onValueChange={handleChange} id="party">
				<SelectTrigger className="w-full h-10">
					<SelectValue placeholder="Persons" />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: MIN_PEOPLE }, (_, index) => (
						<SelectItem key={index} value={`${index + 1}`}>
							{index + 1} people
						</SelectItem>
					))}

					{maxPersons &&
						maxPersons > MIN_PEOPLE &&
						Array.from({ length: maxPersons - MIN_PEOPLE }, (_, index) => (
							<SelectItem
								key={index + MIN_PEOPLE}
								value={`${index + MIN_PEOPLE + 1}`}
							>
								{index + MIN_PEOPLE + 1} people
							</SelectItem>
						))}

					{!maxPersons && (
						<SelectItem disabled value={`loading`}>
							Loading more...
						</SelectItem>
					)}
				</SelectContent>
			</Select>

			{meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
		</div>
	);
}
