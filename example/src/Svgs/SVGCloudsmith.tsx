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
const SVGCloudsmith = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18.853516 3 C 16.443516 3 14.291016 4.9506094 14.291016 7.3496094 C 14.291016 9.7596094 12.759609 11.291016 10.349609 11.291016 C 7.9506094 11.291016 6 13.442516 6 15.853516 C 6 18.264516 7.9506094 20 10.349609 20 C 12.759609 20 14.707031 18.266469 14.707031 15.855469 C 14.707031 13.444469 16.443516 11.708984 18.853516 11.708984 C 21.253516 11.708984 23 9.7596094 23 7.3496094 C 23 4.9506094 21.253516 3 18.853516 3 z M 19.505859 20 C 17.015859 20 15 22.015141 15 24.494141 C 15 26.985141 17.015859 29 19.505859 29 C 21.985859 29 24 26.985141 24 24.494141 C 24 22.015141 21.985859 20 19.505859 20 z"/></Svg>);
};
export default SVGCloudsmith;
