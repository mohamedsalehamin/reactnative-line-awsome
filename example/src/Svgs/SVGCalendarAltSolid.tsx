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
const SVGCalendarAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="m9 4v1h-4v22h22v-22h-4v-1h-2v1h-10v-1zm-2 3h2v1h2v-1h10v1h2v-1h2v2h-18zm0 4h18v14h-18zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-12 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-12 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"/></Svg>);
};
export default SVGCalendarAltSolid;
