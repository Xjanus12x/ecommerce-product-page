import React from "react";

function ProductImageSlider({
  imageUrls,
  activeIndex,
  setActiveIndex,
  isDesktopPreview,
  setIsDesktopPreview,
}) {
  const handlePreviousButtonClick = () => {
    setActiveIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const handleNextButtonClick = () => {
    setActiveIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <div className="relative">
      <div className="flex overflow-x-hidden md:rounded-xl">
        {imageUrls.map((url, i) => {
          return (
            <img
              className="object-cover object-center w-full h-full transition-transform duration-300 lg:max-h-[31rem]  grow-0 shrink-0 lg:cursor-pointer"
              src={url}
              alt={`Product Preview ${i + 1}`}
              key={i}
              style={{ transform: `translateX(${-100 * activeIndex}%)` }}
              onClick={() => {
                if (window.innerWidth >= 1024) setIsDesktopPreview(true);
              }}
            />
          );
        })}
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-between p-4 z-0 ${
          isDesktopPreview
            ? "lg:flex -left-11 -right-11 z-10 overflow-visible"
            : "lg:hidden "
        }`}
      >
        <button
          onClick={handlePreviousButtonClick}
          className="grid bg-white rounded-full aspect-square size-11 place-content-center md:size-16 lg:size-14 group"
        >
          <svg
            className="group-hover:text-primary-orange"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNextButtonClick}
          className="grid bg-white rounded-full aspect-square size-11 place-content-center md:size-16 lg:size-14 group"
        >
          <svg
            className="group-hover:text-primary-orange"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductImageSlider;
