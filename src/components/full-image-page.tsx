import { getImage } from '~/server/queries';

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-screen">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="object-cover flex-shrink w-full" />
      </div>

      <div className="flex w-56 flex-shrink-0 border-l">
        <div className="text-xl font-bold w-full">{image.name}</div>
      </div>
    </div>
  );
}
