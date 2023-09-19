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
const SVGBroomSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 28.28125 2.28125 L 18.28125 12.28125 L 17 11 L 17 10.96875 L 16.96875 10.9375 C 16.328125 10.367188 15.492188 10.09375 14.6875 10.09375 C 13.882813 10.09375 13.105469 10.394531 12.5 11 L 12.34375 11.125 L 11.84375 11.625 L 11.5 11.90625 L 2.375 19 L 1.5 19.71875 L 12.28125 30.5 L 13 29.625 L 20.0625 20.5625 L 20.09375 20.59375 L 21.09375 19.59375 L 21.125 19.59375 L 21.15625 19.5625 C 22.296875 18.277344 22.304688 16.304688 21.09375 15.09375 L 19.71875 13.71875 L 29.71875 3.71875 Z M 14.6875 12.09375 C 14.996094 12.085938 15.335938 12.191406 15.59375 12.40625 C 15.605469 12.414063 15.613281 12.429688 15.625 12.4375 L 19.6875 16.5 C 20.0625 16.875 20.097656 17.671875 19.6875 18.1875 C 19.671875 18.207031 19.671875 18.230469 19.65625 18.25 L 19.34375 18.53125 L 13.5625 12.75 L 13.90625 12.40625 C 14.097656 12.214844 14.378906 12.101563 14.6875 12.09375 Z M 12.03125 14.03125 L 17.96875 19.96875 L 12.09375 27.46875 L 10.65625 26.03125 L 12.8125 23.78125 L 11.375 22.40625 L 9.25 24.625 L 7.9375 23.3125 L 11.8125 19.40625 L 10.40625 18 L 6.5 21.875 L 4.53125 19.90625 Z"/></Svg>);
};
export default SVGBroomSolid;
