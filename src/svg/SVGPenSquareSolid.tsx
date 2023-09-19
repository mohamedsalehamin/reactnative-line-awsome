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
const SVGPenSquareSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.126953 8.8769531 C 19.356953 8.8769531 18.583953 9.1699531 18.001953 9.7519531 L 9.7363281 18.017578 L 9.7050781 18.330078 L 9.2363281 21.644531 L 9.0175781 22.988281 L 10.361328 22.769531 L 13.673828 22.300781 L 13.986328 22.269531 L 22.253906 14.003906 C 23.413906 12.843906 23.413906 10.913906 22.253906 9.7539062 C 21.670906 9.1709063 20.896953 8.8769531 20.126953 8.8769531 z M 20.126953 10.876953 C 20.380953 10.876953 20.646703 10.959203 20.845703 11.158203 C 21.232703 11.545203 21.243953 12.135203 20.876953 12.533203 L 20.845703 12.564453 L 13.048828 20.392578 L 11.392578 20.611328 L 11.611328 18.955078 L 19.439453 11.158203 C 19.638453 10.959203 19.873953 10.876953 20.126953 10.876953 z"/></Svg>);
};
export default SVGPenSquareSolid;
