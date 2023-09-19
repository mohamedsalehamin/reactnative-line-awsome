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
const SVGStarOfLifeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 13 4 L 13 10.804688 L 7.1074219 7.4023438 L 4.1074219 12.599609 L 10 16 L 4.1074219 19.400391 L 7.1074219 24.597656 L 13 21.195312 L 13 28 L 19 28 L 19 21.195312 L 24.892578 24.597656 L 27.892578 19.400391 L 22 16 L 27.892578 12.599609 L 24.892578 7.4023438 L 19 10.804688 L 19 4 L 13 4 z M 15 6 L 17 6 L 17 14.269531 L 24.160156 10.134766 L 25.160156 11.865234 L 18 16 L 25.160156 20.134766 L 24.160156 21.865234 L 17 17.730469 L 17 26 L 15 26 L 15 17.730469 L 7.8398438 21.865234 L 6.8398438 20.134766 L 14 16 L 6.8398438 11.865234 L 7.8398438 10.134766 L 15 14.269531 L 15 6 z"/></Svg>);
};
export default SVGStarOfLifeSolid;
