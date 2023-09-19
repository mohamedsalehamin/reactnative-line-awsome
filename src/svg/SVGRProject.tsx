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
const SVGRProject = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 8.268 5 2 9.253 2 14.5 C 2 19.285043 7.2177912 23.232664 14 23.892578 L 14 26 L 18 26 L 18 23.892578 C 19.32391 23.763761 20.586459 23.512193 21.763672 23.150391 L 23.330078 26 L 28 26 L 25.300781 21.585938 C 28.178143 19.846052 30 17.321182 30 14.5 C 30 9.253 23.732 5 16 5 z M 17.5 8 C 23.299 8 28 11.134 28 15 C 28 17.130126 26.568065 19.034482 24.316406 20.318359 C 24.089282 20.130562 23.839097 19.975923 23.566406 19.859375 C 25.534017 19.378452 27 17.615626 27 15.5 C 27 13.015 24.985 11 22.5 11 L 14 11 L 14 21.59375 C 9.9241171 20.631974 7 18.046756 7 15 C 7 11.134 11.701 8 17.5 8 z M 18 14 L 21.5 14 C 22.328 14 23 14.672 23 15.5 C 23 16.328 22.328 17 21.5 17 L 18 17 L 18 14 z M 18 20 L 19.128906 20 C 19.686906 20 20.198797 20.303969 20.466797 20.792969 L 20.917969 21.613281 C 19.996409 21.82496 19.017517 21.950414 18 21.982422 L 18 20 z"/></Svg>);
};
export default SVGRProject;
