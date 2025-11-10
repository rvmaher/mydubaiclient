'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";
import { IoIosArrowForward as ArrowForwardIcon } from "react-icons/io";


export const items = [
    { id: 1, url: '/images/car_1.png', title: 'Exotic Sports Car' },
    { id: 2, url: '/images/car_2.jpg', title: 'Super Yacht' },
    { id: 3, url: '/images/car_5.jpg', title: 'Oceanfront Villa' },
    { id: 4, url: '/images/car_3.jpg', title: 'Mountain Ski Chalet' },
    { id: 5, url: '/images/car_4.jpg', title: 'Private Jet Interior' },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const x = useMotionValue(0);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth || 1;
            const targetX = -index * containerWidth;

            animate(x, targetX, {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            });
        }
    }, [index, x]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='absolute inset-0'>
            <div className='flex flex-col h-full'>
                <div
                    className='relative overflow-hidden h-full'
                    ref={containerRef}
                >
                    <motion.div className='flex h-full' style={{ x }}>
                        {items.map((item) => (
                            <div key={item.id} className='shrink-0 w-full h-full'>
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={item.url}
                                    alt={item.title}
                                    className='w-full h-full object-cover select-none pointer-events-none'
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </motion.div>


                    <motion.button
                        disabled={index === 0}
                        onClick={() => { setIndex((i) => Math.max(0, i - 1)); }}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-20 
                        ${index === 0
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white text-black hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <ArrowBackIcon />
                    </motion.button>


                    <motion.button
                        disabled={index === items.length - 1}
                        onClick={() => { setIndex((i) => Math.min(items.length - 1, i + 1)); }}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-20
                        ${index === items.length - 1
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white text-black hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <ArrowForwardIcon />
                    </motion.button>


                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}