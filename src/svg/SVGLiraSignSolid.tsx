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
const SVGLiraSignSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 L 11 9.90625 L 8 11 L 8 13 L 11 11.90625 L 11 13.90625 L 8 15 L 8 17 L 11 15.90625 L 11 28 L 12 28 C 17.761719 28 22.828125 24.152344 24.34375 18.59375 L 24.96875 16.25 L 23.03125 15.75 L 22.40625 18.0625 C 21.21875 22.425781 17.429688 25.421875 13 25.84375 L 13 15.1875 L 19 13 L 19 11 L 13 13.1875 L 13 11.1875 L 19 9 L 19 7 L 13 9.1875 L 13 4 Z"/></Svg>);
};
export default SVGLiraSignSolid;
