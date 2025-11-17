import Image from "next/image";

import aboutme from '../../../public/images/aboutme.jpg';
export default function About() {
    return (
        <>
            <section id="about" className="py-16 md:py-24 bg-gray-50 w-full px-4 md:px-8 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="relative max-w-md mx-auto order-1 md:order-2">
                        {/*<img src="https://placehold.co/600x450/e0e7ff/3B82F6?text=Foto+Anda+Lainnya"*/}
                        {/*     alt="Foto placeholder untuk bagian tentang saya"*/}
                        {/*     className="rounded-2xl shadow-xl w-full h-auto object-cover"*/}
                        {/*/>*/}
                        <Image src={aboutme} alt={'About Me'} className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
                    </div>

                    <div className="text-center md:text-left order-2 md:order-1">
                        <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                            About Me
                        </h3>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-gray-900">
                            IT Graduate from Malang State Polytechnic
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Hello! I am a passionate IT professional, having recently completed my studies in <strong>Information
                            Technology</strong> at <strong>Malang State Polytechnic (Politeknik Negeri Malang)</strong>.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            I have a strong foundation in software development and web design. I am always enthusiastic
                            about learning new technologies and contributing to challenging projects to turn great ideas
                            into high-quality products.
                        </p>
                        <div className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="ml-3 text-gray-700 text-base font-medium">Web Development (React, Laravel)</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="ml-3 text-gray-700 text-base font-medium">UI/UX Design (Figma)</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span
                                    className="ml-3 text-gray-700 text-base font-medium">Database Management (MySQL)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}