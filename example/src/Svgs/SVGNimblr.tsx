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
const SVGNimblr = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 1 L 7 19 L 7.0253906 19 C 7.0166656 19.166499 7 19.331368 7 19.5 C 7 24.738 11.262 29 16.5 29 C 21.738 29 26 24.738 26 19.5 C 26 14.262 21.738 10 16.5 10 C 13.693511 10 11.174282 11.230276 9.4335938 13.171875 L 7 1 z M 16.5 12 C 20.636 12 24 15.364 24 19.5 C 24 23.636 20.636 27 16.5 27 C 12.364 27 9 23.636 9 19.5 C 9 15.364 12.364 12 16.5 12 z M 13.5 17 A 1.5 1.5 0 0 0 13.5 20 A 1.5 1.5 0 0 0 13.5 17 z M 19.5 17 A 1.5 1.5 0 0 0 19.5 20 A 1.5 1.5 0 0 0 19.5 17 z"/></Svg>);
};
export default SVGNimblr;