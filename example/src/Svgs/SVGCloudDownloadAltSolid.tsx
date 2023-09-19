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
const SVGCloudDownloadAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 6 C 13.351563 6 11.050781 7.238281 9.40625 9.0625 C 9.269531 9.046875 9.148438 9 9 9 C 6.800781 9 5 10.800781 5 13 C 3.269531 14.054688 2 15.835938 2 18 C 2 21.300781 4.699219 24 8 24 L 13 24 L 13 22 L 8 22 C 5.78125 22 4 20.21875 4 18 C 4 16.339844 5.007813 14.921875 6.4375 14.3125 L 7.125 14.03125 L 7.03125 13.28125 C 7.011719 13.117188 7 13.023438 7 13 C 7 11.882813 7.882813 11 9 11 C 9.140625 11 9.296875 11.019531 9.46875 11.0625 L 10.09375 11.21875 L 10.46875 10.71875 C 11.75 9.074219 13.75 8 16 8 C 19.277344 8 22.011719 10.253906 22.78125 13.28125 L 22.96875 14.0625 L 23.8125 14.03125 C 24.023438 14.019531 24.070313 14 24 14 C 26.21875 14 28 15.78125 28 18 C 28 20.21875 26.21875 22 24 22 L 19 22 L 19 24 L 24 24 C 27.300781 24 30 21.300781 30 18 C 30 14.84375 27.511719 12.316406 24.40625 12.09375 C 23.183594 8.574219 19.925781 6 16 6 Z M 15 18 L 15 26 L 12 26 L 16 30 L 20 26 L 17 26 L 17 18 Z"/></Svg>);
};
export default SVGCloudDownloadAltSolid;
