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
const SVGDnaSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 5 C 6 8.023438 7.28125 10.375 9.09375 12.21875 C 10.53125 13.683594 12.277344 14.886719 14.0625 16 C 9.894531 18.632813 6 21.511719 6 27 L 8 27 C 8 22.304688 11.78125 19.742188 15.96875 17.15625 C 16.964844 17.769531 17.9375 18.367188 18.84375 19 L 15.1875 19 C 14.1875 19.601563 13.304688 20.300781 12.40625 21 L 21.3125 21 C 21.363281 21.050781 21.417969 21.105469 21.46875 21.15625 C 22.039063 21.734375 22.542969 22.347656 22.9375 23 L 10.59375 23 C 10.09375 23.601563 9.800781 24.300781 9.5 25 L 23.75 25 C 23.90625 25.617188 24 26.273438 24 27 L 26 27 C 26 23.976563 24.71875 21.625 22.90625 19.78125 C 21.09375 17.9375 18.78125 16.53125 16.53125 15.15625 C 14.28125 13.78125 12.09375 12.4375 10.53125 10.84375 C 8.96875 9.25 8 7.476563 8 5 Z M 24 5 C 24 5.71875 23.882813 6.378906 23.71875 7 L 9.5 7 C 9.800781 7.699219 10.09375 8.398438 10.59375 9 L 22.875 9 C 22.4375 9.722656 21.882813 10.378906 21.25 11 L 12.40625 11 C 13.304688 11.699219 14.1875 12.398438 15.1875 13 L 18.875 13 C 18.273438 13.4375 17.640625 13.878906 17 14.3125 C 17.601563 14.710938 18.210938 15.007813 18.8125 15.40625 C 22.613281 12.90625 26 10 26 5 Z"/></Svg>);
};
export default SVGDnaSolid;
