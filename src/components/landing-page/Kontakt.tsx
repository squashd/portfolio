import Image from 'next/image';

import profilePic from 'public/images/profile.jpg';

const Kontakt = () => {
  return (
    <section
      className={`max-w-screen flex min-h-screen snap-start flex-col items-center justify-center gap-8`}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-xl font-bold">
            Lyst til å prate om prosjektet ditt?
          </h2>
          <div className="flex flex-row items-center gap-4">
            <p className="text-center text-sm font-light italic sm:text-lg">
              Fyll inn skjemaet nedenfor så tar jeg
              <br />
              kontakt med deg så fort som mulig.
            </p>
            <div className="aspect-square w-16 overflow-hidden rounded-full sm:w-24">
              <Image src={profilePic} alt={'Profilbilde'} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm lg:max-w-lg">
        <form>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="name">
                Navn*
              </label>
              <input
                className="h-7 appearance-none rounded-md border border-blue-300 bg-neutral-800 py-4 pl-2 text-sm  outline-blue-400 placeholder:italic"
                placeholder="Kari Normann"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="company">
                Firma
              </label>
              <input
                className="h-7 appearance-none rounded-md border border-blue-300 bg-neutral-800 py-4 pl-2 text-sm  outline-blue-400 placeholder:italic"
                placeholder="Kari Normann AS"
                type="text"
                id="company"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="email">
                E-post*
              </label>
              <input
                className="h-7 appearance-none rounded-md border border-blue-300 bg-neutral-800 py-4 pl-2 text-sm  outline-blue-400 placeholder:italic"
                placeholder="kari@normann.no"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="telephone">
                Telefon*
              </label>
              <input
                className="h-7 appearance-none rounded-md border border-blue-300 bg-neutral-800 py-4 pl-2 text-sm outline-blue-400 placeholder:italic"
                placeholder="123 45 678"
                type="tel"
                id="telephone"
                required
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="message">
                Melding
              </label>
              <textarea
                className="h-16 rounded-md border border-blue-300 bg-neutral-800 p-1 text-sm placeholder:italic"
                placeholder="Fortell meg litt om prosjektet ditt."
                id="message"
              />
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                type="submit"
                className="relative z-[2] mb-4 flex h-8 w-full items-center justify-center overflow-hidden rounded-md bg-blue-500 font-bold uppercase before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-blue-600 before:bg-clip-content before:transition-all before:duration-[400ms] before:ease-out before:hover:w-full"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
