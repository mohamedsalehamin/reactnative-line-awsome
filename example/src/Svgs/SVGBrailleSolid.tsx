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
const SVGBrailleSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 12 6 C 10.894531 6 10 6.894531 10 8 C 10 9.105469 10.894531 10 12 10 C 13.105469 10 14 9.105469 14 8 C 14 6.894531 13.105469 6 12 6 Z M 20 6 C 18.894531 6 18 6.894531 18 8 C 18 9.105469 18.894531 10 20 10 C 21.105469 10 22 9.105469 22 8 C 22 6.894531 21.105469 6 20 6 Z M 12 14 C 10.894531 14 10 14.894531 10 16 C 10 17.105469 10.894531 18 12 18 C 13.105469 18 14 17.105469 14 16 C 14 14.894531 13.105469 14 12 14 Z M 20 14 C 18.894531 14 18 14.894531 18 16 C 18 17.105469 18.894531 18 20 18 C 21.105469 18 22 17.105469 22 16 C 22 14.894531 21.105469 14 20 14 Z M 12 22 C 10.894531 22 10 22.894531 10 24 C 10 25.105469 10.894531 26 12 26 C 13.105469 26 14 25.105469 14 24 C 14 22.894531 13.105469 22 12 22 Z M 20 22 C 18.894531 22 18 22.894531 18 24 C 18 25.105469 18.894531 26 20 26 C 21.105469 26 22 25.105469 22 24 C 22 22.894531 21.105469 22 20 22 Z"/></Svg>);
};
export default SVGBrailleSolid;
