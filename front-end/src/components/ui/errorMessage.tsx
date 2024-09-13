import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function ErrorMessage({ children }: Props) {
	return <div className="text-red-600 text-sm px-1 pt-0.5">{children}</div>;
}
