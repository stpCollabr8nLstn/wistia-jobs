import { ABOUT_IMAGES } from '../utils/about-assets-content';
import { Component, Fragment } from 'react';
import Band from '../components/blocks/band';
import COLORS from '../utils/colors';
import Head from 'next/head';
import Split from '../components/blocks/split';
import TextSection from '../components/content/assets/text-section';
import LogoSwatches from '../components/content/assets/logo-swatches';
import ColorSwatches from '../components/content/assets/color-swatches';

export default class AssetsPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Wistia Brand Assets – Wistia</title>
        </Head>
        <div className="AssetsPage">
          <Split backgroundColor={COLORS.GRAY_6} proportions={[6, 7]}>
            <Split.Left>
              <Band textColor={COLORS.GRAY_0}>
                <Band.Headline>
                  Wistia and Soapbox brand assets and guidelines
                </Band.Headline>
                <Band.Body>
                  Thanks for your interest in Wistia and Soapbox!
                  We have a couple of guidelines for using our brand
                  assets. Please take a moment to familiarize yourself
                  with them before use.
                </Band.Body>
              </Band>
            </Split.Left>
            <Split.Right>
              <div className="AssetsPage__headerImage">
                <img
                  alt="painting the wistia logo"
                  src={ABOUT_IMAGES.headerImageSvg.url} />
              </div>
            </Split.Right>
          </Split>

          <div className="AssetsPage__container">
            <div className="AssetsPage__inner">
              <TextSection
                epsUrl={ABOUT_IMAGES.wistiaEps.url}
                pngUrl={ABOUT_IMAGES.wistiaPng.url}
                title="The Wistia Logo">
                <p className="AssetsPage__p">
                  Here it is! The Wistia logo, in all its glory—and
                  by glory, we mean in EPS and PNG file formats.
                </p>
              </TextSection>
              <LogoSwatches productName="wistia" />
              <TextSection title="Wistia Brand Colors">
                <p>
                  While we use a lot of delightful colors, our
                  primary color is Best Friend Blue (#54BBFF).
                  When you think of us, we hope you’ll befriend it,
                  too!
                </p>
                <ColorSwatches productName="wistia" />
              </TextSection>
              <TextSection title="Wistia Usage Guidelines">
                <p>
                  We’re a pretty laid-back crowd. But, when it
                  comes to our logo, we ask that you please:
                </p>
                <div>
                  <ul>
                    <li>
                      Always use the flags and logotype together,
                      or just the flags. Don’t use the logotype
                      on its own.
                    </li>
                    <li>
                      Give the logo some space—don’t clutter it
                      with other text or graphics.
                    </li>
                    <li>
                      Use the black or white logo when overlaying
                      on other images or colored backgrounds.
                    </li>
                    <li>
                      Don’t use colors in the logo that aren’t
                      included in our brand colors (see above).
                    </li>
                  </ul>
                </div>
              </TextSection>
              <hr />
              <TextSection
                epsUrl={ABOUT_IMAGES.soapboxEps.url}
                pngUrl={ABOUT_IMAGES.soapboxPng.url}
                title="The Soapbox Logo">
                <p>Here’s the Soapbox logo, in EPS and PNG file formats.</p>
              </TextSection>
              <LogoSwatches productName="soapbox" />
              <TextSection title="Soapbox Brand Colors">
                <ColorSwatches productName="soapbox" />
              </TextSection>
              <TextSection title="Soapbox Usage Guidelines">
                <p>
                  Ditto to what we said about our Wistia colors
                  and guidelines. The same rules apply for the
                  Soapbox logo. But, we have a couple of other
                  tips to keep the logo lookin’ clean. Please:
                </p>
                <div>
                  <ul>
                    <li>
                      Don’t alter any colors, including applying
                      different brand colors than the ones already
                      defined to the shapes.
                    </li>
                    <li>
                      Don’t change the order of the shapes in
                      the simplified logo.
                    </li>
                  </ul>
                </div>
                <span>
                  That’s it! Thanks for following these rules.
                  We appreciate it—and you!
                </span>
              </TextSection>
            </div>
          </div>
          <style jsx>{`
            .AssetsPage :global(.Band){
              max-width: 635px;
              padding: 25px 0 80px;
            }
            .AssetsPage :global(.Split){
              padding-bottom: 0;
            }
            @media (min-width: 900px) and (max-width: 1022px){
              .AssetsPage :global(.Band .BandHeadline){
                font-size: 32px;
              }
              .AssetsPage :global(.Band .BandBody){
                font-size: 18px;
              }
              .AssetsPage__headerImage{
                padding-top: 44px;
              }
            }
            .AssetsPage :global(.Split__panel--right){
              padding-bottom: 0;
              margin-bottom: -5px;
            }
            @media(max-width: 900px){
              .AssetsPage :global(.Band__content){
                padding: 0 30px;
              }
            }
            .AssetsPage :global(.Split__panel--left){
            }
            .AssetsPage__headerImage{
              display: flex:
              align-items: flex-end;
            }
            .AssetsPage :global(.Split__panel--padded){
              padding: 0;
            }
            .AssetsPage__container{
              padding: 90px 20px;
            }
            .AssetsPage__inner{
              display: flex;
              flex-direction: column;
              margin: auto;
              max-width: 1084px;
            }
            .AssetsPage__p{
              max-width: 530px;
            }
            @media (max-width: 1100px){
              .AssetsPage__p{
                margin: 0 auto;
              }
            }
            .AssetsPage p{
              font-size: 21px;
              line-height: 32px;
              padding-bottom: 10px;
            }

            .AssetsPage ul{
              color: ${COLORS.GRAY_5};
              list-style-type: none;
              padding: 25px 0 25px 20px;
            }
            .AssetsPage li{
              font-size: 21.5px;
              padding: 0 25px 10px;
              position: relative;
              line-height: 1.3;
            }
            @media (max-width: 1100px){
              .AssetsPage li{
                text-align: left;
              }
            }
            .AssetsPage li:before{
              background-color: ${ COLORS.GRAY_5};
              border-radius: 8px;
              content: "";
              height: 6px;
              left: 9px;
              position: absolute;
              top: 5px;
              width: 6px;
            }
            .AssetsPage hr{
              border: 0;
              border-top: 1px solid ${COLORS.GRAY_2};
              display: block;
              height: 0;
            }
            .AssetsPage span{
              font-size: 22px;
              margin-top: 25px;
            }
          `}</style>
        </div>
      </Fragment>
    );
  }
}
