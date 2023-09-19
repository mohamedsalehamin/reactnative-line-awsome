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
const SVGHandRockSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 6 C 13.9375 6 13.003906 6.5625 12.46875 7.40625 C 12.03125 7.15625 11.535156 7 11 7 C 9.355469 7 8 8.355469 8 10 L 8 13.65625 L 5.90625 16.34375 C 4.628906 17.996094 4.714844 20.367188 6.09375 21.9375 L 8.46875 24.625 C 9.796875 26.136719 11.707031 27 13.71875 27 L 19 27 C 22.855469 27 26 23.855469 26 20 L 26 11 C 26 9.355469 24.644531 8 23 8 C 22.464844 8 21.96875 8.15625 21.53125 8.40625 C 20.996094 7.5625 20.0625 7 19 7 C 18.464844 7 17.96875 7.15625 17.53125 7.40625 C 16.996094 6.5625 16.0625 6 15 6 Z M 15 8 C 15.566406 8 16 8.433594 16 9 L 16 12 L 18 12 L 18 10 C 18 9.433594 18.433594 9 19 9 C 19.566406 9 20 9.433594 20 10 L 20 12 L 22 12 L 22 11 C 22 10.433594 22.433594 10 23 10 C 23.566406 10 24 10.433594 24 11 L 24 20 C 24 22.773438 21.773438 25 19 25 L 13.71875 25 C 12.28125 25 10.917969 24.394531 9.96875 23.3125 L 7.59375 20.59375 C 6.839844 19.734375 6.800781 18.5 7.5 17.59375 L 8 16.9375 L 8 18 L 10 18 L 10 10 C 10 9.433594 10.433594 9 11 9 C 11.566406 9 12 9.433594 12 10 L 12 12 L 14 12 L 14 9 C 14 8.433594 14.433594 8 15 8 Z"/></Svg>);
};
export default SVGHandRockSolid;