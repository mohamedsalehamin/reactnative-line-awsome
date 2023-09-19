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
const SVGMoneyCheckSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 13 L 16 13 L 16 11 L 6 11 z M 20 11 L 20 16 L 26 16 L 26 11 L 20 11 z M 6 14 L 6 16 L 13 16 L 13 14 L 6 14 z M 8.5 17 C 7.895 17 7.4695 17.34425 7.1875 17.65625 C 6.9065 17.96925 6.69925 18.3165 6.53125 18.6875 C 6.19525 19.4345 6 20.238 6 21 L 8 21 C 8 20.68 8.156 19.984 8.375 19.5 C 8.437 19.359 8.5005 19.31175 8.5625 19.21875 C 8.6365 19.32075 8.69125 19.38625 8.78125 19.53125 C 8.92625 19.76525 9.08625 20.0475 9.28125 20.3125 C 9.47625 20.5785 9.71475 21.01525 10.46875 21.03125 C 11.06275 21.04325 11.2455 20.8285 11.4375 20.6875 C 11.6285 20.5465 11.76125 20.41425 11.90625 20.28125 C 12.00425 20.19125 12.08225 20.1255 12.15625 20.0625 C 12.18325 20.1015 12.294703 20.16725 12.845703 20.40625 C 13.512703 20.69825 14.523 21 16 21 L 16 19 C 14.77 19 14.12925 18.80075 13.65625 18.59375 C 13.18325 18.38675 12.824 18 12 18 C 11.398 18 11.2465 18.234 11.0625 18.375 C 10.8985 18.5 10.78525 18.633 10.65625 18.75 C 10.59725 18.656 10.57 18.609 10.5 18.5 C 10.332 18.227 10.13275 17.918 9.84375 17.625 C 9.55475 17.332 9.098 17 8.5 17 z M 20 19 L 20 21 L 26 21 L 26 19 L 20 19 z"/></Svg>);
};
export default SVGMoneyCheckSolid;
