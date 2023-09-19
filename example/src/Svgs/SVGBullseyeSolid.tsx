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
const SVGBullseyeSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.828125 3 3 8.828125 3 16 C 3 23.171875 8.828125 29 16 29 C 23.171875 29 29 23.171875 29 16 C 29 8.828125 23.171875 3 16 3 Z M 16 4 C 22.632813 4 28 9.367188 28 16 C 28 22.632813 22.632813 28 16 28 C 9.367188 28 4 22.632813 4 16 C 4 9.367188 9.367188 4 16 4 Z M 16 6 C 10.488281 6 6 10.488281 6 16 C 6 21.511719 10.488281 26 16 26 C 21.511719 26 26 21.511719 26 16 C 26 10.488281 21.511719 6 16 6 Z M 16 8 C 20.429688 8 24 11.570313 24 16 C 24 20.429688 20.429688 24 16 24 C 11.570313 24 8 20.429688 8 16 C 8 11.570313 11.570313 8 16 8 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 16 14 C 14.894531 14 14 14.894531 14 16 C 14 17.105469 14.894531 18 16 18 C 17.105469 18 18 17.105469 18 16 C 18 14.894531 17.105469 14 16 14 Z"/></Svg>);
};
export default SVGBullseyeSolid;
