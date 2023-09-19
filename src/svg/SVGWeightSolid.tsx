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
const SVGWeightSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 6 L 4 26 L 28 26 L 28 6 Z M 6 8 L 26 8 L 26 24 L 6 24 Z M 16 10 C 11.667969 10 8.4375 12.15625 8.4375 12.15625 L 7.65625 12.6875 L 8.15625 13.5 L 11.15625 18.5 L 11.4375 19 L 20.5625 19 L 20.84375 18.5 L 23.84375 13.5 L 24.34375 12.6875 L 23.5625 12.15625 C 23.5625 12.15625 20.332031 10 16 10 Z M 16 12 C 18.824219 12 20.6875 12.90625 21.59375 13.40625 L 19.46875 17 L 17.625 17 L 18.90625 14.4375 L 17.09375 13.5625 L 15.375 17 L 12.53125 17 L 10.40625 13.40625 C 11.3125 12.90625 13.175781 12 16 12 Z"/></Svg>);
};
export default SVGWeightSolid;
