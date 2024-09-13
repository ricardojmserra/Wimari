import ReservationsCalendar from '../reservationsCalendar';
import ReservationsPersonsNumberSelector from '../reservationsPersonsNumberSelector';
import ReservationsTimeSelector from '../reservationsTimeSelector';

export default function ReservationInfoForm() {
	return (
		<>
			<ReservationsCalendar name="date" />
			<ReservationsTimeSelector name="time" />
			<ReservationsPersonsNumberSelector name="persons" />
		</>
	);
}
