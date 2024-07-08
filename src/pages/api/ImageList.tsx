import React, { useEffect, useState } from "react";

interface ImageData {
  imageName: string;
  imageArray: {
    access: string;
    path: string;
    name: string;
    type: string;
    size: number;
    mime: string;
    meta: {
      width: number;
      height: number;
    };
    url: string;
  }[];
}

const ImageList: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://xytm-ohfx-fint.n7.xano.io/api:iIM_S50E/zzmultipleimages"
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Data:", data); // Log the fetched data
          setImages(data);
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (images.length === 0) {
    return <p>No images found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Uploaded Images</h2>
      {images.map((imageData, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{imageData.imageName}</h3>
          <div className="flex flex-wrap">
            {imageData.imageArray?.length > 0 ? (
              imageData.imageArray.map((file, idx) => (
                <img
                  key={idx}
                  src={file.url}
                  alt={file.name}
                  className="w-32 h-32 object-cover m-2 rounded-md"
                  onError={() =>
                    console.error("Image failed to load:", file.url)
                  } // Log if image fails to load
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
