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
const SVGGlassWhiskeySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.8183594 7 L 8.1523438 27 L 23.847656 27 L 27.179688 7 L 4.8183594 7 z M 7.1816406 9 L 24.820312 9 L 23.154297 19 L 10.669922 19 L 11 21 L 22.820312 21 L 22.154297 25 L 9.8476562 25 L 7.1816406 9 z"/></Svg>);
};
export default SVGGlassWhiskeySolid;
