import Link from "next/link";

const Education = () => {
    return (
        <section id="education" className="mt-24 md:mt-32 px-4 md:px-8 lg:px-24">
            {/*<h2 className="text-4xl font-bold text-center mb-16">Education & <span*/}
            {/*    className="text-blue-600">Certifications</span> 🎓</h2>*/}
            <h4 className="text-center text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">QUALIFICATIONS</h4>
            <h2 className="text-4xl font-bold text-center mb-4">Education & <span
                className="text-blue-600">Certifications</span> 🎓</h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
                My formal qualifications and professional certifications that validate my skills.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <span
                        className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Education</span>
                    <h3 className="text-2xl font-bold mt-4 mb-2">Politeknik Negeri Malang</h3>
                    <p className="text-gray-700 font-medium">D4 Information Technology</p>
                    <p className="text-gray-500 mt-3">Graduated with a focus on web development, database management,
                        and software engineering principles.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <span
                        className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Certification</span>
                    <h3 className="text-2xl font-bold mt-4 mb-2">BNSP - Junior Web Programmer</h3>
                    <p className="text-gray-700 font-medium">Badan Nasional Sertifikasi Profesi</p>
                    <p className="text-gray-500 mt-3">Certified in computer software programming, demonstrating
                        competence in national web development standards.</p>
                    <Link href={'https://drive.google.com/file/d/1muSxkTTXaPjkAmyQzmmWeU4fT7DBZZQy/view?usp=sharing'}
                          className="font-medium text-blue-600 hover:text-blue-700 mt-4 inline-block">[ View Credential
                        ]</Link>
                </div>
            </div>
        </section>
    )
}

export default Education;