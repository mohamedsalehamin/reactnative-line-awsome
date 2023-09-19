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
const SVGThinkPeaks = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.505859 2.4394531 L 3 24 L 5.3125 24 L 15.509766 6.4199219 L 25.628906 23.798828 L 29.574219 17 L 27.261719 17 L 25.625 19.820312 L 15.505859 2.4394531 z M 15.525391 10.429688 L 8.8144531 22 L 11.128906 22 L 15.529297 14.410156 L 24.027344 29 L 26.341797 29 L 15.525391 10.429688 z"/></Svg>);
};
export default SVGThinkPeaks;
