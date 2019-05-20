# Wistia Front-end Engineer Coding Exercise

## Process Notes

I'm intrigued by the `LongForm` component and how the components are structured, in general. I come from using either `SCSS` or `styled-components`. Understanding how to format the styles correctly took me a bit to grasp.

I admit I found myself wanting to inspect the mockup image in hopes of finding specs. Working without a designer is rough and this exercise just cements my belief that teams should be cross-disipline.

Hooks are the new "IT" thing in react. We don't use them in production where I'm at but, man I wish we did. I added some in this project. I used `useContext` rather than `useState` because the parent component needed to inform the children of the state rather than one component needing to track its own state.

Have I mentioned how much I miss working alongside a designer?

## Questions

I have questions about the `:global()` selector. I read a couple articles but it wasn't entirly clear why I need this but I figured out how to use it based on the example in `LongForm` and `Split`.

Typography - I found the super informative fonts README but I still wasn't sure how to use the fonts I needed in the most DRY manner. I usually like to create components for varying typography usages. Here's a [visual example](http://ics.carbondesignsystem.com/?selectedKind=Globals%7CType&selectedStory=Type%20rules&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs) from one of my previous gigs.
Using components allows me to avoid recreating commonly used typography styles. It takes collaboration between design and dev to establish these.

#### Long-term Company Thinking

These are some notes I made along the way about decisions I made related to the company values

- By seperating jobs into content chunks it allows for quick modification or additions to the jobs page in the future.
- `perksData.js` allows one place to swap out perks and icons as often as needed without breaking the implementation

#### Creativity

- Not all components were provided so I took the liberty of creating a couple component blocks
  - `Accordion`
    - I wanted to add a cool transition so it slides out but doing it quick means I sacrifice accessibility which is bad news bears.
      In a future iteration I would research the best ways to create a smooth collapse/expand transition that doesn't interfere with the content for screen readers.
  - `Tile`
  - `BodyText`

#### Simplicity

- I've decided to add each section of the page under `components/content` so `pages/jobs` isn't too heavy.
- To handle the expand/collapse of the perks I used the `useContext` hook to establish state. It doesn't warrant an app-wide state so I wrapped the provider around the `Perks` content component only.

#### Presentation

- `copy.js` allows devs to quickly swap copy if the message requires changing (i.e. a/b testing proves content A over content B)
