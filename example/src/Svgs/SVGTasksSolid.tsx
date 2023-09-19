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
const SVGTasksSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.292969 5.292969 L 7 8.585938 L 5.707031 7.292969 L 4.292969 8.707031 L 7 11.414063 L 11.707031 6.707031 Z M 14 7 L 14 9 L 28 9 L 28 7 Z M 14 15 L 14 17 L 28 17 L 28 15 Z M 14 23 L 14 25 L 28 25 L 28 23 Z"/></Svg>);
};
export default SVGTasksSolid;
