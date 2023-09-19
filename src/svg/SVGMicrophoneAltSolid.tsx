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
const SVGMicrophoneAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 21 4 C 17.421875 4 14.46875 6.714844 14.0625 10.1875 L 6 21.59375 L 5.53125 22.28125 L 6.09375 22.875 L 6.90625 23.6875 L 4.28125 26.28125 L 5.71875 27.71875 L 8.28125 25.125 L 9.65625 26.5 L 10.375 26 L 21.84375 17.9375 C 25.304688 17.519531 28 14.570313 28 11 C 28 7.144531 24.855469 4 21 4 Z M 21 6 C 23.773438 6 26 8.226563 26 11 C 26 12.015625 25.703125 12.964844 25.1875 13.75 L 18.25 6.8125 C 19.035156 6.296875 19.984375 6 21 6 Z M 16.8125 8.25 L 23.75 15.1875 C 22.964844 15.703125 22.015625 16 21 16 C 18.226563 16 16 13.773438 16 11 C 16 9.984375 16.296875 9.035156 16.8125 8.25 Z M 14.375 13.1875 C 15.070313 15.261719 16.707031 16.921875 18.78125 17.625 L 9.90625 23.90625 L 8.125 22.0625 Z"/></Svg>);
};
export default SVGMicrophoneAltSolid;
