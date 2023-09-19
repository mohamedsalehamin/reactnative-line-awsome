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
const SVGKickstarterK = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 5 C 9.343 5 8 6.343 8 8 L 8 24 C 8 25.657 9.343 27 11 27 C 12.657 27 14 25.657 14 24 L 14 19.414062 L 19.742188 25.976562 C 20.335188 26.653562 21.166953 27 22.001953 27 C 22.702953 27 23.406562 26.755813 23.976562 26.257812 C 25.223562 25.166812 25.348813 23.272391 24.257812 22.025391 L 18.859375 15.855469 L 23.400391 9.8007812 C 24.394391 8.4757813 24.126781 6.5936094 22.800781 5.5996094 C 21.475781 4.6056094 19.593609 4.8732188 18.599609 6.1992188 L 14 12.333984 L 14 8 C 14 6.343 12.657 5 11 5 z"/></Svg>);
};
export default SVGKickstarterK;
