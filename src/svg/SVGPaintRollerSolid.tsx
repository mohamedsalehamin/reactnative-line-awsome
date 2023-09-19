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
const SVGPaintRollerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 4 L 5 12 L 23 12 L 23 4 Z M 7 6 L 21 6 L 21 10 L 7 10 Z M 24 7 L 24 9 L 25 9 L 25 13.25 L 15.71875 16.03125 L 15 16.25 L 15 19 L 13 19 L 13 28 L 19 28 L 19 19 L 17 19 L 17 17.75 L 26.28125 14.96875 L 27 14.75 L 27 7 Z M 15 21 L 17 21 L 17 26 L 15 26 Z"/></Svg>);
};
export default SVGPaintRollerSolid;
