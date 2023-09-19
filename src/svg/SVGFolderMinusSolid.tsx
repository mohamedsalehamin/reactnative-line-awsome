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
const SVGFolderMinusSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 4 L 6 28 L 6 29 L 7 29 L 25 29 L 26 29 L 26 28 L 26 15.4375 L 27.71875 13.71875 L 28 13.40625 L 28 13 L 28 4 L 28 3 L 27 3 L 24 3 L 23 3 L 7 3 L 6 3 z M 8 5 L 22 5 L 22 13 L 22 13.40625 L 22.28125 13.71875 L 24 15.4375 L 24 27 L 8 27 L 8 5 z M 24 5 L 26 5 L 26 12.5625 L 25 13.5625 L 24 12.5625 L 24 5 z M 12 15 L 12 17 L 20 17 L 20 15 L 12 15 z"/></Svg>);
};
export default SVGFolderMinusSolid;
