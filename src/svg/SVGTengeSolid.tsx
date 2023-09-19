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
const SVGTengeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.6328125 5 C 6.2848125 5 6 5.2740937 6 5.6210938 L 6 8.3671875 C 6 8.7151875 6.2848125 9 6.6328125 9 L 25.378906 9 C 25.725906 9 26 8.7151875 26 8.3671875 L 26 5.6210938 C 26 5.2740938 25.725906 5 25.378906 5 L 6.6328125 5 z M 6.6328125 12 C 6.2848125 12 6 12.284094 6 12.621094 L 6 15.367188 C 6 15.715188 6.2848125 16 6.6328125 16 L 14 16 L 14 27.378906 C 14 27.725906 14.274094 28 14.621094 28 L 17.378906 28 C 17.725906 28 18 27.725906 18 27.378906 L 18 16 L 25.378906 16 C 25.725906 16 26 15.715187 26 15.367188 L 26 12.621094 C 26 12.284094 25.725906 12 25.378906 12 L 6.6328125 12 z"/></Svg>);
};
export default SVGTengeSolid;
