# About fonties

Fonts ain’t cheap to download, and they delay render. Yet art demands sacrifice!

Not much though. These are well-known problems and we have many tools at hand to
deal with it.

<!-- MarkdownTOC -->

- [Keeping things fast](#keeping-things-fast)
- [Editing fonts](#editing-fonts)
  - [Removing unused glyphs / characters](#removing-unused-glyphs--characters)
  - [Hardcoddding feature rule effects](#hardcoddding-feature-rule-effects)
  - [Splitting fonts by ranges](#splitting-fonts-by-ranges)
  - [Generating woff2](#generating-woff2)
- [Present state of affairs](#present-state-of-affairs)

<!-- /MarkdownTOC -->

## Keeping things fast

First of all, simply having distinct font files helps. Not every page uses every
font, and browsers are smart enough to only download fonts when they are first
found to be needed.

Next, then, is deciding what formats to serve. Since the only shit browser we
support is IE11, we can serve woff. We’ll serve woff2 as well, but it will need
woff for IE11. We don’t need the ttf/eot/otf stuff — that’s over now. Whether
version 1 or version 2, woff is a more concise, pre-compressed format.

Finally — and this is the big one — we can edit the fonts themselves to remove
parts we don’t use. There are a few ways for us to do this.

1. Glyphs and feature rules which are entirely unused can be removed.
2. Feature rules we use uninformly can be hardcoddded. For example, if we always
   use a particular stylistic alternative, we can just replace the original
   codepoint association with the alternate and remove the original (and all its
   associated rules).
3. For stuff we might use, but _infrequently_, we can spin out two versions of
   a font and take advantage of the `unicode-range` declaration available in the
   `@font-face` rule.

I’ll explain each of these techniques in more detail.

> There’s one more way to keep things fast — the best one, actually — but it
> isn’t available to us. Using a fairly popular font from Google Fonts and
> referencing their CDN is often super efficient because it’s like a
> vaccine/herd immunity effect. If the font is sufficiently popular, any given
> visitor has a significant chance of having it cached already when they first
> arrive, such that there’s literally nothing to download or wait for.

## Editing fonts

There is no good _native_ font editing software for OSX and there never has
been, which is strange given that Macs were already closely associated with
graphics work even during the early period of digital font design. Historically,
before the opentype era, the primary tool for font authoring and editing was
Fontographer, which is effectively defunct today despite the name having been
bought up by Fontlab, but it was a noble beast in its day. RIP my friend.

For paid software, the best tool is Asia Font Studio, which is mostly just
Fontlab with several completely artificial restrictions removed and a much
higher pricetag. Fontlab is sufficient for most usage. However, Fontlab actually
kinda blows. The free, linux software Fontforge is actually best in class.
Despite looking atrocious and being awkward to use on OSX, this isn’t like
Photoshop vs Gimp; Fontforge is the only serious font-authoring software today,
and afaict the only reason Fontlab is able to survive is that people still
assume that money === quality. Its feature set is larger and more sophisticated
and it’s _much_ less likely to bungle the results when you want to edit a font
that has existing opentype tables.

### Removing unused glyphs / characters

Admittedly, font editing a pretty deep domain. I’m not going to be able to
explain all the little details adequately here. A key thing to understand
however is that a _glyph_ is not a _character_. A glyph may not be associated
with a codepoint, or it may be associated with multiple codepoints, possibly
through composition (for example, è would typically — internally — involve
references to two glyphs).

In Fontforge, the first thing you’ll want to do, for your sanity, is go to the
Encoding menu and choose "Compact". This will hide codepoints that have nothing
assigned to them, so that you don’t have to scroll through thousands and
thousands of empty or sparsely populated "slots".

To remove items, select them and choose `Encoding > Detach & Remove Glyphs`.
Unlike Fontlab, Fontforge is generally smart enough to also update references
in the opentype tables for things like kerning and different kinds of alternates
when you do this, so that you don’t need to do as much table tweaking by hand.
However, it may fail to detect references in compound kerning classes and a few
less common tables.

_Save frequently._ Fontforge isn’t OSX native and runs via XQuartz. It
absolutely loves to crash. You won’t be overwriting the original font when you
save; it will be a Fontforge project file.

### Hardcoddding feature rule effects

This is less important, generally, but if there are alternates we don’t use, we
can remove them, and if there are alternates we _always_ use, we can make them
the canonical forms (not alternates).

“Alternates” means a lot more than just stylistical alternatives. A good font
will have alternates for all-caps text (different positioning for punctuation,
different heights for numerals), tabular data (monospace numerals and numeric
punctuation), and more.

For example we currently only use Walsheim Condensed Bold as an all-caps face.
Walsheim has distinct sets of numerals for caps, tabular data, and capital
tabular data, in addition to the base proportional glyphs. It also has numeric
superscript and subscript forms for ligated fractions etc — quite a lot
altogether. In our case, at least till proven otherwise, all we need is the
proportional capital numeric forms.

If we find this series of glyphs — note that they are not associated with any
codepoints, since they are conditional substitutes — we can replace the original
glyphs we these and just delete all of these alternate rules and all the other
numeric glyphs. Intuitively, you might think to copy and paste the capital
series over the base series. However, this isn’t what we want to do, because we
want to make sure we keep the correct kerning rules etc for the capital forms
specifically. Instead, right click on each replacement glyph of interest and
choose `Glyph Info`. In the first section (`Unicode`), assign it to the
codepoint you want to replace (you can do this from `Unicode char` by typing the
literal character). Keep the original name, though, since it will help us
confirm that everything works as expected (it will change automatically by
default). When you select `okay`, you will see an alert asking you if you want
to swap it with the existing assignment. Say yep.

The glyphs won’t move when you do this. The originals will still be there, too.
So the next step is to select the originals and remove them
(`Detach & Remove Glyphs`). After that, if you choose
`Encoding > Reencode > BMP` and then `Compact` again, you’ll see the newly
canonicalized glyphs where you’d expect to.

Now open `Element > Font Info` and select `Lookups`. It’s a bit of a nuisance
that it’s buried this way, but this is usually where you want to go to edit
opentype tables when making changes like this. You’ll see two child tabs, one
for GSUB and one for GPOS. GSUB holds tables for various types of substitutions
(alternates, ligatures, etc) while GPOS holds tables for kerning and
mark placement (meaning rules that allow composing characters with combining
marks).

Right now what we care about is GSUB. Assuming we’ve deleted all the numeral
series except the one that we made canonical, we can delete the FRAC (fraction
composition), ORDN (ordinal positioning) tables, ZERO (slashed zero alternate),
PNUM (proportional numerals), TNUM (tabular numerals), NUMR (numerators) etc
tables. And if we’ve also replaced all the "case" punctuation etc, we can remove
the CASE table, too. (To be clear, this all applies in the case of stripping out
lowercase as in the example, Walsheim Condensed Bold. In general, there will not
be so many items that should be removed.)

If you go into the KERN tables now, you might find that some are empty,
depending on how much we removed, because Fontforge is usually able to follow up
automatically on the changes we’ve made by removing rules that reference glyphs
that no longer exist. Empty tables can be deleted.

If you look at the other KERN tables, you can click on individual entries and
you’ll be alerted if the entry contains bad references that Fontforge wasn’t
able to clean up earlier. You can remove them by hand, but the simplest way to
fix it is to click the arrow next to a given kerning class. You’ll see that
alert again, but when you click okay to get out of the GUI selection window, it
will have filtered all the bad refs.

Congrats — the font is already a good deal smaller and you haven’t lost any
functionality that we’re actually using. You can now generate the font. Create
two versions: a ttf and a woff. We’ll come back around to woff2 a bit later.

You’ll want to test the font for real, flipping between the new version and the
original, to make sure nothing went sour. This is important because it could
look superficially correct in preview but maybe you accidentally deleted all the
kerning or something!

### Splitting fonts by ranges

This is a bit trickier. CSS `@font-face` at-rules are very powerful — and most
of its features work cross-browser quite well. One of these rules allows you to
explicitly define one or more ranges of Unicode codepoints which a given
font-face declaration addresses.

There are several use cases for `unicode-range`. The first doesn’t concern us,
but I’ll explain it anyway since it’s the most important. Imagine a site with
both Arabic and Latin text. We could declare two font-face at rules with the
same name and other properties pointing at the face we want to use for Arabic
and the face we want to use for Latin, and then constrain their unicode ranges
accordingly. Now our text will use the appropriate fonts per language as if they
were really found within a single font.

But another way to use `unicode-range` is to split a single font across multiple
files. The reason this can be useful comes back to the way browsers are clever
about what they download and when. If you declare entries for the font where one
file has a unicode range for just ASCII text and another has a range for the
rest of Latin, then the one that has the rest of Latin won’t be downloaded until
a character in that range actually needs to be rendered. If most pages only have
characters in the ASCII range, then, we reduce the download size for the
majority of visitors while still permitting the use of characters outside that
range on an as-needed basis.

I mentioned this approach is trickier, and there are two reasons why. For one,
it’s just a bit more work to generate _two_ fonts than one; that is, imagine
making the first less x, y, and z, and the second then is x, y and z and nothing
else. But this idea has its own troubles.

When you split a font this way, what we lose is kerning rules that would apply
between characters in the first font and the second font. Let’s say only our
second font contains é and only our first font contains f, but the font had
rules for kerning between an f class and an e class, where é would originally
have been a member of the latter class. When we removed é from the first font,
it was also removed from the e class; the first font doesn’t know about the
second font’s content and vice versa.

    1 1 1 2
    c a f é
         ^ if there were any special kerning rules here, they were lost!

If the splitting is done by script — for example if one font were for Latin and
one were for Cyrillic — this isn’t a problem because there wouldn’t have been
any such inter-script kerning rules in the first place. But if it’s internal to
a single script, there likely were at least some (but note that kerning data is
typically sparse; most combos have no kerning rules, since the default metrics
provide for the majority of character combinations already).

One way to approach this is to generate only one special font, the restricted
set. Then for the second font, include the whole thing. It is downloaded less
often anyway, so it’s not as important for it to be small as it is for the
common-subset one to be small. It seems that in Firefox this works nicely: it
will choose the second font for _all_ the text if any of its unique codepoints
were needed. But I’m not sure if the same is true for any other browser. I’m
still investigating this. It may be a trade-off, where we can choose between a
smaller payload for most users while losing a bit of precision on the rare pages
that have accented characters, and I’d leave it up to other people to decide
whether that trade-off makes sense (once I establish whether that is in fact its
consequence or if all browsers do the Firefox thing).

For now, I have conservatively removed specific extended Latin characters and
other items (I think we’ll be fine without the florin symbol or the Soviet era
international currency symbol) that are almost certainly never going to be used,
and have not provided a fallback font-face declaration for these ranges.

### Generating woff2

Earlier I said to generate a ttf and a woff file. Fontforge can’t generate woff2
on its own. We only need to serve woff and woff2. Woff2 is compressed better, so
let’s make that now.

You’ll need to install Google’s [woff2](https://github.com/google/woff2) lib.
The lib has a `woff2_compress` script which will accept the ttf we made earlier.
Once you’ve created the woff2 file, you can toss the ttf.

## Present state of affairs

We currently have four items in the Walsheim family in action:

- Condensed Bold
- Regular Regular
- Regular Medium
- Light

The first case is special. It is, so far, used only in contexts where it is
all-caps and is particular unlikely to need many characters outside the basic
Latin alphabet. I aggressively stripped it and canonicalized the stylistic
alternate Y and the proportional capital numerals/punctuation (limited).

The middle two are used broadly for both titling and body text. Thus we need to
retain conditionally-enabled alternates (we use the single-storey lowercase a in
titles, but the double-storey lowercase a in body text) and cannot assume that
so much punctuation and extended Latin will go unused. But we can do a somewhat
conservative cull: it seems safe to say that we can eliminate all of the
characters in Latin Extended-A excepting only Œ/œ, and that we can eliminate
select characters from Latin 1 where they apply only to Welsh and other unlikely
minority scripts which are otherwise incompletely covered in the absence of
Latin Extended-A anyway; further we can remove certain mathematical symbols like
sum and delta, and all the current and historical currency symbols save for
dollar, cent, pound, euro and yen, including all their tabular and case-specific
forms. The end result will be less dramatic but still significant.

| Stretch   | Weight        | Original woff2 size | Butchered woff2 size |
|-----------|---------------|--------------------:|---------------------:|
| Light     | Light (300)   |                41kb |                 41kb |
| Regular   | Regular (400) |                41kb |                 21kb |
| Regular   | Medium (500)  |                41kb |                 29kb |
| Condensed | Bold (600)    |                45kb |                  6kb |

Since these are already maximally compressed sizes here, for a page that uses
all four fonts, we’re cutting out 71kb of data. Compared to the font situation
on Wistiacom today, we’re saving 286kb — over a quarter of a megabyte.
