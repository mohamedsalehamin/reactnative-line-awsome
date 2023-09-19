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
const SVGChairSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 L 11 16.4375 C 10.898438 16.464844 10.777344 16.503906 10.6875 16.53125 C 10.203125 16.679688 9.867188 16.835938 9.625 17 C 9.503906 17.082031 9.390625 17.167969 9.3125 17.25 C 9.234375 17.332031 9.125 17.5 9.125 17.5 L 9 17.71875 L 9 20 L 10 20 L 10 28 L 12 28 L 12 20 L 20 20 L 20 28 L 22 28 L 22 20 L 23 20 L 23 17.71875 L 22.875 17.5 C 22.875 17.5 22.765625 17.332031 22.6875 17.25 C 22.609375 17.167969 22.496094 17.082031 22.375 17 C 22.132813 16.835938 21.796875 16.679688 21.3125 16.53125 C 21.222656 16.503906 21.101563 16.464844 21 16.4375 L 21 4 L 19 4 L 19 5 L 13 5 L 13 4 Z M 13 7 L 15 7 L 15 16.03125 C 14.242188 16.050781 13.5625 16.070313 13 16.125 Z M 17 7 L 19 7 L 19 16.125 C 18.4375 16.070313 17.757813 16.050781 17 16.03125 Z"/></Svg>);
};
export default SVGChairSolid;
