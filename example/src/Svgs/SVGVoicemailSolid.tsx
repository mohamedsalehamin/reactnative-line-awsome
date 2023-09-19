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
const SVGVoicemailSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8 9 C 4.144531 9 1 12.144531 1 16 C 1 19.855469 4.144531 23 8 23 L 24 23 C 27.855469 23 31 19.855469 31 16 C 31 12.144531 27.855469 9 24 9 C 20.144531 9 17 12.144531 17 16 C 17 17.957031 17.820313 19.726563 19.125 21 L 12.875 21 C 14.179688 19.726563 15 17.957031 15 16 C 15 12.144531 11.855469 9 8 9 Z M 8 11 C 10.773438 11 13 13.226563 13 16 C 13 18.773438 10.773438 21 8 21 C 5.226563 21 3 18.773438 3 16 C 3 13.226563 5.226563 11 8 11 Z M 24 11 C 26.773438 11 29 13.226563 29 16 C 29 18.773438 26.773438 21 24 21 C 21.226563 21 19 18.773438 19 16 C 19 13.226563 21.226563 11 24 11 Z"/></Svg>);
};
export default SVGVoicemailSolid;
