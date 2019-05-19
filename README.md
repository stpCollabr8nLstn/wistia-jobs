# Wistia Front-end Engineer Coding Exercise

## Process Notes

I'm intrigued by the `LongForm` component and how the components are structured, in general. I come from using either `SCSS` or `styled-components`. Understanding how to format the styles correctly took me a bit to grasp.

I admit I found myself wanting to inspect the mockup image in hopes of finding specs. Working without a designer is rough and this exercise just cements my belief that teams should be cross-disipline.

I have questions about the `:global()` selector. I read a couple articles but it wasn't entirly clear why I need this.

#### Long-term Company Thinking

#### Creativity

- Not all components were provided so I took the liberty of creating a couple component blocks
- `Accordion`
- `Tile`

#### Simplicity

- I've decided to add each section of the page under `components/content` so `pages/jobs` isn't too heavy.
- To handle the expand/collapse of the perks I used the `useContext` hook to establish state. It doesn't warrant an app-wide state so I wrapped the provider around the `Perks` content component only.

#### Presentation

- `copy.js` allows devs to quickly swap copy if the message requires changing (i.e. a/b testing proves content A over content B)
