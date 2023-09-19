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
const SVGHandsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 5 L 3 16.40625 L 3.28125 16.71875 L 9 22.4375 L 9 28 L 15 28 L 15 22.03125 L 15 22 C 15.004 21.945 15.1455 18.8445 12.5625 17.1875 C 12.5545 17.1835 12.5705 17.16025 12.5625 17.15625 C 12.5545 17.15225 12.53925 17.16025 12.53125 17.15625 C 11.34725 16.38325 10.12525 15.75075 9.28125 15.09375 C 8.43025 14.43475 8 13.887 8 13 L 6 13 C 6 14.617 6.94525 15.8435 8.03125 16.6875 C 9.11725 17.5315 10.3795 18.15275 11.4375 18.84375 L 11.46875 18.84375 C 13.07075 19.84775 13 21.96875 13 21.96875 L 13 26 L 11 26 L 11 21.59375 L 10.71875 21.28125 L 5 15.5625 L 5 5 L 3 5 z M 27 5 L 27 15.5625 L 21.28125 21.28125 L 21 21.59375 L 21 26 L 19 26 L 19 21.9375 C 19 21.9375 18.93025 19.84775 20.53125 18.84375 L 20.5625 18.84375 C 21.6175 18.15275 22.88275 17.5305 23.96875 16.6875 C 25.05475 15.8445 26 14.617 26 13 L 24 13 C 24 13.887 23.56975 14.43375 22.71875 15.09375 C 21.87475 15.74975 20.65275 16.38225 19.46875 17.15625 C 19.46075 17.16025 19.4455 17.15225 19.4375 17.15625 L 19.4375 17.1875 C 16.8745 18.8275 16.996 21.895 17 22 L 17 22.0625 L 17 28 L 23 28 L 23 22.4375 L 28.71875 16.71875 L 29 16.40625 L 29 5 L 27 5 z"/></Svg>);
};
export default SVGHandsSolid;
