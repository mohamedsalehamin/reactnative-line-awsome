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
const SVGEllipsisHSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 14 C 4.894531 14 4 14.894531 4 16 C 4 17.105469 4.894531 18 6 18 C 7.105469 18 8 17.105469 8 16 C 8 14.894531 7.105469 14 6 14 Z M 16 14 C 14.894531 14 14 14.894531 14 16 C 14 17.105469 14.894531 18 16 18 C 17.105469 18 18 17.105469 18 16 C 18 14.894531 17.105469 14 16 14 Z M 26 14 C 24.894531 14 24 14.894531 24 16 C 24 17.105469 24.894531 18 26 18 C 27.105469 18 28 17.105469 28 16 C 28 14.894531 27.105469 14 26 14 Z"/></Svg>);
};
export default SVGEllipsisHSolid;
