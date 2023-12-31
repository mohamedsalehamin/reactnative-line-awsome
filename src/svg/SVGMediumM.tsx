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
const SVGMediumM = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 26 10.359375 L 25.210938 10.359375 C 24.914063 10.359375 24.5 10.785156 24.5 11.058594 L 24.5 20.992188 C 24.5 21.269531 24.914063 21.640625 25.210938 21.640625 L 26 21.640625 L 26 24 L 18.832031 24 L 18.832031 21.640625 L 20.332031 21.640625 L 20.332031 11.199219 L 20.261719 11.199219 L 16.757813 24 L 14.046875 24 L 10.585938 11.199219 L 10.5 11.199219 L 10.5 21.640625 L 12 21.640625 L 12 24 L 6 24 L 6 21.640625 L 6.769531 21.640625 C 7.085938 21.640625 7.5 21.269531 7.5 20.992188 L 7.5 11.058594 C 7.5 10.785156 7.085938 10.359375 6.769531 10.359375 L 6 10.359375 L 6 8 L 13.503906 8 L 15.964844 17.261719 L 16.035156 17.261719 L 18.519531 8 L 26 8 Z"/></Svg>);
};
export default SVGMediumM;
