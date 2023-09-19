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
const SVGGoodreadsG = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 11.589 3 8 7.262 8 12.5 C 8 17.738 11.589 22 16 22 C 18.39 22 20.533 20.742672 22 18.763672 L 22 22 C 22 24.757 19.309 27 16 27 C 13.545 27 11.432859 25.764 10.505859 24 L 8.3378906 24 C 9.3238906 26.887 12.383 29 16 29 C 20.411 29 24 25.859 24 22 L 24 4 L 22 4 L 22 6.2363281 C 20.533 4.2573281 18.39 3 16 3 z M 16 5 C 19.309 5 22 8.364 22 12.5 C 22 16.636 19.309 20 16 20 C 12.691 20 10 16.636 10 12.5 C 10 8.364 12.691 5 16 5 z"/></Svg>);
};
export default SVGGoodreadsG;
