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
const SVGUserLockSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 12.1 5 9 8.1 9 12 C 9 14.4375 10.209961 16.561523 12.070312 17.8125 C 8.5100119 19.34733 6 22.893578 6 27 L 8 27 C 8 22.6 11.6 19 16 19 C 17.2 19 18.400391 19.300781 19.400391 19.800781 C 19.700391 19.200781 20 18.599609 20.5 18.099609 C 20.300978 18.000099 20.095641 17.921082 19.892578 17.833984 C 21.77227 16.586133 23 14.452401 23 12 C 23 8.1 19.9 5 16 5 z M 16 7 C 18.8 7 21 9.2 21 12 C 21 14.8 18.8 17 16 17 C 13.2 17 11 14.8 11 12 C 11 9.2 13.2 7 16 7 z M 25 18 C 22.8 18 21 19.8 21 22 L 21 24 L 18 24 L 18 32 L 32 32 L 32 24 L 29 24 L 29 22 C 29 19.8 27.2 18 25 18 z M 25 20 C 26.1 20 27 20.9 27 22 L 27 24 L 23 24 L 23 22 C 23 20.9 23.9 20 25 20 z M 20 26 L 30 26 L 30 30 L 20 30 L 20 26 z"/></Svg>);
};
export default SVGUserLockSolid;
