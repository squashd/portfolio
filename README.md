## My Personal Portfolio

Made primarily with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).
Using some features that are experimental or that I haven't used before, because _"Hey, why not?"_

Also, clients don't really care about the tech stack, so I can do whatever I want.

> **Updated 2023-24-05:**
> Added a dark mode toggle and some more projects

### Tested out

1. MDX to format articles and code blocks with [Tailwind typography](https://tailwindcss.com/docs/typography-plugin)
   
   - Seen a different implementation using contentlayer which I'll be adding at some point
 
2. Using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to add some animations
3. The [App directory](https://beta.nextjs.org/docs/getting-started) – vroom, vroom
   
   - *No long in Beta, so not quite as cool anymore*

### To add at some point
1. Some sort of CMS to add pages without having to redeploy the site
   * [Sanity](https://www.sanity.io/) looks pretty cool
   * Though if I use content layer it'd be just implemented to learn how
2. Internationalization – I'm Norwegian, but it'd be nice to have the site in English as well
   > *Hvorfor skriver jeg da dokumentasjonen på engelsk?*

### To change
1. Figure out why the Link component won't cooperate when overflow is set to to scroll so I have to use normal anchor tags, which isn't really a problem but is very annoying and why asdkjaksdjaksdjasd

### Neat things I learnt
1. How to add breadcrumbs using the [useSelectedLayoutSegments](https://beta.nextjs.org/docs/api-reference/use-selected-layout-segments) hook
2. Encoding/decoding URI components, so I can have that beautiful **Ø** in portefølje

Probably not the stack I'd use for a client project or someone else's portfolio, but it was/is fun to play around with.
