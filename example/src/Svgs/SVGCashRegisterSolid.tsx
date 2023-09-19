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
const SVGCashRegisterSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22 3 L 22 7 C 20.152344 7 18.386719 7.332031 16.734375 7.910156 L 16.207031 6.761719 L 17.109375 6.359375 L 16.296875 4.53125 L 12.644531 6.15625 L 13.457031 7.984375 L 14.378906 7.574219 L 14.890625 8.679688 C 13.796875 9.226563 12.78125 9.898438 11.847656 10.667969 L 11.0625 9.832031 L 11.789063 9.164063 L 10.4375 7.6875 L 7.492188 10.394531 L 8.84375 11.871094 L 9.585938 11.1875 L 10.390625 12.035156 C 9.433594 13.050781 8.609375 14.191406 7.945313 15.429688 L 6.863281 14.894531 L 7.3125 14.011719 L 5.53125 13.105469 L 3.71875 16.671875 L 5.5 17.578125 L 5.957031 16.675781 L 7.101563 17.246094 C 6.523438 18.738281 6.15625 20.332031 6.050781 22 L 4 22 L 4 28 L 28 28 L 28 3 Z M 24 5 L 26 5 L 26 22 L 8.050781 22 C 8.5625 14.726563 14.59375 9 22 9 L 24 9 Z M 18 11.953125 C 16.894531 11.953125 16 12.851563 16 13.953125 C 16 14.667969 16.382813 15.328125 17 15.6875 L 17 20 L 22 20 L 22 18 L 19 18 L 19 15.683594 C 19.617188 15.328125 20 14.667969 20 13.953125 C 20 12.851563 19.105469 11.953125 18 11.953125 Z M 6 24 L 26 24 L 26 26 L 6 26 Z"/></Svg>);
};
export default SVGCashRegisterSolid;
