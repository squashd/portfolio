const Page = () => {
  return (
    <>
      <main className="h-screen w-screen overflow-scroll scroll-smooth">
        <section className="w-screen flex flex-col items-center justify-center">
          <div className="h-64 flex flex-col items-center justify-center">
            <h1 className="uppercase text-6xl font-black bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text text-transparent">
              The Odin Project
            </h1>
            <div className="flex flex-col text-center gap-4">
              <p className="border-y font-light italic text-xl py-2">
                The Odin Project var et omfattende fullstack kurs jeg fullførte i
                oktober 2022.
                <br />
                Jeg startet kurset i august samme år, og det ga meg en omfattende
                introduksjon til moderne teknologier innen webutvikling.
                <br />
                The Odin Project er prosjektbasert, og her kan du se noen av
                prosjektene jeg laget underveis.
              </p>
              <p>
                Kurset startet med grunnleggende HTML og CSS,og deretter lærte
                jeg å bruke JavaScriptbåde på klient- og server-siden.Jeg fikk
                også min første introduksjon til React.
              </p>
              <p>
                Jeg lærte også om server-side teknologier som NodeJS og Express,
                og fikk noe opplæring i databaseadministrasjon med MongoDB
                samtidig som jeg lærte MySQL på Gokstad Akademiet.
              </p>
              <p>
                Alt i alt ga The Odin Project meg en omfattende og praktisk
                forståelse av moderne teknologier innen webutvikling, og jeg føler
                meg nå mer trygg på å utvikle mine egne webapplikasjoner. Kurset
                ga meg også et solid grunnlag for videre utvikling av ferdigheter
                i feltet.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
