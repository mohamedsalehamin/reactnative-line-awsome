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
const SVGCodeBranchSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 C 9.355469 4 8 5.355469 8 7 C 8 8.292969 8.84375 9.394531 10 9.8125 L 10 22.1875 C 8.84375 22.605469 8 23.707031 8 25 C 8 26.644531 9.355469 28 11 28 C 12.644531 28 14 26.644531 14 25 C 14 23.730469 13.183594 22.65625 12.0625 22.21875 C 12.207031 20.988281 12.683594 20.382813 13.4375 19.875 C 14.335938 19.269531 15.714844 18.910156 17.21875 18.5625 C 18.722656 18.214844 20.335938 17.855469 21.6875 16.90625 C 22.875 16.074219 23.773438 14.710938 23.96875 12.8125 C 25.140625 12.402344 26 11.300781 26 10 C 26 8.355469 24.644531 7 23 7 C 21.355469 7 20 8.355469 20 10 C 20 11.277344 20.832031 12.351563 21.96875 12.78125 C 21.832031 14.09375 21.324219 14.746094 20.5625 15.28125 C 19.664063 15.910156 18.277344 16.28125 16.78125 16.625 C 15.285156 16.96875 13.664063 17.273438 12.3125 18.1875 C 12.203125 18.261719 12.101563 18.355469 12 18.4375 L 12 9.8125 C 13.15625 9.394531 14 8.292969 14 7 C 14 5.355469 12.644531 4 11 4 Z M 11 6 C 11.5625 6 12 6.4375 12 7 C 12 7.5625 11.5625 8 11 8 C 10.4375 8 10 7.5625 10 7 C 10 6.4375 10.4375 6 11 6 Z M 23 9 C 23.5625 9 24 9.4375 24 10 C 24 10.5625 23.5625 11 23 11 C 22.4375 11 22 10.5625 22 10 C 22 9.4375 22.4375 9 23 9 Z M 11 24 C 11.5625 24 12 24.4375 12 25 C 12 25.5625 11.5625 26 11 26 C 10.4375 26 10 25.5625 10 25 C 10 24.4375 10.4375 24 11 24 Z"/></Svg>);
};
export default SVGCodeBranchSolid;
