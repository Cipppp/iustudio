'use client';
import Layout from '../components/Layout'; // Assuming you have a Layout component for consistency across pages

export default function Contact() {
    return (
        <Layout>
            <div className="sm:pl-[4rem] md:pl-[14rem] mx-auto py-8">
                <div className="pt-[4rem] text-gray-700">
                    <p>Gheorghe Banciulescu 3 020174 Bucuresti, Romania</p>
                </div>
                <div className="pt-[3rem] text-gray-700">
                    <p>Sudio manager: <a href="mailto:iustudio.irinaursu@gmail.com" className="text-gray-700 hover:text-black">iustudio.irinaursu@gmail.com</a></p>
                </div>
            </div>
        </Layout>
    );
}
