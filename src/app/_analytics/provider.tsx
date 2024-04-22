// app/providers.js
'use client';
import { useAuth, useUser } from '@clerk/nextjs';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React, { useEffect } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

export function PostHogAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (auth.userId) {
      posthog.identify(user?.id, {
        email: user?.emailAddresses[0],
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, user]);

  return children;
}