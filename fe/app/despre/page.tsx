'use client';
import Image from 'next/image';
import Layout from '../components/Layout'; // Assuming you have a Layout component

export default function About() {
    return (
        <Layout>
            <div className="flex justify-center items-center my-12 mx-auto max-w-4xl mt-[6rem]">
                <div className="flex flex-row items-start">
                    <div className="flex-shrink-0 mr-8">
                        {/* You can replace `placeholder.jpg` with your actual image file */}
                        <img src="https://placehold.co/450x650" alt="About Me" className="rounded-lg" />
                    </div>
                    <div className="flex-grow">
                        <h1 className="text-2xl font-bold mb-4">About Me</h1>
                        <p className="text-lg">
                            I am a passionate architect based in Barcelona, dedicated to transforming spaces into meaningful and functional environments. With a focus on sustainable design, I aim to create structures that enhance the quality of life for occupants and blend harmoniously with their surroundings.
                        </p>
                        <p className="text-lg mt-4">
                            My journey in architecture has allowed me to work on a variety of projects both locally and internationally, providing me with a broad perspective and a deep understanding of different architectural styles and techniques.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
