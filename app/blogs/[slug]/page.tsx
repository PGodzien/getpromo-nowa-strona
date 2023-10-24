import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Cta from '@/components/cta'
import CtaFooter from '@/components/ctaFooter'

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
            <section className='bg-white py-20'>
                <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto'>
                    <h1 className='font-serif font-semibold'>{props.frontMatter.title}</h1>
                    <MDXRemote source={props.content} />
                </article>
            </section>
            <CtaFooter />
        </>
    )
}