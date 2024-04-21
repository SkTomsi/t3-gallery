import { getImage } from '~/server/queries';

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error('Invalid photo id');
  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
