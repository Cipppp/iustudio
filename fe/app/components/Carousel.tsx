import { ReactElement } from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps): ReactElement {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      spaceBetween={10} // Space between slides
      loop={true} // Infinite loop
      pagination={{ clickable: true }} // Clickable dots
      navigation
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center"> {/* Center the slide content */}
            <Image src={image} alt={`Slide ${index}`} layout="fit" width={350} height={475} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
