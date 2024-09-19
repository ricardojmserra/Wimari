import ReservationsLayout from '@/layouts/reservations';
import ReviewSection from '@/layouts/reviewSection';
import dynamic from 'next/dynamic';

const DynamicMapSection = dynamic(() => import('@/layouts/mapSection'), {
	loading: () => <div className="w-full h-full bg-gray-200" />,
	ssr: false,
});

export default function Home() {
	return (
		<div>
			<ReservationsLayout />
			<ReviewSection />
			<DynamicMapSection />
		</div>
	);
}
