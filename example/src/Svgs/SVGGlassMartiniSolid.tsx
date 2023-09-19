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
const SVGGlassMartiniSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 6.3398438 L 15 19.339844 L 15 26 L 10 26 L 10 28 L 22 28 L 22 26 L 17 26 L 17 19.339844 L 27 6.3398438 L 27 5 L 5 5 z M 8.03125 7 L 23.96875 7 L 22.429688 9 L 11.919922 9 L 13.458984 11 L 20.892578 11 L 16 17.359375 L 8.03125 7 z"/></Svg>);
};
export default SVGGlassMartiniSolid;
