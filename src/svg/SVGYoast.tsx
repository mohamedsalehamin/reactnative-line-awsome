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
const SVGYoast = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 20.800781 4 L 15.800781 17.5 L 13 10 L 10 10 L 14 19.5 C 14 19.5 14.200781 20.099609 14.300781 20.599609 L 14.300781 21.300781 C 14.300781 21.500781 14.199609 21.8 14.099609 22 C 13.499609 23.2 12.399609 23.900391 11.099609 23.900391 L 11.099609 26.900391 C 13.799609 26.900391 16.199609 25.199219 17.099609 22.699219 L 24 4 L 20.800781 4 z M 9 7 C 6.8 7 5 8.8 5 11 L 5 21 C 5 23.2 6.8 25 9 25 L 9.9003906 25 L 9.9003906 24 L 9 24 C 7.3 24 6 22.6 6 21 L 6 11 C 6 9.3 7.3 8 9 8 L 18.099609 8 L 18.5 7 L 9 7 z M 24 7.0996094 L 23.699219 8.0996094 C 24.999219 8.3996094 26 9.6 26 11 L 26 24 L 17.699219 24 C 17.499219 24.3 17.299609 24.7 17.099609 25 L 27 25 L 27 11 C 27 9.1 25.7 7.5996094 24 7.0996094 z"/></Svg>);
};
export default SVGYoast;
