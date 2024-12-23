import FullPageImageView from '~/components/full-image-page';

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error('Invalid photo id');

  return (
    <div>
      <FullPageImageView id={idAsNumber} />
    </div>
  );
}
