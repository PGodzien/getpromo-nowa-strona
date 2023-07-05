"use client";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

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
            {/* NAVBAR */}
            <div className="bg-red-500 h-32 flex items-center">
                <div className="max-w-7xl container px-4 md:px-0 mx-auto bg-green-500 flex items-center justify-between">
                    <div className=""><Image alt="" src={Logo} /></div>
                    <div className="flex items-center">
                        <div className="h-0.5 bg-primary w-24"></div>
                        <div className="w-24 h-24 bg-primary flex items-center justify-center">
                            <svg
                                className="text-black flex group-hover:transition-all duration-300 group-hover:text-black"
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
                        <button className="" type="button" onClick={openModal}>
                            <div className="w-24 h-24 border-primary border-r border-t border-b flex justify-center items-center">
                                <svg
                                    className="text-primary group-hover:transition-all duration-300 group-hover:text-black"
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
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex h-full justify-end text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full h-full md:w-1/2 transform overflow-hidden bg-red-500 text-left align-middle shadow-xl transition-all">
                                            <nav className="relative z-10 px-9 pt-8 bg-blue-500 bg-opacity-50 h-full overflow-y-auto">
                                                <div className="flex flex-wrap justify-between h-full">
                                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-4">


                                                        <div className="flex items-center mr-20">
                                                            <div className="h-0.5 bg-primary w-24"></div>
                                                            <div className="w-24 h-24 bg-primary flex items-center justify-center">
                                                                <svg
                                                                    className="text-black flex group-hover:transition-all duration-300 group-hover:text-black"
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
                                                            <button className="" type="button" onClick={closeModal}>
                                                                <div className="w-24 h-24 border-primary border-r border-t border-b flex justify-center items-center">
                                                                    <svg
                                                                        className="text-primary group-hover:transition-all duration-300 group-hover:text-black"
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
                                                    <div className="flex flex-col font-serif justify-center py-16 w-full">
                                                        <ul>
                                                            <li className="mb-12"><Link className="font-medium hover:text-gray-700" onClick={closeModal} href="/oferta/">Oferta</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-gray-700" onClick={closeModal} href="/o-firmie/">O firmie</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-gray-700" onClick={closeModal} href="/referencje/">Referencje</Link></li>
                                                            <li><Link className="font-medium hover:text-gray-700" onClick={closeModal} href="/aktualnosci/">Aktualności</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-col justify-end w-full pb-8">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="block">
                                                                    <Link className="relative group inline-block py-4 px-7 font-semibold text-white hover:text-black rounded-full bg-black border-black border transition duration-300 overflow-hidden" href="#">
                                                                        <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                                        <span className="relative font-serif">Skontaktuj się</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
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