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
const SVGSistrix = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.5 3 C 7.262 3 3 7.262 3 12.5 C 3 17.738 7.262 22 12.5 22 C 14.759532 22 16.834269 21.203257 18.466797 19.880859 L 27.626953 29.041016 L 29.041016 27.626953 L 19.880859 18.466797 C 21.203257 16.834269 22 14.759532 22 12.5 C 22 7.262 17.738 3 12.5 3 z M 12.5 5 C 16.636 5 20 8.364 20 12.5 C 20 16.636 16.636 20 12.5 20 C 8.364 20 5 16.636 5 12.5 C 5 8.364 8.364 5 12.5 5 z"/></Svg>);
};
export default SVGSistrix;
