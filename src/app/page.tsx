import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
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
