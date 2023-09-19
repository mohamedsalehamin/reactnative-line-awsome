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
const SVGTabletsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22 3 C 18.14 3 15 6.141 15 10 C 15 13.859 18.14 17 22 17 C 25.86 17 29 13.859 29 10 C 29 6.141 25.86 3 22 3 z M 22 5 C 24.757 5 27 7.243 27 10 C 27 11.017356 26.689985 11.961454 26.166016 12.751953 L 19.248047 5.8339844 C 20.038546 5.3100154 20.982644 5 22 5 z M 17.833984 7.2480469 L 24.751953 14.167969 C 23.96161 14.691622 23.017022 15 22 15 C 19.243 15 17 12.757 17 10 C 17 8.9826442 17.310015 8.0385462 17.833984 7.2480469 z M 10 14 C 6.14 14 3 17.141 3 21 C 3 24.859 6.14 28 10 28 C 13.86 28 17 24.859 17 21 C 17 17.141 13.86 14 10 14 z M 10 16 C 12.414363 16 14.433596 17.720904 14.898438 20 L 5.1015625 20 C 5.566404 17.720904 7.5856367 16 10 16 z M 5.1015625 22 L 14.898438 22 C 14.433596 24.279096 12.414363 26 10 26 C 7.5856367 26 5.566404 24.279096 5.1015625 22 z"/></Svg>);
};
export default SVGTabletsSolid;
