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
const SVGLowVisionSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 23.125 21.6875 C 26.4375 19.621094 28.636719 16.902344 28.78125 16.71875 L 29 16.4375 L 29 15.53125 L 28.75 15.25 C 28.496094 14.953125 22.523438 8 16 8 C 14.097656 8 12.320313 8.53125 10.71875 9.28125 Z M 16 10 C 20.648438 10 25.28125 14.480469 26.75 16.03125 C 25.9375 16.949219 24.097656 18.832031 21.6875 20.25 L 19.4375 18 C 20.335938 16.46875 20.128906 14.472656 18.8125 13.15625 C 17.496094 11.839844 15.53125 11.664063 14 12.5625 L 12.25 10.8125 C 13.433594 10.335938 14.683594 10 16 10 Z M 7.75 11.03125 C 5.070313 12.957031 3.347656 15.121094 3.21875 15.28125 L 3 15.53125 L 3 16.46875 L 3.25 16.75 C 3.511719 17.046875 9.71875 24 16 24 C 17.398438 24 18.75 23.726563 20 23.28125 Z M 8.375 13.09375 L 17.1875 21.90625 C 16.800781 21.960938 16.398438 22 16 22 C 15.515625 22 15.019531 21.941406 14.53125 21.84375 L 6.96875 14.25 C 7.382813 13.871094 7.863281 13.488281 8.375 13.09375 Z M 6.21875 14.9375 L 12.53125 21.21875 C 9.289063 19.867188 6.378906 17.121094 5.25 15.96875 C 5.484375 15.703125 5.820313 15.332031 6.21875 14.9375 Z"/></Svg>);
};
export default SVGLowVisionSolid;
