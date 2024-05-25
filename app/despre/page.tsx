'use client';
import Image from 'next/image';
import Layout from '../components/Layout'; // Assuming you have a Layout component
import aboutImage from '../../public/assets/despre.jpg';

export default function About() {
    return (
        <Layout>
            <div className="flex justify-center items-center my-12 mx-auto max-w-4xl mt-[6rem]">
                <div className="flex flex-row items-start">
                    <div className="flex-shrink-0 mr-8">
                        {/* You can replace `placeholder.jpg` with your actual image file */}
                        <Image src={aboutImage} alt="About me" width={400} height={900} />
          </div>
                    <div className="flex-grow text-black">
                        <h1 className="text-2xl font-bold mb-4">About Me</h1>
                        <p className="text-lg">
                        IUstudio a fost fondat în București de către arhitectul de interior Irina Ursu. După absolvirea Universității de Arhitectură
și Urbanism “Ion Mincu” în 2009, Irina și-a început activitatea lucrând cu diverse studiouri de design interior și pe cont propriu. În 2014, viziunea sa asupra arhitecturii și designului interior s-a cristalizat prin înființarea propriei practici - IUstudio. De atunci, a abordat o varietate de proiecte, de la amenajări interioare rezidențiale până la spații comerciale și proiecte de birouri.
                        </p>
                        <p className="text-lg mt-4">
                        În cadrul fiecărui proiect, Irina își propune să creeze spații care să reflecte personalitatea și stilul de viață al clienților săi. În plus, ea este pasionată de designul de mobilier și de produs, creând piese unice și personalizate pentru fiecare proiect.Filosofia IUstudio este una holistică, punând accent pe relația dintre om, arhitectură și mediu, căutând mereu să creeze spații care să îmbine estetica cu funcționalitatea și sustenabilitatea. Viziunea preferată de studio este aceea care îmbrățișează naturalețea și autenticitatea, apreciind frumusețea naturală a materialelor și se recunoaște caracterul efemer și schimbător al tuturor lucrurilor
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
