import ErrorMessage from '@/components/ui/errorMessage';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import getUnavailableDates from '@/requests/reservations/getUnavailableDates';
import { CircularProgress } from '@mui/material';
import { useField } from 'formik';
import { useEffect, useState } from 'react';

const setCorrectDate = (date: Date, year: number, month: number, day: number) => {
	date.setFullYear(year);
	date.setMonth(month);
	date.setDate(day);
};

function generateTimes(date: Date, startTime: string, endTime: string): string[] {
	const times: string[] = [];
	const interval = 15; // TODO: Obter isto do backend?

	const currentDate = new Date();
	const sameDate =
		date.getDate() === currentDate.getDate() &&
		date.getMonth() === currentDate.getMonth() &&
		date.getFullYear() === currentDate.getFullYear();

	const startDate = sameDate
		? new Date(
				new Date().setMinutes(
					Math.ceil(currentDate.getMinutes() / interval) * interval
				)
		  )
		: new Date(new Date(date).setTime(new Date(`1970-01-01T${startTime}:00`).getTime()));

	const endDate = new Date(`1970-01-01T${endTime}:00`);
	endDate.setMinutes(endDate.getMinutes() + 1); //to detect the last time available

	setCorrectDate(startDate, date.getFullYear(), date.getMonth(), date.getDate());
	setCorrectDate(endDate, date.getFullYear(), date.getMonth(), date.getDate());

	let current = new Date(startDate);

	while (current <= endDate) {
		const timeString = current.toTimeString().slice(0, 5); // Format "HH:MM"
		times.push(timeString);
		current.setMinutes(current.getMinutes() + interval);
	}

	return times;
}

interface Props {
	name: string;
}

export default function ReservationsTimeSelector({ name }: Props) {
	const [field, meta, helpers] = useField(name);
	const [dateField] = useField('date');
	const [availableTimes, setAvailableTimes] = useState<string[]>();

	const handleChange = (value: string) => {
		helpers.setValue(value);
	};

	useEffect(() => {
		const date = dateField.value;
		getUnavailableDates(date)
			.then((resp) => {
				setAvailableTimes(
					generateTimes(date, resp.data.startTime, resp.data.endDate).filter(
						(time) => !resp.data.times.includes(time)
					)
				);
			})
			.catch((ex) => {
				console.log('error', ex);
			});
	}, [dateField.value]);

	return (
		<div>
			<Label htmlFor="time" className="block mb-1.5">
				Time *
			</Label>
			<Select value={field.value} onValueChange={handleChange}>
				<SelectTrigger className="w-full h-10">
					<SelectValue placeholder="Select time" />
				</SelectTrigger>
				<SelectContent>
					{availableTimes?.map((time: string) => (
						<SelectItem key={time} value={time}>
							{time}
						</SelectItem>
					))}

					{!availableTimes && (
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
