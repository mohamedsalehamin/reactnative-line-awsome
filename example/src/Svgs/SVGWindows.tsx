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
const SVGWindows = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 27 5 L 5 7.9921875 L 5 24.007812 L 27 27 L 27 5 z M 25 7.2890625 L 25 15 L 15 15 L 15 8.6503906 L 25 7.2890625 z M 13 8.921875 L 13 15 L 7 15 L 7 9.7382812 L 13 8.921875 z M 7 17 L 13 17 L 13 23.078125 L 7 22.261719 L 7 17 z M 15 17 L 25 17 L 25 24.710938 L 15 23.349609 L 15 17 z"/></Svg>);
};
export default SVGWindows;
