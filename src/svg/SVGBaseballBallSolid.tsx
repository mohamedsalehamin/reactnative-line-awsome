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
const SVGBaseballBallSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 19.090538 5 21.882568 6.2863093 23.882812 8.3457031 C 22.846318 9.0948613 21.978635 10.05256 21.320312 11.179688 L 23.039062 12.189453 C 23.567883 11.281478 24.287067 10.503928 25.144531 9.8945312 C 26.315436 11.642539 27 13.74284 27 16 C 27 18.25716 26.315436 20.357461 25.144531 22.105469 C 24.277059 21.486086 23.548578 20.697486 23.009766 19.769531 L 21.279297 20.769531 C 21.937657 21.906699 22.826289 22.885169 23.882812 23.654297 C 21.882568 25.713691 19.090538 27 16 27 C 12.909462 27 10.117432 25.713691 8.1171875 23.654297 C 9.1737105 22.885169 10.062343 21.906699 10.720703 20.769531 L 8.9902344 19.769531 C 8.4514217 20.697486 7.7229413 21.486086 6.8554688 22.105469 C 5.6845638 20.357461 5 18.25716 5 16 C 5 13.74284 5.6845638 11.642539 6.8554688 9.8945312 C 7.7129327 10.503928 8.4321171 11.281478 8.9609375 12.189453 L 10.679688 11.179688 C 10.021365 10.05256 9.1536816 9.0948613 8.1171875 8.3457031 C 10.117432 6.2863093 12.909462 5 16 5 z M 11.580078 13.210938 L 9.6699219 13.800781 C 9.8899219 14.520781 10 15.26 10 16 C 10 16.73 9.8994531 17.450391 9.6894531 18.150391 L 11.599609 18.720703 C 11.869609 17.840703 12 16.92 12 16 C 12 15.06 11.860078 14.120937 11.580078 13.210938 z M 20.419922 13.210938 C 20.139922 14.120937 20 15.06 20 16 C 20 16.92 20.130391 17.840703 20.400391 18.720703 L 22.310547 18.150391 C 22.100547 17.450391 22 16.73 22 16 C 22 15.26 22.110078 14.520781 22.330078 13.800781 L 20.419922 13.210938 z"/></Svg>);
};
export default SVGBaseballBallSolid;
