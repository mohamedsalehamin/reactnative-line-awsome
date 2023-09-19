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
const SVGFireExtinguisherSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 14.707031 4 13.605469 4.84375 13.1875 6 L 12 6 C 9.253906 6 7 8.253906 7 11 L 9 11 C 9 9.34375 10.34375 8 12 8 L 13 8 L 13 10.46875 C 12.679688 10.707031 12.265625 11.046875 11.78125 11.53125 C 10.953125 12.359375 10 13.5 10 15 L 10 28 L 22 28 L 22 15 C 22 13.5 21.046875 12.359375 20.21875 11.53125 C 19.734375 11.046875 19.320313 10.707031 19 10.46875 L 19 10.1875 L 23.84375 11 L 25 11.1875 L 25 4.8125 L 23.84375 5 L 18.75 5.84375 C 18.292969 4.769531 17.234375 4 16 4 Z M 16 6 C 16.554688 6 17 6.445313 17 7 L 17 10 L 15 10 L 15 7 C 15 6.445313 15.445313 6 16 6 Z M 23 7.1875 L 23 8.8125 L 19 8.125 L 19 7.875 Z M 14.375 12 L 17.625 12 C 17.777344 12.105469 18.203125 12.390625 18.78125 12.96875 C 19.453125 13.640625 20 14.5 20 15 L 20 26 L 12 26 L 12 15 C 12 14.5 12.546875 13.640625 13.21875 12.96875 C 13.796875 12.390625 14.222656 12.105469 14.375 12 Z M 14 17 L 14 19 L 18 19 L 18 17 Z"/></Svg>);
};
export default SVGFireExtinguisherSolid;
