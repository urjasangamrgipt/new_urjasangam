"use client"
import { useEffect } from 'react';

export function GallerySection() {
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
          <img src="/photos/Souhardya/photo1.webp" alt="Fest photo 1" className="gallery-img" />
          <img src="/photos/Souhardya/photo2.jpg" alt="Fest photo 2" className="gallery-img" />
          <img src="/photos/Souhardya/photo3.jpg" alt="Fest photo 3" className="gallery-img" />
          <img src="/photos/Souhardya/photo4.webp" alt="Fest photo 4" className="gallery-img" />
          <img src="/photos/Souhardya/photo5.jpg" alt="Fest photo 5" className="gallery-img" />
        </div>

        {/* Row 2 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveRight">
          <img src="/photos/Souhardya/photo6.webp" alt="Fest photo 6" className="gallery-img" />
          <img src="/photos/Souhardya/photo7.webp" alt="Fest photo 7" className="gallery-img" />
          <img src="/photos/Souhardya/photo8.webp" alt="Fest photo 8" className="gallery-img" />
          <img src="/photos/Souhardya/photo9.webp" alt="Fest photo 9" className="gallery-img" />
          <img src="/photos/Souhardya/photo10.jpg" alt="Fest photo 10" className="gallery-img" />
        </div>

        {/* Row 3 */}
        <div className="row flex flex-nowrap h-[33vh] sm:h-[30vh] md:h-[33vh] animate-moveLeft">
          <img src="/photos/Souhardya/photo11.jpg" alt="Fest photo 11" className="gallery-img" />
          <img src="/photos/Souhardya/photo12.jpg" alt="Fest photo 12" className="gallery-img" />
          <img src="/photos/Souhardya/photo13.webp" alt="Fest photo 13" className="gallery-img" />
          <img src="/photos/Souhardya/photo1.webp" alt="Fest photo 14" className="gallery-img" />
          <img src="/photos/Souhardya/photo2.jpg" alt="Fest photo 15" className="gallery-img" />
        </div>
      </div>

      {/* Video Container now uses the simple iframe */}
      <div className="video-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-[750px] aspect-video z-10 rounded-xl overflow-hidden border border-white/20 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
        <iframe
          className="w-full h-full"
          src="https://player.cloudinary.com/embed/?cloud_name=dlbf30ya5&public_id=HARDY_x8dpuo&player[fluid]=true&player[controls]=true&player[autoplay]=true&player[muted]=true&player[loop]=true"
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
        .animate-moveLeft { animation: moveLeft 20s linear infinite; }
        .animate-moveRight { animation: moveRight 20s linear infinite; }
        .gallery-img { width: auto; height: 100%; object-fit: cover; flex-shrink: 0; }
      `}</style>
    </div>
  );
}