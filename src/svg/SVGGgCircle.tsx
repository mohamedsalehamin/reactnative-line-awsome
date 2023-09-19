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
const SVGGgCircle = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 18.544922 9.4863281 L 14.691406 13.339844 L 18.65625 17.306641 L 19.910156 16.052734 L 17.181641 13.335938 L 18.542969 11.974609 L 22.509766 15.941406 L 18.542969 19.90625 L 17.972656 19.337891 L 16.734375 20.589844 L 18.542969 22.398438 L 25 15.945312 L 18.544922 9.4863281 z M 13.457031 9.5976562 L 7 16.054688 L 13.457031 22.511719 L 17.308594 18.650391 L 13.34375 14.683594 L 12.089844 15.9375 L 14.818359 18.654297 L 13.451172 20.019531 L 9.4863281 16.054688 L 13.451172 12.087891 L 14.021484 12.658203 L 15.265625 11.414062 L 13.457031 9.5976562 z"/></Svg>);
};
export default SVGGgCircle;
