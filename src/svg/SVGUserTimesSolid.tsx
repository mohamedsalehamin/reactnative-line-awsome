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
const SVGUserTimesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 2 C 8.144531 2 5 5.144531 5 9 C 5 11.410156 6.230469 13.550781 8.09375 14.8125 C 4.527344 16.34375 2 19.882813 2 24 L 4 24 C 4 19.570313 7.570313 16 12 16 C 13.375 16 14.65625 16.359375 15.78125 16.96875 C 14.671875 18.34375 14 20.101563 14 22 C 14 26.40625 17.59375 30 22 30 C 26.40625 30 30 26.40625 30 22 C 30 17.59375 26.40625 14 22 14 C 20.253906 14 18.628906 14.574219 17.3125 15.53125 C 16.871094 15.253906 16.390625 15.019531 15.90625 14.8125 C 17.769531 13.550781 19 11.410156 19 9 C 19 5.144531 15.855469 2 12 2 Z M 12 4 C 14.773438 4 17 6.226563 17 9 C 17 11.773438 14.773438 14 12 14 C 9.226563 14 7 11.773438 7 9 C 7 6.226563 9.226563 4 12 4 Z M 22 16 C 25.324219 16 28 18.675781 28 22 C 28 25.324219 25.324219 28 22 28 C 18.675781 28 16 25.324219 16 22 C 16 18.675781 18.675781 16 22 16 Z M 19.71875 18.28125 L 18.28125 19.71875 L 20.5625 22 L 18.28125 24.28125 L 19.71875 25.71875 L 22 23.4375 L 24.28125 25.71875 L 25.71875 24.28125 L 23.4375 22 L 25.71875 19.71875 L 24.28125 18.28125 L 22 20.5625 Z"/></Svg>);
};
export default SVGUserTimesSolid;
