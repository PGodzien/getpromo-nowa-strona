import Image from "next/image";
import { Testimonials } from "../../components/testimonials";
import CtaFooter from "../../components/ctaFooter";
import pattern from "../../public/pattern.svg";
import goddess from "../../public/goddess-blog.png";
import Link from "next/link";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'






export const metadata = {
  title: "Blog marketingowy",
  description: "Zagadnienia z zakresu stron internetowych, SEO/SEM, pozycjonowania stron i marketingu internetowego dla firm. Blog o marketingu."
}

export default function Marketing() {


  // 1) Set blogs directory
  const blogDir = "blogs"

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir))

  // 3) For each blog found
  const blogs = files.map(filename => {

    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent)

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  function addReviewJsonLd() {
    return {
      __html: `{
        
          "@context": "https://schema.org/",
          "@type": "CreativeWorkSeries",
          "name": "Blog Marketingowy",
          "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "ratingCount": "20"
          }
        
    }`,
    };
  };


  return (
    <>

      <link
        rel="canonical"
        href="https://getpromo.pl/blog"
        key="canonical"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addReviewJsonLd()}
        key="Review-jsonld"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://getpromo.pl/blog/" />
      <meta property="og:title" content="Blog marketingowy" />
      <meta property="og:description" content="Zagadnienia z zakresu stron internetowych, SEO/SEM, pozycjonowania stron i marketingu internetowego dla firm. Blog o marketingu." />
      <meta property="og:image" content="https://getpromo.pl/cover_blog.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://getpromo.pl/" />
      <meta property="twitter:title" content="Blog marketingowy" />
      <meta property="twitter:description" content="Zagadnienia z zakresu stron internetowych, SEO/SEM, pozycjonowania stron i marketingu internetowego dla firm. Blog o marketingu." />
      <meta property="twitter:image" content="https://getpromo.pl/cover_blog.jpg" />

      <div className="absolute z-50 -mt-32 shadow-2xl shadow-red-500 blur-2xl opacity-10 md:h-96 md:w-96 w-56 h-56 bg-red-600 top-0 rounded-full mx-auto left-0 right-0"></div>
      <div className="relative">

        <section className="relative z-10 max-w-7xl mx-auto py-6">
          {/* <div className="absolute inset-0 bg-getDark bg-opacity-70 md:bg-transparent z-20"></div> */}
          <div className="relative flex lg:flex-row flex-col-reverse lg:py-20 lg:space-y-0 items-center justify-between px-4 mx-auto container md:px-12 2xl:px-0 lg:max-w-screen-2xl">
            <div className="space-y-8 lg:-mt-28 max-w-lg 2xl:max-w-2xl relative z-20 w-full mt-12">
              <h1
                className="font-serif leading-tight text-white text-4xl font-semibold lg:text-5xl 2xl:text-6xl">
                Blog <br /> marketingowy</h1>
              <p className="max-w-xl relative md:text-xl z-10 text-white ">Blog o strategiach, narzędziach i trendach. Rozwijaj swoje umiejętności marketingowe, dowiedz się, jak zwiększyć zasięg i pozyskiwać nowych klientów. </p>
              <button className="cursor-pointer" type="button">
                <a href="#blog" className="flex items-center">
                  <div className="hidden md:block w-24 relative z-50 h-[1px] bg-primary"></div>
                  <div className="relative overflow-clip border border-primary z-10 group flex">
                    <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-primary"></span>
                    <div className="relative group-hover:bg-transparent bg-primary h-16">
                      <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-black">
                        idź do artykułów</p>
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 tranform rotate-90">
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
            <div className="relative lg:w-1/2">
              <Image className="relative" alt="design-god" src={goddess} />
              <div className="animate-flash -z-10 w-10 h-10 p-44 sd:p-64 xl:p-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-3">
                <div className="absolute inset-0 z-10 m-0.5  bg-transparent border-8 border-red-500 blur rounded-full"></div>
                <div className="absolute inset-0 z-20  bg-transparent border-4 border-white rounded-full"></div>
                <div className="absolute inset-0 z-10 -m-1  bg-transparent border-8 border-red-500 blur rounded-full"></div>
              </div>
              <p className="absolute bottom-20 right-20 text-white font-serif font-semibold text-4xl"><span className="text-primary">Dioniz</span>blog</p>
            </div>
          </div>
          <Image className="hidden -z-10 lg:block mx-auto absolute top-96 inset-0" src={pattern} alt="" />
        </section>



        <section id="blog" className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto container px-8">
            {blogs.map(blog => (
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                <div className="py-6 md:py-12 border-t-2 border-getGray">
                  <div className="flex flex-wrap lg:flex-nowrap items-center">
                    <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
                      <div className="max-w-2xl">
                        <span className="block text-gray-400 mb-1">{blog.meta.date}</span>
                        <p className="md:text-2xl font-semibold text-gray-200 hover:text-primary duration-100 transition font-serif">{blog.meta.title}</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-auto px-4 ml-auto text-right">
                      <div className="inline-flex items-center md:text-xl font-semibold text-primary hover:text-gray-200">
                        <span className="font-serif mr-2">Czytaj</span>
                        <svg className="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="pt-12 border-t-2 border-getGray"></div>
            {/* <div className="pt-12 border-t-2 border-getGray text-center">
              <button className="cursor-pointer" type="button">
                <a href="#_" className="flex items-center">
                  <div className="hidden md:block w-24 relative z-50 h-[1px] bg-primary"></div>
                  <div className="relative overflow-clip border border-primary z-10 group flex">
                    <span className="absolute w-full h-full -left-full bg-transparent z-10 group-hover:left-0 duration-500 box-border group-hover:transition-all group-hover:duration-500 group-hover:bg-primary"></span>
                    <div className="relative group-hover:bg-transparent bg-primary h-16">
                      <p className="flex relative z-20 items-center justify-center h-16 px-8 font-serif font-medium text-center group-hover:text-black">
                        Więcej artykułów</p>
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
            </div> */}
          </div>
        </section>
      </div>
      <Testimonials />
      <CtaFooter />
    </>
  );
}