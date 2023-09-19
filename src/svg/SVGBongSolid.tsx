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
const SVGBongSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 4 L 12 6 L 20 6 L 20 4 L 12 4 z M 13 7 L 13 14.677734 C 10.091057 15.875395 8 18.66082 8 22 C 8 24.23551 8.9251547 26.275654 10.414062 27.71875 L 10.705078 28 L 21.294922 28 L 21.585938 27.71875 C 23.074846 26.275654 24 24.23551 24 22 C 24 20.547126 23.531145 19.235307 22.853516 18.060547 L 24.767578 16.146484 L 25.474609 16.853516 L 26.888672 15.439453 L 24.060547 12.611328 L 22.646484 14.025391 L 23.353516 14.732422 L 21.632812 16.453125 C 20.882768 15.691855 20.003946 15.091076 19 14.677734 L 19 7 L 17 7 L 17 16.035156 L 17.714844 16.248047 C 19.55248 16.794887 21.014509 18.196819 21.650391 20 L 10.349609 20 C 10.985491 18.196819 12.44752 16.794887 14.285156 16.248047 L 15 16.035156 L 15 7 L 13 7 z M 10 22 L 22 22 C 22 23.560779 21.358174 24.943206 20.386719 26 L 11.613281 26 C 10.641826 24.943206 10 23.560779 10 22 z"/></Svg>);
};
export default SVGBongSolid;
