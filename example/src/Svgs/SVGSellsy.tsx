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
const SVGSellsy = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 18 4 C 14.335938 4 11.273438 6.25 9.875 9.40625 C 9.292969 9.164063 8.671875 9 8 9 C 5.25 9 3 11.25 3 14 C 3 14.144531 3.019531 14.269531 3.03125 14.40625 C 1.257813 15.675781 0 17.660156 0 20 C 0 23.855469 3.144531 27 7 27 L 25 27 C 28.855469 27 32 23.855469 32 20 C 32 16.847656 29.847656 14.273438 26.96875 13.40625 C 26.976563 13.269531 27 13.140625 27 13 C 27 8.042969 22.957031 4 18 4 Z M 18 6 C 21.878906 6 25 9.121094 25 13 C 25 13.304688 24.980469 13.613281 24.9375 13.9375 L 24.78125 14.90625 L 25.78125 15.0625 C 28.179688 15.433594 30 17.488281 30 20 C 30 22.773438 27.773438 25 25 25 L 7 25 C 4.226563 25 2 22.773438 2 20 C 2 18.117188 3.03125 16.480469 4.5625 15.625 L 5.1875 15.28125 L 5.0625 14.5625 C 5.023438 14.367188 5 14.1875 5 14 C 5 12.332031 6.332031 11 8 11 C 8.652344 11 9.25 11.203125 9.75 11.5625 L 10.875 12.40625 L 11.28125 11.03125 C 12.128906 8.125 14.808594 6 18 6 Z M 20 13 L 20 22 L 22 22 L 22 13 Z M 16 15 L 16 22 L 18 22 L 18 15 Z M 12 16 L 12 22 L 14 22 L 14 16 Z M 8 17 L 8 22 L 10 22 L 10 17 Z"/></Svg>);
};
export default SVGSellsy;
