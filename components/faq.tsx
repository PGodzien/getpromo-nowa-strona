'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Co to jest strona internetowa i dlaczego moja firma w Rzeszowie potrzebuje własnej strony?",
        answer:
            "Strona internetowa to witryna online, na której można prezentować swoją firmę, produkty lub usługi. Dla firm w Rzeszowie jest to ważne narzędzie, które pozwala dotrzeć do klientów online, budować świadomość marki i zwiększać dostępność informacji o firmie.",
    },
    {
        question: "Jakie korzyści przynosi posiadanie strony internetowej dla firmy w Rzeszowie?",
        answer:
            "Posiadanie strony internetowej pozwala na: zwiększenie widoczności firmy w Internecie, dostępność informacji 24/7 dla klientów, prezentację oferty, zdjęć produktów i opinii klientów, komunikację z klientami poprzez formularze kontaktowe, budowanie zaufania do firmy.",
    },
    {
        question: "Jak długo trwa projektowanie i tworzenie strony internetowej?",
        answer:
            "Czas tworzenia strony internetowej zależy od jej skomplikowania. Prosty projekt może być gotowy ju w tydzień, podczas gdy bardziej zaawansowane strony mogą wymagać kilku miesięcy. Ważne jest, aby współpracować z agencją podczas tworzenia strony.",
    },
    {
        question: "Jakie informacje powinny znaleźć się na stronie internetowej firmy w Rzeszowie?",
        answer:
            "Na stronie powinny być podane podstawowe informacje, takie jak nazwa firmy, adres, numer telefonu i godziny otwarcia. Warto także uwzględnić opis oferty, informacje o zespołu, galerię zdjęć, opinie klientów oraz formularz kontaktowy.",
    },
    {
        question: "Ile kosztuje stworzenie strony internetowej dla firmy w Rzeszowie?",
        answer:
            "Koszty projektowania strony internetowej różnią się w zależności od jej rozmiaru i funkcjonalności. Koszt może wynosić od kilkuset złotych, w przypadku bardzo prostych stron, do kilkuset tysięcy złotych. Warto skonnsultować się ze specjalistą w zakresie technologii i rozwiązań, aby nie generować niepotrzebnych kosztów.",
    },
    {
        question: "Czy strona internetowa musi być dostosowana do urządzeń mobilnych?",
        answer:
            "Tak, strona internetowa powinna być responsywna, czyli dostosowana do różnych urządzeń, w tym smartfonów i tabletów. To ważne, aby zapewnić użytkownikom wygodne przeglądanie strony na dowolnym urządzeniu.",
    },
    {
        question: "Czy można samodzielnie zarządzać treścią na stronie?",
        answer:
            "Tak, jeżeli klient zdecyduje się na stronę, która jest oparta o system zarządzania treścią (CMS), to taka strona pozwala właścicielom na samodzielne dodawanie, edytowanie i usuwanie treści, takich jak artykuły, zdjęcia czy produkty.",
    },
    {
        question: "Czy istnieje konieczność optymalizacji SEO dla strony internetowej?",
        answer:
            "Tak, optymalizacja SEO (Search Engine Optimization) pomaga zwiększyć widoczność strony w wynikach wyszukiwania Google. Jest to istotne, jeśli chcesz przyciągnąć więcej klientów online. Budowane przez nas strony uwzględniają dobre praktyki z obszaru pozycjonowania.",
    },
    {
        question: "Jak mogę promować swoją stronę internetową w Rzeszowie?",
        answer:
            "Promocja strony internetowej może obejmować kampanie reklamowe w Internecie, działania na mediach społecznościowych, lokalne katalogi biznesowe oraz tradycyjne formy reklamy. Ważne jest także monitorowanie i analiza wyników działań promocyjnych.",
    },
    {
        question: "Czy istnieje wsparcie techniczne po wdrożeniu strony?",
        answer:
            "Tak, oferujemy pełne wsparcie techniczne po wdrożeniu strony internetowej. Możesz podpisać umowę na utrzymanie strony oraz wsparcie w razie problemów technicznych.",
    },
]

export default function Faq() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-medium leading-10 tracking-tight text-gray-900">Najczęściej zadawane pytania</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-lg font-medium font-serif leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
