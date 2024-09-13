import { Calendar } from '@/components/ui/calendar';
import ErrorMessage from '@/components/ui/errorMessage';
import getUnavailableDates from '@/requests/reservations/getUnavailableDates';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
import { parse } from 'date-fns';
import getHolidaysDate from '@/requests/management/getHolidaysDate';

interface Props {
	name: string;
}

const oneMonthLater = new Date(new Date().setMonth(new Date().getMonth() + 1));

export default function ReservationsCalendar({ name }: Props) {
	const [field, meta, helpers] = useField(name);

	const [unavailableDates, setUnavailableDates] = useState<Date[]>();
	const [holidayDates, setHolidayDates] = useState<Date[]>();
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

	const handleSelect: DayClickEventHandler = (day: Date) => {
		if (day) {
			helpers.setValue(day);
		}
	};

	const handleMonthChange = (month: Date) => {
		setCurrentMonth(month.getMonth());
	};

	useEffect(() => {
		getUnavailableDates(currentMonth)
			.then((resp: any) => {
				setUnavailableDates(
					resp.data.map((date: string) => parse(date, 'dd/MM/yyyy', new Date()))
				);
			})
			.catch((error) => {
				console.log('error', error);
			});

		getHolidaysDate(currentMonth)
			.then((resp: any) => {
				setHolidayDates(
					resp.data.map((date: string) => parse(date, 'dd/MM/yyyy', new Date()))
				);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	return (
		<div>
			<Calendar
				selected={field.value}
				toDate={oneMonthLater}
				onDayClick={handleSelect}
				onMonthChange={handleMonthChange}
				disabled={[...(unavailableDates || []), ...(holidayDates || [])]}
			/>

			{meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
		</div>
	);
}
