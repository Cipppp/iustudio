import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import styles from './Carousel.module.scss'; // Import SCSS module

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleScreenClick = (e: MouseEvent) => {
    const threshold = window.innerWidth / 2;
    if (e.clientX < threshold) {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleScreenClick);
    return () => {
      window.removeEventListener('click', handleScreenClick);
    };
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      loop={true}
      navigation={false}
      spaceBetween={0}
      speed={1200}
      centeredSlides={true}
      className={styles.swiperContainer} // Apply custom styles to the Swiper container
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.carouselContainer}>
            <img
              src={image}
              alt=""
              className={styles.carouselImage}
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
