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
const SVGShareAltSquareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20 10 A 2 2 0 0 0 18.007812 12.15625 L 13.320312 14.5 A 2 2 0 0 0 12 14 A 2 2 0 0 0 12 18 A 2 2 0 0 0 13.320312 17.5 L 18.007812 19.84375 A 2 2 0 0 0 20 22 A 2 2 0 0 0 20 18 A 2 2 0 0 0 18.679688 18.5 L 13.992188 16.15625 A 2 2 0 0 0 13.992188 15.84375 L 18.679688 13.5 A 2 2 0 0 0 20 14 A 2 2 0 0 0 20 10 z"/></Svg>);
};
export default SVGShareAltSquareSolid;
