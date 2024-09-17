import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import ReviewItem from '../reviewItem';
import { useEffect, useRef, useState } from 'react';
import Review from '@/types/review';

interface Props {
	reviews: Review[];
}

const DEFAULT_DURATION = 22;
const STOP_DURANTION = 10000;

export default function ReviewsCarrousel({ reviews }: Props) {
	const reviewsContainerRef = useRef<HTMLDivElement>(null);

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
		<motion.div
			ref={reviewsContainerRef}
			className={`flex absolute left-0 gap-[64px]`}
			style={{ x }}
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
				<ReviewItem key={index} review={review} />
			))}
		</motion.div>
	);
}
