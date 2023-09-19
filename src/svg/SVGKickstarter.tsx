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
const SVGKickstarter = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 13.632812 11 C 12.579812 11 12 11.808406 12 12.816406 L 12 19.132812 C 12 20.185813 12.559344 20.992188 13.652344 20.992188 C 14.529344 20.992188 15.251953 20.421813 15.251953 19.132812 L 15.251953 17.427734 L 17.722656 20.515625 C 18.224656 21.123625 19.314 21.200625 20 20.515625 C 20.596 19.899625 20.603109 19.015937 20.162109 18.460938 L 18.160156 15.898438 L 19.732422 13.480469 C 20.116422 12.929469 20.121859 12.073516 19.505859 11.478516 C 18.836859 10.829516 17.685 10.771672 17 11.763672 L 15.251953 14.425781 L 15.251953 12.839844 C 15.251953 11.586844 14.534812 11 13.632812 11 z"/></Svg>);
};
export default SVGKickstarter;
