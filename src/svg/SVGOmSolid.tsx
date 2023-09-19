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
const SVGOmSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 29 19.121094 C 29 21.207031 28.15625 26.574219 23.589844 26.574219 C 19.238281 26.574219 17.652344 22.730469 17.953125 21.339844 C 18.203125 21.765625 18.996094 23.957031 23.277344 23.957031 C 27.667969 23.957031 27.714844 19.078125 27.714844 19.078125 C 27.714844 19.078125 27.640625 15.617188 24.964844 15.617188 C 21.699219 15.617188 21.589844 20.808594 18.308594 20.808594 C 16.664063 20.808594 16.113281 19.9375 15.78125 19.699219 C 16.488281 21.894531 15.652344 27 10.277344 27 C 2.605469 27 3.003906 18.722656 3.003906 18.722656 C 3.003906 18.722656 4.289063 23.824219 10.144531 23.824219 C 13.714844 23.824219 14.183594 21.785156 14.183594 20.851563 C 14.183594 19.921875 13.472656 18.28125 10.277344 18.28125 L 9.578125 14.964844 C 9.578125 14.964844 10.523438 15.273438 11.691406 15.273438 C 13.230469 15.273438 13.582031 14.246094 13.582031 13.402344 C 13.582031 12.5625 12.757813 11.710938 11.25 11.710938 C 8.914063 11.710938 7.039063 14.109375 7.039063 14.109375 L 5.222656 10.738281 C 5.222656 10.738281 6.910156 8.5625 10.328125 8.5625 C 13.742188 8.5625 15.292969 11.359375 15.292969 13 C 15.292969 14.640625 14.527344 16 13.074219 16.769531 C 15.035156 17.691406 14.441406 18.367188 15.691406 18.367188 C 17.761719 18.367188 18.042969 16.675781 19.015625 15.140625 C 19.914063 13.730469 21.191406 12.46875 23.453125 12.46875 C 27.980469 12.46875 29 17.039063 29 19.121094 Z M 20.171875 11.980469 C 22.472656 11.980469 24.253906 10.648438 24.253906 10.648438 L 22.34375 7.277344 C 22.34375 7.277344 21.015625 9.140625 18.441406 9.140625 C 15.867188 9.140625 13.738281 6.789063 13.738281 6.789063 C 13.738281 6.789063 14.714844 11.980469 20.171875 11.980469 Z M 20.527344 6.613281 L 18.617188 4.570313 L 16.488281 6.433594 L 18.398438 8.609375 Z"/></Svg>);
};
export default SVGOmSolid;
