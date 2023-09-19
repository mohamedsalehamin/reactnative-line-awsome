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
const SVGCreativeCommons = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 12 12 C 10.355469 12 9 13.355469 9 15 L 9 17 C 9 18.644531 10.355469 20 12 20 C 13.644531 20 15 18.644531 15 17 L 13 17 C 13 17.566406 12.566406 18 12 18 C 11.433594 18 11 17.566406 11 17 L 11 15 C 11 14.433594 11.433594 14 12 14 C 12.566406 14 13 14.433594 13 15 L 15 15 C 15 13.355469 13.644531 12 12 12 Z M 20 12 C 18.355469 12 17 13.355469 17 15 L 17 17 C 17 18.644531 18.355469 20 20 20 C 21.644531 20 23 18.644531 23 17 L 21 17 C 21 17.566406 20.566406 18 20 18 C 19.433594 18 19 17.566406 19 17 L 19 15 C 19 14.433594 19.433594 14 20 14 C 20.566406 14 21 14.433594 21 15 L 23 15 C 23 13.355469 21.644531 12 20 12 Z"/></Svg>);
};
export default SVGCreativeCommons;
