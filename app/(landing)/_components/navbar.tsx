"use client";

import { cn } from "@/lib/utils";
import useScrollTop from "@/features/hooks/useScrollTop";
import Logo from "./logo";
import { ThemeToggle } from "@/components/themeToggle";

export default function Navbar() {
	const scrolled = useScrollTop();

	return (
		<div
			className={cn(
				"z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
				scrolled && "border-b shadow-sm"
			)}>
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				<ThemeToggle></ThemeToggle>
			</div>
		</div>
	);
}
