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
const SVGSolarPanelSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15 4 L 15 6.59375 L 13.1875 4.8125 L 11.8125 6.1875 L 13.59375 8 L 11 8 L 11 10 L 13.59375 10 L 11.8125 11.8125 L 13.1875 13.1875 L 15 11.40625 L 15 14 L 17 14 L 17 11.40625 L 18.8125 13.1875 L 20.1875 11.8125 L 18.40625 10 L 21 10 L 21 8 L 18.40625 8 L 20.1875 6.1875 L 18.8125 4.8125 L 17 6.59375 L 17 4 Z M 16 7 C 17.101563 7 18 7.898438 18 9 C 18 10.101563 17.101563 11 16 11 C 14.898438 11 14 10.101563 14 9 C 14 7.898438 14.898438 7 16 7 Z M 6.21875 16 L 4 24.875 L 4 28 L 28 28 L 28 24.875 L 25.78125 16 Z M 7.78125 18 L 24.21875 18 L 26 25.125 L 26 26 L 6 26 L 6 25.125 Z M 9 19 L 8.59375 20.8125 L 10.6875 20.8125 L 11 19 Z M 13 19 L 12.8125 20.8125 L 14.90625 20.8125 L 15 19 Z M 17 19 L 17.09375 20.8125 L 19.1875 20.8125 L 19 19 Z M 21 19 L 21.3125 20.8125 L 23.40625 20.8125 L 23 19 Z M 8.1875 22.8125 L 7.8125 25 L 10.09375 25 L 10.40625 22.8125 Z M 12.6875 22.8125 L 12.5 25 L 14.8125 25 L 14.90625 22.8125 Z M 17.09375 22.8125 L 17.1875 25 L 19.5 25 L 19.3125 22.8125 Z M 21.59375 22.8125 L 21.90625 25 L 24.1875 25 L 23.8125 22.8125 Z"/></Svg>);
};
export default SVGSolarPanelSolid;
