import React from "react";

const StoryContainer = ({
  images,
  currentImageIndex,
  handlePrev,
  handleNext,
  setcurrentImageIndex,
  deleteImage,
}) => {
  return (
    <>
      <div className="relative border-white/20 border-2 aspect-9/16 w-[350px] mx-auto rounded-xl overflow-hidden mt-6 group bg-black">
        {currentImageIndex !== null ? (
          <div className="relative w-full h-full">
            <button
              onClick={() => setcurrentImageIndex(null)}
              className="absolute top-6 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md transition-all active:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5"
                ></path>
              </svg>
            </button>

            <button
              disabled={currentImageIndex === 0}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full transition-all duration-300
                ${
                  currentImageIndex === 0
                    ? "text-zinc-600 bg-white/5 cursor-not-allowed opacity-50"
                    : "text-white bg-black/40 hover:bg-black/70 cursor-pointer opacity-100"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m15 4l-8 8l8 8"
                ></path>
              </svg>
            </button>

            <button
              disabled={currentImageIndex === images.length - 1}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full transition-all duration-300
                ${
                  currentImageIndex === images.length - 1
                    ? "text-zinc-600 bg-white/5 cursor-not-allowed opacity-50"
                    : "text-white bg-black/40 hover:bg-black/70 cursor-pointer opacity-100"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m8 4l8 8l-8 8"
                ></path>
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteImage(images[currentImageIndex].id);
              }}
              className="absolute top-6 left-4 z-50 p-2 text-red-400 hover:text-red-500 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md transition-all active:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                ></path>
              </svg>
            </button>

            <div className="absolute top-0 left-0 w-full z-40 p-2 bg-linear-to-b from-black/60 to-transparent">
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div
                  key={currentImageIndex}
                  className="bg-blue-400 h-full animate-[fillProgress_5s_linear_forwards]"
                />
              </div>
            </div>

            <img
              key={`img-${currentImageIndex}`}
              className="w-full h-full object-cover"
              src={images[currentImageIndex].url}
              alt="Full view"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M8 5.14v14l11-7z"></path>
            </svg>
            <p>Click an image to start</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StoryContainer;
