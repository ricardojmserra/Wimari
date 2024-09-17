'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import ReviewItem from './reviewItem';
import styles from './reviewSection.module.css';

// based on: https://www.youtube.com/watch?v=Ot4nZ6UjJLE&list=LL&index=1&t=982s

const reviews = [
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

const DEFAULT_DURATION = 22;
const STOP_DURANTION = 10000;

export default function ReviewCarousel() {
	const reviewsContainerRef = useRef<HTMLDivElement>(null);

	const [enteredInViewport, setEnteredInViewport] = useState<boolean>(false);
	const [hover, setHover] = useState<boolean>(false);
	const [mustFinish, setMustFinish] = useState<boolean>(false);
	const [rerender, setRerender] = useState<boolean>(false);
	const xTranslation = useMotionValue(0);
	const x = useTransform(xTranslation, (latest) => latest);

	useEffect(() => {
		if (!reviewsContainerRef?.current) return;

		let controls;
		const width = reviewsContainerRef.current.scrollWidth;
		const gap = 64 / 3; // gap size / 3
		const finalPosition = -width / 3 - gap;
		const duration = hover ? STOP_DURANTION : DEFAULT_DURATION;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: 'linear',
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setRerender((prev) => !prev);
					setMustFinish(false);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
				duration: duration,
			});
		}

		return () => {
			controls.stop();
		};
	}, [xTranslation, hover, rerender]);

	return (
		<section className="bg-gradient-to-r from-primary to-purple-700">
			<motion.div
				viewport={{ once: true }}
				initial={{ opacity: 0 }}
				animate={enteredInViewport ? { opacity: 1 } : {}}
				transition={{ duration: 0.7, ease: 'linear' }}
				className="relative overflow-hidden w-full py-10 flex flex-col items-center"
			>
				<h2 className="text-xl font-bold xs:text-2xl md:text-3xl lg:text-4xl text-white px-6 text-center">
					What Our Customers Say
				</h2>
				<div className={`${styles.logos} h-80 flex items-center w-full`}>
					<motion.div
						ref={reviewsContainerRef}
						className={`flex absolute left-0 gap-[64px]`}
						style={{ x }}
						onViewportEnter={() => setEnteredInViewport(true)}
						onHoverStart={() => {
							setHover(true);
							setMustFinish(true);
						}}
						onHoverEnd={() => {
							setHover(false);
							setMustFinish(true);
						}}
					>
						{[...reviews, ...reviews, ...reviews].map((review, index) => (
							<ReviewItem
								key={index}
								name={review.name}
								review={review.review}
								rating={review.rating}
								source={review.source}
							/>
						))}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
