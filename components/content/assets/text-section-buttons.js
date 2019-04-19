import { Fragment } from 'react';
import AnchorButton from '../../blocks/anchor-button';
import COLORS from '../../../utils/colors';

const TextSectionButtons = ({ epsUrl, pngUrl }) => {
  return (
    <Fragment>
      {epsUrl &&
        <AnchorButton
          href={epsUrl}
          primaryColor={COLORS.SKY_BLUE}
          size="small"
          textColor="white">
          Download EPS
        </AnchorButton>
      }
      {pngUrl &&
        <AnchorButton
          href={pngUrl}
          primaryColor={COLORS.SKY_BLUE}
          size="small"
          textColor="white">
          Download PNG
        </AnchorButton>
      }
    </Fragment>
  );
};

export default TextSectionButtons;
