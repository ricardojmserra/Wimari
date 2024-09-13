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
import { useState } from 'react';

interface Props {
	name: string;
}

export default function ReservationsTimeSelector({ name }: Props) {
	const [field, meta, helpers] = useField(name);
	const [availableTimes, setAvailableTimes] = useState<string[]>();

	const handleChange = (value: string) => {
		helpers.setValue(value.replaceAll(' people', ''));
	};

	return (
		<div>
			<Label htmlFor="time" className="block mb-1.5">
				Time *
			</Label>
			<Select value={field.value} onValueChange={handleChange} id="time">
				<SelectTrigger className="w-full h-10">
					<SelectValue placeholder="Select time" />
				</SelectTrigger>
				<SelectContent>
					{availableTimes?.map((item: string) => (
						<SelectItem key={item} value={item}>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			{meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
		</div>
	);
}
