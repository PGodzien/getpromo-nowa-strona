"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Image from "next/image";

// Import your images here
import radio from "../public/radio.jpg";
import shoprimo from "../public/shoprimo.jpg";
import dgc from "../public/dgc.jpg";
import przystanek from "../public/przystanek.jpg";
import weldoro from "../public/weldoro.jpg";
import barber from "../public/barber.jpg";
import damansdak from "../public/damansdak.jpg";
import anilama from "../public/anilama.jpg";
import harmonia from "../public/harmonia.jpeg";
import sep from "../public/sep.jpg";
import deski from "../public/deski.jpeg";
import skycar from "../public/skycar.jpeg";
import transbet from "../public/transbet.jpg";
import adblue from "../public/adblue.jpg";
import agrofruct from "../public/agrofruct.jpg";

// Define images for each row
const row1Images = [
    { src: radio, alt: "Polskie Radio Bielsko-Biała strona internetowa" },
    { src: shoprimo, alt: "Shoprimo strona www" },
    { src: dgc, alt: "D&G Consulting - strona konsultingowa" },
    { src: przystanek, alt: "Strona www dla hotelu" },
    { src: weldoro, alt: "Strona dla sklepu internetowego" },
];

const row2Images = [
    { src: barber, alt: "BarberRoom strona internetowa" },
    { src: damansdak, alt: "Strona dla producenta dachów płaskich" },
    { src: anilama, alt: "Strona dla agencji eventowej" },
    { src: harmonia, alt: "Strona medycyny chińskiej i ziołolecznictwa" },
    { src: sep, alt: "Strona www Stowarzyszenie Elektryków Polkskich" },
];

const row3Images = [
    { src: deski, alt: "Strona internetowa dla agencji turystycznej" },
    { src: skycar, alt: "Strona www tapicer samochodowy" },
    { src: transbet, alt: "Strona dla betoniarnii" },
    { src: adblue, alt: "Strona internetowa dla agencji turystycznej" },
    { src: agrofruct, alt: "Strona dla producenta przetworów owocowych" },
];

export default function InfiniteCarousel() {
    // Duplicate the images array to create a seamless loop
    const duplicateImages = (images: typeof row1Images) => [...images, ...images];

    return (
        <section className="bg-white">
            <div className="bg-white py-16 relative overflow-hidden">
                {/* Gradient overlay for the left side */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Gradient overlay for the right side */}
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Container for the carousel */}
                <div className="mx-auto xl:w-3/4 px-4 relative">
                    {/* Row 1 */}
                    <motion.div
                        className="flex mb-8"
                        animate={{
                            x: ["0%", "-100%"], // Move from 0% to -100% (left)
                        }}
                        transition={{
                            duration: 20, // Adjust the duration for slower/faster scrolling
                            ease: "linear",
                            repeat: Infinity, // Loop infinitely
                        }}
                    >
                        {duplicateImages(row1Images).map((image, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex-shrink-0 xl:border-4 border-2 border-white shadow-lg mx-2"
                                style={{ width: "450px", height: "300px" }} // Adjust image size as needed
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    width={450}
                                    height={300}
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        className="flex mb-8"
                        animate={{
                            x: ["-100%", "0%"], // Move from -100% to 0% (right)
                        }}
                        transition={{
                            duration: 20, // Adjust the duration for slower/faster scrolling
                            ease: "linear",
                            repeat: Infinity, // Loop infinitely
                        }}
                    >
                        {duplicateImages(row2Images).map((image, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex-shrink-0 xl:border-4 border-2 border-white shadow-lg mx-2"
                                style={{ width: "450px", height: "300px" }} // Adjust image size as needed
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    width={450}
                                    height={300}
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 3 */}
                    <motion.div
                        className="flex"
                        animate={{
                            x: ["0%", "-100%"], // Move from 0% to -100% (left)
                        }}
                        transition={{
                            duration: 20, // Adjust the duration for slower/faster scrolling
                            ease: "linear",
                            repeat: Infinity, // Loop infinitely
                        }}
                    >
                        {duplicateImages(row3Images).map((image, index) => (
                            <div
                                key={`row3-${index}`}
                                className="flex-shrink-0 xl:border-4 border-2 border-white shadow-lg mx-2"
                                style={{ width: "450px", height: "300px" }} // Adjust image size as needed
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    width={450}
                                    height={300}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}