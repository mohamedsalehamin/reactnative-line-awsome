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
const SVGFontAwesome = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 12.5 9 A 1.5 1.5 0 0 0 11.001953 10.5 C 11.001953 10.5 11 10.5 11 10.5 L 11 22 C 11 22.552 11.448 23 12 23 C 12.552 23 13 22.552 13 22 L 13 17.744141 C 13.781734 17.455705 14.645201 17.234375 15.478516 17.234375 C 17.057516 17.234375 17.669375 18.050781 18.984375 18.050781 C 19.923375 18.050781 20.798234 17.732859 21.615234 17.380859 C 21.820234 17.292859 21.996094 17.205 21.996094 17 L 22.001953 17 L 22.001953 11.380859 C 22.001953 11.175859 21.795547 11 21.560547 11 C 21.266547 11 20.039687 11.787109 18.929688 11.787109 C 18.699688 11.787109 18.494062 11.757922 18.289062 11.669922 C 17.296062 11.292922 16.420547 11 15.310547 11 C 14.820777 11 14.31913 11.077205 13.828125 11.195312 A 1.5 1.5 0 0 0 12.5 9 z"/></Svg>);
};
export default SVGFontAwesome;
