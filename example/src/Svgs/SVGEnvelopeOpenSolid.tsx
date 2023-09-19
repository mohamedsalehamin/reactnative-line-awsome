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
const SVGEnvelopeOpenSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 L 15.46875 3.34375 L 3.46875 11.15625 L 3 11.46875 L 3 29 L 29 29 L 29 11.46875 L 28.53125 11.15625 L 16.53125 3.34375 Z M 16 5.375 L 26.1875 12 L 16 18.59375 L 5.8125 12 Z M 5 13.84375 L 15.46875 20.625 L 16 20.96875 L 16.53125 20.625 L 27 13.84375 L 27 27 L 5 27 Z"/></Svg>);
};
export default SVGEnvelopeOpenSolid;
