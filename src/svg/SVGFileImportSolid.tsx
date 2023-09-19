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
const SVGFileImportSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 4 L 6 28 L 26 28 L 26 19 L 24 19 L 24 26 L 8 26 L 8 6 L 24 6 L 24 13 L 26 13 L 26 4 Z M 17.5 11 L 13.1875 15.28125 L 12.5 16 L 13.1875 16.71875 L 17.5 21 L 18.90625 19.59375 L 16.3125 17 L 28 17 L 28 15 L 16.3125 15 L 18.90625 12.40625 Z"/></Svg>);
};
export default SVGFileImportSolid;
