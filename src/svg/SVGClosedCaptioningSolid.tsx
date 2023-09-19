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
const SVGClosedCaptioningSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 6 L 2 23.90625 L 30 23.90625 L 30 6 Z M 4 8 L 28 8 L 28 21.90625 L 4 21.90625 Z M 12 10 C 9.25 10 7 12.25 7 15 C 7 17.75 9.25 20 12 20 C 13.195313 20 14.277344 19.558594 15.125 18.875 L 13.875 17.3125 C 13.347656 17.738281 12.707031 18 12 18 C 10.332031 18 9 16.667969 9 15 C 9 13.332031 10.332031 12 12 12 C 12.707031 12 13.347656 12.261719 13.875 12.6875 L 15.125 11.125 C 14.277344 10.441406 13.195313 10 12 10 Z M 22 10 C 19.25 10 17 12.25 17 15 C 17 17.75 19.25 20 22 20 C 23.195313 20 24.277344 19.558594 25.125 18.875 L 23.875 17.3125 C 23.347656 17.738281 22.707031 18 22 18 C 20.332031 18 19 16.667969 19 15 C 19 13.332031 20.332031 12 22 12 C 22.707031 12 23.347656 12.261719 23.875 12.6875 L 25.125 11.125 C 24.277344 10.441406 23.195313 10 22 10 Z"/></Svg>);
};
export default SVGClosedCaptioningSolid;
