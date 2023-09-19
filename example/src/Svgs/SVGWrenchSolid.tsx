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
const SVGWrenchSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 21 4 C 17.144531 4 14 7.144531 14 11 C 14 11.714844 14.214844 12.363281 14.414063 13.015625 L 4.945313 22.484375 C 3.6875 23.738281 3.6875 25.800781 4.945313 27.058594 C 6.199219 28.3125 8.261719 28.3125 9.515625 27.058594 L 18.984375 17.589844 C 19.632813 17.789063 20.285156 18 21 18 C 24.855469 18 28 14.855469 28 11 C 28 9.972656 27.773438 9 27.375 8.125 L 26.78125 6.804688 L 25.761719 7.828125 L 22.585938 11 L 21 11 L 21 9.414063 L 25.195313 5.21875 L 23.875 4.625 C 23 4.226563 22.027344 4 21 4 Z M 21 6 C 21.171875 6 21.316406 6.085938 21.484375 6.101563 L 19 8.585938 L 19 13 L 23.414063 13 L 25.894531 10.515625 C 25.914063 10.683594 26 10.828125 26 11 C 26 13.773438 23.773438 16 21 16 C 20.300781 16 19.636719 15.855469 19.03125 15.597656 L 18.410156 15.332031 L 8.101563 25.640625 C 7.621094 26.125 6.839844 26.125 6.359375 25.640625 C 5.875 25.160156 5.875 24.378906 6.359375 23.894531 L 16.667969 13.589844 L 16.402344 12.964844 C 16.144531 12.359375 16 11.699219 16 11 C 16 8.226563 18.226563 6 21 6 Z"/></Svg>);
};
export default SVGWrenchSolid;
