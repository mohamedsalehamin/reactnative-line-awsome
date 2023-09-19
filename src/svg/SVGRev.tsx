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
const SVGRev = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 3 L 15 5.0507812 C 9.4024418 5.5583785 5 10.272536 5 16 C 5 22.065 9.935 27 16 27 L 27 27 L 27 16 C 27 12.633 25.476937 9.6186094 23.085938 7.5996094 L 21.222656 8.6855469 C 23.504656 10.319547 25 12.986 25 16 C 25 20.962 20.963 25 16 25 C 11.037 25 7 20.962 7 16 C 7 11.37592 10.505968 7.5576678 15 7.0585938 L 15 10 L 21 6.5 L 15 3 z M 16 13 A 3 3 0 0 0 16 19 A 3 3 0 0 0 16 13 z"/></Svg>);
};
export default SVGRev;
