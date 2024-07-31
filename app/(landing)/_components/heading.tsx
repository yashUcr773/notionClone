"use client";

import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Heading() {
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Write, plan, organize, play.</h1>
			<h2 className="text-2xl sm:text-xl md:text-2xl font-medium">
				Turn ideas into action with <span className="underline">Notion</span>
			</h2>
			<h3 className="text-base sm:text-xl md:text-2xl font-medium">
				Join a global movement. Unleash your creativity.
			</h3>
			{isLoading && (
				<div className="w-full flex items-center justify-center">
					<Spinner size="lg" />
				</div>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href="/documents">
						Enter Notion
						<ArrowRight className="h-4 w-4 ml-2" />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<SignInButton mode="modal">
					<Button>
						Get Notion free
						<ArrowRight className="h-4 w-4 ml-2" />
					</Button>
				</SignInButton>
			)}
		</div>
	);
}
