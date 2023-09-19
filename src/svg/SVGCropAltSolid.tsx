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
const SVGCropAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 4 L 8 8 L 4 8 L 4 10 L 8 10 L 8 24 L 22 24 L 22 28 L 24 28 L 24 24 L 28 24 L 28 22 L 22 22 L 11.4375 22 L 10 22 L 10 20.5625 L 10 10 L 10 4 L 8 4 z M 12 8 L 12 10 L 22 10 L 22 20 L 24 20 L 24 8 L 12 8 z"/></Svg>);
};
export default SVGCropAltSolid;
