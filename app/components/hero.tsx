import Image from 'next/image';
import pattern from "../../public/pattern.svg";
import apollo from "../../public/apollo.png";

export default function Hero() {
    return (
        <>
            <div className="absolute z-20 -mt-72 blur-3xl opacity-10 p-60 h-10 w-10 bg-primary top-0 rounded-full mx-auto left-0 right-0"></div>
            <div className="">
                <section className="relative z-10 w-full py-6 overflow-visible bg-transparent">
                    <div className="relative flex lg:flex-row flex-col py-20 md:py-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
                        <div className="space-y-8 lg:-mt-28 max-w-lg 2xl:max-w-2xl relative z-20 w-full">
                            <h1
                                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-5xl 2xl:text-6xl">
                                Agencja marketingu cyfrowego</h1>
                            <p className="max-w-3xl md:text-2xl relative z-10 text-white ">Wykorzystaj design, marketing i nowe technologie, by wyprzedzić konkurencję.</p>
                            <button className="cursor-pointer" type="button">
                                <a href="#kontakt" className="flex items-center">
                                    <div className="hidden md:block w-24 relative z-50 h-0.5 bg-primary"></div>
                                    <div className="relative overflow-clip border border-primary z-10 group flex">
                                        <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-primary"></span>
                                        <div className="relative group-hover:bg-transparent bg-primary h-16">
                                            <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-black">
                                                skontaktuj
                                                się</p>
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16">
                                            <svg
                                                className="fill-white relative z-20 group-hover:fill-black duration-500 group-hover:transition-all"
                                                width="24"
                                                height="19"
                                                viewBox="0 0 24 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M23.853 9.85425L14.854 18.8542C14.756 18.9512 14.628 19.0002 14.5 19.0002C14.373 19.0002 14.245 18.9512 14.147 18.8542C13.952 18.6582 13.952 18.3422 14.147 18.1462L22.293 10.0002H0.5C0.224 10.0002 0 9.77625 0 9.50025C0 9.22425 0.224 9.00025 0.5 9.00025H22.293L14.147 0.85425C13.952 0.65825 13.952 0.34225 14.147 0.14625C14.342 -0.04875 14.659 -0.04875 14.854 0.14625L23.853 9.14625C23.9 9.19225 23.937 9.24825 23.962 9.30925C24.012 9.43125 24.012 9.56925 23.962 9.69125C23.937 9.75225 23.9 9.80825 23.853 9.85425"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </button>
                        </div>
                        <div className="w-full absolute inset-0 lg:relative overflow-hidden">
                            <Image className="relative h-full" alt="design-god" src={apollo} />
                            <div className="animate-flash -z-10 w-10 h-10 p-40 md:p-72 absolute top-1/2 m-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-4 border-primary blur-sm rounded-full"></div>
                                <div className="absolute inset-0 z-20  bg-transparent border-2 border-white rounded-full"></div>
                                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-4 border-primary blur-sm rounded-full"></div>
                            </div>
                            <div className="absolute bg-gradient-to-tl from-getDark w-full h-full to-transparent inset-0"></div>
                        </div>
                    </div>
                    <Image className="hidden h-full -mt-96 -z-10 lg:block object-none absolute" src={pattern} alt="" />
                </section>
            </div>
        </>
    )
}



