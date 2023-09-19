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
const SVGMagento = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3.2265625 L 5 10.173828 L 5 22.441406 L 8 24.154297 L 8 11.826172 L 16 6.7734375 L 24 11.826172 L 24 24.150391 L 27 22.4375 L 27 10.173828 L 16 3.2265625 z M 14 11.578125 L 11 13.464844 L 11 25.869141 L 16 28.728516 L 21 25.869141 L 21 13.484375 L 18 11.599609 L 18 24.130859 L 16 25.271484 L 14 24.130859 L 14 11.578125 z"/></Svg>);
};
export default SVGMagento;
