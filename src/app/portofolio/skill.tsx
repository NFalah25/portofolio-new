export default function Skill() {
    return (
        <>
            <section id="skills" className="mt-24 md:mt-32 px-4 md:px-8 lg:px-24">
                {/*<h2 className="text-4xl font-bold text-center mb-16">My <span className="text-blue-600">Skills</span>*/}
                {/*</h2>*/}
                <h4 className="text-center text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">MY
                    TOOLKIT</h4>
                <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-blue-600">Skills</span>
                </h2>
                <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
                    A collection of technologies I&#39;m comfortable with and personal skills that drive my work.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8">Hard Skills</h3>
                        <div className="flex flex-wrap gap-4 justify-center relative">
                            <div
                                className="skill-bubble cursor-pointer relative bg-red-100 text-red-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0s'}}>
                                🚀 PHP
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-blue-100 text-blue-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0.2s'}}>
                                🔥 Laravel
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-indigo-100 text-indigo-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0.4s'}}>
                                💻 React.js
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-cyan-100 text-cyan-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0.6s'}}>
                                ☁️ SQL Server
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-yellow-100 text-yellow-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0.8s'}}>
                                🐬 MySQL
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-green-100 text-green-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '1s'}}>
                                🎨 Tailwind CSS
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-purple-100 text-purple-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '1.2s'}}>
                                🤖 AI Integration
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-gray-200 text-gray-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '1.4s'}}>
                                🐧 Linux
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-sky-100 text-sky-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '1.6s'}}>
                                🐳 Docker
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-amber-100 text-amber-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '1.8s'}}>
                                🐍 Python
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8">Personal Skills</h3>
                        <div className="flex flex-wrap gap-4 justify-center relative">
                            <div
                                className="skill-bubble cursor-pointer relative bg-pink-100 text-pink-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: '0.3s'}}>
                                🤝 Teamwork
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-orange-100 text-orange-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: "0.5s"}}>
                                🧠 Problem Solving
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-teal-100 text-teal-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: "0.7s"}}>
                                🗣️ Communication
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-gray-200 text-gray-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: "0.9s"}}>
                                ⏱️ Agile Method
                            </div>
                            <div
                                className="skill-bubble cursor-pointer relative bg-lime-100 text-lime-800 font-medium text-lg px-5 py-3 rounded-full shadow-md"
                                style={{animationDelay: "1.1s"}}>
                                💡 Design Thinking
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}