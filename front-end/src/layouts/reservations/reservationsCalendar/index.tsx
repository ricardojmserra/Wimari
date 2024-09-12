import { Calendar } from '@/components/ui/calendar';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
// import { parse } from 'date-fns';

interface Props {
	name: string;
}

export default function ReservationsCalendar({ name }: Props) {
	const [field, meta, helpers] = useField(name);

	const [unavailableDates, setUnavailableDates] = useState<Date[]>();
	const [holidayDates, setHolidayDates] = useState<Date[]>();

	const handleSelect: DayClickEventHandler = (day: Date) => {
		if (day) {
			helpers.setValue(day);
		}
	};

	useEffect(() => {
		// getUnavailableDates(month).then((resp: any) => {
		// setUnavailableDates(
		// 	resp.data.map((date: string) => parse(date, 'dd/MM/yyyy', new Date()))
		// );
		// });
	}, []);

	return (
		<>
			<Calendar
				selected={field.value}
				onDayClick={handleSelect}
				disabled={[...(unavailableDates || []), ...(holidayDates || [])]}
			/>

			{meta.touched && meta.error ? (
				<div className="text-red-600">{meta.error}</div>
			) : null}
		</>
	);
}
