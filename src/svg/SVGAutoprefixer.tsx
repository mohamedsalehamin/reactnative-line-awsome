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
const SVGAutoprefixer = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.927734 5 L 8.6679688 27 L 12.164062 27 L 13.400391 23 L 18.605469 23 L 19.837891 27 L 23.333984 27 L 15.927734 5 z M 15.96875 14.689453 L 16.041016 14.689453 L 17.986328 21 L 14.017578 21 L 15.96875 14.689453 z M 9.265625 21 L 1.4707031 21.558594 L 1 22.667969 L 8.5585938 23 L 9.265625 21 z M 22.697266 21 L 23.417969 23 L 31 22.667969 L 30.529297 21.558594 L 22.697266 21 z"/></Svg>);
};
export default SVGAutoprefixer;
