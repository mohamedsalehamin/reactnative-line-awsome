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
const SVGSortAlphaUpSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.1894531 5 L 7.9707031 5.6601562 L 6.0292969 11 L 6 11 L 6 11.060547 L 5.0605469 13.660156 L 5 13.810547 L 5 15 L 7 15 L 7 14.160156 L 7.4101562 13 L 10.589844 13 L 11 14.160156 L 11 15 L 13 15 L 13 13.810547 L 12.939453 13.660156 L 12 11.060547 L 12 11 L 11.970703 11 L 10.029297 5.6601562 L 9.8105469 5 L 8.1894531 5 z M 23 5.5 L 22.279297 6.1894531 L 18 10.5 L 19.410156 11.910156 L 22 9.3105469 L 22 28 L 24 28 L 24 9.3105469 L 26.589844 11.910156 L 28 10.5 L 23.720703 6.1894531 L 23 5.5 z M 9 8.6601562 L 9.8398438 11 L 8.1601562 11 L 9 8.6601562 z M 5 17 L 5 19 L 10.560547 19 L 5.2792969 24.279297 L 5 24.589844 L 5 27 L 13 27 L 13 25 L 7.4394531 25 L 12.720703 19.720703 L 13 19.410156 L 13 17 L 5 17 z"/></Svg>);
};
export default SVGSortAlphaUpSolid;
