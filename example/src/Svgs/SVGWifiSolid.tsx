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
const SVGWifiSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 7 C 10.984375 7 6.457031 9.082031 3.1875 12.40625 L 4.59375 13.8125 C 7.5 10.851563 11.535156 9 16 9 C 20.464844 9 24.5 10.851563 27.40625 13.8125 L 28.8125 12.40625 C 25.542969 9.082031 21.015625 7 16 7 Z M 16 12 C 12.359375 12 9.082031 13.519531 6.71875 15.9375 L 8.125 17.34375 C 10.125 15.289063 12.914063 14 16 14 C 19.085938 14 21.875 15.289063 23.875 17.34375 L 25.28125 15.9375 C 22.917969 13.519531 19.640625 12 16 12 Z M 16 17 C 13.738281 17 11.707031 17.957031 10.25 19.46875 L 11.65625 20.875 C 12.75 19.726563 14.289063 19 16 19 C 17.710938 19 19.25 19.726563 20.34375 20.875 L 21.75 19.46875 C 20.296875 17.957031 18.261719 17 16 17 Z M 16 22 C 15.117188 22 14.332031 22.390625 13.78125 23 L 16 25.21875 L 18.21875 23 C 17.667969 22.390625 16.882813 22 16 22 Z"/></Svg>);
};
export default SVGWifiSolid;
