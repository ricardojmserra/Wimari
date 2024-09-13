import { format } from 'date-fns';

interface Props {
	reservation: Reservation;
}

export default function ReservationConfirmation({ reservation }: Props) {
	return (
		<div className="grid gap-5 md:gap-6 lg:gap-8">
			<div className="rounded-lg flex flex-col justify-center items-center text-center">
				<CircleCheckIcon className="text-green-500 w-16 h-16 mb-4" />
				<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
					Reservation Successful!
				</h2>
				<p className="mt-2 text-muted-foreground md:text-md lg:text-lg">
					Thank you for your reservation. We look forward to hosting you at{' '}
					<strong>O Marisco</strong> Restaurant!
				</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="grid gap-3 w-full">
					<div className="flex items-center justify-between">
						<div className="font-medium">Date</div>
						<div>{format(reservation.date, 'dd/MM/yyyy')}</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="font-medium">Time</div>
						<div>{reservation.time}</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="font-medium">Party Size</div>
						<div>{reservation.persons} people</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="font-medium">Name</div>
						<div>{`${reservation.name} ${reservation.lastName}`}</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="font-medium">Phone</div>
						<div>{reservation.phone}</div>
					</div>
				</div>
			</div>
			<div>
				<p className="text-sm underline text-muted-foreground">
					Please note that you have a 10-minute tolerance for your reservation. If
					you are running late, please call the restaurant to let us know.
				</p>
			</div>
		</div>
	);
}

function CircleCheckIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	);
}
