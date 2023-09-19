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
const SVGPercentageSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 9 C 10.355469 9 9 10.355469 9 12 L 9 13 C 9 14.644531 10.355469 16 12 16 C 13.644531 16 15 14.644531 15 13 L 15 12 C 15 10.355469 13.644531 9 12 9 Z M 19.59375 9 L 10 23 L 12.40625 23 L 22 9 Z M 12 11 C 12.566406 11 13 11.433594 13 12 L 13 13 C 13 13.566406 12.566406 14 12 14 C 11.433594 14 11 13.566406 11 13 L 11 12 C 11 11.433594 11.433594 11 12 11 Z M 20 16 C 18.355469 16 17 17.355469 17 19 L 17 20 C 17 21.644531 18.355469 23 20 23 C 21.644531 23 23 21.644531 23 20 L 23 19 C 23 17.355469 21.644531 16 20 16 Z M 20 18 C 20.566406 18 21 18.433594 21 19 L 21 20 C 21 20.566406 20.566406 21 20 21 C 19.433594 21 19 20.566406 19 20 L 19 19 C 19 18.433594 19.433594 18 20 18 Z"/></Svg>);
};
export default SVGPercentageSolid;
