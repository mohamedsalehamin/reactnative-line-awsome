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
const SVGUnderlineSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 4 L 8 16 C 8 20.429688 11.570313 24 16 24 C 20.429688 24 24 20.429688 24 16 L 24 4 L 22 4 L 22 16 C 22 19.371094 19.371094 22 16 22 C 12.628906 22 10 19.371094 10 16 L 10 4 Z M 6 26 L 6 28 L 26 28 L 26 26 Z"/></Svg>);
};
export default SVGUnderlineSolid;
