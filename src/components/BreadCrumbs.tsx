import Link from "next/link";

interface BreadCrumb {
  id: number;
  name: string;
  href: string;
}

export interface BreadCrumbNav {
  breadcrumbs: BreadCrumb[];
  finalBreadcrumb: BreadCrumb;
}

export interface BreadCrumbsProps {
  menu: BreadCrumbNav;
}

export default function BreadCrumb({ menu }: BreadCrumbsProps) {
  return (
    <div className="px-4 pt-6 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" className="flex items-center space-x-4">
          {menu.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <Link
                  href={breadcrumb.href}
                  className="mr-4 text-sm font-medium text-gray-200"
                >
                  {breadcrumb.name}
                </Link>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-sky-400"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <Link
              href={menu.finalBreadcrumb.href}
              aria-current="page"
              className="font-medium text-sky-400 hover:text-merkDark"
            >
              {menu.finalBreadcrumb.name}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
