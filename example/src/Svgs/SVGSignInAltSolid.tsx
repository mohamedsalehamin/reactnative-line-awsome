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
const SVGSignInAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 10.421875 4 5.742188 7.832031 4.40625 13 L 6.46875 13 C 7.746094 8.945313 11.53125 6 16 6 C 21.515625 6 26 10.484375 26 16 C 26 21.515625 21.515625 26 16 26 C 11.53125 26 7.746094 23.054688 6.46875 19 L 4.40625 19 C 5.742188 24.167969 10.421875 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 15.34375 11.28125 L 13.90625 12.71875 L 16.1875 15 L 4 15 L 4 17 L 16.1875 17 L 13.90625 19.28125 L 15.34375 20.71875 L 19.34375 16.71875 L 20.03125 16 L 19.34375 15.28125 Z"/></Svg>);
};
export default SVGSignInAltSolid;
