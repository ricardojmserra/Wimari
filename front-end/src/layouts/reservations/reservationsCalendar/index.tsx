import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
// import { parse } from 'date-fns';

export default function ReservationsCalendar() {
	const [unavailableDates, setUnavailableDates] = useState<Date[]>();
	const [holidayDates, setHolidayDates] = useState<Date[]>();

	useEffect(() => {
		// getUnavailableDates(month).then((resp: any) => {
		// setUnavailableDates(
		// 	resp.data.map((date: string) => parse(date, 'dd/MM/yyyy', new Date()))
		// );
		// });
	}, []);

	return <Calendar disabled={[...(unavailableDates || []), ...(holidayDates || [])]} />;
}
