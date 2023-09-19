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
const SVGFlickr = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 24 C 5 25.644531 6.355469 27 8 27 L 24 27 C 25.644531 27 27 25.644531 27 24 L 27 8 C 27 6.355469 25.644531 5 24 5 Z M 8 7 L 24 7 C 24.566406 7 25 7.433594 25 8 L 25 24 C 25 24.566406 24.566406 25 24 25 L 8 25 C 7.433594 25 7 24.566406 7 24 L 7 8 C 7 7.433594 7.433594 7 8 7 Z M 11.5 12.5 C 9.566406 12.5 8 14.066406 8 16 C 8 17.933594 9.566406 19.5 11.5 19.5 C 13.433594 19.5 15 17.933594 15 16 C 15 14.066406 13.433594 12.5 11.5 12.5 Z M 20.5 12.5 C 18.566406 12.5 17 14.066406 17 16 C 17 17.933594 18.566406 19.5 20.5 19.5 C 22.433594 19.5 24 17.933594 24 16 C 24 14.066406 22.433594 12.5 20.5 12.5 Z"/></Svg>);
};
export default SVGFlickr;
