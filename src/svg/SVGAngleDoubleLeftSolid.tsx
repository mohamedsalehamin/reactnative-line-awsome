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
const SVGAngleDoubleLeftSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.90625 4.78125 L 4.6875 16 L 15.90625 27.21875 L 17.3125 25.78125 L 7.53125 16 L 17.3125 6.21875 Z M 22.90625 4.78125 L 11.6875 16 L 22.90625 27.21875 L 24.3125 25.78125 L 14.53125 16 L 24.3125 6.21875 Z"/></Svg>);
};
export default SVGAngleDoubleLeftSolid;
