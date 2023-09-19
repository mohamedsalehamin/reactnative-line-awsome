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
const SVGMedalSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7 3 L 11.265625 13.359375 C 8.7096967 14.94892 7 17.775441 7 21 C 7 25.962 11.037 30 16 30 C 20.963 30 25 25.962 25 21 C 25 17.775441 23.290303 14.94892 20.734375 13.359375 L 25 3 L 22.837891 3 L 18.925781 12.498047 C 18.268581 12.271202 17.580892 12.113483 16.865234 12.044922 L 20.587891 3 L 18.425781 3 L 14.673828 12.109375 C 14.12256 12.191305 13.588371 12.320577 13.074219 12.498047 L 9.1621094 3 L 7 3 z M 11.412109 3 L 13.953125 9.1738281 L 15.035156 6.546875 L 13.574219 3 L 11.412109 3 z M 16 14 C 19.859 14 23 17.14 23 21 C 23 24.86 19.859 28 16 28 C 12.141 28 9 24.86 9 21 C 9 17.14 12.141 14 16 14 z M 16 17.162109 L 14.832031 19.78125 L 12 20.091797 L 14.119141 21.996094 L 13.523438 24.806641 L 16 23.376953 L 18.476562 24.806641 L 17.880859 21.996094 L 20 20.091797 L 17.167969 19.78125 L 16 17.162109 z"/></Svg>);
};
export default SVGMedalSolid;