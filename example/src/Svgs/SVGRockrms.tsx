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
const SVGRockrms = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 15.5 8 C 15.212 8 14.936094 8.1257969 14.746094 8.3417969 L 8.046875 16 L 10.703125 16 L 15.472656 10.550781 L 19.898438 16 L 15 16 C 14.609 16 14.254797 16.228031 14.091797 16.582031 C 13.928797 16.937031 13.986234 17.353391 14.240234 17.650391 L 18.826172 23 L 21.460938 23 L 17.173828 18 L 22 18 C 22.386 18 22.736344 17.777687 22.902344 17.429688 C 23.067344 17.081688 23.018391 16.668141 22.775391 16.369141 L 16.275391 8.3691406 C 16.089391 8.1401406 15.812531 8.005 15.519531 8 L 15.5 8 z"/></Svg>);
};
export default SVGRockrms;