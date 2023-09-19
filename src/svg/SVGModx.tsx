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
const SVGModx = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 4.2421875 L 7 16.234375 L 8.8554688 17.447266 L 3.8886719 25 L 16.375 25 L 17.521484 23.285156 L 25 27.765625 L 25 15.439453 L 23.179688 14.324219 L 27.816406 7 L 15.480469 7 L 14.347656 8.6074219 L 7 4.2421875 z M 9 7.7578125 L 13.191406 10.248047 L 19.320312 13.890625 L 10.193359 15.931641 L 9 15.152344 L 9 7.7578125 z M 16.519531 9 L 24.183594 9 L 21.675781 12.960938 L 16.072266 9.6328125 L 16.519531 9 z M 20.152344 15.755859 L 15.306641 23 L 7.5976562 23 L 11.019531 17.796875 L 20.152344 15.755859 z M 22.310547 16.136719 L 23 16.560547 L 23 24.234375 L 18.671875 21.644531 L 22.310547 16.136719 z"/></Svg>);
};
export default SVGModx;
