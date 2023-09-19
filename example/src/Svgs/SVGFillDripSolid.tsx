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
const SVGFillDripSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11.300781 3.3007812 L 9.9003906 4.6992188 L 11.699219 6.5 L 4.8007812 13.400391 C 3.6007812 14.600391 3.6007813 16.499219 4.8007812 17.699219 L 4.9003906 17.800781 L 11.199219 24.099609 C 12.399219 25.299609 14.3 25.299609 15.5 24.099609 L 23.099609 16.5 L 23.800781 15.800781 L 14.099609 6.0996094 L 13.300781 5.3007812 L 13.099609 5.0996094 L 11.300781 3.3007812 z M 13.099609 7.9003906 L 21 15.800781 L 18.800781 18 L 7.8984375 18 L 6.1992188 16.300781 C 5.7992187 15.900781 5.7992187 15.200781 6.1992188 14.800781 L 13.099609 7.9003906 z M 25 19.300781 L 24.199219 20.5 C 24.199219 20.5 23.699609 21.299219 23.099609 22.199219 C 22.799609 22.699219 22.600391 23.099609 22.400391 23.599609 C 22.200391 24.099609 22 24.4 22 25 C 22 26.6 23.4 28 25 28 C 26.6 28 28 26.6 28 25 C 28 24.4 27.799609 24 27.599609 23.5 C 27.399609 23 27.100391 22.499609 26.900391 22.099609 C 26.400391 21.199609 25.800781 20.400391 25.800781 20.400391 L 25 19.300781 z"/></Svg>);
};
export default SVGFillDripSolid;
