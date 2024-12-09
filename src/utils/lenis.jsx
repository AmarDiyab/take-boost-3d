import { ReactLenis } from '@studio-freight/react-lenis';
import PropTypes from 'prop-types';

const SmoothScrolling = ({children}) => {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
          {children}
        </ReactLenis>
      );
}

SmoothScrolling.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SmoothScrolling;
