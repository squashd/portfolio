import { SimpleLayout } from '@/components/SimpleLayout';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import type { ClassNameProps } from '@/types/Props';

export const metadata = {
  title: 'Prosjekter - Hjartland',
  description: 'Ting og tang jeg har laget.',
};

type projects = {
  name: string;
  description: string;
  link: { href: string; label: string };
  logo: SVGElement;
}[];

const projects: projects = [
  {
    name: 'Merkelappen.no',
    description: 'En nettside for å lage merkelapper.',
    link: { href: 'https://merkelappen.no', label: 'merkelappen.no' },
    logo: logoPlanetaria,
  },
];

function LinkIcon({ className }: ClassNameProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Ting jeg har laget"
        intro="Jeg har jobbet på en masse prosjekter, både som freelancer og som student. Her er noen av de jeg er mest stolt av."
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"></div>
      </SimpleLayout>
    </>
  );
}
