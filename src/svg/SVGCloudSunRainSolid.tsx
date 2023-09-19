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
const SVGCloudSunRainSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 6 L 7 9.09375 C 6.367188 9.222656 5.773438 9.496094 5.25 9.84375 L 3.0625 7.625 L 1.625 9.0625 L 3.84375 11.25 C 3.496094 11.773438 3.222656 12.367188 3.09375 13 L 0 13 L 0 15 L 3.09375 15 C 3.226563 15.636719 3.492188 16.226563 3.84375 16.75 L 1.625 18.9375 L 3.0625 20.375 L 5.25 18.15625 C 5.550781 18.355469 5.875 18.523438 6.21875 18.65625 C 6.097656 19.085938 6 19.535156 6 20 C 6 22.757813 8.242188 25 11 25 L 12.15625 25 C 12.335938 24.371094 12.660156 23.683594 13.03125 23 L 11 23 C 9.347656 23 8 21.652344 8 20 C 8 18.347656 9.347656 17 11 17 L 12 17 L 12 16 C 12 14.898438 12.894531 14.003906 13.90625 14 L 14.90625 14.0625 L 15.09375 13.21875 C 15.46875 11.359375 17.101563 10 19 10 C 20.605469 10 22.054688 10.960938 22.6875 12.4375 L 22.96875 13.125 L 23.875 13.03125 C 23.917969 13.023438 23.953125 13 24 13 C 25.652344 13 26.996094 14.351563 27 15.9375 L 26.96875 16.90625 L 27.75 17.09375 C 29.082031 17.433594 30 18.636719 30 20 C 30 21.652344 28.652344 23 27 23 L 26 23 C 26 23.730469 25.78125 24.410156 25.4375 25 L 27 25 C 29.757813 25 32 22.757813 32 20 C 32 17.980469 30.789063 16.179688 28.96875 15.40625 C 28.6875 12.988281 26.65625 11.097656 24.1875 11 C 23.125 9.152344 21.164063 8 19 8 C 16.417969 8 14.132813 9.671875 13.3125 12.0625 C 13.082031 12.101563 12.871094 12.140625 12.65625 12.21875 C 12.523438 11.875 12.355469 11.550781 12.15625 11.25 L 14.375 9.0625 L 12.9375 7.625 L 10.75 9.84375 C 10.226563 9.492188 9.636719 9.226563 9 9.09375 L 9 6 Z M 8 11 C 9.472656 11 10.671875 12.050781 10.9375 13.4375 C 10.546875 13.90625 10.238281 14.480469 10.09375 15.09375 C 8.886719 15.3125 7.863281 15.957031 7.125 16.875 C 5.890625 16.503906 5 15.363281 5 14 C 5 12.332031 6.332031 11 8 11 Z M 22 19 C 22 19 20 21.894531 20 23 C 20 24.105469 20.894531 25 22 25 C 22.136719 25 22.277344 24.996094 22.40625 24.96875 C 23.316406 24.78125 24 23.96875 24 23 C 24 21.894531 22 19 22 19 Z M 16 22 C 16 22 15.714844 22.453125 15.375 23 C 15.25 23.199219 15.132813 23.363281 15 23.59375 C 14.820313 23.90625 14.65625 24.210938 14.5 24.53125 C 14.421875 24.691406 14.34375 24.847656 14.28125 25 C 14.117188 25.386719 14 25.746094 14 26 C 14 27.105469 14.894531 28 16 28 C 17.105469 28 18 27.105469 18 26 C 18 25.746094 17.882813 25.386719 17.71875 25 C 17.703125 24.96875 17.703125 24.941406 17.6875 24.90625 C 17.632813 24.785156 17.5625 24.65625 17.5 24.53125 C 17.226563 23.976563 16.914063 23.464844 16.625 23 C 16.285156 22.453125 16 22 16 22 Z"/></Svg>);
};
export default SVGCloudSunRainSolid;