import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  imageName: string;
  imageFiles: FileList;
}

const schema = yup
  .object({
    imageName: yup.string().required("Image name is required"),
    imageFiles: yup.mixed().required("At least one image file is required"),
  })
  .required();

const ImageUploadForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();
    formData.append("imageName", data.imageName);
    Array.from(data.imageFiles).forEach((file, index) => {
      formData.append(`imageFiles[${index}]`, file);
    });

    try {
      const response = await fetch(
        "https://xytm-ohfx-fint.n7.xano.io/api:iIM_S50E/zzMultipleImages",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Upload successful");
        reset();
      } else {
        console.error("Upload failed", await response.text());
      }
    } catch (error) {
      console.error("Upload error", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Image Upload Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Image Name
          </label>
          <input
            type="text"
            {...register("imageName")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.imageName && (
            <p className="text-red-600 text-sm">{errors.imageName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Image Files
          </label>
          <input
            type="file"
            {...register("imageFiles")}
            multiple
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.imageFiles && (
            <p className="text-red-600 text-sm">{errors.imageFiles.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUploadForm;
