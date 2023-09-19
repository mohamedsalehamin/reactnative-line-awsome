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
const SVGAffiliatetheme = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12.103516 5 C 10.236794 5.0156311 7.3762969 6.9496406 5.0371094 9.9550781 C 2.1581094 13.654078 1.14725 17.559313 2.78125 18.695312 C 4.41525 19.821312 8.0838906 17.733156 10.962891 14.035156 C 13.841891 10.336156 14.85275 6.4326406 13.21875 5.3066406 C 12.912375 5.0955156 12.534298 4.9963928 12.103516 5 z M 29.984375 11 C 26.183375 17.359 20.088375 20.541625 16.359375 18.265625 C 15.075375 17.479625 14.285141 15.815 13.994141 14 C 12.018141 17.66 8.208 20.903 4 22 C 6.681 25.188 10.838453 27 15.314453 27 C 23.401453 27 29.960937 20.378172 29.960938 12.201172 C 29.970937 11.742172 30.027375 11.437 29.984375 11 z"/></Svg>);
};
export default SVGAffiliatetheme;
