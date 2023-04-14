import Link from 'next/link';
const NavBar = () => (
  <>
    <nav className="absolute z-10 flex w-screen items-center justify-between p-4 px-8">
      <Link href="/">
        <div className=" transition hover:animate-[spin_2000ms_ease-in-out_infinite] hover:text-blue-400 hover:transition hover:ease-in">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 129.5 129.5"
            enableBackground="new 0 0 129.5 129.5"
            className="aspect-square w-12"
            fill="currentColor"
          >
            <g>
              <path
                d="M64.7,0C29,0,0,29,0,64.7c0,35.8,29,64.7,64.7,64.7c35.8,0,64.7-29,64.7-64.7C129.5,29,100.5,0,64.7,0z
		 M64.7,120.3c-30.7,0-55.5-24.9-55.5-55.5c0-30.7,24.9-55.5,55.5-55.5c30.7,0,55.5,24.9,55.5,55.5
		C120.3,95.4,95.4,120.3,64.7,120.3z"
              />
              <path
                d="M94.5,50.6c-5.5-2.8-11.5-4.2-17.7-4.2c-8.1,0-16.2,2.6-22.8,7.3l-6.8,4.9l5.6-6.2
		c7.8-8.6,18.9-13.5,30.5-13.5c6.5,0,12.7,1.5,18.5,4.4c2.9,1.5,5.6,3.2,8,5.3c-6.7-18.5-24.3-31.6-45.1-31.6
		c-24.9,0-45.4,19-47.7,43.4C20.6,68,26.8,74.7,35,78.9c5.6,2.8,11.5,4.2,17.7,4.2c8.1,0,16.2-2.6,22.8-7.3l6.8-4.9l-5.6,6.2
		c-7.8,8.6-18.9,13.5-30.5,13.5c-6.5,0-12.7-1.5-18.5-4.4c-2.9-1.5-5.6-3.2-8-5.3c6.7,18.5,24.3,31.6,45.1,31.6
		c24.9,0,45.4-19,47.7-43.4C108.9,61.5,102.7,54.8,94.5,50.6z"
              />
            </g>
          </svg>
        </div>
      </Link>
      <ul className="flex font-bold uppercase">
        <li className="border-r px-2 transition hover:text-sky-400 hover:transition hover:ease-in-out">
          <Link href={'/'}>Hjem</Link>
        </li>
        <li className="border-r px-2 transition hover:text-sky-400 hover:transition hover:ease-in">
          <Link href={'/prosjekter'}>Prosjekter</Link>
        </li>
        <li className="pl-2 transition hover:text-sky-400 hover:transition hover:ease-in">
          <Link href={'/kontakt'}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default NavBar;
