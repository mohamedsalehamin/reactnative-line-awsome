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
const SVGSpaceShuttleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 4 L 2 10 L 0 10 L 0 13 L 1 13 L 1 19 L 0 19 L 0 22 L 2 22 L 2 28 L 6.5625 28 C 9.019531 28 11.386719 27.019531 13.125 25.28125 L 17.46875 20.96875 L 25.5 20.28125 C 28.074219 20.066406 30.410156 18.710938 31.84375 16.5625 L 32.1875 16 L 31.84375 15.4375 C 30.410156 13.289063 28.074219 11.933594 25.5 11.71875 L 17.46875 11.03125 L 13.28125 6.84375 L 13.125 6.71875 C 11.386719 4.980469 9.019531 4 6.5625 4 Z M 4 6 L 6.5625 6 C 8.492188 6 10.355469 6.761719 11.71875 8.125 L 14.5625 11 L 10 11 L 10 13 L 17 13 L 25.3125 13.6875 C 27 13.828125 28.464844 14.738281 29.5625 16 C 28.464844 17.261719 27 18.171875 25.3125 18.3125 L 16.90625 19 L 10 19 L 10 21 L 14.5625 21 L 11.71875 23.875 C 10.355469 25.238281 8.492188 26 6.5625 26 L 4 26 L 4 19 L 3 19 L 3 13 L 4 13 Z M 24 15 L 24 17 L 26 17 L 26 15 Z M 6 21 L 6 24 L 8 24 L 8 21 Z"/></Svg>);
};
export default SVGSpaceShuttleSolid;
