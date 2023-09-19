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
const SVGLyft = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 8 L 2 19 C 2 20.657 3.343 22 5 22 L 7.0625 22 C 6.4095 21.363 6 20.478 6 19.5 L 6 16 L 6 9.5 L 6 8 L 2 8 z M 22.5 8 C 19.462 8 17 10.462 17 13.5 L 17 15 L 17 16 L 17 22 C 19.209 22 21 20.209 21 18 L 23 18 L 23 14 L 21 14 L 21 13.5 C 21 12.672 21.672 12 22.5 12 C 23.328 12 24 12.672 24 13.5 L 24 16 L 24 17 C 24 19.761 26.239 22 29 22 L 30 22 L 30 18 C 28.895 18 28 17.105 28 16 L 30 16 L 30 12 L 27.787109 12 C 27.133109 9.693 25.017 8 22.5 8 z M 7 12 L 7 19 C 7 20.65 8.35 22 10 22 L 10.5 22 C 11.209 22 11.866969 21.785828 12.417969 21.423828 C 12.286969 21.620828 12.138703 21.805703 11.970703 21.970703 C 11.340703 22.610703 10.46 23 9.5 23 C 8.96 23 8.45 22.880391 8 22.650391 L 8 25.580078 C 8.61 25.850078 9.29 26 10 26 L 11 26 C 13.75 26 16 23.75 16 21 L 16 12 L 12 12 L 12 17.5 C 12 17.775 11.775 18 11.5 18 C 11.225 18 11 17.775 11 17.5 L 11 12 L 7 12 z"/></Svg>);
};
export default SVGLyft;
