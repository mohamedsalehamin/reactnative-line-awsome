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
const SVGSortNumericDownSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.59375 5 L 8.4375 5.78125 C 8.4375 5.78125 8.273438 6.355469 7.875 6.9375 C 7.476563 7.519531 6.980469 8 6 8 L 6 10 C 7.375 10 8.320313 9.324219 9 8.59375 L 9 15 L 11 15 L 11 5 Z M 22 5 L 22 23.6875 L 19.40625 21.09375 L 18 22.5 L 22.28125 26.8125 L 23 27.5 L 23.71875 26.8125 L 28 22.5 L 26.59375 21.09375 L 24 23.6875 L 24 5 Z M 8.5 17 C 6.578125 17 5 18.578125 5 20.5 L 5 21 L 7 21 L 7 20.5 C 7 19.625 7.625 19 8.5 19 L 9.5 19 C 10.375 19 11 19.625 11 20.5 C 11 20.957031 10.648438 21.480469 10.0625 21.84375 C 8.828125 22.601563 7.746094 23.085938 6.84375 23.59375 C 6.390625 23.847656 5.976563 24.089844 5.625 24.46875 C 5.273438 24.847656 5 25.417969 5 26 L 5 27 L 13 27 L 13 25 L 8.4375 25 C 9.171875 24.621094 10.019531 24.242188 11.125 23.5625 C 12.140625 22.925781 13 21.84375 13 20.5 C 13 18.578125 11.421875 17 9.5 17 Z"/></Svg>);
};
export default SVGSortNumericDownSolid;
