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
const SVGEthereum = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 14.953125 3 L 6.9296875 15.552734 L 16.003906 20.013672 L 24.933594 15.548828 L 17.052734 3 L 16.5 3 L 14.953125 3 z M 15 6.6367188 L 15 10.988281 L 11.085938 12.763672 L 15 6.6367188 z M 17 6.6777344 L 20.818359 12.757812 L 17 11.003906 L 17 6.6777344 z M 15 13.183594 L 15 17.291016 L 10.65625 15.154297 L 15 13.183594 z M 17 13.207031 L 21.246094 15.15625 L 17 17.279297 L 17 13.207031 z M 7 17.511719 L 7 20.03125 L 14.927734 28.875 L 16 28.875 L 17.072266 28.875 L 25 20.03125 L 25 17.511719 L 16 22.125 L 7 17.511719 z M 11.521484 22.078125 L 15 23.861328 L 15 25.957031 L 11.521484 22.078125 z M 20.478516 22.078125 L 17 25.957031 L 17 23.861328 L 20.478516 22.078125 z"/></Svg>);
};
export default SVGEthereum;
