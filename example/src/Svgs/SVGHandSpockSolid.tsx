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
const SVGHandSpockSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.40625 2 C 12.210938 2.003906 12.011719 2.015625 11.8125 2.0625 C 10.472656 2.367188 9.53125 3.558594 9.46875 4.875 C 9.101563 4.816406 8.722656 4.820313 8.34375 4.90625 C 6.738281 5.269531 5.699219 6.894531 6.0625 8.5 L 8 16.90625 L 8 17.75 L 7.125 16.875 C 5.960938 15.710938 4.039063 15.710938 2.875 16.875 C 1.710938 18.039063 1.710938 19.960938 2.875 21.125 L 9.65625 27.90625 C 10.832031 29.078125 12.457031 30 14.375 30 L 19 30 C 22.855469 30 26 26.855469 26 23 L 26 16 L 26.9375 11.28125 C 27.253906 9.667969 26.175781 8.066406 24.5625 7.75 C 24.222656 7.683594 23.886719 7.671875 23.5625 7.71875 L 23.78125 6.59375 C 24.097656 4.980469 23.019531 3.378906 21.40625 3.0625 C 19.792969 2.746094 18.222656 3.824219 17.90625 5.4375 L 16.90625 10.1875 L 15.375 4.34375 C 15.371094 4.335938 15.378906 4.320313 15.375 4.3125 L 15.34375 4.3125 C 15.007813 2.933594 13.773438 1.976563 12.40625 2 Z M 12.25 4.03125 C 12.800781 3.90625 13.3125 4.230469 13.4375 4.78125 L 13.4375 4.8125 L 15.9375 14.40625 L 16.125 15.15625 L 17.90625 15.15625 L 18.09375 14.34375 L 19.84375 5.84375 L 19.84375 5.8125 C 19.953125 5.257813 20.476563 4.921875 21.03125 5.03125 C 21.585938 5.140625 21.921875 5.664063 21.8125 6.21875 L 20 15.34375 L 21.96875 15.71875 L 23 10.53125 L 23.03125 10.53125 C 23.140625 9.976563 23.632813 9.609375 24.1875 9.71875 C 24.742188 9.828125 25.078125 10.351563 24.96875 10.90625 L 24.03125 15.8125 L 24 15.90625 L 24 23 C 24 25.773438 21.773438 28 19 28 L 14.375 28 C 13.101563 28 12.007813 27.378906 11.09375 26.46875 L 4.28125 19.71875 C 3.882813 19.320313 3.882813 18.679688 4.28125 18.28125 C 4.679688 17.882813 5.320313 17.882813 5.71875 18.28125 L 8.28125 20.875 L 10 22.59375 L 10 16.78125 L 9.96875 16.6875 L 8.03125 8.0625 C 7.90625 7.511719 8.230469 6.96875 8.78125 6.84375 C 9.332031 6.71875 9.84375 7.074219 9.96875 7.625 L 11.75 15.5625 L 13.71875 15.125 L 11.9375 7.15625 C 11.933594 7.144531 11.941406 7.136719 11.9375 7.125 L 11.5 5.21875 C 11.375 4.667969 11.699219 4.15625 12.25 4.03125 Z"/></Svg>);
};
export default SVGHandSpockSolid;
