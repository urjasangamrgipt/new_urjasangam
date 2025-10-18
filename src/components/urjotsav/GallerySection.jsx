"use client"
import { useEffect } from 'react';

export function GallerySection() {
  const galleryImages = [
    "/images/gallery/Arm.JPG",
    "/images/gallery/Bridge.png",
    "/images/gallery/Egg.png",
    "/images/gallery/escape.jpg",
    "/images/gallery/IOT.JPG",
    "/images/gallery/Urjotsav 2.png",
    "/images/gallery/Water Rocket.JPG",
    "/images/gallery/Hero2.JPG",
    "/images/gallery/Hero3.JPG",
  ];

  // This effect for the background gallery animation remains the same.
  useEffect(() => {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
      // Prevents adding duplicates on hot-reload in development
      if (row.children.length > 10) return;

      const images = Array.from(row.querySelectorAll('img'));
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        row.appendChild(clone);
      });
    });
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden font-inter bg-[#0a0a0a]">
      <div className="background-gallery absolute inset-0 flex flex-col gap-[1vh] z-[1]">
        {/* Row 1 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveLeft">
          <img src={galleryImages[0]} alt="Gallery photo 1" className="gallery-img" />
          <img src={galleryImages[1]} alt="Gallery photo 2" className="gallery-img" />
          <img src={galleryImages[2]} alt="Gallery photo 3" className="gallery-img" />
          <img src={galleryImages[3]} alt="Gallery photo 4" className="gallery-img" />
          <img src={galleryImages[4]} alt="Gallery photo 5" className="gallery-img" />
        </div>

        {/* Row 2 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveRight">
          <img src={galleryImages[5]} alt="Gallery photo 6" className="gallery-img" />
          <img src={galleryImages[6]} alt="Gallery photo 7" className="gallery-img" />
          <img src={galleryImages[7]} alt="Gallery photo 8" className="gallery-img" />
          <img src={galleryImages[8]} alt="Gallery photo 9" className="gallery-img" />
          <img src={galleryImages[0]} alt="Gallery photo 10" className="gallery-img" />
        </div>

        {/* Row 3 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveLeft">
          <img src={galleryImages[1]} alt="Gallery photo 11" className="gallery-img" />
          <img src={galleryImages[2]} alt="Gallery photo 12" className="gallery-img" />
          <img src={galleryImages[3]} alt="Gallery photo 13" className="gallery-img" />
          <img src={galleryImages[4]} alt="Gallery photo 14" className="gallery-img" />
          <img src={galleryImages[5]} alt="Gallery photo 15" className="gallery-img" />
        </div>
      </div>

      {/* Video Container now uses the simple iframe */}
      <div className="video-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-[750px] aspect-video z-10 rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        <iframe
          className="w-full h-full"
          src="https://player.cloudinary.com/embed/?cloud_name=dlbf30ya5&public_id=urjotsav_s2nwwi&player[fluid]=true&player[controls]=true&player[autoplay]=true&player[muted]=true&player[loop]=true"
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