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
const SVGEnvelopeOpenTextSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10 5 L 10 6.9003906 L 4.0078125 10.802734 L 4.0078125 27 L 27.992188 27 L 27.992188 10.802734 L 22 6.8984375 L 22 5 L 10 5 z M 12 7 L 20 7 L 20 14.681641 L 16 17.273438 L 12 14.681641 L 12 7 z M 13 9 L 13 11 L 19 11 L 19 9 L 13 9 z M 10 9.2851562 L 10 13.386719 L 6.84375 11.341797 L 10 9.2851562 z M 22 9.2851562 L 25.15625 11.341797 L 22 13.386719 L 22 9.2851562 z M 13 12 L 13 14 L 19 14 L 19 12 L 13 12 z M 6.0078125 13.183594 L 16 19.65625 L 25.992188 13.183594 L 25.992188 25 L 6.0078125 25 L 6.0078125 13.183594 z"/></Svg>);
};
export default SVGEnvelopeOpenTextSolid;