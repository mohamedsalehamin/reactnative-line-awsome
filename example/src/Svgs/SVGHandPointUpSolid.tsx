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
const SVGHandPointUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 2 C 11.355469 2 10 3.355469 10 5 L 10 15.75 L 9.25 15.5625 C 9.09375 15.359375 9.027344 15.230469 8.625 14.9375 C 7.984375 14.46875 6.992188 14 5.65625 14 C 4.230469 14 3 15.289063 3 16.90625 L 3 17.3125 L 3.28125 17.625 L 10 24.40625 L 10 30 L 26 30 L 26 13.15625 C 26 11.746094 25.003906 10.515625 23.625 10.21875 L 16 8.5625 L 16 5 C 16 3.355469 14.644531 2 13 2 Z M 13 4 C 13.566406 4 14 4.433594 14 5 L 14 10.1875 L 14.78125 10.375 L 23.21875 12.15625 C 23.6875 12.257813 24 12.679688 24 13.15625 L 24 23 L 11.40625 23 L 5.09375 16.59375 C 5.175781 16.171875 5.347656 16 5.65625 16 C 6.558594 16 7.117188 16.273438 7.46875 16.53125 C 7.820313 16.789063 7.90625 16.96875 7.90625 16.96875 L 8.09375 17.3125 L 8.5 17.4375 L 10.75 18.03125 L 12 18.34375 L 12 5 C 12 4.433594 12.433594 4 13 4 Z M 12 25 L 24 25 L 24 28 L 12 28 Z"/></Svg>);
};
export default SVGHandPointUpSolid;
