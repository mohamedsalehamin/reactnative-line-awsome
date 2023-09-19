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
const SVGShopware = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 18.9 29 21.58 28.039687 23.75 26.429688 C 23.72 26.409688 23.680859 26.389375 23.630859 26.359375 C 22.510859 25.519375 20.870859 24.880703 19.130859 24.220703 C 14.760859 22.520703 10 20.61 10 15 C 10 9.76 14.800234 7 21.490234 7 C 22.460234 7 23.449922 7.0594531 24.419922 7.1894531 C 24.559922 7.2094531 24.570937 7.2104688 24.710938 7.2304688 C 25.080938 7.3104688 25.450547 7.3904688 25.810547 7.4804688 C 23.430547 4.7404687 19.91 3 16 3 z M 21.25 12 C 16.81 12 17 14.939766 17 15.009766 C 17 17.409766 19.749219 18.499531 22.949219 19.769531 C 24.499219 20.389531 26.109609 21.019141 27.599609 21.869141 C 28.489609 20.109141 29 18.11 29 16 C 29 15.82 29.000469 15.640937 28.980469 15.460938 C 28.950469 15.440937 28.910859 15.420625 28.880859 15.390625 C 26.140859 12.980625 23.94 12 21.25 12 z"/></Svg>);
};
export default SVGShopware;
