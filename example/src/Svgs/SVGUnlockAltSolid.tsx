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
const SVGUnlockAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 12.964844 3 10.414063 4.964844 9.375 7.625 L 11.21875 8.375 C 11.976563 6.433594 13.835938 5 16 5 C 18.753906 5 21 7.246094 21 10 L 21 11.375 C 19.523438 10.515625 17.824219 10 16 10 C 10.488281 10 6 14.488281 6 20 C 6 25.511719 10.488281 30 16 30 C 21.511719 30 26 25.511719 26 20 C 26 17.214844 24.847656 14.691406 23 12.875 L 23 10 C 23 6.15625 19.84375 3 16 3 Z M 16 12 C 20.429688 12 24 15.570313 24 20 C 24 24.429688 20.429688 28 16 28 C 11.570313 28 8 24.429688 8 20 C 8 15.570313 11.570313 12 16 12 Z M 16 18 C 14.894531 18 14 18.894531 14 20 C 14 20.738281 14.402344 21.371094 15 21.71875 L 15 25 L 17 25 L 17 21.71875 C 17.597656 21.371094 18 20.738281 18 20 C 18 18.894531 17.105469 18 16 18 Z"/></Svg>);
};
export default SVGUnlockAltSolid;
