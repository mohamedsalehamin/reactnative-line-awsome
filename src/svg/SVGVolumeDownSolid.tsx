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
const SVGVolumeDownSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 4.59375 L 13.28125 6.28125 L 8.5625 11 L 4 11 L 4 21 L 8.5625 21 L 13.28125 25.71875 L 15 27.40625 Z M 13 9.4375 L 13 22.5625 L 9.71875 19.28125 L 9.40625 19 L 6 19 L 6 13 L 9.40625 13 L 9.71875 12.71875 Z M 18.5 12.03125 L 17.0625 13.46875 C 17.640625 14.164063 18 15.027344 18 16 C 18 16.972656 17.640625 17.835938 17.0625 18.53125 L 18.5 19.96875 C 19.4375 18.910156 20 17.523438 20 16 C 20 14.476563 19.4375 13.089844 18.5 12.03125 Z"/></Svg>);
};
export default SVGVolumeDownSolid;
