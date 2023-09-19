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
const SVGCcDinersClub = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 15 10 C 11.699219 10 9 12.699219 9 16 C 9 19.300781 11.699219 22 15 22 L 17 22 C 20.3125 22 23 19.3125 23 16 C 23 12.6875 20.3125 10 17 10 Z M 15 12 C 17.222656 12 19 13.777344 19 16 C 19 18.222656 17.222656 20 15 20 C 12.777344 20 11 18.222656 11 16 C 11 13.777344 12.777344 12 15 12 Z M 14.1875 13.65625 C 13.214844 14 12.5 14.910156 12.5 16 C 12.5 17.089844 13.214844 18 14.1875 18.34375 Z M 15.8125 13.65625 L 15.8125 18.34375 C 16.785156 18 17.5 17.089844 17.5 16 C 17.5 14.910156 16.785156 14 15.8125 13.65625 Z"/></Svg>);
};
export default SVGCcDinersClub;
