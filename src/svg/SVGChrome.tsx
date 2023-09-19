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
const SVGChrome = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 4 C 9.3851594 4 4 9.3851594 4 16 C 4 22.614841 9.3851594 28 16 28 C 22.614841 28 28 22.614841 28 16 C 28 9.3851594 22.614841 4 16 4 z M 16 6 C 19.90863 6 23.276065 8.2333228 24.921875 11.492188 L 18.115234 11.488281 C 17.470061 11.183326 16.757777 11 16 11 C 14.375393 11 12.940126 11.796481 12.025391 13.005859 L 8.4394531 9.4589844 C 10.271365 7.342482 12.973068 6 16 6 z M 7.6328125 10.523438 L 11.019531 16.392578 C 11.205796 18.757556 13.052736 20.67055 15.388672 20.958984 L 14.113281 25.816406 C 9.4869714 24.936011 6 20.887395 6 16 C 6 13.974892 6.6030417 12.096075 7.6328125 10.523438 z M 25.441406 12.724609 C 25.796398 13.751526 26 14.850512 26 16 C 26 21.533597 21.533597 26 16 26 C 15.813874 26 15.6328 25.982633 15.449219 25.972656 L 18.841797 20.101562 C 20.142053 19.19639 21 17.695623 21 16 C 21 15.309909 20.857182 14.652149 20.601562 14.052734 L 25.441406 12.724609 z M 16 13 C 17.67148 13 19 14.328521 19 16 C 19 17.67148 17.67148 19 16 19 C 14.328521 19 13 17.67148 13 16 C 13 14.328521 14.328521 13 16 13 z"/></Svg>);
};
export default SVGChrome;
