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
const SVGPeaceSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 15 5.0507812 L 15 15.517578 L 6.8007812 22.015625 C 5.6653421 20.285205 5 18.219624 5 16 C 5 10.272536 9.4024418 5.5583785 15 5.0507812 z M 17 5.0507812 C 22.597558 5.5583785 27 10.272536 27 16 C 27 18.220582 26.333604 20.286704 25.197266 22.017578 L 17 15.517578 L 17 5.0507812 z M 15 18.070312 L 15 26.949219 C 12.274513 26.702066 9.8390067 25.454541 8.0507812 23.580078 L 15 18.070312 z M 17 18.070312 L 23.949219 23.580078 C 22.160993 25.454541 19.725487 26.702066 17 26.949219 L 17 18.070312 z"/></Svg>);
};
export default SVGPeaceSolid;
