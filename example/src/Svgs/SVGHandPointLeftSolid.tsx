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
const SVGHandPointLeftSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.90625 3 C 15.289063 3 14 4.230469 14 5.65625 C 14 6.992188 14.46875 7.984375 14.9375 8.625 C 15.230469 9.027344 15.359375 9.09375 15.5625 9.25 L 15.75 10 L 5 10 C 3.355469 10 2 11.355469 2 13 C 2 14.644531 3.355469 16 5 16 L 8.5625 16 L 10.21875 23.625 C 10.515625 25.003906 11.746094 26 13.15625 26 L 30 26 L 30 10 L 24.40625 10 L 17.625 3.28125 L 17.3125 3 Z M 16.59375 5.09375 L 23 11.40625 L 23 24 L 13.15625 24 C 12.679688 24 12.257813 23.6875 12.15625 23.21875 L 10.375 14.78125 L 10.1875 14 L 5 14 C 4.433594 14 4 13.566406 4 13 C 4 12.433594 4.433594 12 5 12 L 18.34375 12 L 18.03125 10.75 L 17.4375 8.5 L 17.3125 8.09375 L 16.96875 7.90625 C 16.96875 7.90625 16.789063 7.820313 16.53125 7.46875 C 16.273438 7.117188 16 6.558594 16 5.65625 C 16 5.347656 16.171875 5.175781 16.59375 5.09375 Z M 25 12 L 28 12 L 28 24 L 25 24 Z"/></Svg>);
};
export default SVGHandPointLeftSolid;
