## My Personal Portfolio

Made primarily with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).
Using some features that are experimental or that I haven't used before, because _"Hey, why not?"_

Also, clients don't really care about the tech stack, so I can do whatever I want.

### Tested out

1. MDX to format articles and code blocks with [Tailwind typography](https://tailwindcss.com/docs/typography-plugin)
2. Using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to add some animations
3. The [App directory](https://beta.nextjs.org/docs/getting-started) – vroom, vroom

### To add at some point
1. Some sort of CMS to add pages without having to redeploy the site
   * [Sanity](https://www.sanity.io/) looks pretty cool
2. A dark mode toggle – currently the site only has a dark mode
   * Dangerously setting innerHTML with a script tag to set a class on the body may be a solution
3. Internationalization – I'm Norwegian so right now the site is in Norwegian
   > *Hvorfor skriver jeg da dokumentasjonen på engelsk?*
4. More projects to show off

### To change
1. Use the Intersection Observer API without a library
2. Replace anchor tags with Link components once it can handle hashes

### Neat things I learnt
1. How to add breadcrumbs using the [useSelectedLayoutSegments](https://beta.nextjs.org/docs/api-reference/use-selected-layout-segments) hook
2. Encoding/decoding URI components so I can have that beautiful **Ø** in portefølje

Probably not the stack I'd use for a client project or someone else's portfolio, but it was/is fun to play around with.
