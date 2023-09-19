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
const SVGCss3Alt = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6 4 L 8 25 L 16 28 L 24 25 L 26 4 L 6 4 z M 9.3320312 7 L 22.652344 7 L 22.390625 10 L 16.695312 13 L 19.121094 13 L 22 13 L 22.123047 13 L 21.611328 19.007812 L 21.630859 19 L 21.355469 22 L 16 24 L 10.634766 22 L 10.304688 18 L 13.326172 18 L 13.482422 20.033203 L 16 20.904297 L 18.521484 20.050781 L 18.867188 16 L 10.130859 16 L 9.8730469 13 L 15.783203 10 L 9.609375 10 L 9.3320312 7 z"/></Svg>);
};
export default SVGCss3Alt;
