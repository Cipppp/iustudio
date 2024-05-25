import React, { useEffect, useRef, useState } from 'react';
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
  const [cursorSide, setCursorSide] = useState<'left' | 'right' | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const threshold = window.innerWidth / 2;
    if (e.clientX < threshold) {
      setCursorSide('left');
    } else {
      setCursorSide('right');
    }
  };

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
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('click', handleScreenClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`${styles.carouselContainer} ${cursorSide === 'right' ? styles.rightCursor : ''} ${cursorSide === 'left' ? styles.leftCursor : ''}`}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        navigation={false}
        spaceBetween={0}
        speed={1200}
        // centeredSlides={true}
        className={styles.swiperContainer} // Apply custom styles to the Swiper container
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContainer}>
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
    </div>
  );
}
