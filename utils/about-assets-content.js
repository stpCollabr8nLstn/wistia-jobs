import COLORS, { SOAPBOX_COLORS } from './colors';
import SoapboxLogos from '../components/blocks/soapbox-logos';
import WistiaLogo from '../components/blocks/wistia-logo';

const PRODUCT_ASSETS = {
  soapbox: {
    colors: [
      SOAPBOX_COLORS.BLUE,
      COLORS.BLUE,
      COLORS.PURPLE,
      SOAPBOX_COLORS.GREEN,
      SOAPBOX_COLORS.YELLOW,
      SOAPBOX_COLORS.RED,
    ],
    logoComponents: {
      full: () =>
        <SoapboxLogos
          colorMode="multi"
          height={40} />,
      icon: () =>
        <SoapboxLogos
          colorMode="multi"
          height={45}
          mode="trio" />
    }
  },
  wistia: {
    colors: [
      COLORS.SKY_BLUE,
      COLORS.BLUE,
      COLORS.PURPLE,
      COLORS.PINK,
      COLORS.YELLOW,
      COLORS.GREEN
    ],
    logoComponents: {
      full: () => <WistiaLogo height={80} />,
      icon: () =>
        <WistiaLogo
          height={80}
          mode="swoopies-only" />
    }
  }
};

export default PRODUCT_ASSETS;

export const ABOUT_IMAGES = { "headerImage": { "__type": "asset", "contentType": "image/svg+xml", "description": "assets page", "fileName": "brand_illu.svg", "height": 1163, "id": "4ZBmaCTxQ480GS4seoQCIk", "size": 22147, "title": "Assets Page Background - full", "url": "https://images.ctfassets.net/j7pfe8y48ry3/4ZBmaCTxQ480GS4seoQCIk/9236f2c0ca7bf6c1fdb9c822c6dee925/brand_illu.svg", "width": 3449 }, "headerImageBrick": { "__type": "asset", "contentType": "image/svg+xml", "description": "assets page backgroud", "fileName": "bkg.svg", "height": 1162, "id": "687WLuJxh640KSaG6kMKma", "size": 1727, "title": "Assets Page Background- bricks only", "url": "https://images.ctfassets.net/j7pfe8y48ry3/687WLuJxh640KSaG6kMKma/faacfc29d3fe56490d16bbfd9b59a5ea/bkg.svg", "width": 3449 }, "headerImageSvg": { "__type": "asset", "contentType": "image/svg+xml", "description": "assets page", "fileName": "brand-transparent_illu.svg", "height": 1098, "id": "3VQq75SbJYAm2aIgQIWqsy", "size": 20471, "title": "Assets Page Background - svg only", "url": "https://images.ctfassets.net/j7pfe8y48ry3/3VQq75SbJYAm2aIgQIWqsy/dcf4bcc2b86a704a3ea46d9e23d49c6a/brand-transparent_illu.svg", "width": 1728 }, "soapboxEps": { "__type": "asset", "contentType": "application/zip", "fileName": "soapbox-logo-eps.zip", "id": "341TsiweYMsgGUgIwCMEQa", "size": 37686, "title": "soapbox-logos-eps", "url": "https://assets.ctfassets.net/j7pfe8y48ry3/341TsiweYMsgGUgIwCMEQa/84add00f9d48f7c63a74148dd13c6846/soapbox-logo-eps.zip" }, "soapboxPng": { "__type": "asset", "contentType": "application/zip", "fileName": "soapbox-logo-png.zip", "id": "SoW4DrskUMuaeekKWEWIs", "size": 14992, "title": "soapbox-logos-png", "url": "https://assets.ctfassets.net/j7pfe8y48ry3/SoW4DrskUMuaeekKWEWIs/792dc9001ccffc87036ad499bb6bf30f/soapbox-logo-png.zip" }, "wistiaEps": { "__type": "asset", "contentType": "application/zip", "fileName": "wistia-logo-eps.zip", "id": "1oCJTVj892iGkyAOiOa6gS", "size": 540326, "title": "wistia-logos-eps", "url": "https://assets.ctfassets.net/j7pfe8y48ry3/1oCJTVj892iGkyAOiOa6gS/4dd5f3222f65caf5fec70a4a581919c4/wistia-logo-eps.zip" }, "wistiaPng": { "__type": "asset", "contentType": "application/zip", "fileName": "wistia-logo-png.zip", "id": "5Ed9XDlefuMQo6K60Imio4", "size": 31018, "title": "wistia-logos-png", "url": "https://assets.ctfassets.net/j7pfe8y48ry3/5Ed9XDlefuMQo6K60Imio4/4a05c8430c16623db8366e678e3946c6/wistia-logo-png.zip" } }
