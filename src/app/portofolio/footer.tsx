export default function Footer(){
    return(
        <>
            <footer id="contact" className="bg-white mt-24 pt-16 pb-8 shadow-inner border-t border-gray-100">
                <div className="w-full mx-auto">

                    <div className="text-center mb-12">
                    <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                        CONTACT
                    </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
                            Let&#39;s Connect 📬
                        </h2>
                        <p className="text-lg text-gray-600 mt-4 max-w-lg mx-auto">
                            Feel free to reach out. I&#39;m always open to discussing new projects or other opportunities.                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 max-w-4xl mx-auto">

                        <a href="mailto:falahnaufal1@gmail.com" target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-3 group transition duration-300" aria-label="Email">
                            <svg className="w-8 h-8 text-gray-400 group-hover:text-red-600 transition duration-300"
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"ke-width="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <div
                                className="text-lg font-medium text-gray-700 group-hover:text-red-600 transition duration-300">
                                falahnaufal1@gmail.com
                            </div>
                        </a>

                        <a href="https://instagram.com/naufal.ffw" target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-3 group transition duration-300" aria-label="Instagram">
                            <svg className="w-8 h-8 text-gray-400 group-hover:text-pink-600 transition duration-300"
                                 fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12.315 2.022c-2.423 0-2.71.01-3.66.052-1.11.05-1.87.21-2.547.482-.69.27-1.3.63-1.898 1.23-.6.6-.96 1.207-1.23 1.898-.272.677-.43 1.437-.482 2.547-.042.95-.052 1.237-.052 3.66s.01 2.71.052 3.66c.05 1.11.21 1.87.482 2.547.27.69.63 1.3 1.23 1.898.6.6 1.207.96 1.898 1.23.677.272 1.437.43 2.547.482.95.042 1.237.052 3.66.052s2.71-.01 3.66-.052c1.11-.05 1.87-.21 2.547-.482.69-.27 1.3-.63 1.898-1.23.6-.6.96-1.207 1.23-1.898.272-.677.43 1.437-.482 2.547.042-.95.052-1.237.052-3.66s-.01-2.71-.052-3.66c-.05-1.11-.21-1.87-.482-2.547a4.926 4.926 0 00-1.23-1.898 4.926 4.926 0 00-1.898-1.23c-.677-.272-1.437-.43-2.547-.482C15.025 2.03 14.738 2.022 12.315 2.022zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                                      clipRule="evenodd"/>
                            </svg>
                            <div
                                className="text-lg font-medium text-gray-700 group-hover:text-pink-600 transition duration-300">
                                naufal.ffw
                            </div>
                        </a>

                        <a href="https://github.com/NFalah25" target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-3 group transition duration-300" aria-label="GitHub">
                            <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition duration-300"
                                 fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.85 0 1.338-.012 2.419-.012 2.746 0 .268.18.58.688.482A10.007 10.007 0 0022 12c0-5.523-4.477-10-10-10z"
                                      clipRule="evenodd"/>
                            </svg>
                            <div
                                className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition duration-300">
                                NFalah25
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/nfalah/" target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-3 group transition duration-300" aria-label="LinkedIn">
                            <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-700 transition duration-300"
                                 fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            <div
                                className="text-lg font-medium text-gray-700 group-hover:text-blue-700 transition duration-300">
                                Naufal Falah Wafiuddin
                            </div>
                        </a>
                    </div>

                    <div className="border-t border-gray-200 mt-16 pt-8 w-full mx-auto px-4 md:px-8 lg:px-24">
                        <div
                            className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                            <div className="mb-4 sm:mb-0">
                                <span className="text-xl font-bold">Naufal Falah Wafiuddin</span>
                                <p className="text-sm text-gray-500">Web Portfolio</p>
                            </div>
                            <p className="text-sm text-gray-500">&copy; 2025 Naufal Falah Wafiuddin. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}