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
const SVGFireAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16.798828 4.390625 L 13.802734 9.3867188 L 11.953125 7.5390625 L 11.25 8.3378906 C 7.767 12.285891 6 15.873 6 19 C 6 23.962 10.486 28 16 28 C 21.514 28 26 23.962 26 19 C 26 14.238 20.803078 8.3660625 17.705078 5.2890625 L 16.798828 4.390625 z M 17.191406 7.6230469 C 19.767406 10.309047 24 15.288 24 19 C 24 21.391212 22.620267 23.5043 20.523438 24.767578 C 20.822014 24.054088 21 23.267477 21 22.429688 C 21 20.048687 19.315344 17.224391 17.902344 15.275391 L 17.058594 14.109375 L 14.84375 17.431641 L 13.4375 16.025391 L 12.777344 17.115234 C 11.598344 19.061234 11 20.848688 11 22.429688 C 11 23.267477 11.177986 24.054088 11.476562 24.767578 C 9.3797333 23.5043 8 21.391212 8 19 C 8 16.611 9.3976406 13.676703 12.056641 10.470703 L 14.197266 12.613281 L 17.191406 7.6230469 z M 17.103516 17.648438 C 18.333516 19.565437 19 21.233687 19 22.429688 C 19 24.398688 17.654 26 16 26 C 14.346 26 13 24.398688 13 22.429688 C 13 21.507688 13.290234 20.45225 13.865234 19.28125 L 15.15625 20.570312 L 17.103516 17.648438 z"/></Svg>);
};
export default SVGFireAltSolid;
