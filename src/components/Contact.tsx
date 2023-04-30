import Image from "next/image";
import logoWhite from "../../public/hjartland_hvit.svg";
import profilePicture from "../assets/images/profile.jpg";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-neutral-200">
          Lyst til å prate om prosjektet ditt?
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-200">
          Jeg hjelper til med det som trengs.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-neutral-200"
                >
                  Fornavn
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-neutral-800 px-3.5 py-2 text-neutral-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-neutral-200"
                >
                  Etternavn
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-neutral-800 px-3.5 py-2 text-neutral-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold leading-6 text-neutral-200"
                >
                  Budsjett
                </label>
                <div className="mt-2.5">
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="block w-full rounded-md border-0 bg-neutral-800 px-3.5 py-2 text-neutral-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-semibold leading-6 text-neutral-200"
                >
                  Webside
                </label>
                <div className="mt-2.5">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    className="block w-full rounded-md border-0 bg-neutral-800 px-3.5 py-2 text-neutral-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-neutral-200"
                >
                  Melding
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-neutral-800 px-3.5 py-2 text-neutral-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition ease-out hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                La oss ta en prat
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Ved å innsending av skjemaet godtar du&nbsp;
              <Link href={"/personvern"} className="font-semibold text-sky-600">
                personvernerklæringen
              </Link>
              .
            </p>
          </form>
          <div className="text-white lg:mt-6 lg:w-80 lg:flex-none">
            <Image
              className="h-12 w-auto text-white"
              src={logoWhite}
              alt="Hjartland logo"
            />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-neutral-200">
                <p>
                  “Jeg tar en helhetlig tilnærming når jeg utvikler, og sikter
                  alltid mot å levere pålitelige og brukervennlige løsninger som
                  gir kundene mine en fantastisk opplevelse.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={profilePicture}
                    alt=""
                    className="h-16 w-16 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-neutral-200">
                      Daniel Hjartland
                    </div>
                    <div className="text-sm leading-6 text-gray-400">
                      Fullstack utvikler
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
