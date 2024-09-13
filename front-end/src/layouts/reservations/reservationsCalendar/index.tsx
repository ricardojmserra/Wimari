import { Calendar } from '@/components/ui/calendar';
import ErrorMessage from '@/components/ui/errorMessage';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
// import { parse } from 'date-fns';

interface Props {
	name: string;
}

const oneMonthLater = new Date(new Date().setMonth(new Date().getMonth() + 1));

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
		<div>
			<Calendar
				selected={field.value}
				toDate={oneMonthLater}
				onDayClick={handleSelect}
				disabled={[...(unavailableDates || []), ...(holidayDates || [])]}
			/>

			{meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
		</div>
	);
}
