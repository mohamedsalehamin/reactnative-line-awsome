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
const SVGThumbsUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.6875 3 L 16.375 3.28125 L 9.59375 10 L 5 10 L 5 26 L 21.84375 26 C 23.253906 26 24.484375 25.003906 24.78125 23.625 L 26.9375 13.625 C 27.332031 11.777344 25.886719 10 24 10 L 18.25 10 L 18.4375 9.25 C 18.640625 9.09375 18.769531 9.027344 19.0625 8.625 C 19.53125 7.984375 20 6.992188 20 5.65625 C 20 4.230469 18.710938 3 17.09375 3 Z M 17.40625 5.09375 C 17.828125 5.175781 18 5.347656 18 5.65625 C 18 6.558594 17.726563 7.117188 17.46875 7.46875 C 17.210938 7.820313 17.03125 7.90625 17.03125 7.90625 L 16.6875 8.09375 L 16.5625 8.5 L 15.96875 10.75 L 15.65625 12 L 24 12 C 24.660156 12 25.105469 12.574219 24.96875 13.21875 L 22.84375 23.21875 C 22.742188 23.6875 22.320313 24 21.84375 24 L 11 24 L 11 11.40625 Z M 7 12 L 9 12 L 9 24 L 7 24 Z"/></Svg>);
};
export default SVGThumbsUpSolid;
