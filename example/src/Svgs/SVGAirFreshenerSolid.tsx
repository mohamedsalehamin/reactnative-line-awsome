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
const SVGAirFreshenerSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 2 C 14.346 2 13 3.346 13 5 C 13 5.8539348 13.362793 6.6210736 13.9375 7.1679688 L 9.0566406 14 L 11.132812 14 L 7.1328125 20 L 15 20 L 15 22 L 9 22 L 9 28 L 23 28 L 23 22 L 17 22 L 17 20 L 24.867188 20 L 20.867188 14 L 22.943359 14 L 18.064453 7.1679688 C 18.638521 6.6211354 19 5.8533927 19 5 C 19 3.346 17.654 2 16 2 z M 16 4 C 16.552 4 17 4.449 17 5 C 17 5.403728 16.755875 5.7485476 16.410156 5.90625 L 16.333984 5.9335938 C 16.228448 5.9715653 16.118533 6 16 6 C 15.881467 6 15.771552 5.9715653 15.666016 5.9335938 L 15.589844 5.90625 C 15.244125 5.7485476 15 5.403728 15 5 C 15 4.449 15.448 4 16 4 z M 15.806641 7.9921875 C 15.844887 7.9948558 15.883381 7.9911014 15.921875 7.9921875 C 15.948472 7.9928879 15.973237 8 16 8 C 16.026763 8 16.051528 7.9928879 16.078125 7.9921875 C 16.117273 7.9911103 16.156418 7.9949011 16.195312 7.9921875 L 19.056641 12 L 17.132812 12 L 21.132812 18 L 10.867188 18 L 14.867188 12 L 12.943359 12 L 15.806641 7.9921875 z M 11 24 L 21 24 L 21 26 L 11 26 L 11 24 z"/></Svg>);
};
export default SVGAirFreshenerSolid;
