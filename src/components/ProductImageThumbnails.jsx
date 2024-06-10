import React from "react";

function ProductImageThumbnails({ thumbnails, activeIndex, setActiveIndex }) {
  return (
    <div className="hidden sm:flex sm:gap-5 md:px-5 lg:justify-evenly lg:px-0">
      {thumbnails.map((thumbnail, i) => {
        return (
          <button
            className={`overflow-hidden rounded-xl lg:size-28 ${
              i === activeIndex ? "border-4 border-primary-orange" : ""
            }`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <img
              className={`${i === activeIndex ? "opacity-50" : ""}`}
              src={thumbnail}
              alt={`Product Preview thumbnail ${i + 1}`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default ProductImageThumbnails;
