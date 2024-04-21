'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const projectNames = ['casa-floreasca-niu', 'birou-iustudio']; // Example project names
const projectImages: { [key: string]: string[] } = {
  'casa-floreasca-niu': ['/assets/ar_1.jpeg', '/assets/ar_2.jpeg'],
  'birou-iustudio': ['/assets/arc_1.jpeg', '/assets/arc_2.jpeg'],
};

export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
    const router = useRouter();
    const { project } = params;
    const images = projectImages[project] || [];
    const handleScroll = (e: WheelEvent) => {
      const currentIndex = projectNames.indexOf(project);

      if (e.deltaY > 0) { // Scroll down
        const nextProject = projectNames[currentIndex + 1];
        if (nextProject) {
          router.push(`/arhitectura/${nextProject}`); // Navigate to the next project
        }
      } else if (e.deltaY < 0) { // Scroll up
        const previousProject = projectNames[currentIndex - 1];
        if (previousProject) {
          router.push(`/arhitectura/${previousProject}`); // Navigate to the previous project
        }
      }
    };

    const handleScreenClick = (e: MouseEvent) => {
      const verticalThreshold = window.innerHeight / 2; // Midpoint of the screen for vertical navigation
  
      if (e.clientY > verticalThreshold) {
        // If click is below the midpoint, navigate to the next project
        const currentIndex = projectNames.indexOf(project);
        const nextProject = projectNames[currentIndex + 1];
        if (nextProject) {
          router.push(`/arhitectura/${nextProject}`);
        }
      } else {
        // If click is above the midpoint, navigate to the previous project
        const currentIndex = projectNames.indexOf(project);
        const previousProject = projectNames[currentIndex - 1];
        if (previousProject) {
          router.push(`/arhitectura/${previousProject}`);
        }
      }
    };


  useEffect(() => {

      window.addEventListener('click', handleScreenClick); // Add click event listener for vertical navigation
      window.addEventListener('wheel', handleScroll); // Add scroll event listener

      return () => {
        window.removeEventListener('wheel', handleScroll); // Cleanup event listener
        window.removeEventListener('click', handleScreenClick); // Cleanup event listener
      };
    }, [project, router]);

  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col justify-center items-center"> {/* Centered layout */}
        {images.length > 0 ? (
          <div className="flex-shrink-0 w-1/2">  {/* Carousel container */}
            <Carousel images={images} /> {/* Horizontal carousel */}
          </div>
        ) : (
          <div className="text-gray-500 text-lg">Project not found.</div> 
        )}
      </div>
    </Layout>
  );
}
