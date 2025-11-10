import React from 'react';
import Image from 'next/image';

interface PodcastSectionProps {
    podcastTitle?: string;
    description?: string;
    hostName?: string;
    hostTitle?: string;
    hostImageUrl?: string;
    listenLink?: string;
}

const PodcastSection: React.FC<PodcastSectionProps> = ({
    podcastTitle = 'The Podcast - Luxury Real Estate',
    description = 'Step into the world of JamesEdition\'s podcast, where we engage in lively discussions with industry experts, from global CEOs to local agents, uncovering insightful market insights and data.',
    hostName = 'Eric Finnas',
    hostTitle = 'CEO',
    hostImageUrl = 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    listenLink = '#podcast-link',
}) => {
    return (
        <section className="py-4">
            <div className="w-full mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 py-4">

                    <div className="p-10 flex flex-col justify-cent">
                        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 text-gray-900 leading-tight">
                            {podcastTitle}
                        </h2>

                        <p className="text-base text-gray-600 mb-10 max-w-lg">
                            {description}
                        </p>

                        <a
                            href={listenLink}
                            className="w-fit flex items-center bg-black text-white px-8 py-3 font-semibold text-sm tracking-wider transition-colors duration-200 hover:bg-gray-800"
                        >
                            LISTEN NOW
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>


                    <div className="p-8 flex flex-col items-center justify-center text-center border-l border-gray-300">


                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ">
                            <Image
                                src={hostImageUrl}
                                alt={`Host ${hostName}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <p className="text-xs tracking-widest text-gray-500 uppercase mb-1">
                            YOUR HOST
                        </p>

                        <h3 className="font-serif text-xl font-normal text-gray-900 leading-tight">
                            {hostName}
                        </h3>

                        <p className="text-sm text-gray-700 mt-1">
                            {hostTitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PodcastSection;