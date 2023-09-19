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
const SVGSatelliteSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.875 3.59375 L 8.15625 4.28125 L 4.3125 8.15625 L 3.59375 8.875 L 4.3125 9.5625 L 10.0625 15.34375 L 9.40625 16 L 16 22.59375 L 16.65625 21.9375 L 22.40625 27.71875 L 23.125 28.40625 L 23.84375 27.71875 L 27.71875 23.8125 L 28.4375 23.125 L 21.65625 16.34375 C 22.273438 14.683594 21.921875 12.734375 20.59375 11.40625 C 19.6875 10.5 18.476563 10.0625 17.28125 10.0625 C 16.726563 10.0625 16.179688 10.183594 15.65625 10.375 L 9.59375 4.28125 Z M 8.875 6.40625 L 13.9375 11.46875 L 11.46875 13.9375 L 6.40625 8.875 Z M 17.28125 12.03125 C 17.960938 12.03125 18.664063 12.289063 19.1875 12.8125 C 20.234375 13.859375 20.234375 15.546875 19.1875 16.59375 L 16.28125 19.46875 L 16 19.75 L 12.25 16 L 15.28125 12.96875 L 15.40625 12.8125 C 15.476563 12.742188 15.550781 12.6875 15.625 12.625 L 15.8125 12.46875 C 16.253906 12.175781 16.773438 12.03125 17.28125 12.03125 Z M 8.4375 17 L 7 18.40625 L 13.59375 25 L 15 23.5625 Z M 20.53125 18.0625 L 25.59375 23.125 L 23.125 25.59375 L 18.0625 20.53125 Z"/></Svg>);
};
export default SVGSatelliteSolid;
