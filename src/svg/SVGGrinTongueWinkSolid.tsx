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
const SVGGrinTongueWinkSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11.5 12 A 1.5 1.5 0 0 0 11.5 15 A 1.5 1.5 0 0 0 11.5 12 z M 18 13 L 18 15 L 23 15 L 23 13 L 18 13 z M 11.765625 17.357422 L 10.232422 18.642578 C 11.109193 19.687196 12.451356 20.426339 14 20.773438 L 14 22 C 14 23.1 14.9 24 16 24 C 17.1 24 18 23.1 18 22 L 18 20.773438 C 19.548584 20.426279 20.889562 19.687905 21.765625 18.642578 L 20.232422 17.357422 C 19.384422 18.371422 17.763 19 16 19 C 14.237 19 12.614625 18.370422 11.765625 17.357422 z"/></Svg>);
};
export default SVGGrinTongueWinkSolid;
