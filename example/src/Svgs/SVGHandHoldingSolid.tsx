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
const SVGHandHoldingSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 10.515625 18 C 9.484625 18.004 8.6992188 18.265625 8.6992188 18.265625 L 8.6796875 18.273438 L 3.0078125 20.449219 L 4.9921875 26.019531 L 9.921875 24.128906 L 17.058594 28.058594 L 29.382812 22.953125 L 28.617188 21.109375 L 17.179688 25.84375 L 10.078125 21.933594 L 6.1875 23.421875 L 5.546875 21.615234 L 9.34375 20.158203 C 9.35275 20.155203 9.819625 20 10.515625 20 C 11.218625 20 12.038281 20.156062 12.738281 20.789062 L 12.751953 20.796875 L 12.755859 20.800781 C 13.786859 21.695781 14.564484 22.321156 15.646484 22.660156 C 16.728484 23.000156 17.955859 23.03925 20.005859 23.03125 L 19.996094 21.03125 C 17.984094 21.03925 16.933094 20.968 16.246094 20.75 C 15.558094 20.539 15.070125 20.159781 14.078125 19.300781 L 14.066406 19.292969 C 12.909406 18.253969 11.534625 17.996 10.515625 18 z"/></Svg>);
};
export default SVGHandHoldingSolid;
