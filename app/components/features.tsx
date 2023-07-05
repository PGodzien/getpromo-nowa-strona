import Link from "next/link";


const Features = () => {
    return (
        <>
            <div className="container px-4 mx-auto max-w-6xl py-12">
                {/* marketing */}
                <div className="bg-secondary flex flex-col items-center text-center py-20 space-y-10 w-full md:w-1/2 text-white">
                    <h3 className="max-w-xs font-serif text-3xl md:text-4xl font-semibold">Marketing internetowy</h3>
                    <p className="max-w-sm leading-loose">Pozycjonowanie stron internetowych, kampanie marketingowe Google i Facebook Ads, SEO/SEM. Tworzymy kampanie, które generują wyniki i zwiększają sprzedaż.</p>
                    <button className="flex items-center">
                        <div className="w-24 bg-primary h-[1px]"></div>
                        <Link href="/marketing-internetowy">
                            <div className="w-16 h-16 flex justify-center bg-transparent items-center border border-primary group hover:bg-primary">
                                <svg
                                    className="text-primary group-hover:text-secondary"
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
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </button>
                </div>
                {/* strony internetowe */}
                <div className="bg-primary md:ml-auto md:-mt-56 flex flex-col items-center text-center py-20 space-y-10 w-full md:w-1/2">
                    <h3 className="max-w-xs font-serif text-3xl md:text-4xl font-semibold">Tworzenie stron www</h3>
                    <p className="max-w-sm leading-loose">Strony www, sklepy internetowe, landing page i wizytówki internetowe. Nasz cel to dostarczenie Ci strony internetowej, która wzbudza zaufanie i zwiększa sprzedaż.</p>
                    <button className="flex items-center">
                        <div className="w-24 bg-secondary h-[1px]"></div>
                        <Link href="/strony-internetowe">
                            <div className="w-16 h-16 flex justify-center items-center border border-secondary group hover:bg-secondary">
                                <svg
                                    className="text-secondary group-hover:text-primary"
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
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </button>
                </div>
                {/* projektowanie graficzne */}
                <div className="md:mr-auto md:-mt-72 flex flex-col items-center text-center py-20 space-y-10 w-full md:w-1/2 bg-white">
                    <h3 className="max-w-xs font-serif text-3xl md:text-4xl font-semibold">Projektowanie graficzne</h3>
                    <p className="max-w-sm leading-loose">Logo, projekty graficzne i druk. Profesjonalnie i szybko dostarczamy wysokiej jakości materiały, które przez długi czas pracują dla naszych klientów.</p>
                    <button className="flex items-center">
                        <div className="w-24 bg-secondary h-[1px]"></div>
                        <Link href="/projektowanie-graficzne">
                            <div className="w-16 h-16 flex justify-center items-center border border-secondary group hover:bg-secondary">
                                <svg
                                    className="text-secondary group-hover:text-white"
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
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};
export default Features;
