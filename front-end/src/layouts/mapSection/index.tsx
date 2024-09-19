import dynamic from 'next/dynamic';
import VisitUs from './visitUs';

const DynamicGoogleMaps = dynamic(() => import('@/components/googleMaps'), {
	loading: () => <div className="w-full h-full bg-gray-200" />,
	ssr: false,
});

export default function LocationSection() {
	return (
		<section className="flex flex-col md:flex-row min-h-screen h-screen">
			<div className="w-full md:w-1/2 lg:w-3/5 h-full min-h-[350px] animate-fade-in">
				<DynamicGoogleMaps
					className="w-full h-full animate-fade-in"
					location="O Marisco, Vilamoura"
				/>
			</div>
			<VisitUs />
		</section>
	);
}
