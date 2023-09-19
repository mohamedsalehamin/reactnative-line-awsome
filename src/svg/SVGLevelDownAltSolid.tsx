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
const SVGLevelDownAltSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 4.5 4.5 L 4.5 5 L 4.5 7.5 L 19.5 7.5 L 19.5 22.855469 L 15.71875 19.074219 L 13.574219 21.21875 L 19.931641 27.576172 L 21 28.597656 L 22.068359 27.576172 L 28.425781 21.21875 L 26.28125 19.074219 L 22.5 22.855469 L 22.5 6 L 22.5 4.5 L 21 4.5 L 4.5 4.5 z M 5.5 5.5 L 21 5.5 L 21.5 5.5 L 21.5 6 L 21.5 25.269531 L 26.28125 20.488281 L 27.011719 21.21875 L 21.369141 26.861328 L 21 27.214844 L 20.630859 26.861328 L 14.988281 21.21875 L 15.71875 20.488281 L 20.5 25.269531 L 20.5 6.5 L 5.5 6.5 L 5.5 5.5 z"/></Svg>);
};
export default SVGLevelDownAltSolid;
