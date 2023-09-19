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
const SVGWpexplorer = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.8 3 3 8.8 3 16 C 3 23.2 8.8 29 16 29 C 23.2 29 29 23.2 29 16 C 29 8.8 23.2 3 16 3 z M 16 5 C 22.1 5 27 9.9 27 16 C 27 22.1 22.1 27 16 27 C 9.9 27 5 22.1 5 16 C 5 9.9 9.9 5 16 5 z M 11.199219 10 L 9.4003906 14.300781 L 13.699219 16.099609 L 15.5 11.800781 L 11.199219 10 z M 16 12.599609 L 14.599609 16 L 17.900391 17.400391 L 17.916016 17.365234 L 18 17.400391 L 19.5 14 L 16 12.599609 z M 20 14.699219 L 18.900391 17.400391 L 21.599609 18.5 L 22.800781 15.800781 L 20 14.699219 z M 14.300781 16.599609 L 14 17.199219 L 15.099609 17.699219 L 12.599609 23 L 13.300781 23 L 15.699219 18.099609 L 18.199219 23 L 18.900391 23 L 16.599609 18.400391 L 17.400391 18.699219 L 17.699219 18 L 14.300781 16.599609 z"/></Svg>);
};
export default SVGWpexplorer;
