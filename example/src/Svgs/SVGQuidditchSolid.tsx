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
const SVGQuidditchSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 28.402344 5.203125 L 17.839844 13.119141 L 17.410156 12.546875 L 17.40625 12.546875 L 16.361328 11.160156 L 14.763672 12.363281 L 15.158203 12.886719 L 10.615234 13.570312 C 8.5702344 13.895312 6.7595781 14.987531 5.5175781 16.644531 L 3 20 L 4.6914062 20 C 3.5274062 21.447 2.6854219 23.135219 2.2324219 24.949219 L 1.7207031 27 L 8.84375 27 C 12.34675 27 15.504266 24.787766 16.697266 21.509766 L 18.361328 17.136719 L 18.71875 17.611328 L 20.314453 16.408203 L 19.041016 14.716797 L 29.601562 6.8027344 L 28.402344 5.203125 z M 16.525391 14.701172 L 16.9375 15.25 L 14.822266 20.8125 C 13.910266 23.3175 11.50875 25 8.84375 25 L 4.2890625 25 C 4.8030625 23.257 5.7462031 21.666859 7.0332031 20.380859 L 9.4121094 18 L 7 18 L 7.1152344 17.84375 C 8.0452344 16.60475 9.400875 15.788875 10.921875 15.546875 L 16.525391 14.701172 z M 23.5 20 C 21.57 20 20 21.57 20 23.5 C 20 25.43 21.57 27 23.5 27 C 25.43 27 27 25.43 27 23.5 C 27 21.57 25.43 20 23.5 20 z M 23.5 22 C 24.327 22 25 22.673 25 23.5 C 25 24.327 24.327 25 23.5 25 C 22.673 25 22 24.327 22 23.5 C 22 22.673 22.673 22 23.5 22 z"/></Svg>);
};
export default SVGQuidditchSolid;
