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
const SVGRaspberryPi = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 24.398438 14.800781 L 24.199219 14.5 C 24.199219 12.101563 23.101563 11.199219 21.898438 10.5 C 22.300781 10.398438 22.699219 10.300781 22.800781 9.800781 C 23.5 9.601563 23.601563 9.300781 23.699219 9 C 23.898438 8.898438 24.398438 8.601563 24.398438 8 C 24.699219 7.800781 24.898438 7.5 24.800781 7.101563 C 25.101563 6.699219 25.199219 6.398438 25.101563 6.101563 C 25.5 5.601563 25.300781 5.300781 25.199219 5 C 25.5 4.398438 25.199219 3.800781 24.398438 3.898438 C 24.101563 3.398438 23.300781 3.5 23.199219 3.5 C 23.101563 3.300781 22.898438 3.199219 22.398438 3.300781 C 21.898438 3 21.5 3 21.101563 3.199219 C 20.601563 2.800781 20.300781 3.101563 20 3.199219 C 19.398438 3 19.300781 3.300781 19 3.398438 C 18.398438 3.300781 18.199219 3.601563 17.898438 3.898438 L 17.601563 3.898438 C 16.699219 4.398438 16.199219 5.601563 16 6.101563 C 15.800781 5.5 15.398438 4.398438 14.398438 3.898438 L 14.101563 3.898438 C 13.800781 3.601563 13.601563 3.300781 13 3.398438 C 12.699219 3.300781 12.601563 3 12 3.199219 C 11.800781 3.101563 11.601563 3 11.300781 3 C 11.199219 3 11.101563 3.101563 10.898438 3.199219 C 10.5 3 10.101563 3 9.800781 3.300781 C 9.300781 3.199219 9.101563 3.398438 9 3.5 C 8.898438 3.5 8.101563 3.398438 7.800781 3.898438 C 6.898438 3.800781 6.601563 4.398438 6.898438 5 C 6.699219 5.300781 6.601563 5.5 7 6.101563 C 6.800781 6.300781 6.898438 6.699219 7.300781 7 C 7.199219 7.398438 7.300781 7.699219 7.699219 8 C 7.601563 8.5 8.199219 8.800781 8.300781 9 C 8.398438 9.300781 8.5 9.601563 9.199219 9.800781 C 9.300781 10.300781 9.699219 10.398438 10.101563 10.5 C 8.800781 11.199219 7.800781 12.199219 7.800781 14.5 L 7.601563 14.800781 C 6.199219 15.699219 4.898438 18.5 6.898438 20.800781 C 7 21.5 7.199219 22 7.398438 22.601563 C 7.699219 24.898438 9.601563 26 10.101563 26.101563 C 10.800781 26.699219 11.601563 27.199219 12.699219 27.601563 C 13.699219 28.601563 14.800781 29 15.898438 29 C 17 29 18.101563 28.601563 19.101563 27.601563 C 20.199219 27.199219 21 26.699219 21.699219 26.101563 C 22.199219 26 24.101563 24.898438 24.398438 22.601563 C 24.601563 22 24.800781 21.5 25 20.800781 C 27.199219 18.5 25.898438 15.699219 24.398438 14.800781 Z M 23.101563 14.398438 C 23 15.398438 18.199219 11.101563 19 11 C 21.300781 10.601563 23.199219 11.898438 23.101563 14.398438 Z M 17.800781 4.5 C 17.800781 4.699219 17.898438 4.800781 17.898438 4.898438 C 18.199219 4.601563 18.398438 4.300781 18.699219 4 C 18.699219 4.199219 18.601563 4.300781 18.800781 4.5 C 19 4.199219 19.199219 4 19.601563 3.800781 C 19.398438 4.101563 19.601563 4.199219 19.699219 4.300781 C 20 4.101563 20.199219 3.898438 20.699219 3.699219 C 20.601563 3.898438 20.398438 4 20.601563 4.199219 C 20.898438 4 21.101563 3.898438 21.800781 3.699219 C 21.699219 3.898438 21.398438 4 21.5 4.199219 C 21.800781 4.101563 22.199219 4 22.601563 3.898438 C 22.398438 4.101563 22.199219 4.199219 22.398438 4.300781 C 22.800781 4.199219 23.199219 4 23.699219 4.199219 L 23.398438 4.5 C 23.398438 4.5 24.101563 4.5 24.601563 4.5 C 24.398438 4.800781 24.199219 5 24.101563 5.398438 C 24.101563 5.398438 24.398438 5.398438 24.601563 5.398438 C 24.398438 6 24 6.101563 23.898438 6.300781 C 24 6.398438 24.199219 6.398438 24.5 6.300781 C 24.300781 6.699219 24 6.898438 23.699219 7.199219 C 23.800781 7.300781 23.898438 7.300781 24.199219 7.199219 C 23.898438 7.5 23.601563 7.699219 23.300781 8 C 23.398438 8.101563 23.601563 8.101563 23.800781 8.101563 C 23.5 8.398438 23 8.601563 22.601563 8.800781 C 22.699219 9 22.898438 8.898438 23 8.898438 C 22.699219 9.101563 22.199219 9.300781 21.800781 9.398438 C 21.898438 9.5 22 9.601563 22.199219 9.601563 C 21.699219 9.898438 21 9.699219 20.800781 9.898438 C 20.800781 10 21 10.101563 21.101563 10.199219 C 20.300781 10.199219 18.199219 10.199219 17.800781 8.601563 C 18.601563 7.699219 20 6.699219 22.5 5.398438 C 20.601563 6.101563 18.800781 6.898438 17.398438 8.101563 C 15.800781 7.300781 16.898438 5.300781 17.800781 4.5 Z M 16 10.300781 C 17.199219 10.300781 18.699219 11.199219 18.699219 12.101563 C 18.699219 12.898438 17.601563 13.5 16 13.5 C 14.398438 13.5 13.300781 12.699219 13.300781 12 C 13.300781 11.300781 14.601563 10.300781 16 10.300781 Z M 9.898438 9.699219 C 10.101563 9.699219 10.199219 9.601563 10.300781 9.5 C 9.800781 9.300781 9.300781 9.199219 9 8.898438 C 9.199219 8.898438 9.300781 8.898438 9.5 8.800781 C 9.101563 8.601563 8.699219 8.398438 8.300781 8.101563 C 8.5 8.101563 8.699219 8.101563 8.800781 8 C 8.5 7.800781 8.199219 7.5 7.898438 7.300781 C 8.199219 7.300781 8.300781 7.300781 8.398438 7.300781 C 8.101563 6.898438 7.800781 6.699219 7.601563 6.300781 C 7.800781 6.398438 8 6.398438 8.199219 6.300781 C 8.101563 6.101563 7.601563 6 7.398438 5.5 C 7.601563 5.5 7.898438 5.5 7.898438 5.5 C 7.800781 5.101563 7.601563 4.800781 7.5 4.601563 C 8 4.601563 8.699219 4.601563 8.699219 4.601563 L 8.398438 4.199219 C 8.898438 4.101563 9.398438 4.199219 9.699219 4.300781 C 9.898438 4.199219 9.699219 4 9.5 3.898438 C 9.898438 4 10.300781 4.101563 10.601563 4.199219 C 10.800781 4 10.5 3.898438 10.300781 3.699219 C 11 3.800781 11.199219 4 11.5 4.199219 C 11.699219 4 11.5 3.898438 11.398438 3.699219 C 11.898438 3.898438 12.101563 4.101563 12.398438 4.300781 C 12.5 4.199219 12.601563 4.101563 12.5 3.800781 C 12.699219 4 13 4.199219 13.199219 4.5 C 13.398438 4.398438 13.300781 4.199219 13.300781 4 C 13.601563 4.300781 13.898438 4.601563 14.101563 4.898438 C 14.199219 4.898438 14.199219 4.699219 14.199219 4.5 C 15 5.300781 16.199219 7.300781 14.5 8.101563 C 13.101563 6.898438 11.300781 6 9.398438 5.398438 C 11.898438 6.699219 13.300781 7.699219 14.101563 8.601563 C 13.699219 10.199219 11.601563 10.300781 10.800781 10.199219 C 11 10.101563 11.101563 10 11.101563 9.898438 C 11 9.800781 10.398438 9.898438 9.898438 9.699219 Z M 12.699219 10.898438 C 13.5 11 8.699219 15.300781 8.601563 14.300781 C 8.5 11.898438 10.398438 10.5 12.699219 10.898438 Z M 7.601563 20.398438 C 6.398438 19.398438 6 16.699219 8.199219 15.398438 C 9.5 15 8.699219 20.800781 7.601563 20.398438 Z M 12.199219 25.398438 C 11.5 25.800781 9.898438 25.601563 8.800781 24 C 8 22.601563 8.101563 21.199219 8.699219 20.800781 C 9.5 20.300781 10.800781 21 11.699219 22.101563 C 12.5 23 12.898438 24.800781 12.199219 25.398438 Z M 10.898438 19.300781 C 9.699219 18.5 9.5 16.699219 10.398438 15.199219 C 11.398438 13.800781 13.101563 13.199219 14.300781 14 C 15.5 14.800781 15.699219 16.601563 14.800781 18.101563 C 13.898438 19.601563 12.101563 20.101563 10.898438 19.300781 Z M 16 28.199219 C 14.5 28.300781 13.101563 27 13.101563 26.601563 C 13.101563 26 14.898438 25.5 16.101563 25.5 C 17.300781 25.398438 18.898438 25.898438 18.898438 26.5 C 18.898438 26.898438 17.398438 28.199219 16 28.199219 Z M 19 21.800781 C 19 23.300781 17.699219 24.5 16.101563 24.5 C 14.5 24.5 13.101563 23.300781 13.101563 21.800781 C 13.101563 20.300781 14.398438 19.101563 16 19.101563 C 17.699219 19.101563 19 20.300781 19 21.800781 Z M 17.199219 18 C 16.199219 16.601563 16.5 14.699219 17.699219 13.898438 C 18.898438 13.101563 20.699219 13.601563 21.601563 15.101563 C 22.5 16.601563 22.300781 18.398438 21.101563 19.199219 C 19.898438 19.898438 18.101563 19.398438 17.199219 18 Z M 23.199219 24 C 21.898438 25.800781 20.199219 25.800781 19.601563 25.300781 C 18.898438 24.699219 19.398438 22.699219 20.398438 21.601563 C 21.398438 20.398438 22.601563 19.601563 23.300781 20.199219 C 23.800781 20.898438 24.101563 22.800781 23.199219 24 Z M 24.101563 20.300781 C 23 20.800781 22.101563 15 23.5 15.300781 C 25.699219 16.5 25.300781 19.300781 24.101563 20.300781 Z"/></Svg>);
};
export default SVGRaspberryPi;
