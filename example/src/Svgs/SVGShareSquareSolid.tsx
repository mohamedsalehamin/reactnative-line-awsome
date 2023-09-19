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
const SVGShareSquareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.414062 4.4375 L 22 5.8515625 L 26.167969 10 L 16.5 10 C 13.468 10 11 12.467 11 15.5 C 11 18.533 13.468 21 16.5 21 L 17 21 L 17 19 L 16.5 19 C 14.57 19 13 17.43 13 15.5 C 13 13.57 14.57 12 16.5 12 L 26.171875 12 L 22.007812 16.164062 L 23.421875 17.578125 L 30 11 L 23.414062 4.4375 z M 5 5 L 5 27 L 27 27 L 27 17 L 25 19 L 25 25 L 7 25 L 7 7 L 17.853516 7 L 19.853516 5 L 5 5 z"/></Svg>);
};
export default SVGShareSquareSolid;