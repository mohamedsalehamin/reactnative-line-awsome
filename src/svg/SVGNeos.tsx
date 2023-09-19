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
const SVGNeos = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.2871094 5 L 6 6.7011719 L 6 26 L 6.6679688 26 L 10.662109 26 L 14.003906 23.556641 L 14.001953 19.523438 L 18.367188 26 L 21.787109 26 L 25 24 L 25 5 L 20.337891 5 L 17 7.4199219 L 17 11.349609 L 12.767578 5 L 8.2871094 5 z M 9.3886719 6 L 12.232422 6 L 21 19.150391 L 21 6 L 24 6 L 24 23 L 20.720703 23 L 9.3886719 6 z M 8.328125 6.2148438 L 20.185547 24 L 23.041016 24 L 21.474609 25 L 18.984375 25 L 14 17.748047 L 14 17.734375 L 13.990234 17.734375 L 10 11.929688 L 10 22.25 L 7 24.5 L 7 7.203125 L 8.328125 6.2148438 z M 20 6.4804688 L 20 15.849609 L 18 12.849609 L 18 7.9296875 L 20 6.4804688 z M 11 15.070312 L 13 18.037109 L 13.003906 23.048828 L 10.337891 25 L 8 25 L 11 22.75 L 11 15.070312 z"/></Svg>);
};
export default SVGNeos;
