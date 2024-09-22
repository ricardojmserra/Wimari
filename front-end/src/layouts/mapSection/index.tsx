import dynamic from 'next/dynamic';
import VisitUs from './visitUs';

const DynamicGoogleMaps = dynamic(() => import('@/components/googleMaps'), {
	loading: () => <div className="w-full h-full bg-gray-200" />,
	ssr: false,
});

export default function LocationSection() {
	return (
		<section
			id="location"
			className="flex flex-col md:flex-row md:min-h-[95vh] md:h-[95vh]"
		>
			<div className="w-full md:w-1/2 lg:w-3/5 h-full min-h-[45vh] animate-fade-in">
				<DynamicGoogleMaps
					className="w-full max-md:min-h-[55vh] h-full animate-fade-in"
					location="O Marisco, Vilamoura"
				/>
			</div>
			<VisitUs />
		</section>
	);
}
