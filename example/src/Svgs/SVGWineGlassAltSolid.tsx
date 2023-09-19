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
const SVGWineGlassAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.1875 5 L 8.03125 5.78125 C 8.03125 5.78125 7 10.488281 7 13 C 7 17.617188 10.515625 21.429688 15 21.9375 L 15 26 L 10 26 L 10 28 L 22 28 L 22 26 L 17 26 L 17 21.9375 C 21.484375 21.429688 25 17.617188 25 13 C 25 10.484375 23.96875 5.78125 23.96875 5.78125 L 23.8125 5 Z M 9.84375 7 L 22.15625 7 C 22.25 7.488281 22.488281 8.71875 22.6875 10 L 11 10 L 11 12 L 22.9375 12 C 22.96875 12.347656 23 12.722656 23 13 C 23 16.878906 19.878906 20 16 20 C 12.121094 20 9 16.878906 9 13 C 9 11.3125 9.667969 7.90625 9.84375 7 Z"/></Svg>);
};
export default SVGWineGlassAltSolid;
