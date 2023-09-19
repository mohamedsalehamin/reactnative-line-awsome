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
const SVGAngular = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3.9355469 L 4.3613281 8.1679688 L 6.4492188 23.839844 L 16 29.144531 L 25.550781 23.837891 L 27.638672 8.1679688 L 16 3.9355469 z M 16 6.0644531 L 25.443359 9.4980469 L 23.699219 22.578125 L 16 26.855469 L 8.3007812 22.578125 L 6.5566406 9.4980469 L 16 6.0644531 z M 16 8 L 10 22 L 12 22 L 13.289062 19 L 18.710938 19 L 20 22 L 22 22 L 16 8 z M 16 12.550781 L 16.019531 12.609375 L 16.720703 14.359375 L 17.849609 17 L 14.150391 17 L 15.279297 14.359375 L 15.980469 12.609375 L 16 12.550781 z"/></Svg>);
};
export default SVGAngular;
