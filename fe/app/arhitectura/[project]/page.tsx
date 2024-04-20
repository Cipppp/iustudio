'use client'
import { ReactElement } from 'react';
import Carousel from '../../components/Carousel';
import Layout from '@/app/components/Layout';

const projectImages: { [key: string]: string[] } = {
    'casa-floreasca-niu': ['/assets/ar_1.jpeg', '/assets/ar_2.jpeg'], // Example image array
    'birou-iustudio': ['/assets/ar_1.jpeg', '/assets/ar_2.jpeg'], // Example image array
};

export default function ProjectPage({
  params,
}: {
  params: { project: string }; // Ensure correct structure and type for params
}): ReactElement {  
  const { project } = params;
  const images = projectImages[project] || []; // Fetch project images based on the project name

  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col items-center justify-center"> {/* Adjusted height */}
        <div className="flex-shrink-0 w-1/2"> {/* Prevent shrinking */}
          {images.length > 0 ? (
            <Carousel images={images} />
          ) : (
            <div className="text-gray-500 text-lg">Project not found.</div>
          )}
        </div>
      </div>
    </Layout>
  
  );
}
