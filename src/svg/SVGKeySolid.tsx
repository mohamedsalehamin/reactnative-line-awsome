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
const SVGKeySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 20 3 C 15.054688 3 11 7.054688 11 12 C 11 12.519531 11.085938 12.976563 11.15625 13.4375 L 3.28125 21.28125 L 3 21.59375 L 3 29 L 10 29 L 10 26 L 13 26 L 13 23 L 16 23 L 16 20.03125 C 17.179688 20.609375 18.554688 21 20 21 C 24.945313 21 29 16.945313 29 12 C 29 7.054688 24.945313 3 20 3 Z M 20 5 C 23.855469 5 27 8.144531 27 12 C 27 15.855469 23.855469 19 20 19 C 18.789063 19 17.542969 18.644531 16.59375 18.125 L 16.34375 18 L 14 18 L 14 21 L 11 21 L 11 24 L 8 24 L 8 27 L 5 27 L 5 22.4375 L 12.90625 14.5 L 13.28125 14.15625 L 13.1875 13.625 C 13.085938 13.023438 13 12.488281 13 12 C 13 8.144531 16.144531 5 20 5 Z M 22 8 C 20.894531 8 20 8.894531 20 10 C 20 11.105469 20.894531 12 22 12 C 23.105469 12 24 11.105469 24 10 C 24 8.894531 23.105469 8 22 8 Z"/></Svg>);
};
export default SVGKeySolid;
