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
const SVGSwatchbookSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 23 C 5 25.206 6.794 27 9 27 C 11.206 27 13 25.206 13 23 L 13 5 L 5 5 z M 7 7 L 11 7 L 11 11 L 7 11 L 7 7 z M 18.900391 7.4433594 L 14.501953 11.84375 L 14.501953 14.669922 L 18.898438 10.271484 L 21.728516 13.099609 L 14.5 20.328125 L 14.5 23 C 14.5 23.056 14.493188 23.108062 14.492188 23.164062 L 24.556641 13.101562 L 18.900391 7.4433594 z M 7 13 L 11 13 L 11 17 L 7 17 L 7 13 z M 7 19 L 11 19 L 11 23 C 11 24.103 10.103 25 9 25 C 7.897 25 7 24.103 7 23 L 7 19 z M 20.777344 19 L 18.777344 21 L 25 21 L 25 25 L 14.777344 25 L 12.888672 26.888672 C 12.846672 26.930672 12.796906 26.96 12.753906 27 L 27 27 L 27 19 L 20.777344 19 z"/></Svg>);
};
export default SVGSwatchbookSolid;
