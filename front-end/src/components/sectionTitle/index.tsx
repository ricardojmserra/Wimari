interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function SectionTitle({ className = '', children }: Props) {
	return (
		<h2
			className={`${className} text-4xl xs:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight leading-tight`}
		>
			{children}
		</h2>
	);
}
