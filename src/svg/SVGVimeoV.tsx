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
const SVGVimeoV = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 27.988281 10.410156 C 27.882813 12.753906 26.25 15.957031 23.09375 20.027344 C 19.828125 24.273438 17.070313 26.398438 14.8125 26.398438 C 13.410156 26.398438 12.226563 25.105469 11.261719 22.519531 C 10.613281 20.144531 9.96875 17.773438 9.324219 15.402344 C 8.605469 12.8125 7.835938 11.519531 7.011719 11.519531 C 6.832031 11.519531 6.203125 11.898438 5.128906 12.652344 L 4 11.195313 C 5.183594 10.152344 6.351563 9.109375 7.503906 8.066406 C 9.082031 6.699219 10.269531 5.980469 11.058594 5.90625 C 12.925781 5.726563 14.078125 7.003906 14.507813 9.742188 C 14.972656 12.699219 15.296875 14.535156 15.476563 15.253906 C 16.015625 17.707031 16.609375 18.929688 17.257813 18.929688 C 17.757813 18.929688 18.511719 18.136719 19.519531 16.546875 C 20.523438 14.953125 21.0625 13.746094 21.136719 12.914063 C 21.277344 11.542969 20.738281 10.855469 19.519531 10.855469 C 18.945313 10.855469 18.351563 10.984375 17.742188 11.246094 C 18.921875 7.378906 21.175781 5.496094 24.503906 5.605469 C 26.96875 5.675781 28.128906 7.277344 27.988281 10.410156 Z"/></Svg>);
};
export default SVGVimeoV;
