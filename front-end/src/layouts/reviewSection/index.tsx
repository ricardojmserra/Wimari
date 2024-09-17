'use client';

import getReviews from '@/requests/reviews/getReviews';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './reviewSection.module.css';
import ReviewsCarrousel from './reviewsCarrousel';

// based on: https://www.youtube.com/watch?v=Ot4nZ6UjJLE&list=LL&index=1&t=982s

const reviewsList = [
	{ name: 'John Doe', review: 'Beautiful Restaurant!', source: 'The Fork', rating: 3 },
	{ name: 'Jane Smith', review: 'Amazing experience!', source: 'The Fork', rating: 3 },
	{ name: 'Michael Brown', review: 'Would visit again!', source: 'The Fork', rating: 3 },
	{
		name: 'Lucy Green',
		review: 'Wonderful service and food!',
		source: 'The Fork',
		rating: 3,
	},
];

export default function ReviewSection() {
	const [reviews, setReviews] = useState<any>(reviewsList);
	const [enteredInViewport, setEnteredInViewport] = useState<boolean>(false);

	useEffect(() => {
		getReviews({ retry: 100 })
			.then((resp: any) => {
				setReviews(resp.data);
			})
			.catch((error: any) => {
				console.log('error', error);
			});
	}, []);

	return (
		<section className="bg-gradient-to-r h-[425px] from-primary to-purple-700">
			<motion.div
				viewport={{ once: true, margin: '-200px' }}
				initial={{ opacity: 0 }}
				animate={enteredInViewport ? { opacity: 1 } : {}}
				transition={{ duration: 1, delay: 0.1, ease: 'linear' }}
				onViewportEnter={() => setEnteredInViewport(true)}
				className="relative overflow-hidden w-full h-full py-10 flex flex-col items-center justify-center"
			>
				<h2 className="text-xl font-bold xs:text-2xl md:text-3xl lg:text-4xl text-white px-6 text-center">
					What Our Customers Say
				</h2>
				<div className={`${styles.logos} h-80 flex items-center w-full`}>
					<ReviewsCarrousel reviews={reviews} />
				</div>
			</motion.div>
		</section>
	);
}
