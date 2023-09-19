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
const SVGLaptopSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 6 L 5 19.5625 L 2.71875 21.875 C 2.265625 22.328125 2 22.953125 2 23.59375 C 2 24.914063 3.085938 26 4.40625 26 L 27.59375 26 C 28.914063 26 30 24.914063 30 23.59375 C 30 22.953125 29.734375 22.328125 29.28125 21.875 L 27 19.5625 L 27 6 Z M 7 8 L 25 8 L 25 19 L 7 19 Z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953125 23.359375 28 23.484375 28 23.59375 C 28 23.835938 27.835938 24 27.59375 24 L 4.40625 24 C 4.164063 24 4 23.835938 4 23.59375 C 4 23.484375 4.046875 23.359375 4.125 23.28125 Z"/></Svg>);
};
export default SVGLaptopSolid;
