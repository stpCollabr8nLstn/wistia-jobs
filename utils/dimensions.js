// SPATIAL DIMENSIONS //////////////////////////////////////////////////////////
//
// The BASE_PX value represents a common unit which, multiplied by some factor,
// will be commonly used through the user interface. For example, if it were 15,
// then we might expect to often have padding or margin values like 30 or 150.
//
// A note about choosing between units:
//
// Sometimes, people will disucess usage of different units like px or em (etc)
// as if it is a choice that is made for an entire UI: "we use rem for sizing".
// This misses the point; the reason there are different units is because they
// serve different purposes. Broadly we can say there are the following major
// categories:
//
// | spatial units              | category                                     |
// |----------------------------|----------------------------------------------|
// | px                         | canonical fixed unit (not actually a pixel!) |
// | in, mm, cm, pt, pc, Q      | on screen, defined by px; in print, literal  |
// | em, ex, ch, cap, ic        | relative to current font size or properties  |
// | lh                         | relative to current line height              |
// | rem, rlh                   | relative to font/line height at root element |
// | vw, vh, vi, vb, vmin, vmax | relative to facets of the current viewport   |
// | %                          | semantics vary depending on context          |
//
// (Note that some of the units above are not supported cross-browser currently
// and are just included for completeness.)
//
// We can also divide them up other ways. The first two rows are absolute while
// the remainder are relative. Also, the third, fourth and fifth lines are
// relative to facets of typography, while the sixth and seventh are relative to
// some outer box (except when % is used to adjust font size, etc).
//
// In practice, the most commonly used units are px, em, rem, vw, vh, and (not
// technically a unit, but) %. Of these, px and em are the two you most often
// find yourself choosing between, so I’ll give a concrete example of when one
// is correct and the other is probably not:
//
// Let’s say you have a padded box with a border. The content of the box is a
// paragraph with several icons inlined into the text with horizontal padding
// around them.
//
// The border and the padding should typically be defined in terms of the
// quasi-absolute px value. If the user adjusts the font size externally, for
// example with assistive technology, it may not be desirable for it to impact
// the page layout; in particular, the border thickness probably should remain
// constant at any size. However, the inlined icons and their padding should be
// defined in terms of em (or ex, etc), because they are _typographical_ in
// nature — they must scale with the text to make sense.
//
// Viewport-relative units and percentages play other roles which are more
// self-evident and typically concern layout.
//
// There are no base values provided for relative units because it wouldn’t make
// sense.
//
// TEMPORAL DIMENSIONS /////////////////////////////////////////////////////////
//
// Animations often play nicer together if you follow the same logic, using a
// common value that may be multiplied, hence BASE_MS. A value around 80ms is
// good for making the simplest transitions, like text color change on hover,
// feel significantly smoother without actually being perceived as "an
// animation" by most users — so it doesn’t get annoying, but it makes things
// feel more professional. Animations that involve a small movements typically
// need to be in the 160 range, while animations that involve large movements
// will need 400 or more. Animations which are small but complex may need more
// time, too, because otherwise they risk exhibiting jank on taxed devices.

// !! TODO : ALL VALUES TEMPORARY, PENDING REAL SPECIFICATIONS FROM DESIGN !! //

// Note: BASE values are numbers, meant for use in derivations; other values are
// string constants.

const BASE_PX = 15;

export default {
  BASE_LINE_HEIGHT: 1.7,
  BASE_MS: 80,
  BASE_PX,
  BASE_RADIUS_PX: 5,

  BODY_ALL_CAPS_LETTERSPACING: '0.04em',
  BODY_ALL_CAPS_SIZE: '0.9em',
  COMMON_CONTENT_WIDTH: `${BASE_PX * 52}px`,
  COMMON_PADDING: `${BASE_PX * 2}px`,
  FONT_SIZES: ['16px', '18px', '20px', '26px', '36px', '45px'],
  HEADING_LETTERSPACING: '0.02em',
  HEADING_LINE_HEIGHT: '1.6',
  PARAGRAPH_MARGIN: `${BASE_PX}px`
};
