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
const SVGAtlassian = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.931641 4 C 15.717641 4 15.497516 4.1192813 15.353516 4.3632812 C 10.126516 12.978281 14.981734 20.023953 18.177734 26.626953 C 18.288734 26.847953 18.511719 27 18.761719 27 L 26.351562 27 C 26.834563 27 27.150734 26.472484 26.927734 26.021484 C 26.927734 26.021484 16.71975 4.8805156 16.46875 4.3535156 C 16.35275 4.1195156 16.144641 4 15.931641 4 z M 15.882812 7.7441406 C 18.002812 12.138141 22.311891 21.064 24.212891 25 L 19.607422 25 C 19.317422 24.419 19.018797 23.835047 18.716797 23.248047 C 16.118797 18.188047 13.647812 13.376141 15.882812 7.7441406 z M 10.316406 14 C 10.089406 14 9.8740469 14.125672 9.7480469 14.388672 L 4.0703125 26.003906 C 3.8493125 26.467906 4.1867344 27 4.6777344 27 L 12.576172 27 L 12.599609 27 C 12.849609 27 13.070828 26.844234 13.173828 26.615234 C 14.886828 23.013234 13.857234 17.537719 10.865234 14.261719 C 10.706234 14.089719 10.507406 14 10.316406 14 z M 10.570312 17.259766 C 11.908312 19.633766 12.36825 22.695 11.65625 25 L 6.7871094 25 L 10.570312 17.259766 z"/></Svg>);
};
export default SVGAtlassian;
