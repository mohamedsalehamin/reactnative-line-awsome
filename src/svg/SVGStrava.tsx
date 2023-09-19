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
const SVGStrava = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.179688 2 L 5.9003906 18 L 10.779297 18 L 14.179688 11.619141 L 17.560547 18 L 22.400391 18 L 14.179688 2 z M 22.400391 18 L 20 22.789062 L 17.560547 18 L 13.859375 18 L 20 30 L 26.099609 18 L 22.400391 18 z"/></Svg>);
};
export default SVGStrava;
