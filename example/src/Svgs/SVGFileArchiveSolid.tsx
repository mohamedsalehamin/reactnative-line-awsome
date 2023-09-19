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
const SVGFileArchiveSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 3 L 6 29 L 26 29 L 26 3 Z M 8 5 L 15 5 L 15 6 L 17 6 L 17 5 L 24 5 L 24 27 L 8 27 Z M 15 7 L 15 9 L 17 9 L 17 7 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 13 L 15 15.1875 C 13.84375 15.605469 13 16.707031 13 18 C 13 19.644531 14.355469 21 16 21 C 17.644531 21 19 19.644531 19 18 C 19 16.707031 18.15625 15.605469 17 15.1875 L 17 13 Z M 16 17 C 16.5625 17 17 17.4375 17 18 C 17 18.5625 16.5625 19 16 19 C 15.4375 19 15 18.5625 15 18 C 15 17.4375 15.4375 17 16 17 Z"/></Svg>);
};
export default SVGFileArchiveSolid;
