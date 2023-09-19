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
const SVGPercentSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9.5 6 C 7.578125 6 6 7.578125 6 9.5 L 6 12.5 C 6 14.421875 7.578125 16 9.5 16 C 11.421875 16 13 14.421875 13 12.5 L 13 9.5 C 13 7.578125 11.421875 6 9.5 6 Z M 20.75 6 L 8.75 26 L 11.25 26 L 23.25 6 Z M 9.5 8 C 10.339844 8 11 8.660156 11 9.5 L 11 12.5 C 11 13.339844 10.339844 14 9.5 14 C 8.660156 14 8 13.339844 8 12.5 L 8 9.5 C 8 8.660156 8.660156 8 9.5 8 Z M 22.5 16 C 20.578125 16 19 17.578125 19 19.5 L 19 22.5 C 19 24.421875 20.578125 26 22.5 26 C 24.421875 26 26 24.421875 26 22.5 L 26 19.5 C 26 17.578125 24.421875 16 22.5 16 Z M 22.5 18 C 23.339844 18 24 18.660156 24 19.5 L 24 22.5 C 24 23.339844 23.339844 24 22.5 24 C 21.660156 24 21 23.339844 21 22.5 L 21 19.5 C 21 18.660156 21.660156 18 22.5 18 Z"/></Svg>);
};
export default SVGPercentSolid;
