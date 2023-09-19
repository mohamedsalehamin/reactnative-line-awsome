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
const SVGPinterest = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.085938 7.164063 25.425781 11.628906 27.175781 C 11.523438 26.226563 11.425781 24.769531 11.667969 23.730469 C 11.886719 22.796875 13.074219 17.765625 13.074219 17.765625 C 13.074219 17.765625 12.71875 17.046875 12.71875 15.984375 C 12.71875 14.316406 13.683594 13.070313 14.886719 13.070313 C 15.910156 13.070313 16.40625 13.839844 16.40625 14.761719 C 16.40625 15.792969 15.75 17.332031 15.410156 18.757813 C 15.128906 19.953125 16.011719 20.925781 17.1875 20.925781 C 19.320313 20.925781 20.960938 18.675781 20.960938 15.429688 C 20.960938 12.558594 18.898438 10.550781 15.949219 10.550781 C 12.535156 10.550781 10.53125 13.109375 10.53125 15.757813 C 10.53125 16.789063 10.929688 17.894531 11.425781 18.496094 C 11.523438 18.613281 11.535156 18.71875 11.507813 18.839844 C 11.414063 19.21875 11.214844 20.035156 11.175781 20.199219 C 11.121094 20.421875 11 20.46875 10.773438 20.359375 C 9.273438 19.664063 8.335938 17.472656 8.335938 15.710938 C 8.335938 11.925781 11.085938 8.449219 16.265625 8.449219 C 20.429688 8.449219 23.664063 11.414063 23.664063 15.382813 C 23.664063 19.515625 21.054688 22.84375 17.4375 22.84375 C 16.222656 22.84375 15.078125 22.214844 14.6875 21.46875 C 14.6875 21.46875 14.085938 23.757813 13.9375 24.320313 C 13.667969 25.363281 12.9375 26.667969 12.445313 27.464844 C 13.570313 27.8125 14.761719 28 16 28 C 22.628906 28 28 22.628906 28 16 C 28 9.371094 22.628906 4 16 4 Z"/></Svg>);
};
export default SVGPinterest;