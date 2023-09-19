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
const SVGVimeoSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.878906 10 C 18.970906 10 17.676 10.827922 17 13.044922 C 17.844 12.682922 19.091313 12.588 18.945312 14 C 18.906312 14.478 18.48325 15.358484 17.90625 16.271484 C 16.30425 18.798484 15.91425 17.954 15.03125 12.375 C 14.78125 10.804 14.122781 10.072781 13.050781 10.175781 C 12.103781 10.261781 10.588 11.769063 9 13.164062 L 9.6464844 14 C 10.262484 13.565 10.622563 13.390625 10.726562 13.390625 C 11.622563 13.390625 12.082969 15.719359 13.167969 19.693359 C 13.722969 21.174359 14.398125 21.914062 15.203125 21.914062 C 16.499125 21.914062 18.084031 20.696672 19.957031 18.263672 C 21.769031 15.934672 22.811094 14.096813 22.871094 12.757812 C 22.922094 11.047813 22.192906 10 20.878906 10 z"/></Svg>);
};
export default SVGVimeoSquare;
