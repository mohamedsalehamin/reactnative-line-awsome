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
const SVGPillsSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.5 5 C 5.467 5 3 7.468 3 10.5 L 3 21.5 C 3 24.532 5.467 27 8.5 27 C 11.533 27 14 24.532 14 21.5 L 14 10.5 C 14 7.468 11.533 5 8.5 5 z M 8.5 7 C 10.43 7 12 8.57 12 10.5 L 12 15 L 5 15 L 5 10.5 C 5 8.57 6.57 7 8.5 7 z M 22.5 14 C 18.916 14 16 16.916 16 20.5 C 16 24.084 18.916 27 22.5 27 C 26.084 27 29 24.084 29 20.5 C 29 16.916 26.084 14 22.5 14 z M 22.5 16 C 24.981 16 27 18.019 27 20.5 C 27 21.378623 26.738056 22.193134 26.300781 22.886719 L 20.113281 16.699219 C 20.806866 16.261944 21.621377 16 22.5 16 z M 5 17 L 12 17 L 12 21.5 C 12 23.43 10.43 25 8.5 25 C 6.57 25 5 23.43 5 21.5 L 5 17 z M 18.699219 18.113281 L 24.886719 24.300781 C 24.193134 24.738056 23.378623 25 22.5 25 C 20.019 25 18 22.981 18 20.5 C 18 19.621377 18.261944 18.806866 18.699219 18.113281 z"/></Svg>);
};
export default SVGPillsSolid;
