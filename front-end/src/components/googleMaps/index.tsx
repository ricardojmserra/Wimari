interface Props {
	location: string;
	className?: string;
}

const GoogleMaps: React.FC<Props> = ({ location, className = '' }) => {
	return (
		<iframe
			className={className}
			width="450"
			height="250"
			frameBorder="0"
			referrerPolicy="no-referrer-when-downgrade"
			src={`https://www.google.com/maps/embed/v1/place?key=${
				process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
			}&q=${location.replaceAll(' ', '+')}`}
			allowFullScreen
			loading="lazy"
			title="Google maps with restaurant location"
		></iframe>
	);
};

export default GoogleMaps;
