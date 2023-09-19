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
const SVGCreativeCommonsSa = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 16 10 C 13.794 10 12 11.794 12 14 L 10 14 L 13 17 L 16 14 L 14 14 C 14 12.897 14.897 12 16 12 C 17.103 12 18 12.897 18 14 L 18 18 C 18 19.103 17.103 20 16 20 C 15.263 20 14.624344 19.595 14.277344 19 L 12.142578 19 C 12.589578 20.721 14.141 22 16 22 C 18.206 22 20 20.206 20 18 L 20 14 C 20 11.794 18.206 10 16 10 z"/></Svg>);
};
export default SVGCreativeCommonsSa;
