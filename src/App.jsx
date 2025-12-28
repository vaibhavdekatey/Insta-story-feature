import { useEffect, useState } from "react";
import "./App.css";
import StoryMini from "./components/StoryMini";
import StoryContainer from "./components/StoryContainer";
import Footer from "./components/Footer";
import { imageData } from "./imageData";

function App() {
  const [images, setImages] = useState(imageData);
  const [currentImageIndex, setcurrentImageIndex] = useState(null);

  const handleImages = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImage = {
        id: Date.now(),
        url: URL.createObjectURL(file),
        name: file.name,
      };
      setImages((prev) => [newImage, ...prev]);
      e.target.value = "";
    }
  };

  const handleStory = (id) => {
    const imageIdx = images.findIndex((img) => img.id === id);
    setcurrentImageIndex(imageIdx);
  };

  const handlePrev = () => {
    setcurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setcurrentImageIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  useEffect(() => {
    if (currentImageIndex !== null && images.length > 0) {
      const timer = setTimeout(() => {
        if (currentImageIndex < images.length - 1) {
          setcurrentImageIndex(currentImageIndex + 1);
        } else {
          setcurrentImageIndex(null);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, images]);

  return (
    <div className="bg-neutral-900 flex flex-col h-screen w-screen text-white px-4 py-8">
      <StoryMini
        images={images}
        handleImages={handleImages}
        handleStory={handleStory}
      />

      <StoryContainer
        images={images}
        currentImageIndex={currentImageIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        setcurrentImageIndex={setcurrentImageIndex}
      />

      <Footer />
    </div>
  );
}

export default App;
