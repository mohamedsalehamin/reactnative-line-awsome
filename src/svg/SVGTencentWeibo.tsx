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
const SVGTencentWeibo = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 2 C 12.039063 2 8 6.039063 8 11 C 8 12.53125 8.382813 13.957031 9.0625 15.21875 C 9.457031 14.503906 9.90625 13.832031 10.375 13.1875 C 10.144531 12.496094 10 11.769531 10 11 C 10 7.140625 13.140625 4 17 4 C 20.859375 4 24 7.140625 24 11 C 24 14.859375 20.859375 18 17 18 C 16.183594 18 15.414063 17.851563 14.6875 17.59375 C 14.34375 18.15625 14.027344 18.742188 13.75 19.375 C 14.761719 19.769531 15.851563 20 17 20 C 21.960938 20 26 15.960938 26 11 C 26 6.039063 21.960938 2 17 2 Z M 17 8 C 15.34375 8 14 9.34375 14 11 C 14 11.335938 14.085938 11.636719 14.1875 11.9375 C 8.457031 17.242188 8 25.210938 8 29 L 10 29 C 10 25.386719 10.417969 18.257813 15.40625 13.53125 C 15.867188 13.824219 16.414063 14 17 14 C 18.65625 14 20 12.65625 20 11 C 20 9.34375 18.65625 8 17 8 Z"/></Svg>);
};
export default SVGTencentWeibo;