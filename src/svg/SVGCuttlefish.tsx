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
const SVGCuttlefish = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 3 C 9.831 3 4 8.831 4 16 C 4 23.169 9.832 29 17 29 C 20.641 29 24.016953 27.535 26.501953 24.875 L 27.376953 23.939453 L 26.306641 23.232422 C 23.221641 20.468422 21.938156 17.495047 21.785156 17.123047 C 20.619156 18.684047 18.789 20 17 20 C 14.791 20 13 18.209 13 16 C 13 13.791 14.791 12 17 12 C 18.793 12 20.627922 13.320719 21.794922 14.886719 C 21.931922 14.579719 23.678641 10.735578 26.306641 8.7675781 L 27.376953 8.0605469 L 26.501953 7.125 C 24.014953 4.465 20.641 3 17 3 z M 17 5 C 19.751 5 22.322844 5.9887344 24.339844 7.8027344 C 23.068844 8.9497344 22.038922 10.370031 21.294922 11.582031 C 20.072922 10.667031 18.59 10 17 10 C 13.692 10 11 12.692 11 16 C 11 19.308 13.692 22 17 22 C 18.591 22 20.074875 21.330063 21.296875 20.414062 C 22.004875 21.515062 23.01 22.843062 24.375 24.164062 C 22.353 25.999063 19.767 27 17 27 C 10.935 27 6 22.065 6 16 C 6 9.935 10.934 5 17 5 z"/></Svg>);
};
export default SVGCuttlefish;
