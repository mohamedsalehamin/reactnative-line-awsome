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
const SVGSortAlphaUpAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 7 L 10.560547 7 L 5.2792969 12.279297 L 5 12.589844 L 5 15 L 13 15 L 13 13 L 7.4394531 13 L 12.720703 7.7207031 L 13 7.4101562 L 13 5 L 5 5 z M 23 5.5 L 22.279297 6.1894531 L 18 10.5 L 19.410156 11.910156 L 22 9.3105469 L 22 28 L 24 28 L 24 9.3105469 L 26.589844 11.910156 L 28 10.5 L 23.720703 6.1894531 L 23 5.5 z M 8.1894531 17 L 7.9707031 17.660156 L 6.0292969 23 L 6 23 L 6 23.060547 L 5.0605469 25.660156 L 5 25.810547 L 5 27 L 7 27 L 7 26.160156 L 7.4101562 25 L 10.589844 25 L 11 26.160156 L 11 27 L 13 27 L 13 25.810547 L 12.939453 25.660156 L 12 23.060547 L 12 23 L 11.970703 23 L 10.029297 17.660156 L 9.8105469 17 L 8.1894531 17 z M 9 20.660156 L 9.8398438 23 L 8.1601562 23 L 9 20.660156 z"/></Svg>);
};
export default SVGSortAlphaUpAltSolid;
