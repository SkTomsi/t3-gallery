import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { getMyImages } from '~/server/queries';

export const dynamic = 'force-dynamic';

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 h-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: 'contain' }}
              width={480}
              height={480}
              alt={image.name}
            />
            <div>{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex h-full min-h-[50vh] w-full items-center justify-center text-2xl font-bold">
          Please
          <span className="ml-2 border-b-2 border-b-black">
            <SignInButton></SignInButton>
          </span>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
