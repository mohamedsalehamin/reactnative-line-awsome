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
const SVGGiftsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 L 9 7.234375 L 5.515625 5.1425781 L 4.484375 6.8574219 L 6.3886719 8 L 3 8 L 3 27 L 9 27 L 9 25 L 5 25 L 5 10 L 13.027344 10 C 13.860344 9.38 14.884 9 16 9 C 16.352 9 16.682 9.0415625 17 9.1015625 L 17 8 L 13.611328 8 L 15.515625 6.8574219 L 14.484375 5.1425781 L 11 7.234375 L 11 4 L 9 4 z M 16 11 C 14.355 11 13 12.355 13 14 C 13 14.352 13.0745 14.684 13.1875 15 L 11 15 L 11 17 L 11 27 L 29 27 L 29 17 L 29 15 L 26.8125 15 C 26.9265 14.684 27 14.352 27 14 C 27 12.355 25.645 11 24 11 C 22.25 11 21.06225 12.3275 20.28125 13.4375 C 20.17625 13.5855 20.093 13.731953 20 13.876953 C 19.906 13.731953 19.82375 13.5865 19.71875 13.4375 C 18.93675 12.3275 17.75 11 16 11 z M 16 13 C 16.625 13 17.4375 13.6715 18.0625 14.5625 C 18.2145 14.7815 18.1915 14.793953 18.3125 15.001953 L 16 15.001953 C 15.434 15.001953 15 14.567953 15 14.001953 C 15 13.435953 15.434 13 16 13 z M 24 13 C 24.566 13 25 13.434 25 14 C 25 14.566 24.566 15 24 15 L 21.6875 15 C 21.8095 14.793 21.7855 14.7805 21.9375 14.5625 C 22.5625 13.6715 23.375 13 24 13 z M 13 17 L 19 17 L 19 25 L 13 25 L 13 17 z M 21 17 L 27 17 L 27 25 L 21 25 L 21 17 z"/></Svg>);
};
export default SVGGiftsSolid;
