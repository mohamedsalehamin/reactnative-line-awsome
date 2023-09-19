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
const SVGFortAwesome = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.5 4 C 15.225 4 15 4.225 15 4.5 L 15 10 L 15 11.5 L 15 12 L 13 12 L 13 10 L 11 10 L 11 12 L 8.9941406 12 L 8.9941406 10 L 7 10 L 7 19 L 5 19 L 5 17 L 3 17 L 3 27 L 13 27 L 13 24 C 13 22.343 14.343 21 16 21 C 17.657 21 19 22.343 19 24 L 19 27 L 29 27 L 29 17 L 27 17 L 27 19 L 25 19 L 25 10 L 22.994141 10 L 22.994141 12 L 21 12 L 21 10 L 19 10 L 19 12 L 17 12 L 17 10 L 16 10 L 16 7.90625 C 16.275 7.80625 16.725391 7.6779687 17.275391 7.6679688 C 18.037391 7.6579687 18.411609 7.8670313 19.224609 7.9570312 C 19.571609 8.0000312 20.069219 8.0291719 20.699219 7.9511719 C 20.869219 7.9301719 21 7.7784219 21 7.6074219 L 21 4.4316406 C 21 4.3316406 20.886719 4.26125 20.761719 4.28125 C 20.099719 4.36125 19.586609 4.3310156 19.224609 4.2910156 C 18.411609 4.2010156 18.037391 3.9819531 17.275391 4.0019531 C 16.725391 4.0119531 16.275 4.1402344 16 4.2402344 L 16 4.5 C 16 4.225 15.775 4 15.5 4 z M 11 14 L 13 14 L 13 18 L 11 18 L 11 14 z M 19 14 L 21 14 L 21 18 L 19 18 L 19 14 z"/></Svg>);
};
export default SVGFortAwesome;
