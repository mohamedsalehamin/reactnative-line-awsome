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
const SVGCodiepie = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.042969 3 C 8.8629688 3 3.0429688 8.82 3.0429688 16 C 3.0429688 23.18 8.8629688 29 16.042969 29 C 21.476969 29 26.015984 25.663688 27.958984 20.929688 L 17.125 16 L 27.658203 10.191406 C 25.524203 5.9314063 21.131969 3 16.042969 3 z M 16.042969 5 C 19.576969 5 22.813187 6.6662656 24.867188 9.4472656 L 21.285156 11.421875 C 20.003594 9.9398608 18.113489 9 16 9 C 12.134 9 9 12.134 9 16 C 9 19.866 12.134 23 16 23 C 18.277971 23 20.29176 21.905004 21.568359 20.21875 L 25.228516 21.884766 C 23.246516 25.043766 19.812969 27 16.042969 27 C 9.9779687 27 5.0429688 22.065 5.0429688 16 C 5.0429688 9.935 9.9769688 5 16.042969 5 z M 24 13 L 24 18 L 26 18 L 26 16 L 26.5 16 C 27.328 16 28 15.328 28 14.5 C 28 13.672 27.328 13 26.5 13 L 26 13 L 24 13 z"/></Svg>);
};
export default SVGCodiepie;
