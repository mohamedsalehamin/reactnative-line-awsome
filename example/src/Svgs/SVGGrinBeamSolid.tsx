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
const SVGGrinBeamSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11 12 C 8.906 12 7.390625 13.207031 7.390625 13.207031 L 8.609375 14.792969 C 8.609375 14.792969 9.6929531 14 11.001953 14 C 12.310953 14 13.392578 14.792969 13.392578 14.792969 L 14.611328 13.207031 C 14.609328 13.207031 13.094 12 11 12 z M 21 12 C 18.906 12 17.390625 13.207031 17.390625 13.207031 L 18.609375 14.792969 C 18.609375 14.792969 19.692953 14 21.001953 14 C 22.310953 14 23.392578 14.792969 23.392578 14.792969 L 24.611328 13.207031 C 24.609328 13.207031 23.094 12 21 12 z M 9 19 C 9 19 10.605 24 16 24 C 21.395 24 23 19 23 19 L 9 19 z"/></Svg>);
};
export default SVGGrinBeamSolid;
