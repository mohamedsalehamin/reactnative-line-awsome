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
const SVGVaadin = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4 4 C 3.4 4 3 4.4 3 5 L 3 7.5 C 3 9.4 4.6 11 6.5 11 L 13.599609 11 C 14.399609 11 15 11.600391 15 12.400391 L 15 13 C 15 13.6 15.4 14 16 14 C 16.6 14 17 13.6 17 13 L 17 12.400391 C 17 11.600391 17.600391 11 18.400391 11 L 25.5 11 C 27.4 11 29 9.4 29 7.5 L 29 5 C 29 4.4 28.6 4 28 4 C 27.4 4 27 4.4 27 5 L 27 5.5996094 C 27 6.3996094 26.399609 7 25.599609 7 L 19 7 C 17.3 7 16 8.3 16 10 C 16 8.3 14.7 7 13 7 L 6.4003906 7 C 5.6003906 7 5 6.3996094 5 5.5996094 L 5 5 C 5 4.4 4.6 4 4 4 z M 10.351562 15.027344 C 10.1625 15.044531 9.9757813 15.099219 9.8007812 15.199219 C 9.1007812 15.599219 8.7992187 16.499219 9.1992188 17.199219 L 14.699219 27.199219 C 14.899219 27.699219 15.5 28 16 28 C 16.5 28 17.100781 27.699219 17.300781 27.199219 L 22.800781 17.199219 C 23.200781 16.499219 22.899219 15.599219 22.199219 15.199219 C 21.499219 14.799219 20.599219 15.100781 20.199219 15.800781 L 16 23.400391 L 11.800781 15.800781 C 11.500781 15.275781 10.91875 14.975781 10.351562 15.027344 z"/></Svg>);
};
export default SVGVaadin;
