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
const SVGWineBottleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 3 C 13.90625 3 13 3.90625 13 5 L 13 6.6875 C 12.941406 6.882813 12.941406 7.085938 13 7.28125 L 13 10.4375 L 12.21875 10.96875 C 10.828125 11.894531 10 13.484375 10 15.15625 L 10 15.6875 C 9.941406 15.882813 9.941406 16.085938 10 16.28125 L 10 22.6875 C 9.941406 22.882813 9.941406 23.085938 10 23.28125 L 10 29 L 22 29 L 22 23.1875 C 22.027344 23.054688 22.027344 22.914063 22 22.78125 L 22 16.1875 C 22.027344 16.054688 22.027344 15.914063 22 15.78125 L 22 15.15625 C 22 13.484375 21.171875 11.894531 19.78125 10.96875 L 19 10.4375 L 19 7.1875 C 19.027344 7.054688 19.027344 6.914063 19 6.78125 L 19 5 C 19 3.90625 18.09375 3 17 3 Z M 15 5 L 17 5 L 17 6 L 15 6 Z M 15 8 L 17 8 L 17 11.53125 L 17.4375 11.84375 L 18.65625 12.65625 C 19.449219 13.183594 19.917969 14.054688 19.96875 15 L 12.03125 15 C 12.082031 14.054688 12.550781 13.183594 13.34375 12.65625 L 14.5625 11.84375 L 15 11.53125 Z M 12 17 L 20 17 L 20 22 L 12 22 Z M 12 24 L 20 24 L 20 27 L 12 27 Z"/></Svg>);
};
export default SVGWineBottleSolid;
