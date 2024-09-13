/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1PCzHPkGN1h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				<nav className="flex items-center space-x-4 md:space-x-6">
					<Link
						href="/"
						className="text-lg font-medium text-primary font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href="/menu/"
						className="text-muted-foreground hover:text-foreground font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:w-full"
						prefetch={false}
					>
						Menu
					</Link>
					<Link
						href="/about/"
						className="text-muted-foreground hover:text-foreground font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:w-full"
						prefetch={false}
					>
						About
					</Link>
				</nav>
				<div className="font-sans text-2xl font-bold font-[Permanent Marker], cursive">
					<Link href="#" className="text-primary" prefetch={false}>
						Acme Bistro
					</Link>
				</div>
				<nav className="flex items-center space-x-4 md:space-x-6">
					<Link
						href="#reservations"
						className="text-muted-foreground hover:text-foreground font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:w-full"
						prefetch={false}
					>
						Reservations
					</Link>
					<Link
						href="#contact"
						className="text-muted-foreground hover:text-foreground font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:w-full"
						prefetch={false}
					>
						Contact
					</Link>
					<Button
						size="sm"
						className="hidden md:inline-flex font-[Permanent Marker], cursive relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
					>
						Order Online
					</Button>
				</nav>
			</div>
		</header>
	);
}
