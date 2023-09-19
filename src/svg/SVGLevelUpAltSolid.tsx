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
const SVGLevelUpAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 4 L 16.28125 4.6875 L 7.78125 13.1875 L 9.21875 14.626953 L 16 7.84375 L 16 26 L 6 26 L 6 28 L 16 28 L 18 28 L 18 7.84375 L 24.78125 14.625 L 26.21875 13.1875 L 17.71875 4.6875 L 17 4 z"/></Svg>);
};
export default SVGLevelUpAltSolid;
