import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function FooterTitle({ children }: Props) {
	return (
		<h3 className="text-xl font-semibold mb-4 flex items-center">
			<span className="bg-primary w-8 h-1 mr-3"></span>
			{children}
			<span className="bg-primary w-8 h-1 ml-3 md:hidden"></span>
		</h3>
	);
}
