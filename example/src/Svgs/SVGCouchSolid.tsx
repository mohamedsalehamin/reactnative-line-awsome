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
const SVGCouchSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 7 C 4.355469 7 3 8.355469 3 10 L 3 12.1875 C 1.84375 12.605469 1 13.707031 1 15 L 1 26 L 3 26 L 3 24 L 29 24 L 29 26 L 31 26 L 31 15 C 31 13.707031 30.15625 12.605469 29 12.1875 L 29 10 C 29 8.355469 27.644531 7 26 7 Z M 6 9 L 26 9 C 26.554688 9 27 9.445313 27 10 L 27 12.1875 C 25.84375 12.605469 25 13.707031 25 15 L 25 17 L 7 17 L 7 15 C 7 13.707031 6.15625 12.605469 5 12.1875 L 5 10 C 5 9.445313 5.445313 9 6 9 Z M 4 14 C 4.554688 14 5 14.445313 5 15 L 5 19 L 27 19 L 27 15 C 27 14.445313 27.445313 14 28 14 C 28.554688 14 29 14.445313 29 15 L 29 22 L 3 22 L 3 15 C 3 14.445313 3.445313 14 4 14 Z"/></Svg>);
};
export default SVGCouchSolid;
