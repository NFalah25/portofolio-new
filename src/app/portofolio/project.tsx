import Image from "next/image";
import simGym from '../../../public/images/sim-gym.png';
import simSarpras from '../../../public/images/sim-sarpras.png';
import vmap from '../../../public/images/vmap.png';
import mfep from '../../../public/images/mfep.png';

const Project = () => {
    return (
        <>
            <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-24">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                        My Projects
                    </h3>
                    <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-gray-900">
                        A Glimpse of My Work
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I&#39;ve worked on, showcasing my skills in web development and
                        problem-solving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        {/*<img src="https://placehold.co/600x400/e0e7ff/3B82F6?text=AI+Learning+App"*/}
                        {/*     alt="Project 1 Preview"*/}
                        {/*     className="w-full h-48 object-cover"*/}
                        {/*     />*/}
                        <Image src={vmap} alt="Viat-Map" className="w-full h-64 object-cover object-top" />
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900">🧠 Web-Based AI-Assisted Learning</h4>
                            <p className="mt-3 text-gray-600 text-base min-h-[100px]">
                                A full-stack web-based learning app using Laravel, integrated with an AI backend
                                (Ollama) to support student thinking processes.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Laravel</span>
                                <span
                                    className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">AI / Ollama</span>
                                <span
                                    className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full">Thesis</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        {/*<img src="https://placehold.co/600x400/e0e7ff/3B82F6?text=SIM-SARPRAS"*/}
                        {/*     alt="Project 3 Preview"*/}
                        {/*     className="w-full h-48 object-cover"*/}
                        {/*     />*/}
                        <Image src={simSarpras} alt={"SIM-SARPRAS Project Preview"} className="w-full h-64 object-cover object-top" />
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900">🏫 SIM-SARPRAS</h4>
                            <p className="mt-3 text-gray-600 text-base min-h-[100px]">
                                (Sistem Informasi Manajemen Sarana Prasarana). Responsible for a room lending
                                information system website using Laravel.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Laravel</span>
                                <span
                                    className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">Management System</span>
                            </div>
                            <div className="mt-5">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">View on
                                    GitHub &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        {/*<img src="https://placehold.co/600x400/e0e7ff/3B82F6?text=SIM-GYM"*/}
                        {/*     alt="SIM-GYM Project Preview"*/}
                        {/*     className="w-full h-48 object-cover"*/}
                        {/*/>*/}
                        <Image src={simGym} alt="SIM-GYM Project Preview" className="w-full h-64 object-cover object-top" />
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900">🏋️ SIM-GYM</h4>
                            <p className="mt-3 text-gray-600 text-base min-h-[100px]">
                                (Sistem Informasi Manajemen GYM). A management system for gym operations, built using Laravel, React, and Inertia.js.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Laravel</span>
                                <span
                                    className="text-xs font-medium bg-cyan-100 text-cyan-800 px-2.5 py-0.5 rounded-full">React</span>
                                <span
                                    className="text-xs font-medium bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">Inertia.js</span>
                            </div>
                          <div className="mt-5">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">View on
                                    GitHub &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-start-2">
                        {/*<img src="https://placehold.co/600x400/e0e7ff/3B82F6?text=Decision+Support+System"*/}
                        {/*     alt="Project 2 Preview"*/}
                        {/*     className="w-full h-64 object-cover"*/}
                        {/*     />*/}
                        <Image src={mfep} alt={"Decision Support System Project Preview"} className="w-full h-64 object-cover object-top" />
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900">📊 Decision Support System</h4>
                            <p className="mt-3 text-gray-600 text-base min-h-[100px]">
                                Created a web-based decision making system using the MFEP method, built with the Laravel
                                Framework.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Laravel</span>
                                <span
                                    className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full">MFEP Method</span>
                            </div>
                            <div className="mt-5">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">View on
                                    GitHub &rarr;</a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Project;
