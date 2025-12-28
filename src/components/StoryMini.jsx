import React from "react";

const StoryMini = ({ images, handleImages, handleStory }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-4 overflow-x-auto pb-4 px-4">
        <label htmlFor="file-upload" className="cursor-pointer shrink-0">
          <span className="flex items-center justify-center h-14 w-14 rounded-full border-2 border-dashed border-white/50 hover:border-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75"
              />
            </svg>
          </span>
        </label>

        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImages}
          className="hidden"
        />

        <div id="imgArr" className="flex flex-row gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleStory(image.id)}
              className="shrink-0 cursor-pointer h-14 w-14 rounded-full border-2 border-blue-500 overflow-hidden active:scale-95 transition-transform"
            >
              <img
                src={image.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryMini;
