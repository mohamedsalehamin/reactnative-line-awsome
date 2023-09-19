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
const SVGChessSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 4 L 8 6 L 4.8007812 6 L 6.0742188 12 L 6 12 C 5.4 12 5 12.4 5 13 C 5 13.6 5.4 14 6 14 L 6.109375 14 L 5.0917969 21 L 5 21 C 4.4 21 4 21.4 4 22 C 4 22.31975 4.119476 22.576073 4.3164062 22.751953 L 3 24.699219 L 3 27 L 15 27 L 15.099609 27 L 15.099609 24.699219 L 13.744141 22.693359 C 13.903452 22.520011 14 22.285236 14 22 C 14 21.4 13.6 21 13 21 L 12.890625 21 L 11.808594 14 L 12 14 C 12.6 14 13 13.6 13 13 C 13 12.4 12.6 12 12 12 L 11.949219 12 L 13.300781 6 L 10 6 L 10 4 L 8 4 z M 7.1992188 8 L 10.800781 8 L 9.9003906 12 L 8.0996094 12 L 7.1992188 8 z M 19 9 L 19 11 L 19 12 L 19 15.400391 L 19.900391 16.300781 L 19.128906 21 L 19 21 C 18.4 21 18 21.4 18 22 C 18 22.31975 18.119476 22.576073 18.316406 22.751953 L 17 24.699219 L 17 27 L 29 27 L 29.099609 27 L 29.099609 24.699219 L 27.744141 22.693359 C 27.903452 22.520011 28 22.285236 28 22 C 28 21.4 27.6 21 27 21 L 26.871094 21 L 26.099609 16.300781 L 27 15.400391 L 27 12 L 27 11 L 27 9 L 25 9 L 25 11 L 24 11 L 24 9 L 22 9 L 22 11 L 21 11 L 21 9 L 19 9 z M 21 13 L 25 13 L 25 14.599609 L 23.900391 15.699219 L 24.800781 21 L 21.199219 21 L 22.099609 15.699219 L 21 14.599609 L 21 13 z M 8.1992188 14 L 9.9003906 14 L 10.900391 21 L 7.1992188 21 L 8.1992188 14 z M 6.5 23 L 11.5 23 L 12.800781 25 L 5.1992188 25 L 6.5 23 z M 20.599609 23 L 25.5 23 L 26.800781 25 L 19.199219 25 L 20.599609 23 z"/></Svg>);
};
export default SVGChessSolid;
