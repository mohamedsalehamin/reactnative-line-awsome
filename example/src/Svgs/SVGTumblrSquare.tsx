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
const SVGTumblrSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15 10 C 15 11.657 14.105 13 13 13 L 13 15 L 14 15 L 14 18.365234 C 14 20.372234 15.627766 22 17.634766 22 C 17.912766 22.013 18.405891 22.000344 18.962891 21.777344 C 19.467891 21.575344 19.811906 21.287609 20.003906 21.099609 L 19.287109 18.986328 L 18.433594 19.365234 C 17.759594 19.664234 17 19.170594 17 18.433594 L 17 15 L 19 15 L 19 13 L 17 13 L 17 10 L 15 10 z"/></Svg>);
};
export default SVGTumblrSquare;
