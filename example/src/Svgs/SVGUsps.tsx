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
const SVGUsps = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5.5996094 7 C 19.199609 9.9 23.300391 10.5 23.400391 11.5 C 25.400391 11.5 25.899219 11.500391 26.199219 11.900391 C 27.299219 12.900391 25.400391 15.5 25.400391 15.5 C 25.200391 15.6 3.6992188 24 3.6992188 24 L 26.400391 24 L 30 7 L 5.5996094 7 z M 4.8007812 11 L 2 24 C 12.5 18.8 15.899219 17.100391 19.199219 15.900391 C 22.699219 14.800391 24.399219 14.699609 24.699219 14.599609 C 24.899219 14.399609 24.500781 14.200781 23.300781 14.300781 C 20.500781 14.400781 15.9 16.299219 14 17.199219 L 12.400391 12.199219 L 22.900391 12.199219 C 22.800391 11.199219 17.499219 11.1 10.199219 11 L 4.8007812 11 z M 23.199219 12.099609 C 23.199219 12.099609 23.099609 12 22.599609 12.5 C 21.999609 12.8 20.599609 12.8 20.599609 13 C 20.599609 13.2 24.400781 12.8 25.300781 13 C 25.800781 13.1 25.199609 14.099219 25.099609 14.699219 C 24.999609 14.999219 25.199219 14.899219 25.199219 14.699219 C 26.599219 12.499219 25.999609 12.099609 24.599609 12.099609 L 23.199219 12.099609 z"/></Svg>);
};
export default SVGUsps;
