import { useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import ProductImageThumbnails from "./ProductImageThumbnails";
import Portal from "./Portal";
const ProductPreview = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [isDesktopPreview, setIsDesktopPreview] = useState(false);

  const PRODUCT_PREVIEW = [
    "./src/assets/images/image-product-1.jpg",
    "./src/assets/images/image-product-2.jpg",
    "./src/assets/images/image-product-3.jpg",
    "./src/assets/images/image-product-4.jpg",
  ];
  const PRODUCT_THUMBNAILS = [
    "./src/assets/images/image-product-1-thumbnail.jpg",
    "./src/assets/images/image-product-2-thumbnail.jpg",
    "./src/assets/images/image-product-3-thumbnail.jpg",
    "./src/assets/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <section>
      <div className="sm:space-y-9 sm:rounded-3xl lg:px-10">
        <ProductImageSlider
          imageUrls={PRODUCT_PREVIEW}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsDesktopPreview={setIsDesktopPreview}
        />
        <ProductImageThumbnails
          thumbnails={PRODUCT_THUMBNAILS}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      {isDesktopPreview && (
        <Portal>
          <div className="absolute inset-0 z-20 grid bg-black bg-opacity-85 place-content-center">
            <di className="max-w-lg min-h-full space-y-5">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setIsDesktopPreview(false);
                  }}
                >
                  <svg
                    className="text-white scale-150 hover:text-primary-orange"
                    width="14"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <ProductImageSlider
                imageUrls={PRODUCT_PREVIEW}
                activeIndex={activeIndex}
                isDesktopPreview={isDesktopPreview}
                setActiveIndex={setActiveIndex}
              />
              <ProductImageThumbnails
                thumbnails={PRODUCT_THUMBNAILS}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </di>
          </div>
        </Portal>
      )}
    </section>
  );
};

export default ProductPreview;
