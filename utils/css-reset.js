// This CSS reset is included via the StorefrontDocument component before any
// other styles. It is similar to, but slightly simpler than, normalize.css.
//
// Note that we officially support IE11. That means we can’t use the all: unset
// rule (certainly simpler!).
//
// The <main> setting is for IE11, which would otherwise treat it as inline.
//
// I’ve gone ahead and included box-sizing: border-box here; although
// technically not a reset in the sense of "revert to intrinsic default", it
// belongs here spiritually.
//
// Note: used via _document, so not a Styled JSX component.

const CSSReset = () =>
  <style>{ /* syntax:css */ `
    html {
      box-sizing: border-box;
      height: 100%;
      line-height: 1.2;
    }

    blockquote, body, button, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5,
    h6, hr, html, iframe, input, legend, li, menu, ol, p, pre, select, td,
    textarea, th, ul {
      margin: 0;
      padding: 0;
    }

    button {
      background-color: transparent;
      border: none;
      border-radius: 0;
      display: inline-block;
      padding: 0;
    }

    button, input[type="submit"] {
      -webkit-appearance: none;
      -webkit-border-radius: 5px;
      border-radius: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    iframe {
      border: 0;
    }

    main {
      display: block;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    td, th {
      text-align: left;
    }

    ul {
      list-style: none;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }
  `}</style>;

export default CSSReset;
