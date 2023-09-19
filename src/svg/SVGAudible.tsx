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
const SVGAudible = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 8 C 10.921875 8 6.535156 10.917969 4.398438 15.160156 C 6.667969 12.039063 10.34375 10 14.5 10 C 19.039063 10 23.003906 12.429688 25.191406 16.050781 L 27.480469 14.90625 C 25.296875 10.800781 20.976563 8 16 8 Z M 16 12 C 12.289063 12 9.109375 14.246094 7.730469 17.449219 C 9.273438 15.359375 11.742188 14 14.53125 14 C 17.492188 14 20.09375 15.53125 21.609375 17.84375 L 23.90625 16.691406 C 22.378906 13.894531 19.410156 12 16 12 Z M 1 15.378906 L 1 17.617188 C 6.222656 20.226563 15.550781 24.894531 15.550781 24.894531 L 16 25.117188 L 31 17.617188 L 31 15.382813 L 16 22.882813 C 7.691406 18.726563 3.3125 16.539063 1 15.378906 Z M 15.96875 16 C 13.773438 16 11.933594 17.433594 11.269531 19.414063 C 12.085938 18.546875 13.234375 18 14.515625 18 C 15.914063 18 17.148438 18.652344 17.96875 19.660156 L 20.265625 18.511719 C 19.40625 17.019531 17.816406 16 15.96875 16 Z"/></Svg>);
};
export default SVGAudible;
