"use client"
// No need for useEffect from React in this simplified version

export function GallerySection() {
  const galleryImages = [
    "/photos/Kaltarang/Gallery 10.jpg",
    "/photos/Kaltarang/Gallary 2.png",
    "/photos/Kaltarang/Gallary 3.png",
    "/photos/Kaltarang/Gallary 4.jpg",
    "/photos/Kaltarang/Slider 3.png",
    "/photos/Kaltarang/Gallary 6.png",
    "/photos/Kaltarang/Gallary 7.jpg",
    "/photos/Kaltarang/Gallary 8.JPG",
    "/photos/Kaltarang/Slider 1.png",
  ];

  // Helper function to render a set of images
  const renderImageSet = (images, startIndex) => (
    images.map((src, index) => (
      <img key={`${startIndex}-${index}`} src={src} alt={`Gallery photo ${startIndex + index + 1}`} className="gallery-img" />
    ))
  );

  return (
    <div className="relative w-screen min-h-screen overflow-hidden font-inter bg-[#0a0a0a]">
      <div className="background-gallery absolute inset-0 flex flex-col gap-[1vh] z-[1]">
        {/* Row 1 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveLeft">
          {renderImageSet(galleryImages.slice(0, 5), 0)}
          {/* Render the same set again for the infinite loop */}
          {renderImageSet(galleryImages.slice(0, 5), 5)}
        </div>

        {/* Row 2 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveRight">
          {renderImageSet(galleryImages.slice(5, 9), 0)}
          {renderImageSet([galleryImages[0]], 4)} {/* Add the first image to complete the set */}
          {/* Render the same set again for the infinite loop */}
          {renderImageSet(galleryImages.slice(5, 9), 5)}
          {renderImageSet([galleryImages[0]], 9)}
        </div>

        {/* Row 3 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveLeft">
          {renderImageSet(galleryImages.slice(1, 6), 0)}
          {/* Render the same set again for the infinite loop */}
          {renderImageSet(galleryImages.slice(1, 6), 5)}
        </div>
      </div>

      {/* Video Container now uses the simple iframe */}
      <div className="video-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-[750px] aspect-video z-10 rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        <iframe
          className="w-full h-full"
          src="https://player.cloudinary.com/embed/?cloud_name=dlbf30ya5&public_id=Kaltrang_gallary_se7oqm&player[fluid]=true&player[controls]=true&player[autoplay]=true&player[muted]=true&player[loop]=true"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>

      <style>{`
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-moveLeft { animation: moveLeft 40s linear infinite; }
        .animate-moveRight { animation: moveRight 40s linear infinite; }
        .gallery-img { width: auto; height: 100%; object-fit: cover; flex-shrink: 0; margin: 0 0.5vh; border-radius: 8px;}
        .aspect-video { aspect-ratio: 16 / 9; }
      `}</style>
    </div>
  );
}