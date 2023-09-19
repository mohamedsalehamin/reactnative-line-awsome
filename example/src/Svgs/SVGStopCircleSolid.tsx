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
const SVGStopCircleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.85 3 3 8.85 3 16 C 3 23.15 8.85 29 16 29 C 23.15 29 29 23.15 29 16 C 29 8.85 23.15 3 16 3 z M 16 5 C 22.05 5 27 9.95 27 16 C 27 22.05 22.05 27 16 27 C 9.95 27 5 22.05 5 16 C 5 9.95 9.95 5 16 5 z M 11 11 L 11 13.5 L 11 18.5 L 11 21 L 13.5 21 L 18.5 21 L 21 21 L 21 18.5 L 21 13.5 L 21 11 L 18.5 11 L 13.5 11 L 11 11 z M 13 13 L 19 13 L 19 19 L 13 19 L 13 13 z"/></Svg>);
};
export default SVGStopCircleSolid;