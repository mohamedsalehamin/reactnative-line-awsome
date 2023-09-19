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
const SVGKissSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11.5 12 A 1.5 1.5 0 0 0 11.5 15 A 1.5 1.5 0 0 0 11.5 12 z M 20.5 12 A 1.5 1.5 0 0 0 20.5 15 A 1.5 1.5 0 0 0 20.5 12 z M 15 17.007812 L 15 18.498047 C 15.901 18.498047 16.476562 18.912906 16.476562 19.128906 C 16.476562 19.344035 15.90451 19.754497 15.009766 19.757812 C 15.006431 19.757805 15.003337 19.757812 15 19.757812 L 15 19.759766 L 15 21.248047 L 15 21.25 C 15.003337 21.25 15.006431 21.250007 15.009766 21.25 C 15.90451 21.253316 16.476562 21.663777 16.476562 21.878906 C 16.476562 22.094906 15.901 22.509766 15 22.509766 L 15 24 C 16.669 24 17.976562 23.067906 17.976562 21.878906 C 17.976562 21.346428 17.703054 20.872671 17.263672 20.503906 C 17.703054 20.135141 17.976562 19.661385 17.976562 19.128906 C 17.976562 17.939906 16.669 17.007812 15 17.007812 z"/></Svg>);
};
export default SVGKissSolid;
