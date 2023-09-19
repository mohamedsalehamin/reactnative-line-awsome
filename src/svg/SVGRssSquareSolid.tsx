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
const SVGRssSquareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 10 C 11.316406 10 10.644531 10.054688 10 10.1875 L 10 12.25 C 10.640625 12.082031 11.308594 12 12 12 C 16.410156 12 20 15.589844 20 20 C 20 20.691406 19.914063 21.359375 19.75 22 L 21.8125 22 C 21.945313 21.355469 22 20.683594 22 20 C 22 14.484375 17.515625 10 12 10 Z M 12 14 C 11.296875 14 10.628906 14.121094 10 14.34375 L 10 16.5625 C 10.589844 16.21875 11.269531 16 12 16 C 14.207031 16 16 17.792969 16 20 C 16 20.730469 15.78125 21.410156 15.4375 22 L 17.65625 22 C 17.878906 21.371094 18 20.703125 18 20 C 18 16.691406 15.308594 14 12 14 Z M 12 18 C 10.894531 18 10 18.894531 10 20 C 10 21.105469 10.894531 22 12 22 C 13.105469 22 14 21.105469 14 20 C 14 18.894531 13.105469 18 12 18 Z"/></Svg>);
};
export default SVGRssSquareSolid;
