import ErrorMessage from './errorMessage';
import { Input, InputProps } from './input';
import { Label } from './label';

interface Props extends InputProps {
	label: string;
	name: string;
	error?: string;
	touched?: boolean;
}

export default function InputWithText({ name, label, id, error, touched, ...props }: Props) {
	return (
		<div>
			<Label htmlFor={id} className="block mb-1.5">
				{label}
			</Label>
			<Input name={name} id={id} {...props} />
			{!!error && touched ? <ErrorMessage>{error}</ErrorMessage> : null}
		</div>
	);
}
