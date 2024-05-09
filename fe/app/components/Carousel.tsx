import { ReactElement, useState, useEffect, useRef } from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct type import for Swiper
import SwiperClass from 'swiper'; // Import Swiper class for proper typing
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion';
import "swiper/css/effect-fade";
import { EffectFade } from 'swiper/modules';

import Image from 'next/image';

interface CarouselProps {
    images: string[];
  }
  
  export default function Carousel({ images }: CarouselProps) {
    const swiperRef = useRef<SwiperClass | null>(null); // Correct type for Swiper instance

    const handleScreenClick = (e: MouseEvent) => {
        const threshold = window.innerWidth / 2; // Midpoint of the screen
        if (e.clientX < threshold) {
        swiperRef.current?.slidePrev(); // Swipe to the left if clicked on the left side
        } else {
        swiperRef.current?.slideNext(); // Swipe to the right if clicked on the right side
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
            modules={[EffectFade]}
            // effect="fade"
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
            slidesPerView={1}
            loop={true}
            navigation={false}
            spaceBetween={10}
            speed={1200}

            className='w-10rem'
        >
            {images.map((image, index) => (
            <SwiperSlide key={index}>
                <div
                    style={{
                    width: "48rem",
                    height: "38rem",
                    position: "relative",
                    }}
                >
                    <Image
                    src={image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    );
  }