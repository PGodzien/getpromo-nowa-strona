
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { reviews } from "./reviews-data.ts";
import { names } from "./reviews-data";
import quote from "../../public/quote-fill.svg";
import Image from "next/image";
import review from "../../public/review.png";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export const Opinions = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const reviewIndex = wrap(0, reviews.length, page);
  const nameIndex = wrap(0, names.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="relative">
        <Image alt="review" src={review} className="absolute hidden xl:block bottom-0 -left-36 w-full md:w-1/2 h-auto" />
        <div className="flex absolute md:relative right-0 z-20 bottom-0">
          <div className="ml-auto" onClick={() => paginate(-1)}>
            <div className="flex items-center justify-center cursor-pointer bg-secondary border-gray-500 border-t border-l border-r hover:bg-getGray w-16 h-16">
              <svg
                className="fill-gray-500 transform rotate-180 relative z-20 group-hover:fill-white group-hover:transition-all"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="currentColor"
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
          <div className="" onClick={() => paginate(1)}>
            <div className="flex cursor-pointer items-center bg-secondary border-gray-500 border-t border-r hover:bg-getGray  justify-center w-16 h-16">
              <svg
                className="fill-gray-500 relative z-20 group-hover:fill-white duration-500 group-hover:transition-all"
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
        </div>
        <div className="md:mx-auto h-64 text-left relative flex justify-center p-6 md:p-32 items-center bg-black border border-gray-500 backdrop-blur-sm bg-opacity-50">
          <Image className="absolute -top-10 left-10 w-24 h-auto hidden md:block" alt="" src={quote} />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}>
              <div className="max-w-4xl italic md:text-2xl">{reviews[reviewIndex]}</div>
              <div className="md:text-xl font-serif text-primary text-left mt-4 md:mb-0 mb-10">{names[nameIndex]}</div>
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </>
  );
};
