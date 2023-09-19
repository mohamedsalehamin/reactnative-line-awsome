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
const SVGCommentDollarSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 3 6 L 3 26 L 12.585938 26 L 16 29.414062 L 19.414062 26 L 29 26 L 29 6 L 3 6 z M 5 8 L 27 8 L 27 24 L 18.585938 24 L 16 26.585938 L 13.414062 24 L 5 24 L 5 8 z M 15 10 L 15 11.1875 C 13.844 11.6055 13 12.708953 13 14.001953 C 13 15.646953 14.355 17.001953 16 17.001953 C 16.566 17.001953 17 17.435953 17 18.001953 C 17 18.567953 16.566 19.001953 16 19.001953 C 15.434 19.001953 15 18.567953 15 18.001953 L 13 18.001953 C 13 19.294953 13.844 20.396453 15 20.814453 L 15 22 L 17 22 L 17 20.8125 C 18.156 20.3945 19 19.291047 19 17.998047 C 19 16.353047 17.645 14.998047 16 14.998047 C 15.434 14.998047 15 14.564047 15 13.998047 C 15 13.432047 15.434 12.998047 16 12.998047 C 16.566 12.998047 17 13.432047 17 13.998047 L 19 13.998047 C 19 12.705047 18.156 11.603547 17 11.185547 L 17 10 L 15 10 z"/></Svg>);
};
export default SVGCommentDollarSolid;
