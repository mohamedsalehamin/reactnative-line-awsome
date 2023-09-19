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
const SVGCutSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 19.65625 4.3125 C 18.882813 4.40625 18.195313 4.953125 17.96875 5.75 L 15.3125 15.0625 L 11.96875 16.03125 C 11.730469 14.335938 10.257813 13 8.5 13 C 6.578125 13 5 14.578125 5 16.5 C 5 18.421875 6.578125 20 8.5 20 C 9.789063 20 10.925781 19.269531 11.53125 18.21875 L 14.65625 17.34375 L 13.78125 20.46875 C 12.730469 21.074219 12 22.210938 12 23.5 C 12 25.421875 13.578125 27 15.5 27 C 17.421875 27 19 25.421875 19 23.5 C 19 21.742188 17.664063 20.269531 15.96875 20.03125 L 20.4375 4.375 C 20.171875 4.300781 19.914063 4.28125 19.65625 4.3125 Z M 27.625 11.5625 L 18.90625 14.03125 L 18.25 16.3125 L 26.25 14.03125 C 27.3125 13.726563 27.929688 12.625 27.625 11.5625 Z M 8.5 15 C 9.339844 15 10 15.660156 10 16.5 C 10 17.339844 9.339844 18 8.5 18 C 7.660156 18 7 17.339844 7 16.5 C 7 15.660156 7.660156 15 8.5 15 Z M 15.5 22 C 16.339844 22 17 22.660156 17 23.5 C 17 24.339844 16.339844 25 15.5 25 C 14.660156 25 14 24.339844 14 23.5 C 14 22.660156 14.660156 22 15.5 22 Z"/></Svg>);
};
export default SVGCutSolid;
