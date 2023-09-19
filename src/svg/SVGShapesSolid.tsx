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
const SVGShapesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22.357422 3.8632812 L 16.189453 15 L 28.525391 15 L 22.357422 3.8632812 z M 22.357422 7.9902344 L 25.130859 13 L 19.583984 13 L 22.357422 7.9902344 z M 9 16 C 5.691 16 3 18.691 3 22 C 3 25.309 5.691 28 9 28 C 12.309 28 15 25.309 15 22 C 15 18.691 12.309 16 9 16 z M 17 17 L 17 28 L 28 28 L 28 17 L 17 17 z M 9 18 C 11.206 18 13 19.794 13 22 C 13 24.206 11.206 26 9 26 C 6.794 26 5 24.206 5 22 C 5 19.794 6.794 18 9 18 z M 19 19 L 26 19 L 26 26 L 19 26 L 19 19 z"/></Svg>);
};
export default SVGShapesSolid;
