import { ReactElement, useState, useEffect, useRef } from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct type import for Swiper
import SwiperClass from 'swiper'; // Import Swiper class for proper typing
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
            slidesPerView={1}
            loop={true}
            navigation={false}
            spaceBetween={10}
        >
            {images.map((image, index) => (
            <SwiperSlide key={index}>
                <div className="flex justify-center w-full h-full"> {/* Ensure full container */}
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        layout="contain" // Use 'contain' to keep the image within bounds
                        width={350}
                        height={475}
                    />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    );
  }