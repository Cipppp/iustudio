import { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Layout from '../components/Layout';

const arhitectureData = [
  { imageSrc: '/assets/ar_1.jpeg', name: 'casa floreasca NIU' },
  { imageSrc: '/assets/ar_1.jpeg', name: 'casa floreasca NIU' },
  { imageSrc: '/assets/ar_1.jpeg', name: 'casa floreasca NIU' },
  { imageSrc: '/assets/ar_1.jpeg', name: 'casa floreasca NIU' },
  { imageSrc: '/assets/ar_2.jpeg', name: 'birou IUstudio' },
  { imageSrc: '/assets/ar_2.jpeg', name: 'birou IUstudio' },
]

export default function Arhitecture(): ReactElement {
  return (
    <Layout>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[6rem] pr-10 pb-10 pt-[8rem]">
            {
                arhitectureData.map((arhitecture, index) => (
                  <Card
                    key={index}
                    imageSrc={arhitecture.imageSrc}
                    name={arhitecture.name}
                  />
                ))
            }
          </div>
        </div>
    </Layout>
  );
}
