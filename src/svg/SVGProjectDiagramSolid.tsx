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
const SVGProjectDiagramSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 14 L 8.6347656 14 L 12 19.908203 L 12 27 L 20 27 L 20 19 L 13.783203 19 L 10.9375 14 L 11 14 L 11 11 L 21 11 L 21 14 L 29 14 L 29 6 L 21 6 L 21 9 L 11 9 L 11 6 L 3 6 z M 5 8 L 9 8 L 9 12 L 5 12 L 5 8 z M 23 8 L 27 8 L 27 12 L 23 12 L 23 8 z M 14.417969 21 L 18 21 L 18 25 L 14 25 L 14 21.238281 L 14.417969 21 z"/></Svg>);
};
export default SVGProjectDiagramSolid;
