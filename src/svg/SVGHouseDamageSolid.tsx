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
const SVGHouseDamageSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2.5898438 L 15.279297 3.2792969 L 2.2792969 16.279297 L 3.7207031 17.720703 L 5 16.439453 L 5 28 L 13.830078 28 L 16 22 L 12.380859 22 L 16.009766 15.789062 L 16 20 L 19.550781 20 L 17.939453 28 L 27 28 L 27 16.439453 L 28.279297 17.720703 L 29.720703 16.279297 L 16.720703 3.2792969 L 16 2.5898438 z M 16 5.4394531 L 25 14.439453 L 25 26 L 20.380859 26 L 22 18 L 18 18 L 18 12 L 15.900391 12 L 10 22.109375 L 10 24 L 13.150391 24 L 12.429688 26 L 7 26 L 7 14.439453 L 16 5.4394531 z"/></Svg>);
};
export default SVGHouseDamageSolid;
