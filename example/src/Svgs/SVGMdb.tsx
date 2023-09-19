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
const SVGMdb = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 1.0800781 9 L 0.080078125 21 L 2.0878906 21 L 2.6445312 14.304688 L 5.3222656 21 L 6.6777344 21 L 9.3554688 14.304688 L 9.9121094 21 L 11.919922 21 L 10.919922 9 L 9.3222656 9 L 6 17.308594 L 2.6777344 9 L 1.0800781 9 z M 14 9 L 14 21 L 16 21 C 19.301625 21 22 18.301625 22 15 C 22 11.698375 19.301625 9 16 9 L 14 9 z M 24 9 L 24 14 L 24 16 L 24 21.011719 L 28.494141 21.011719 C 30.418603 21.011719 32 19.430322 32 17.505859 C 32 16.235984 31.27724 15.164205 30.255859 14.548828 C 30.692123 13.965017 31 13.278546 31 12.5 C 31 10.578812 29.421188 9 27.5 9 L 24 9 z M 16 11 C 18.220375 11 20 12.779625 20 15 C 20 17.220375 18.220375 19 16 19 L 16 11 z M 26 11 L 27.5 11 C 28.340812 11 29 11.659188 29 12.5 C 29 13.340812 28.340812 14 27.5 14 L 26 14 L 26 11 z M 26 16 L 27.5 16 L 28.494141 16 C 29.337678 16 30 16.662322 30 17.505859 C 30 18.349397 29.337678 19.011719 28.494141 19.011719 L 26 19.011719 L 26 16 z"/></Svg>);
};
export default SVGMdb;
