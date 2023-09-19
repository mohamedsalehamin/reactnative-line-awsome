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
const SVGAlgolia = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15 8 C 14.448 8 14 8.448 14 9 L 14 10.294922 C 14.634 10.104922 15.305 10 16 10 C 16.695 10 17.366 10.104922 18 10.294922 L 18 9 C 18 8.448 17.552 8 17 8 L 15 8 z M 10.707031 10 C 10.451156 10 10.195 10.099422 10 10.294922 L 9.2929688 11 C 8.9019687 11.391 8.9019687 12.024063 9.2929688 12.414062 L 10.109375 13.232422 C 10.655375 12.381422 11.379469 11.657328 12.230469 11.111328 L 11.414062 10.294922 C 11.218563 10.099422 10.962906 10 10.707031 10 z M 16 11 C 12.686 11 10 13.686 10 17 C 10 20.314 12.686 23 16 23 C 19.314 23 22 20.314 22 17 C 22 13.686 19.314 11 16 11 z M 16 13 C 18.206 13 20 14.794 20 17 C 20 19.206 18.206 21 16 21 C 13.794 21 12 19.206 12 17 C 12 14.794 13.794 13 16 13 z M 16 14 L 16 17 L 18.59375 15.517578 C 18.07575 14.614578 17.115 14 16 14 z"/></Svg>);
};
export default SVGAlgolia;
