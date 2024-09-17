import React from 'react';
import { Avatar, Card, CardContent } from '@mui/material';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Props {
	name: string;
	review: string;
	rating: number; // Rating out of 5
	source: string; // Source of the review (e.g., Google, TrustPilot)
}

export default function ReviewItem({ name, review, rating, source }: Props) {
	return (
		<Card className="w-52 xs:w-60  sm:w-72 md:w-80 lg:w-96 h-60 max-w-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
			<CardContent className="p-4 sm:p-6 flex flex-col h-full gap-1.5">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 space-y-2 sm:space-y-0">
					<div className="flex items-center gap-3">
						<Avatar className="w-8 h-8 bg-primary" />
						<h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
							{name}
						</h3>
					</div>
					<div className="flex items-center space-x-1 flex-shrink-0">
						{Array.from({ length: 5 }).map((_, index) => (
							<FaStar
								key={index}
								className={`h-3 w-3 sm:h-4 sm:w-4 ${
									index < rating ? 'text-yellow-400' : 'text-gray-300'
								}`}
							/>
						))}
					</div>
				</div>

				<div className="flex-grow flex items-start">
					<div className="flex items-end gap-0.5">
						<FaQuoteLeft className="text-gray-300 text-lg sm:text-xl mt-1 mr-2 flex-shrink-0" />
						<p className="text-gray-600 italic text-xs sm:text-sm line-clamp-4 sm:line-clamp-3">
							{review}
						</p>
					</div>
				</div>

				<div className="mt-3 sm:mt-4 flex justify-between items-center pt-2 border-t border-gray-200">
					<span className="text-xs text-gray-400">
						{`From: `}
						<span className="font-medium italic">{source}</span>
					</span>
					<div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
				</div>
			</CardContent>
		</Card>
	);
}
