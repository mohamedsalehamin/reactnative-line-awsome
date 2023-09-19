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
const SVGFanSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 10.488281 4 6 8.488281 6 14 C 6 19.511719 10.488281 24 16 24 C 21.511719 24 26 19.511719 26 14 C 26 8.488281 21.511719 4 16 4 Z M 16 6 C 20.238281 6 23.679688 9.273438 23.96875 13.4375 C 23.363281 13.003906 22.671875 12.746094 21.96875 12.625 C 21.53125 12.550781 21.09375 12.523438 20.65625 12.53125 C 20 12.542969 19.351563 12.636719 18.75 12.8125 C 18.285156 11.75 17.222656 11 16 11 C 15.785156 11 15.578125 11.019531 15.375 11.0625 C 15.367188 11.054688 15.351563 11.070313 15.34375 11.0625 C 14.695313 10.519531 14.003906 9.679688 13.6875 8.84375 C 13.476563 8.285156 13.429688 7.769531 13.53125 7.34375 C 13.628906 6.925781 13.84375 6.53125 14.40625 6.15625 C 14.917969 6.054688 15.457031 6 16 6 Z M 11.5 7.40625 C 11.433594 8.144531 11.558594 8.859375 11.8125 9.53125 C 12.203125 10.570313 12.84375 11.496094 13.59375 12.21875 C 13.222656 12.71875 13 13.335938 13 14 C 13 14.792969 13.304688 15.523438 13.8125 16.0625 C 13.652344 16.859375 13.273438 17.828125 12.71875 18.5 C 12.335938 18.964844 11.894531 19.277344 11.46875 19.40625 C 11.042969 19.535156 10.601563 19.542969 9.96875 19.21875 C 8.753906 17.816406 8 16.007813 8 14 C 8 11.246094 9.394531 8.84375 11.5 7.40625 Z M 16 13 C 16.5625 13 17 13.4375 17 14 C 17 14.5625 16.5625 15 16 15 C 15.4375 15 15 14.5625 15 14 C 15 13.4375 15.4375 13 16 13 Z M 20.6875 14.5625 C 21.007813 14.550781 21.332031 14.574219 21.625 14.625 C 22.210938 14.726563 22.703125 14.941406 23.03125 15.25 C 23.339844 15.542969 23.542969 15.917969 23.59375 16.5625 C 22.527344 19.726563 19.53125 22 16 22 C 14.730469 22 13.53125 21.710938 12.46875 21.1875 C 13.183594 20.875 13.777344 20.355469 14.25 19.78125 C 14.941406 18.941406 15.425781 17.949219 15.6875 16.96875 C 15.792969 16.980469 15.890625 17 16 17 C 17.3125 17 18.410156 16.121094 18.8125 14.9375 C 19.332031 14.738281 20.011719 14.585938 20.6875 14.5625 Z M 15 25 L 15 26 L 9 26 L 9 28 L 23 28 L 23 26 L 17 26 L 17 25 Z"/></Svg>);
};
export default SVGFanSolid;
