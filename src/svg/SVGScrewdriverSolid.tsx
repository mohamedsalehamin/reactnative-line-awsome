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
const SVGScrewdriverSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 27.1875 1.78125 L 26.53125 2.125 C 26.53125 2.125 25.410156 2.722656 24.09375 3.53125 C 22.777344 4.339844 21.257813 5.304688 20.28125 6.28125 C 18.800781 7.761719 17.546875 9.640625 16.9375 10.5 L 16.71875 10.28125 L 16 9.59375 L 15.28125 10.28125 L 12.8125 12.78125 L 12.09375 13.5 L 12.8125 14.1875 L 13.59375 14.96875 L 6.59375 21.96875 L 4.46875 23.03125 L 4.3125 23.34375 L 2.3125 27.375 L 2 28 L 2.5 28.53125 L 3.5 29.5 L 4 30 L 4.65625 29.6875 L 8.96875 27.53125 L 10.03125 25.40625 L 17.03125 18.40625 L 17.8125 19.1875 L 18.5 19.90625 L 19.21875 19.1875 L 21.71875 16.71875 L 22.40625 16 L 21.71875 15.28125 L 21.5 15.0625 C 22.328125 14.484375 24.113281 13.324219 25.71875 11.71875 C 27.808594 9.628906 29.875 5.46875 29.875 5.46875 L 30.21875 4.8125 L 29.71875 4.28125 L 27.71875 2.28125 Z M 26.8125 4.25 L 27.75 5.1875 C 27.25 6.089844 25.632813 8.929688 24.28125 10.28125 C 22.578125 11.984375 19.4375 14.1875 19.4375 14.1875 L 18.4375 14.84375 L 19.28125 15.71875 L 19.5625 16 L 18.5 17.0625 L 18.40625 17 L 17.71875 16.28125 L 15.71875 14.28125 L 15 13.59375 L 14.9375 13.5 L 16 12.4375 L 17.125 13.5625 L 17.8125 12.5625 C 17.8125 12.5625 20.191406 9.246094 21.71875 7.71875 C 22.410156 7.027344 23.890625 5.996094 25.15625 5.21875 C 26.0625 4.664063 26.429688 4.460938 26.8125 4.25 Z M 15 16.4375 L 15.5625 17 L 8.5 24.0625 L 8.40625 24.1875 L 8.3125 24.34375 L 7.46875 26.03125 L 4.5 27.5 L 5.96875 24.53125 L 7.65625 23.6875 L 7.8125 23.59375 L 7.9375 23.5 Z"/></Svg>);
};
export default SVGScrewdriverSolid;
