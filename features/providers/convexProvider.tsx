"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
	return (
		<ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				{children}
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}
