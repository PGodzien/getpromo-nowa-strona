'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Ile kosztuje strona internetowa?",
        answer:
            "Cena strony internetowej zależy od jej wielkości, funkcji oraz technologii i metod, którymi została wykonana. Cennik stron internetowych może wyglądać inaczej dla różnego rodzaju projektów. Prosta wizytówka może kosztować kilkaset złotych, bardziej złożona strona firmowa to koszty ok. 2500-3500 zł, natomiast duże i zaawansowane serwisy mogą kosztować kilkadziesiąt lub kilkaset tysięcy złotych.",
    },
    {
        question: "Czy Getpromo wykonuje aktualizowanie stron internetowych?",
        answer:
            "Tak, w ramach naszych usług realizujemy regularne aktualizacje stron internetowych. Aktualizacje dotyczą technologii, aktualizacji motywów, wtyczek oraz aktualizacji treści zawartych na stronie internetowej - aktualizacja treści, obrazów, dodawanie nowych podstron itp. ",
    },
    {
        question: "Jak długo trwa projektowanie i tworzenie strony internetowej?",
        answer:
            "Proces budowania strony internetowej zwykle trwa ok. 2-4 tygodni. Dużo zależy od wielkości projektu oraz od zaangażowania firmy zlecającej tworzenie strony www - niektóre rzeczy wymagają akceptacji lub dosłania materiałów, które powinny znaleźć się na stronie. Małe projekty zazwyczaj są gotowe w około dwa tygodnie. ",
    },
    {
        question: "Czy moja strona będzie zoptymalizowana pod kątem wyszukiwarek internetowych?",
        answer:
            "Pozycjonowanie stron internetowych to bardzo istotny elementów strategii biznesowych firm. Zajmujemy się projektowaniem stron internetowych, które są zoptymalizowane z uwzględnieniem SEO. Dodatkowo istnieje możliwość wykupienia opcji pozycjonowania strony internetowej po jej przekazaniu dla klienta.",
    },
    {
        question: "Jak strona będzie wyglądać na urządzeniach mobilnych?",
        answer:
            "Strona zostanie zaprojektowana z zastosowaniem podejścia responsywnego, co oznacza, że będzie dostosowana i dobrze wyglądać na różnych urządzeniach mobilnych o różnych rozmiarach ekranu. To ważne dla doświadczenia użytkownika i pozycji w wynikach wyszukiwania.",
    },
    {
        question: "Co z hostingiem i domeną?",
        answer:
            "Jeżeli klient posiada domenę i hosting to korzystamy z jego zaplecza i umieszczamy stronę na wybranym serwerze www pod wskazanym adresem. Jeżeli klient nie posiada domeny i serwera zapewniamy je w ramach naszych usług utrzymania i zarządzania stroną internetową.",
    },
    {
        question: "Czy można samodzielnie zarządzać treścią na stronie?",
        answer:
            "Tak, jeżeli klient zdecyduje się na stronę, która jest oparta o system zarządzania treścią (CMS), to taka strona pozwala właścicielom na samodzielne dodawanie, edytowanie i usuwanie treści, takich jak artykuły, zdjęcia czy produkty.",
    },
    {
        question: "Czy istnieje wsparcie techniczne po wdrożeniu strony?",
        answer:
            "Tak, oferujemy pełne wsparcie techniczne po wdrożeniu strony internetowej. Możesz podpisać umowę na utrzymanie strony oraz wsparcie w razie problemów technicznych.",
    },
]

export default function Faq() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-semibold leading-10 font-serif tracking-tight text-gray-900">Najczęściej zadawane pytania</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-lg font-semibold font-serif leading-7">{faq.question}</span>
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
