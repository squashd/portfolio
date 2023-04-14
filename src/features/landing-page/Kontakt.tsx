import Image from 'next/image';

import profilePic from 'public/images/profile.jpg';

const Kontakt = () => {
  return (
    <section
      className={`max-w-screen flex min-h-screen snap-center flex-col items-center justify-center gap-8`}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-xl font-bold">
            Lyst til å prate om prosjektet ditt?
          </h2>
          <div className="aspect-square w-32 overflow-hidden rounded-full">
            <Image src={profilePic} alt={'Profilbilde'} />
          </div>
          <div className="w-full">
            <p className="text-center text-lg font-light italic">
              Fyll inn skjemaet under så tar jeg
              <br />
              kontakt med deg så fort som mulig.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs">
        <form>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="name">
                Navn
              </label>
              <input
                className="h-7 appearance-none rounded-sm border border-gray-500 bg-gray-600 pl-2 outline-blue-400"
                type="text"
                id="name"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="email">
                E-post
              </label>
              <input
                className="h-7 appearance-none rounded-sm border border-gray-500 bg-gray-600 pl-2 outline-blue-400"
                type="email"
                id="email"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="telephone">
                Telefon
              </label>
              <input
                className="h-7 appearance-none rounded-sm border border-gray-500 bg-gray-600 pl-2 outline-blue-400"
                type="tel"
                id="telephone"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-bold uppercase" htmlFor="message">
                Melding
              </label>
              <textarea
                className="h-16 rounded-sm border border-gray-500 bg-gray-600 p-2"
                id="message"
              />
            </div>
            <button
              type="submit"
              className="mb-8 mt-2 h-7 w-full rounded-sm bg-blue-500 hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
