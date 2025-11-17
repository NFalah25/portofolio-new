import Link from "next/link";

const Experience = () => {
    return (
        <>
            <section id="experience"
                     className="py-16 md:py-24 bg-gray-50">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                        Work Experience
                    </h3>
                    <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-gray-900">
                        My Internships 🚀
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Here&#39;s where I&#39;ve applied my skills in professional environments.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto px-4">
                    <div className="absolute left-0 md:left-4 top-2 bottom-0 w-1 bg-blue-100 rounded-full"></div>

                    <div className="relative pl-8 md:pl-12 mb-12">
                        <div
                            className="absolute left-0 md:left-4 top-1.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"
                            style={{transform: 'translateX(-50%)'}}></div>
                        <div
                            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <span className="text-sm font-medium text-gray-500">Aug 2024 – Nov 2024</span>
                            <h4 className="text-xl font-bold text-gray-900 mt-1">PT Exedy Prima Indonesia</h4>
                            <h5 className="text-md font-semibold text-blue-600">Operations Department</h5>
                            <p className="mt-3 text-gray-600 text-base">
                                Designed and built the Warehouse Management System (WMS) & Production Ecosystems.
                                Developed the backend using PHP and leveraged SQL Server for data management.
                            </p>
                            <div className={'flex justify-between items-center'}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full">PHP</span>
                                    <span
                                        className="text-xs font-medium bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full">SQL Server</span>
                                    <span
                                        className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">System Design</span>
                                </div>
                                <div className={'mt-2 ms-1'}>
                                    <Link href={'https://drive.google.com/file/d/13Se1Opd3_LlfEphE87s2A_3KhEHHmWwG/view?pli=1'} target={"_blank"} className={'text-blue-600 hover:text-blue-700'}>[ View Certificate ]</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative pl-8 md:pl-12 mb-12">
                        <div
                            className="absolute left-0 md:left-4 top-1.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"
                            style={{transform: 'translateX(-50%)'}}></div>
                        <div
                            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <span className="text-sm font-medium text-gray-500">Feb 2024 – Jun 2024</span>
                            <h4 className="text-xl font-bold text-gray-900 mt-1">PT Otak Kanan</h4>
                            <h5 className="text-md font-semibold text-blue-600">Full Stack Web Development</h5>
                            <p className="mt-3 text-gray-600 text-base">
                                Mastered PHP and Laravel for backend APIs, developed interactive Single Page
                                Applications (SPAs) with React.js, and implemented a payment gateway project.
                            </p>
                            <div className={'flex justify-between items-center'}>

                                <div className="mt-4 flex flex-wrap gap-2">
                                <span
                                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Laravel</span>
                                    <span
                                        className="text-xs font-medium bg-cyan-100 text-cyan-800 px-2.5 py-0.5 rounded-full">React.js</span>
                                    <span
                                        className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full">Git</span>
                                    <span
                                        className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full">Agile/Scrum</span>
                                </div>
                                <div className={'mt-2 ms-1'}>
                                    <Link href={'https://drive.google.com/file/d/1GMXSkUUEH0eX3TCfjm_ZI5sQWaHwrbe7/view'} target={"_blank"} className={'text-blue-600 hover:text-blue-700'}>[ View Certificate ]</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Experience;