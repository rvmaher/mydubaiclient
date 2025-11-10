import Carousel from '../Carousel/Carousel';

const HeroCarouselWithOverlay = () => {
    return (
        <div className="relative w-full h-[60vh] sm:h-[80vh]">
            <Carousel />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 drop-shadow-lg">
                    The World's Luxury Marketplace
                </h1>
            </div>
        </div>
    );
};

export default HeroCarouselWithOverlay;