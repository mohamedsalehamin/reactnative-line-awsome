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
const SVGSuperpowers = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 29 3 L 14.876953 5.0566406 L 13.988281 5.1855469 L 14.001953 5.1914062 C 8.8884257 6.1347541 5 10.617863 5 16 C 5 19.0325 6.2346875 21.781562 8.2265625 23.773438 L 3 29 L 17.123047 26.943359 L 18.011719 26.814453 L 17.998047 26.808594 C 23.111574 25.865246 27 21.382137 27 16 C 27 12.9675 25.765313 10.218438 23.773438 8.2265625 L 29 3 z M 16 7 C 20.963 7 25 11.037 25 16 C 25 20.963 20.963 25 16 25 C 11.037 25 7 20.963 7 16 C 7 11.037 11.037 7 16 7 z"/></Svg>);
};
export default SVGSuperpowers;
