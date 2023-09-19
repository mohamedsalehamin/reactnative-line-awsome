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
const SVGGooglePlusSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 13.59375 11 C 11.05575 11 9 13.055984 9 15.583984 C 9 18.121984 11.05575 20.177734 13.59375 20.177734 C 16.23775 20.177734 18 18.321219 18 15.699219 C 18 15.406219 17.969016 15.231 17.916016 15 L 13.59375 15 L 13.59375 16.517578 L 16.195312 16.517578 C 16.091312 17.188578 15.40875 18.490234 13.59375 18.490234 C 12.03075 18.490234 10.751953 17.200703 10.751953 15.595703 C 10.751953 13.990703 12.03075 12.689453 13.59375 12.689453 C 14.48475 12.689453 15.083922 13.077344 15.419922 13.402344 L 16.667969 12.205078 C 15.860969 11.450078 14.83175 11 13.59375 11 z M 20.330078 14 L 20.330078 15.330078 L 19 15.330078 L 19 16.669922 L 20.330078 16.669922 L 20.330078 18 L 21.669922 18 L 21.669922 16.669922 L 23 16.669922 L 23 15.330078 L 21.669922 15.330078 L 21.669922 14 L 20.330078 14 z"/></Svg>);
};
export default SVGGooglePlusSquare;
