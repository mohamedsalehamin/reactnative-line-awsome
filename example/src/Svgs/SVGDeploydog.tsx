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
const SVGDeploydog = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 6 C 3.794 6 2 7.794 2 10 L 2 22 C 2 24.206 3.794 26 6 26 L 26 26 C 28.206 26 30 24.206 30 22 L 30 10 C 30 7.794 28.206 6 26 6 L 6 6 z M 6 8 L 26 8 C 27.103 8 28 8.897 28 10 L 28 22 C 28 23.103 27.103 24 26 24 L 6 24 C 4.897 24 4 23.103 4 22 L 4 10 C 4 8.897 4.897 8 6 8 z M 12 10 L 12 14.554688 C 11.41 14.210688 10.732 14 10 14 C 7.791 14 6 15.791 6 18 C 6 20.209 7.791 22 10 22 C 10.732 22 11.41 21.789312 12 21.445312 L 12 22 L 15 22 L 15 10 L 12 10 z M 22 10 L 22 14.554688 C 21.41 14.210688 20.732 14 20 14 C 17.791 14 16 15.791 16 18 C 16 20.209 17.791 22 20 22 C 20.732 22 21.41 21.789312 22 21.445312 L 22 22 L 25 22 L 25 10 L 22 10 z M 10.5 16.5 C 11.328 16.5 12 17.172 12 18 C 12 18.828 11.328 19.5 10.5 19.5 C 9.672 19.5 9 18.828 9 18 C 9 17.172 9.672 16.5 10.5 16.5 z M 20.5 16.5 C 21.328 16.5 22 17.172 22 18 C 22 18.828 21.328 19.5 20.5 19.5 C 19.672 19.5 19 18.828 19 18 C 19 17.172 19.672 16.5 20.5 16.5 z"/></Svg>);
};
export default SVGDeploydog;
