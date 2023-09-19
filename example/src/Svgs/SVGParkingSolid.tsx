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
const SVGParkingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 5 L 6 27 L 26 27 L 26 5 Z M 8 7 L 24 7 L 24 25 L 8 25 Z M 12 10 L 12 22 L 14 22 L 14 19 L 17 19 C 18.644531 19 20 17.644531 20 16 L 20 13 C 20 11.355469 18.644531 10 17 10 Z M 14 12 L 17 12 C 17.566406 12 18 12.433594 18 13 L 18 16 C 18 16.566406 17.566406 17 17 17 L 14 17 Z"/></Svg>);
};
export default SVGParkingSolid;
