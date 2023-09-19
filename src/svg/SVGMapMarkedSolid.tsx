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
const SVGMapMarkedSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22 3 C 18.699 3 16 5.699 16 9 C 16 9.992 16.383 11.004 16.875 12.125 C 17.367 13.246 17.988 14.43425 18.625 15.53125 C 19.898 17.72625 21.1875 19.5625 21.1875 19.5625 L 22 20.75 L 22.8125 19.5625 C 22.8125 19.5625 24.101 17.72625 25.375 15.53125 C 26.012 14.43325 26.633 13.246 27.125 12.125 C 27.617 11.004 28 9.992 28 9 C 28 5.699 25.301 3 22 3 z M 11.96875 4.9375 L 4 8.34375 L 4 27.53125 L 12.03125 24.0625 L 20.03125 27.0625 L 28 23.65625 L 28 14.9375 C 27.363 16.1605 26.656 17.332 26 18.375 L 26 22.34375 L 21 24.46875 L 21 22.84375 L 19.53125 20.71875 C 19.37525 20.49175 19.191 20.2225 19 19.9375 L 19 24.5625 L 13 22.3125 L 13 7.4375 L 14.09375 7.84375 C 14.19175 7.16775 14.367 6.51625 14.625 5.90625 L 11.96875 4.9375 z M 22 5 C 24.219 5 26 6.781 26 9 C 26 9.387 25.7585 10.3005 25.3125 11.3125 C 24.8675 12.3245 24.238 13.47225 23.625 14.53125 C 22.809 15.93725 22.457 16.438953 22 17.126953 C 21.543 16.438953 21.191 15.93725 20.375 14.53125 C 19.762 13.47225 19.1335 12.3245 18.6875 11.3125 C 18.2425 10.3005 18 9.387 18 9 C 18 6.781 19.781 5 22 5 z M 11 7.5 L 11 22.34375 L 6 24.46875 L 6 9.65625 L 11 7.5 z"/></Svg>);
};
export default SVGMapMarkedSolid;
