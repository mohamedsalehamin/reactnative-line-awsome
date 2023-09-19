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
const SVGChalkboardSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 7 L 5 23 L 3 23 L 3 25 L 29 25 L 29 23 L 27 23 L 27 7 Z M 7 9 L 25 9 L 25 23 L 7 23 Z M 21.28125 12.28125 L 17 16.5625 L 13.71875 13.28125 L 13 12.59375 L 12.28125 13.28125 L 9.28125 16.28125 L 10.71875 17.71875 L 13 15.4375 L 16.28125 18.71875 L 17 19.40625 L 17.71875 18.71875 L 22.71875 13.71875 Z M 20 20 L 19 21 L 20 22 L 24 22 L 24 20 Z"/></Svg>);
};
export default SVGChalkboardSolid;
