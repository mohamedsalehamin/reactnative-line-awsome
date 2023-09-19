import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Marker,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  Text,
  TextPath,
  TSpan as Tspan,
  Use,
} from 'react-native-svg'
type ReactFromSVGProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  style?: any;
};;
const SVGJira = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.021484 2.1992188 L 3.5800781 14.601562 C 2.8110781 15.368563 2.8090781 16.623297 3.5800781 17.404297 L 16.021484 29.800781 L 16.728516 29.097656 C 20.367516 25.472656 22.594156 23.2525 23.910156 21.9375 L 25.265625 20.580078 C 25.342625 20.504078 25.428672 20.416313 25.513672 20.320312 C 25.549672 20.285313 25.577797 20.260094 25.591797 20.246094 L 25.585938 20.238281 C 25.606938 20.212281 25.627437 20.187156 25.648438 20.160156 C 26.579437 19.230156 27.850109 17.962344 28.412109 17.402344 C 28.791109 17.028344 29 16.531 29 16 C 29 15.47 28.792063 14.973609 28.414062 14.599609 C 26.751063 12.939609 24.83425 11.016984 22.90625 9.0839844 C 20.74625 6.9179844 18.572516 4.7383437 16.728516 2.9023438 L 16.021484 2.1992188 z M 16.021484 5.0234375 C 17.701484 6.6994375 19.601234 8.6030938 21.490234 10.496094 C 23.413234 12.424094 25.325328 14.341047 26.986328 15.998047 C 25.632328 17.348047 24.678391 18.300281 24.025391 18.988281 C 23.901391 19.101281 23.774531 19.225516 23.644531 19.353516 C 23.420531 19.573516 23.201344 19.786031 23.152344 19.832031 L 23.169922 19.851562 C 21.930922 21.089562 19.563437 23.449562 16.023438 26.976562 L 4.9921875 16.015625 L 16.021484 5.0234375 z M 16.021484 10.925781 L 10.927734 16 L 16.021484 21.074219 L 21.117188 16 L 16.021484 10.925781 z M 16.021484 13.748047 L 18.283203 16 L 16.021484 18.251953 L 13.761719 16 L 16.021484 13.748047 z"/></Svg>);
};
export default SVGJira;
