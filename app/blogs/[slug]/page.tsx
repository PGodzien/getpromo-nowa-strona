import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CtaFooter from '@/components/ctaFooter'
import facebook from "@/public/facebook-green.svg";
import twitter from "@/public/twitter-dark.svg";
import linkedin from "@/public/linkedin-white.svg";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export async function generateMetadata({ params }: any) {
    const blog = getPost(params);

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <>
            <section className='bg-white py-20 relative'>
                <div className="max-w-7xl relative flex mx-auto">
                    {/* <div className="sticky top-10 lg:block hidden">
                        <div className="h-20 w-20 flex justify-center items-center border-r border-l border-t">
                            <Image src={facebook} alt='Facebook' />
                        </div>
                        <div className="h-20 w-20 border"></div>
                        <div className="h-20 w-20 border-b border-l border-r"></div>
                    </div> */}
                    <article className='prose lg:prose-lg mx-auto prose-headings:font-serif prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-loose prose-p:text-lg prose-strong:font-medium px-12'>
                        <h1 className='font-semibold'>{props.frontMatter.title}</h1>
                        <MDXRemote source={props.content} />
                    </article>
                    <div className="sticky top-40 h-80 w-80 border lg:flex hidden">
                        {/* <Image className="" src={goddessPhone} alt="Getpromo logo black" /> */}
                        <div className="p-10 space-y-12">
                            <p className="font-serif text-3xl">Bezpłatna konsultacja marketingowa</p>
                            <button className="cursor-pointer" type="button">
                                <a href="#kontakt" className="flex items-center">
                                    <div className="relative overflow-clip border border-black z-10 group flex">
                                        <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-black"></span>
                                        <div className="relative group-hover:bg-transparent bg-transparent border-r border-black h-16">
                                            <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-primary">
                                                skontaktuj się</p>
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16">
                                            <svg
                                                className="fill-black relative z-20 group-hover:fill-primary duration-500 group-hover:transition-all"
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
                    </div>
                </div>
            </section>
            <CtaFooter />
        </>
    )
}