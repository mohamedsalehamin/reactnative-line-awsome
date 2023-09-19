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
const SVGBloggerB = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 7 C 9.686 7 7 9.686 7 13 L 7 20 C 7 23.314 9.686 26 13 26 L 20 26 C 23.314 26 26 23.314 26 20 L 26 15 C 26 14.448 25.552 14 25 14 L 24 14 C 23.448 14 23 13.552 23 13 C 23 9.686 20.314 7 17 7 L 13 7 z M 13 12 L 17 12 C 17.55 12 18 12.45 18 13 C 18 13.55 17.55 14 17 14 L 13 14 C 12.45 14 12 13.55 12 13 C 12 12.45 12.45 12 13 12 z M 13 19 L 20 19 C 20.55 19 21 19.45 21 20 C 21 20.55 20.55 21 20 21 L 13 21 C 12.45 21 12 20.55 12 20 C 12 19.45 12.45 19 13 19 z"/></Svg>);
};
export default SVGBloggerB;
