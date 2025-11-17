import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faEnvelopeOpen,
    faEnvelopesBulk,
    faEnvelopeSquare,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import naufal from '../../../public/images/naufal-removebg4.png';
import reactJs from "../../../public/images/react.png";
import laravel from "../../../public/images/laravel.png";
import Project from "@/app/portofolio/project";
import Experience from "@/app/portofolio/experience";
import About from "@/app/portofolio/about";
import {react} from "@babel/types";
import Education from "@/app/portofolio/education";
import Skill from "@/app/portofolio/skill";
import Footer from "@/app/portofolio/footer";

const myPortofolio = () => {
    return (
        <>
            <div className='mx-auto w-full'>
                <header className='py-8 px-4 md:px-8 lg:px-24'>
                    <nav className='flex justify-between items-center gap-8'>
                        <Link
                            href='/'
                            className='text-3xl font-bold text-gray-900'>
                            My<span className='text-blue-600'>Portfolio</span>
                        </Link>
                        <ul className='hidden md:flex items-center space-x-10'>
                            <li>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 font-b'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 font-medium'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 font-medium'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 font-medium'>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-gray-600 hover:text-gray-900 font-medium'>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <Link
                            href={"mailto:falahnaufal1@gmail.com"}
                            className='hidden md:flex items-center text-sm font-medium text-blue-600 hover:text-blue-700'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                color='black'
                                className='mr-2 h-4 w-4'
                            />
                            falahnaufal1@gmail.com
                        </Link>
                        <button
                            className='md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4 6h16M4 12h16m-7 6h7'
                                />
                            </svg>
                        </button>
                    </nav>
                </header>

                <main className='py-16 md:py-24 px-4 md:px-8 lg:px-24'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                        <div className='text-center md:text-left'>
                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                                Hello Mate 👋 <br/>
                                I&#39;m Naufal Falah Wafiuddin<br/>
                                <span className="text-blue-600">a Full Stack Developer</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                                Hi, I&#39;m Naufal, a full-stack developer passionate about building complete digital solutions. I turn complex problems into functional and beautiful web applications, from backend logic to frontend design.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#"
                                   className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5">
                                    Book a Call &rarr;
                                </a>
                                <a href="#"
                                   className="bg-white text-gray-800 font-medium px-8 py-3 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition duration-300 flex items-center justify-center">
                                    Download CV
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-12 md:mt-0">
                            <div className="relative max-w-md mx-auto">
                                <Image src={naufal} alt={'Potret Naufal Falah Wafiuddin'}
                                       className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>

                                <div className="absolute -top-5 -left-5 sm:-left-10 z-10">
                                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg text-3xl sm:text-4xl">❤️
                                    </div>
                                </div>
                                <div className="absolute -top-2 right-12 sm:right-16 z-10">
                                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg text-3xl sm:text-4xl"><Image src={laravel} alt={'laravel'} className={'h-9 w-9'}/>
                                    </div>
                                </div>
                                <div className="absolute top-20 -right-4 sm:-right-8 z-10">
                                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg text-3xl sm:text-4xl">⚡️
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -left-4 sm:-left-8 z-10">
                                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg text-3xl sm:text-4xl">💻
                                    </div>
                                </div>
                                <div className="absolute bottom-16 -right-6 sm:-right-12 z-10">
                                    <div className="bg-white p-3 sm:p-3 rounded-xl shadow-lg text-3xl sm:text-4xl"><Image src={reactJs} alt={'reactJS'} className={'h-9 w-9'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/*<section className="py-16 md:py-24 border-t border-gray-100">*/}
                {/*    <h3 className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase">*/}
                {/*        Proud marketing partners with*/}
                {/*    </h3>*/}

                {/*    <div*/}
                {/*        className="mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10 items-center filter grayscale opacity-60">*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">Google</div>*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">amazon</div>*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">Spotify</div>*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">airbnb</div>*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">INTROX</div>*/}
                {/*        <div className="text-center text-4xl font-bold text-gray-500">NOXIS</div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <About/>
                <Education/>
                <Experience/>
                <Project/>
                <Skill/>
                <Footer/>
            </div>
        </>
    );
};

export default myPortofolio;
