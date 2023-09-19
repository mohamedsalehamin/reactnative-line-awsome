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
const SVGRemoveFormatSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.2890625 5.9726562 L 3.0839844 7.5703125 L 27.777344 26.177734 L 28.980469 24.580078 L 18.027344 16.326172 L 20.285156 10 L 25 10 L 25 11.5 C 25 11.776 25.224 12 25.5 12 L 26.5 12 C 26.776 12 27 11.776 27 11.5 L 27 7.5 C 27 7.224 26.776 7 26.5 7 L 10.5 7 C 10.224 7 10 7.224 10 7.5 L 10 10.277344 L 4.2890625 5.9726562 z M 12 10 L 17.285156 10 L 15.662109 14.544922 L 11.933594 11.734375 C 11.972056 11.663558 12 11.586203 12 11.5 L 12 10 z M 14.253906 18.490234 L 13 22 L 11.5 22 C 11.224 22 11 22.224 11 22.5 L 11 24.5 C 11 24.776 11.224 25 11.5 25 L 16.5 25 C 16.776 25 17 24.776 17 24.5 L 17 22.5 C 17 22.224 16.776 22 16.5 22 L 16 22 L 16.619141 20.265625 L 14.253906 18.490234 z"/></Svg>);
};
export default SVGRemoveFormatSolid;
