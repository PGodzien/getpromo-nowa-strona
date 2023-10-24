"use client";
import Link from "next/link";
import Logo from "@/public/getpromo-logo.svg";
import Sygnet from "@/public/getpromo-sygnet.svg";
import LogoBlack from "@/public/getpromo-logo-black.svg";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Linkedin from "@/public/linkedin.svg";
import Arrow from "@/public/arrow.svg";
import Image from "next/image";
import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]
const NavBar = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className="h-32 flex items-center bg-getDark backdrop-blur-md bg-opacity-90 sticky top-0 z-40">
                <div className="max-w-7xl container px-4 mx-auto flex items-center justify-between">
                    <Link href="/" className="relative z-30"><Image alt="" src={Logo} /></Link>
                    <div className="flex items-center relative z-30">
                        <div className="h-[1px] hidden md:block bg-primary w-24"></div>
                        <Link href="/kontakt">
                            <div className="w-24 h-24 bg-primary flex items-center justify-center">
                                <svg
                                    className="text-secondary flex group-hover:transition-all duration-300 group-hover:text-secondary"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 20V4.575L10.473 12.556C10.926 12.891 11.457 13.06 11.992 13.06C12.534 13.06 13.079 12.886 13.552 12.536L23 4.575V20H1ZM22.131 4L12.932 11.751C12.375 12.164 11.625 12.164 11.092 11.771L1.869 4H22.131ZM23.971 3.356C23.968 3.347 23.973 3.337 23.97 3.329C23.969 3.326 23.965 3.324 23.964 3.321C23.932 3.236 23.874 3.168 23.804 3.113C23.788 3.101 23.773 3.091 23.757 3.081C23.681 3.034 23.596 3 23.5 3H0.5C0.404 3 0.319 3.034 0.244 3.081C0.227 3.091 0.212 3.101 0.196 3.113C0.126 3.168 0.069 3.236 0.036 3.321C0.035 3.324 0.031 3.326 0.03 3.329C0.027 3.337 0.032 3.347 0.029 3.356C0.015 3.402 0 3.449 0 3.5V20.5C0 20.776 0.224 21 0.5 21H23.5C23.776 21 24 20.776 24 20.5V3.5C24 3.449 23.985 3.402 23.971 3.356V3.356Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <button className="outline-none" type="button" onClick={openModal}>
                            <div className="w-24 h-24 border-primary border-r border-t border-b flex justify-center items-center">
                                <svg
                                    className="text-primary group-hover:transition-all duration-300 group-hover:text-secondary"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 16.5C24 16.224 23.776 16 23.5 16H0.5C0.224 16 0 16.224 0 16.5C0 16.776 0.224 17 0.5 17H23.5C23.776 17 24 16.776 24 16.5M23.5 8H0.5C0.224 8 0 7.776 0 7.5C0 7.224 0.224 7 0.5 7H23.5C23.776 7 24 7.224 24 7.5C24 7.776 23.776 8 23.5 8"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-50" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gradient-to-l from-secondary via-secondary to-transparent" />
                            </Transition.Child>
                            <div className="fixed inset-0 w-full md:w-1/2 ml-auto">
                                <div className="flex h-full justify-end text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                                        enterFrom='translate-x-full'
                                        enterTo='translate-x-0'
                                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                                        leaveFrom='translate-x-0'
                                        leaveTo='translate-x-full'
                                    >
                                        <Dialog.Panel className="w-full h-full transform overflow-hidden text-left align-middle shadow-xl transition-all">
                                            <nav className="relative px-9 pt-8 bg-primary z-0 h-full">
                                                <div className="flex flex-wrap justify-between h-full">
                                                    <div className="absolute right-0 w-full">
                                                        <div className="flex items-center justify-between md:mx-20 px-4">
                                                            <div className="w-24 md:w-auto md:h-auto h-24 md:bg-transparent">
                                                                <Link className="outline-none" href="/">
                                                                    <Image alt="getpromo logo białe" className="hidden xl:block" src={LogoBlack} />
                                                                    <Image alt="czarny sygnet getpromo" className="block xl:hidden" src={Sygnet} />
                                                                </Link>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="h-[1px] bg-secondary hidden md:block w-24"></div>
                                                                <Link href="/kontakt">
                                                                    <div className="w-24 h-24 bg-secondary flex items-center justify-center">
                                                                        <svg
                                                                            className="text-primary flex group-hover:transition-all duration-300 group-hover:text-secondary"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M1 20V4.575L10.473 12.556C10.926 12.891 11.457 13.06 11.992 13.06C12.534 13.06 13.079 12.886 13.552 12.536L23 4.575V20H1ZM22.131 4L12.932 11.751C12.375 12.164 11.625 12.164 11.092 11.771L1.869 4H22.131ZM23.971 3.356C23.968 3.347 23.973 3.337 23.97 3.329C23.969 3.326 23.965 3.324 23.964 3.321C23.932 3.236 23.874 3.168 23.804 3.113C23.788 3.101 23.773 3.091 23.757 3.081C23.681 3.034 23.596 3 23.5 3H0.5C0.404 3 0.319 3.034 0.244 3.081C0.227 3.091 0.212 3.101 0.196 3.113C0.126 3.168 0.069 3.236 0.036 3.321C0.035 3.324 0.031 3.326 0.03 3.329C0.027 3.337 0.032 3.347 0.029 3.356C0.015 3.402 0 3.449 0 3.5V20.5C0 20.776 0.224 21 0.5 21H23.5C23.776 21 24 20.776 24 20.5V3.5C24 3.449 23.985 3.402 23.971 3.356V3.356Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                                <button className="outline-none" type="button" onClick={closeModal}>
                                                                    <div className="w-24 h-24 border-secondary border-r border-t border-b flex justify-center items-center">
                                                                        <svg
                                                                            className={`text-secondary`}
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M12.7072 12L20.8533 3.85401C21.0492 3.65801 21.0492 3.34201 20.8533 3.14601C20.6583 2.95101 20.3422 2.95101 20.1462 3.14601L12.0002 11.293L3.85325 3.14601C3.65825 2.95101 3.34225 2.95101 3.14625 3.14601C2.95125 3.34201 2.95125 3.65801 3.14625 3.85401L11.2933 12L3.14625 20.146C2.95125 20.342 2.95125 20.658 3.14625 20.854C3.24425 20.951 3.37225 21 3.50025 21C3.62825 21 3.75625 20.951 3.85325 20.854L12.0002 12.707L20.1462 20.854C20.2442 20.951 20.3722 21 20.5002 21C20.6283 21 20.7563 20.951 20.8533 20.854C21.0492 20.658 21.0492 20.342 20.8533 20.146L12.7072 12Z"
                                                                                fill="currentColor"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col mt-40 font-serif justify-center py-20 w-full md:mx-20">
                                                        <ul className="absolute inset-0">
                                                            <li className="mb-6 md:mb-12"><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} href="/o-nas">O agencji</Link></li>
                                                            <Disclosure>
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button className="flex items-center">
                                                                            <div className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white">Oferta</div>
                                                                            <div className=""><Image alt="strzałka" src={Arrow} className={open ? 'rotate-90 transform' : ''} /></div>
                                                                        </Disclosure.Button>
                                                                        <Transition
                                                                            show={open}
                                                                            enter='transform transition ease-in-out duration-200'
                                                                            enterFrom='-translate-x-full'
                                                                            enterTo='-translate-x-0'
                                                                            leave='transform transition ease-in-out duration-200'
                                                                            leaveFrom='-translate-x-0'
                                                                            leaveTo='-translate-x-full'
                                                                        >
                                                                            <Disclosure.Panel as="dd" static>
                                                                                <li className="mt-6"><Link className="ml-10 font-serif text-xl md:text-3xl hover:text-white" onClick={closeModal} href="/strony-internetowe">Strony internetowe</Link></li>
                                                                                <li className="mt-6"><Link className="ml-10 font-serif text-xl md:text-3xl hover:text-white" onClick={closeModal} href="/marketing">Marketing</Link></li>
                                                                                <li className="mt-6"><Link className="ml-10 font-serif text-xl md:text-3xl hover:text-white" onClick={closeModal} href="/projektowanie-graficzne">Projektowanie graficzne</Link></li>
                                                                            </Disclosure.Panel>
                                                                        </Transition>
                                                                    </>
                                                                )}
                                                            </Disclosure>
                                                            <li className="my-6 md:my-12"><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} href="/blog">Blog</Link></li>
                                                            <li className="my-6 md:my-12"><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} href="/kontakt">Kontakt</Link></li>
                                                            <div className="bg-secondary h-[1px] w-80"></div>
                                                        <ul className="flex items-end space-x-8 mt-12">
                                                            <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} target="_blank" href="https://www.facebook.com/GetpromoMarketing"><Image alt="Facebook" src={Facebook} /></Link></li>
                                                            <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} target="_blank" href="https://www.linkedin.com/company/getpromo/"><Image alt="Linkedin" src={Linkedin} /></Link></li>
                                                            <li className=""><Link className="mr-5 text-3xl md:text-5xl font-semibold font-serif text-secondary hover:text-white" onClick={closeModal} target="_blank" href="https://twitter.com/GetpromoReklama"><Image alt="Twitter" src={Twitter} /></Link></li>
                                                        </ul>
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                            </nav>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </>
    )
}

export default NavBar