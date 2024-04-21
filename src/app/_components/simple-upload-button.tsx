'use client';

import { useRouter } from 'next/navigation';
import { useUploadThing } from '~/utils/uploadthing';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log('uploaded files', result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: 'image/*',
    },
    isUploading: $ut.isUploading,
  };
};

export function SimpleUploadButton() {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps('imageUploader', {
    onUploadBegin() {
      toast(
        <div className="flex gap-x-2">
          <div className="animate-spin">
            <Loader />
          </div>
          <div>Uploading...</div>
        </div>,
        {
          duration: 100000,
          id: 'upload-button',
        },
      );
    },
    onClientUploadComplete() {
      toast.dismiss('upload-button');
      toast.success('Upload Completed!');
      router.refresh();
    },
  });

  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer">
        Upload
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
}
