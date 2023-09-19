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
const SVGCommentsDollarSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 3 L 2 21 L 6 21 L 6 26.09375 L 7.625 24.78125 L 12.34375 21 L 22 21 L 22 3 L 2 3 z M 4 5 L 20 5 L 20 19 L 11.65625 19 L 11.375 19.21875 L 8 21.90625 L 8 19 L 4 19 L 4 5 z M 11 7 L 11 8.0390625 C 9.879 8.2270625 9 9.203 9 10.375 C 9 11.129 9.422375 11.827875 10.109375 12.171875 L 13 13.617188 C 12.996 13.840187 12.840187 14 12.617188 14 L 11.382812 14 C 11.159812 14 11 13.840188 11 13.617188 L 11 13 L 9 13 L 9 13.617188 C 9 14.789188 9.875 15.772937 11 15.960938 L 11 17 L 13 17 L 13 15.960938 C 14.125 15.772937 15 14.789188 15 13.617188 C 15 12.863188 14.569531 12.168125 13.894531 11.828125 L 11 10.378906 C 11.008 10.386906 11 10.379 11 10.375 C 11 10.152 11.155812 10 11.382812 10 L 12.617188 10 C 12.840188 10 13 10.159813 13 10.382812 L 13 11 L 15 11 L 15 10.382812 C 15 9.2108125 14.125 8.2270625 13 8.0390625 L 13 7 L 11 7 z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.90625 L 20.34375 23 L 12.84375 23 L 10.34375 25 L 19.65625 25 L 26 30.09375 L 26 25 L 30 25 L 30 9 L 24 9 z"/></Svg>);
};
export default SVGCommentsDollarSolid;
