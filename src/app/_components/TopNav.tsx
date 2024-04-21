'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 font-semibold">
      <Link href="/">
        <div>Gallery</div>
      </Link>
      <div className="flex items-center justify-center gap-x-5">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
