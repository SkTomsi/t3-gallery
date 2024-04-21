import { getImage } from '~/server/queries';

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-screen  min-w-0 bg-green-600">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="object-cover flex-shrink max-h-full" />
      </div>

      <div className="flex w-56 flex-shrink border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
