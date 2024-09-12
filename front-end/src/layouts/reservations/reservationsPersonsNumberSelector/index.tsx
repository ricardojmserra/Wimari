import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

const MIN_PEOPLE: number = 4;

export default function ReservationsPersonsNumberSelector() {
	const [maxPersons, setMaxPersons] = useState<number>();

	useEffect(() => {
		// getMaxNumberOfPersons().then((resp: any) => {
		// 	setMaxPersons(resp.data);
		// });
	}, []);

	return (
		<>
			<Label htmlFor="party" className="block mb-1">
				Persons
			</Label>
			<Select id="party">
				<SelectTrigger className="w-full h-10">
					<SelectValue placeholder="Persons" />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: MIN_PEOPLE }, (_, index) => (
						<SelectItem key={index} value={`${index}`}>
							{index + 1} people
						</SelectItem>
					))}

					{maxPersons &&
						maxPersons > MIN_PEOPLE &&
						Array.from({ length: maxPersons - MIN_PEOPLE }, (_, index) => (
							<SelectItem
								key={index + MIN_PEOPLE}
								value={`${index + MIN_PEOPLE}`}
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
		</>
	);
}
