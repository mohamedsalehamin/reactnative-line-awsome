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
const SVGTapeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 5 C 5.935 5 1 9.935 1 16 C 1 22.065 5.935 27 12 27 L 31 27 L 31 25 L 18.304688 25 C 21.139358 23.008155 23 19.71963 23 16 C 23 9.935 18.065 5 12 5 z M 12 7 C 16.962 7 21 11.037 21 16 C 21 20.963 16.962 25 12 25 C 7.038 25 3 20.963 3 16 C 3 11.037 7.038 7 12 7 z M 12 12 C 9.794 12 8 13.794 8 16 C 8 18.206 9.794 20 12 20 C 14.206 20 16 18.206 16 16 C 16 13.794 14.206 12 12 12 z M 12 14 C 13.103 14 14 14.897 14 16 C 14 17.103 13.103 18 12 18 C 10.897 18 10 17.103 10 16 C 10 14.897 10.897 14 12 14 z"/></Svg>);
};
export default SVGTapeSolid;
