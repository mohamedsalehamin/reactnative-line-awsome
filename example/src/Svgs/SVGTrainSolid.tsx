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
const SVGTrainSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 3 C 12.742188 3 11.847656 3.890625 11.40625 5 L 10 5 C 7.25 5 5 7.25 5 10 L 5 21 C 5 23.425781 6.449219 25.523438 8.53125 26.46875 L 6 29 L 8.34375 29 L 10.375 26.96875 C 10.574219 26.988281 10.792969 27 11 27 L 21 27 C 21.207031 27 21.425781 26.988281 21.625 26.96875 L 23.65625 29 L 26 29 L 23.46875 26.46875 C 25.550781 25.523438 27 23.425781 27 21 L 27 10 C 27 7.25 24.75 5 22 5 L 20.59375 5 C 20.152344 3.890625 19.257813 3 18 3 Z M 14 5 L 18 5 C 18.566406 5 19 5.433594 19 6 L 19 7 L 22 7 C 23.320313 7 24.4375 7.828125 24.84375 9 L 7.15625 9 C 7.5625 7.828125 8.679688 7 10 7 L 13 7 L 13 6 C 13 5.433594 13.433594 5 14 5 Z M 7 11 L 25 11 L 25 16 L 7 16 Z M 7 18 L 25 18 L 25 21 C 25 23.21875 23.21875 25 21 25 L 11 25 C 8.78125 25 7 23.21875 7 21 Z M 16 19 C 14.894531 19 14 19.894531 14 21 C 14 22.105469 14.894531 23 16 23 C 17.105469 23 18 22.105469 18 21 C 18 19.894531 17.105469 19 16 19 Z"/></Svg>);
};
export default SVGTrainSolid;
