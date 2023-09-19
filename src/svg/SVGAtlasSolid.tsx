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
const SVGAtlasSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9 4 C 7.355 4 6 5.355 6 7 L 6 25 C 6 26.645 7.355 28 9 28 L 26 28 L 26 4 L 9 4 z M 9 6 L 24 6 L 24 22 L 9 22 C 8.648 22 8.316 22.0735 8 22.1875 L 8 7 C 8 6.434 8.434 6 9 6 z M 16 8 C 12.699 8 10 10.699 10 14 C 10 17.301 12.699 20 16 20 C 19.301 20 22 17.301 22 14 C 22 10.699 19.301 8 16 8 z M 16.6875 10.09375 C 17.1715 10.17575 17.62525 10.3235 18.03125 10.5625 L 18.095703 11.28125 L 17.626953 11.09375 L 17.251953 11.40625 L 17.314453 12.3125 L 18.283203 12.03125 L 19.470703 12.40625 L 19.158203 12.9375 L 18.4375 12.5 L 17.65625 12.625 L 16.90625 13.1875 L 16.46875 14.5 L 17.3125 15.1875 C 17.3125 15.1875 18.204953 15.03125 18.251953 15.03125 C 18.298953 15.03125 18.626953 15.845703 18.626953 15.845703 L 18.126953 17.376953 C 17.512953 17.758953 16.785 18 16 18 C 15.766 18 15.5355 17.94525 15.3125 17.90625 L 15.123047 17.59375 L 15.59375 15.84375 L 13.8125 14.5 L 12.15625 14.5 L 12.03125 14.25 C 12.02625 14.164 12 14.086 12 14 C 12 13.785 12.0305 13.578 12.0625 13.375 L 12.90625 12.71875 L 14.6875 11.875 L 14.40625 10.71875 L 15.1875 10.5625 L 15.53125 11.0625 L 16.876953 10.8125 L 16.6875 10.09375 z M 13.0625 16.71875 L 13.376953 16.71875 L 13.970703 17.4375 C 13.629703 17.2375 13.3275 17.00375 13.0625 16.71875 z M 9 24 L 24 24 L 24 26 L 9 26 C 8.434 26 8 25.566 8 25 C 8 24.434 8.434 24 9 24 z"/></Svg>);
};
export default SVGAtlasSolid;
