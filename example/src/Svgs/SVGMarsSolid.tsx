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
const SVGMarsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 4 L 17 6 L 24.5625 6 L 16.875 13.6875 C 15.523438 12.644531 13.832031 12 12 12 C 7.59375 12 4 15.59375 4 20 C 4 24.40625 7.59375 28 12 28 C 16.40625 28 20 24.40625 20 20 C 20 18.167969 19.355469 16.476563 18.3125 15.125 L 26 7.4375 L 26 15 L 28 15 L 28 4 Z M 12 14 C 15.324219 14 18 16.675781 18 20 C 18 23.324219 15.324219 26 12 26 C 8.675781 26 6 23.324219 6 20 C 6 16.675781 8.675781 14 12 14 Z"/></Svg>);
};
export default SVGMarsSolid;
