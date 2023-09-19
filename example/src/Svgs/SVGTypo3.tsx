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
const SVGTypo3 = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M11.7 6.5C11.8 9 13.2 13 14.6 16c1.8 3.8 3.4 5.6 4.7 6.5C17 25.6 15 27 14.4 27s-2.6-1.5-5-6.3C7.4 16.8 6 12.4 6 9.9 6 9.4 6.1 9.1 6.1 9 6.9 8.2 9 7.2 11.7 6.5M14.4 4C10.5 4.5 6 5.9 4.5 7.8 4.2 8.2 4 8.9 4 9.9 4 15.7 10 29 14.4 29c2 0 5.5-3.4 8.3-7.9-.4.1-.7.1-1.1.1-3.2 0-7.9-11.3-7.9-15C13.7 4.8 14 4.4 14.4 4L14.4 4zM20.3 6c4.4 0 5.5.8 5.7 1 0 3.3-1.7 6.7-2.6 7.8C22.1 13.6 20 9 20 6 20.1 6 20.2 6 20.3 6M20.3 4C18.6 4 18 4.3 18 6c0 3.7 3 11 5.6 11 1.5 0 4.4-5.5 4.4-10.1C28 4.6 24.3 4 20.3 4L20.3 4z"/></Svg>);
};
export default SVGTypo3;
