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
const SVGDizzySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 9.7070312 10.292969 L 8.2929688 11.707031 L 10.085938 13.5 L 8.2929688 15.292969 L 9.7070312 16.707031 L 11.5 14.914062 L 13.292969 16.707031 L 14.707031 15.292969 L 12.914062 13.5 L 14.707031 11.707031 L 13.292969 10.292969 L 11.5 12.085938 L 9.7070312 10.292969 z M 18.707031 10.292969 L 17.292969 11.707031 L 19.085938 13.5 L 17.292969 15.292969 L 18.707031 16.707031 L 20.5 14.914062 L 22.292969 16.707031 L 23.707031 15.292969 L 21.914062 13.5 L 23.707031 11.707031 L 22.292969 10.292969 L 20.5 12.085938 L 18.707031 10.292969 z M 16 18 C 13.794 18 12 19.525391 12 21.400391 C 12 23.125391 13.346 24 16 24 C 18.654 24 20 23.125391 20 21.400391 C 20 19.525391 18.206 18 16 18 z M 16 20 C 17.084 20 18 20.641391 18 21.400391 C 18 21.564391 18 22 16 22 C 14 22 14 21.564391 14 21.400391 C 14 20.641391 14.916 20 16 20 z"/></Svg>);
};
export default SVGDizzySolid;
