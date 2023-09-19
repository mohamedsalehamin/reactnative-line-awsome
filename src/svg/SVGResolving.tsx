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
const SVGResolving = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 9.857 3 4.7113281 7.2883906 3.3613281 13.025391 L 3.3769531 13.019531 L 14.935547 9.6894531 C 16.744547 9.1624531 17.756359 9.0846719 19.068359 9.2636719 C 20.956359 9.5816719 21.812766 10.564531 22.259766 12.144531 L 22.824219 14.113281 C 23.251219 15.574281 22.87575 16.746219 21.59375 17.949219 C 20.58975 18.853219 19.972578 19.220734 18.392578 19.677734 L 13.572266 21.058594 L 25.050781 22.470703 L 25.556641 24.248047 L 23.052734 24.945312 L 8.1171875 23.005859 L 9.2871094 27.111328 C 11.249109 28.302328 13.542 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 18.039062 11.730469 C 17.503633 11.724609 16.765469 11.860156 15.730469 12.160156 L 5.8691406 14.990234 L 7.3691406 20.160156 L 17.740234 17.160156 C 20.150234 16.470156 20.340781 15.930625 20.050781 14.890625 L 19.460938 12.830078 C 19.260938 12.142578 18.931445 11.740234 18.039062 11.730469 z M 3.0078125 16.132812 C 3.0328125 18.580813 3.7422656 20.862547 4.9472656 22.810547 L 3.0078125 16.132812 z"/></Svg>);
};
export default SVGResolving;
