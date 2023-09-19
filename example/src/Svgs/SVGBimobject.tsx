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
const SVGBimobject = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 10 10 L 10 20.8125 L 12.984375 20.8125 L 12.984375 19.193359 L 13.027344 19.193359 C 13.402344 20.300359 14.248688 21 16.304688 21 L 17.097656 21 C 21.397656 21 21.929688 19.454437 21.929688 17.148438 L 21.929688 15.521484 C 21.929688 13.214484 21.396937 11.679687 17.085938 11.679688 L 16.28125 11.679688 C 14.88325 11.679688 13.244156 12.065375 13.035156 13.484375 L 12.984375 13.484375 L 12.984375 10 L 10 10 z M 15.050781 14.238281 L 17.285156 14.238281 C 18.913156 14.228281 19.070312 14.790734 19.070312 15.802734 L 19.070312 16.867188 C 19.070312 17.879188 18.913156 18.443359 17.285156 18.443359 L 15.050781 18.443359 C 13.704781 18.443359 12.994141 18.139203 12.994141 16.783203 L 12.994141 15.896484 C 12.994141 14.529484 13.704781 14.238281 15.050781 14.238281 z"/></Svg>);
};
export default SVGBimobject;
