import BodyText from "../blocks/body-text";
import Tile from "../blocks/tile";
import { jobs } from "../../utils/copy";
import IconMapPin from "../icons/icon-map-pin";
import IconHeart from "../icons/icon-heart";
import IconHighFive from "../icons/icon-high-five";

const { location, values, human } = jobs;

const IconInfo = () => {
  return (
    <div className="IconInfo">
      <div className="IconInfo__content">
        <Tile>
          <Tile.Circle>
            <Tile.Icon>
              <IconMapPin />
            </Tile.Icon>
          </Tile.Circle>
          <h3>{location.heading}</h3>
          <BodyText align="center">{location.body}</BodyText>
        </Tile>
        <Tile>
          <Tile.Circle backgroundColor="PINK_DARK">
            <Tile.Icon strokeColor="GREEN">
              <IconHeart />
            </Tile.Icon>
          </Tile.Circle>
          <h3>{values.heading}</h3>
          <BodyText align="center">{values.body}</BodyText>
        </Tile>
        <Tile>
          <Tile.Circle backgroundColor="YELLOW_DARK">
            <Tile.Icon strokeColor="BLUE" fillColor="BLUE">
              <IconHighFive />
            </Tile.Icon>
          </Tile.Circle>
          <h3>{human.heading}</h3>
          <BodyText align="center">{human.body}</BodyText>
        </Tile>
      </div>

      <style jsx>
        {`
          .IconInfo {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .IconInfo :global(.IconInfo__content) {
            display: flex;
            max-width: 1200px;
            flex-direction: column;
          }

          @media (min-width: 768px) {
            .IconInfo {
              display: flex;
              justify-content: center;
              width: 100%;
            }

            .IconInfo :global(.IconInfo__content) {
              display: flex;
              width: 100%;
              max-width: 1200px;
              flex-direction: row;
              justify-content: space-evenly;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconInfo;
