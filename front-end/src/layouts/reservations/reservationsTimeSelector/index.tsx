import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function ReservationsTimeSelector() {
	const [availableTimes, setAvailableTimes] = useState<string[]>();

	return (
		<>
			<Label htmlFor="time" className="block mb-1">
				Time
			</Label>
			<Select id="time">
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
		</>
	);
}
