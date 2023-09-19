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
const SVGCreativeCommonsPd = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 17.238499 26.78347 18.425251 26.404297 19.537109 L 14 14.015625 L 14 14 C 14 12.897 14.897 12 16 12 C 17.103 12 18 12.897 18 14 L 20 14 C 20 11.794 18.206 10 16 10 C 14.081248 10 12.477782 11.359015 12.091797 13.164062 L 6.4082031 10.634766 C 8.2938562 7.2776415 11.88351 5 16 5 z M 5.5957031 12.462891 L 12 15.314453 L 12 18 C 12 20.206 13.794 22 16 22 C 17.918752 22 19.522218 20.640985 19.908203 18.835938 L 25.591797 21.365234 C 23.706144 24.722359 20.11649 27 16 27 C 9.935 27 5 22.065 5 16 C 5 14.761501 5.2165305 13.574749 5.5957031 12.462891 z M 14 16.205078 L 18.033203 18 L 18 18 C 18 19.103 17.103 20 16 20 C 14.897 20 14 19.103 14 18 L 14 16.205078 z"/></Svg>);
};
export default SVGCreativeCommonsPd;