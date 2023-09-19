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
const SVGCopyrightSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.90625 10 C 12.582031 10 9.90625 12.675781 9.90625 16 C 9.90625 19.324219 12.582031 22 15.90625 22 C 18.304688 22 20.355469 20.5625 21.3125 18.53125 L 19.5 17.6875 C 18.855469 19.058594 17.507813 20 15.90625 20 C 13.628906 20 11.90625 18.277344 11.90625 16 C 11.90625 13.722656 13.628906 12 15.90625 12 C 17.507813 12 18.855469 12.941406 19.5 14.3125 L 21.3125 13.46875 C 20.355469 11.4375 18.304688 10 15.90625 10 Z"/></Svg>);
};
export default SVGCopyrightSolid;
