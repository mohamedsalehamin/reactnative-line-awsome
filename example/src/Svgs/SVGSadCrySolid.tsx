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
const SVGSadCrySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 19.407602 25.440831 22.457232 23 24.476562 L 23 16 C 23 15.448 22.553 15 22 15 C 21.447 15 21 15.448 21 16 L 21 25.785156 C 19.49772 26.556109 17.801322 27 16 27 C 14.198678 27 12.50228 26.556109 11 25.785156 L 11 16 C 11 15.448 10.553 15 10 15 C 9.447 15 9 15.448 9 16 L 9 24.476562 C 6.5591694 22.457232 5 19.407602 5 16 C 5 9.935 9.935 5 16 5 z M 12 10 C 10.76 10 9.8194531 10.689297 9.1894531 11.279297 C 8.5494531 11.869297 8.1601562 12.439453 8.1601562 12.439453 L 9.8398438 13.560547 C 9.8398437 13.560547 10.089297 13.130703 10.529297 12.720703 C 10.969297 12.310703 11.55 12 12 12 L 15 12 L 15 10 L 12 10 z M 17 10 L 17 12 L 20 12 C 20.45 12 21.030703 12.310703 21.470703 12.720703 C 21.910703 13.130703 22.160156 13.560547 22.160156 13.560547 L 23.839844 12.439453 C 23.839844 12.439453 23.450547 11.869297 22.810547 11.279297 C 22.180547 10.689297 21.24 10 20 10 L 17 10 z M 16 16 C 14.346 16 13 17.57 13 19.5 C 13 21.43 14.346 23 16 23 C 17.654 23 19 21.43 19 19.5 C 19 17.57 17.654 16 16 16 z M 16 18 C 16.532 18 17 18.701 17 19.5 C 17 20.299 16.532 21 16 21 C 15.468 21 15 20.299 15 19.5 C 15 18.701 15.468 18 16 18 z"/></Svg>);
};
export default SVGSadCrySolid;
