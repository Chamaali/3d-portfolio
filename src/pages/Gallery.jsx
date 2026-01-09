import React, { useState } from 'react';

// Import gallery images
import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/3.jpg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/gallery/5.jpg';
import img6 from '../assets/gallery/6.jpg';
import img7 from '../assets/gallery/7.jpg';
import img8 from '../assets/gallery/8.jpg';
import img9 from '../assets/gallery/9.jpg';
import img10 from '../assets/gallery/10.jpg';
import img11 from '../assets/gallery/11.jpg';
import img12 from '../assets/gallery/12.jpg';

// Gallery data with local images
const galleryImages = [
  {
    id: 1,
    src: img1,
    title: "Image 1",
    category: ["hackathon", "coding"],
    description: "Gallery image 1"
  },
  {
    id: 2,
    src: img2,
    title: "Image 2",
    category: ["research"],
    description: "Gallery image 2"
  },
  {
    id: 3,
    src: img3,
    title: "Image 3",
    category: ["aiesec"],
    description: "Gallery image 3"
  },
  {
    id: 4,
    src: img4,
    title: "Image 4",
    category: ["aiesec"],
    description: "Gallery image 4"
  },
  {
    id: 5,
    src: img5,
    title: "Image 5",
    category: ["aiesec"],
    description: "Gallery image 5"
  },
  {
    id: 6,
    src: img6,
    title: "Image 6",
    category: ["aiesec"],
    description: "Gallery image 6"
  },
  {
    id: 7,
    src: img7,
    title: "Image 7",
    category: ["leadership", "aiesec"],
    description: "Gallery image 7"
  },
  {
    id: 8,
    src: img8,
    title: "Image 8",
    category: ["coding"],
    description: "Gallery image 8"
  },
  {
    id: 9,
    src: img9,
    title: "Image 9",
    category: ["achievement"],
    description: "Gallery image 9"
  },
  {
    id: 10,
    src: img10,
    title: "Image 10",
    category: ["leadership", "aiesec"],
    description: "Gallery image 10"
  },
  {
    id: 11,
    src: img11,
    title: "Image 11",
    category: ["achievement", "hackathon"],
    description: "Gallery image 11"
  },
  {
    id: 12,
    src: img12,
    title: "Image 12",
    category: ["coding"],
    description: "Gallery image 12"
  },
];

const categories = ["all", "hackathon", "research", "aiesec", "leadership", "achievement", "coding"];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => 
        Array.isArray(img.category) 
          ? img.category.includes(selectedCategory) 
          : img.category === selectedCategory
      );

  return (
    <section className="xl:mx-80 md:mx-40 sm:mx-20 mx-10 h-full">
      {/* Header */}
      <h1 className="text-3xl font-bold my-6">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Gallery
        </span>
      </h1>

      <p className="text-slate-500 mt-4 leading-relaxed">
        A visual journey through my work, projects, and creative moments. 
        Browse through the collection to see what I've been working on.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mt-8 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
            onClick={() => setSelectedImage(image)}
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                {Array.isArray(image.category) ? image.category.join(' • ') : image.category}
              </span>
              {/* <h3 className="text-white font-bold text-lg">{image.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{image.description}</p> */}
            </div>

            {/* Corner Badge */}
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-slate-500 text-lg">No images in this category yet</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                {Array.isArray(selectedImage.category) ? selectedImage.category.join(' • ') : selectedImage.category}
              </span>
              <h3 className="text-white text-2xl font-bold mt-1">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-2">{selectedImage.description}</p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
                setSelectedImage(filteredImages[prevIndex]);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
                setSelectedImage(filteredImages[nextIndex]);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
