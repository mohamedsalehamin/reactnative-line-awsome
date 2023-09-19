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
const SVGGlassMartiniAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.5 4 C 5.464844 4 3 6.464844 3 9.5 C 3 12.535156 5.464844 15 8.5 15 C 9.3125 15 10.078125 14.796875 10.78125 14.46875 L 16 21.34375 L 16 27 L 12 27 L 12 29 L 22 29 L 22 27 L 18 27 L 18 21.34375 L 26.8125 9.71875 L 27 9.4375 L 27 8 L 13.75 8 C 13.144531 5.679688 10.984375 4 8.5 4 Z M 8.5 6 C 9.890625 6 11.089844 6.839844 11.625 8 L 7 8 L 7 9.4375 L 7.1875 9.71875 L 9.53125 12.8125 C 9.1875 12.933594 8.835938 13 8.5 13 C 6.535156 13 5 11.464844 5 9.5 C 5 7.535156 6.535156 6 8.5 6 Z M 9.9375 10 L 24.0625 10 L 22.5625 12 L 13.5 12 L 15 14 L 21.03125 14 L 17 19.34375 Z"/></Svg>);
};
export default SVGGlassMartiniAltSolid;
