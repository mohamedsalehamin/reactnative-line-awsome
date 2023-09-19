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
const SVGTired = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 10.054688 11.167969 L 8.9453125 12.832031 L 10.697266 14 L 8.9453125 15.167969 L 10.054688 16.832031 L 14.302734 14 L 10.054688 11.167969 z M 21.945312 11.167969 L 17.697266 14 L 21.945312 16.832031 L 23.054688 15.167969 L 21.302734 14 L 23.054688 12.832031 L 21.945312 11.167969 z M 16 19 C 13.396 19 11.665734 21.15875 11.052734 22.34375 C 10.867734 22.70075 11.205891 23.101562 11.587891 22.976562 C 12.604891 22.642562 14.349 22 16 22 C 17.651 22 19.395109 22.643563 20.412109 22.976562 C 20.795109 23.102562 21.132266 22.70075 20.947266 22.34375 C 20.334266 21.15975 18.604 19 16 19 z"/></Svg>);
};
export default SVGTired;
