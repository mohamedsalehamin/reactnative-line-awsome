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
const SVGUserMinusSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14 4 C 10.1 4 7 7.1 7 11 C 7 13.4 8.1996094 15.600781 10.099609 16.800781 C 6.4996094 18.300781 4 21.9 4 26 L 6 26 C 6 21.6 9.6 18 14 18 C 15.4 18 16.700781 18.4 17.800781 19 C 16.700781 20.4 16 22.1 16 24 C 16 28.4 19.6 32 24 32 C 28.4 32 32 28.4 32 24 C 32 19.6 28.4 16 24 16 C 22.3 16 20.600781 16.6 19.300781 17.5 C 18.900781 17.2 18.400391 17.000781 17.900391 16.800781 C 19.800391 15.500781 21 13.4 21 11 C 21 7.1 17.9 4 14 4 z M 14 6 C 16.8 6 19 8.2 19 11 C 19 13.8 16.8 16 14 16 C 11.2 16 9 13.8 9 11 C 9 8.2 11.2 6 14 6 z M 24 18 C 27.3 18 30 20.7 30 24 C 30 27.3 27.3 30 24 30 C 20.7 30 18 27.3 18 24 C 18 20.7 20.7 18 24 18 z M 20 23 L 20 25 L 28 25 L 28 23 L 20 23 z"/></Svg>);
};
export default SVGUserMinusSolid;
