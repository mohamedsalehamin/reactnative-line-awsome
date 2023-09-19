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
const SVGHeartBrokenSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 9.5 4 C 5.362182 4 2 7.4035211 2 11.5 C 2 12.928333 2.6517943 14.153437 3.2519531 15.048828 C 3.852112 15.94422 4.4648436 16.544922 4.4648438 16.544922 L 16 28.082031 L 27.535156 16.544922 C 27.535156 16.544922 30 14.357368 30 11.5 C 30 7.4035211 26.637818 4 22.5 4 C 20.930306 4 19.526877 4.5232797 18.390625 5.1484375 L 18.060547 5.3300781 L 16.003906 11 L 19.625 11 L 16 17.214844 L 16 13 L 12.453125 13 L 13.998047 5.359375 L 13.326172 5.0136719 C 12.24943 4.4594504 10.952075 4 9.5 4 z M 9.5 6 C 10.278067 6 10.996497 6.3086313 11.707031 6.6015625 L 10.007812 15 L 14 15 L 14 21 L 16.109375 21 L 22 10.894531 L 22 9 L 18.855469 9 L 19.648438 6.8164062 C 20.521997 6.3736841 21.486475 6 22.5 6 C 25.542182 6 28 8.4964789 28 11.5 C 28 13.044632 26.130859 15.121094 26.130859 15.121094 L 26.128906 15.123047 L 16 25.251953 L 5.8710938 15.123047 L 5.8691406 15.121094 C 5.8691406 15.121094 5.3974037 14.656655 4.9140625 13.935547 C 4.4307181 13.214485 4 12.271667 4 11.5 C 4 8.4964789 6.457818 6 9.5 6 z"/></Svg>);
};
export default SVGHeartBrokenSolid;
