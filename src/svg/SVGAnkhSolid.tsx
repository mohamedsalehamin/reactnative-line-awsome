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
const SVGAnkhSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 13.25 2 11 4.25 11 7 C 11 8.957031 12.113281 10.875 13.15625 12.4375 C 13.289063 12.640625 13.429688 12.8125 13.5625 13 L 8 13 L 8 16.15625 L 9.15625 16 L 14.90625 15.1875 L 14 28.9375 L 13.9375 30 L 18.0625 30 L 18 28.9375 L 17.09375 15.1875 L 22.84375 16 L 24 16.15625 L 24 13 L 18.4375 13 C 18.570313 12.8125 18.710938 12.640625 18.84375 12.4375 C 19.886719 10.875 21 8.957031 21 7 C 21 4.25 18.75 2 16 2 Z M 16 4 C 17.667969 4 19 5.332031 19 7 C 19 8.078125 18.113281 9.914063 17.15625 11.34375 C 16.574219 12.21875 16.367188 12.429688 16 12.875 C 15.632813 12.429688 15.425781 12.21875 14.84375 11.34375 C 13.886719 9.914063 13 8.078125 13 7 C 13 5.332031 14.332031 4 16 4 Z"/></Svg>);
};
export default SVGAnkhSolid;
