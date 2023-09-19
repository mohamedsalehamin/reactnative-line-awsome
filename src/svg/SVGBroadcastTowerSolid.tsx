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
const SVGBroadcastTowerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.1875 4.1875 C 2.890625 8.371094 2.90625 15.3125 7.1875 19.59375 L 8.59375 18.1875 C 5.074219 14.667969 5.089844 9.039063 8.59375 5.625 Z M 24.8125 4.28125 L 23.40625 5.71875 C 26.929688 9.242188 26.929688 14.757813 23.40625 18.28125 L 24.8125 19.71875 C 29.085938 15.445313 29.085938 8.554688 24.8125 4.28125 Z M 9.90625 7.1875 C 7.320313 9.773438 7.320313 14.007813 9.90625 16.59375 L 11.3125 15.1875 C 9.5 13.375 9.5 10.40625 11.3125 8.59375 Z M 22.09375 7.28125 L 20.6875 8.71875 C 22.5 10.53125 22.5 13.46875 20.6875 15.28125 L 22.09375 16.71875 C 24.679688 14.132813 24.679688 9.867188 22.09375 7.28125 Z M 16 10 C 14.894531 10 14 10.894531 14 12 C 14 12.625 14.300781 13.164063 14.75 13.53125 L 10.3125 26 L 9 26 L 9 28 L 13 28 L 13 26 L 12.40625 26 L 16 15.96875 L 19.59375 26 L 19 26 L 19 28 L 23 28 L 23 26 L 21.6875 26 L 17.25 13.53125 C 17.699219 13.164063 18 12.625 18 12 C 18 10.894531 17.105469 10 16 10 Z"/></Svg>);
};
export default SVGBroadcastTowerSolid;
