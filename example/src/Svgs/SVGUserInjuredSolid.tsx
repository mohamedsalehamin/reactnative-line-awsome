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
const SVGUserInjuredSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 12.1 5 9 8.1 9 12 C 9 14.434941 10.207417 16.557098 12.064453 17.808594 C 8.8381824 19.182033 6.4630116 22.193688 6.0996094 25.900391 C 5.9996094 26.400391 6.1996094 27.000391 6.5996094 27.400391 C 6.8996094 27.800391 7.5 28 8 28 L 17 28 C 18.7 28 20 26.7 20 25 C 20 23.3 18.7 22 17 22 L 13.191406 22 L 12.394531 19.875 C 13.483209 19.317228 14.708992 19 16 19 C 20.4 19 24 22.6 24 27 L 26 27 C 26 22.893276 23.490404 19.345194 19.929688 17.810547 C 21.788754 16.559368 23 14.436508 23 12 C 23 8.1 19.9 5 16 5 z M 16 7 C 16.418858 7 16.818429 7.0631437 17.205078 7.15625 L 13.650391 10 L 11.40625 10 C 12.165345 8.221166 13.915213 7 16 7 z M 19.175781 8.140625 C 19.783309 8.6384382 20.279591 9.263812 20.59375 10 L 16.851562 10 L 19.175781 8.140625 z M 11 12 L 21 12 C 21 14.8 18.8 17 16 17 C 13.2 17 11 14.8 11 12 z M 10.695312 21.041016 L 12.554688 26 L 8.0996094 26 C 8.3469897 24.020957 9.3067175 22.288259 10.695312 21.041016 z M 13.941406 24 L 17 24 C 17.6 24 18 24.4 18 25 C 18 25.6 17.6 26 17 26 L 14.691406 26 L 13.941406 24 z"/></Svg>);
};
export default SVGUserInjuredSolid;
