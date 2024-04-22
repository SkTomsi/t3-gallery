import { clerkClient } from '@clerk/nextjs/server';
import { getImage } from '~/server/queries';

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-screen w-full min-w-0">
      <div className="flex flex-shrink justify-center items-center">
        <img src={image.url} className="flex-shrink object-cover " />
      </div>

      <div className="flex w-56 flex-shrink-0 flex-col border-l">
        <div className="text-lg border-b p-2 w-full text-center">
          {image.name}
        </div>

        <div className="flex flex-col p-2 w-full">
          <span>Uploaded by: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2 w-full">
          <span>Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
