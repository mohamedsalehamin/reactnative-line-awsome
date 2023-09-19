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
const SVGPersonBoothSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 7.5 4 C 5.578 4 4 5.578 4 7.5 C 4 9.422 5.578 11 7.5 11 C 9.422 11 11 9.422 11 7.5 C 11 5.578 9.422 4 7.5 4 z M 12 4 L 12 11.84375 C 12.232 12.12875 12.443281 12.432484 12.613281 12.771484 L 13.568359 14.683594 L 14 15.005859 L 14 6 L 15.132812 6 L 16.982422 18.947266 L 16.029297 22.757812 L 16 23.5 C 16 24.879 17.121 26 18.5 26 C 19.141 26 19.719109 25.750516 20.162109 25.353516 C 20.672109 25.751516 21.304 26 22 26 C 22.771 26 23.468 25.699703 24 25.220703 C 24.532 25.700703 25.229 26 26 26 C 26.352 26 26.686 25.928406 27 25.816406 L 27 28 L 29 28 L 29 4 L 28 4 L 27 4 L 14 4 L 13 4 L 12 4 z M 7.5 6 C 8.34 6 9 6.66 9 7.5 C 9 8.34 8.34 9 7.5 9 C 6.66 9 6 8.34 6 7.5 C 6 6.66 6.66 6 7.5 6 z M 17.152344 6 L 27 6 L 27 23 C 27 23.552 26.552 24 26 24 C 25.448 24 25 23.552 25 23 L 23 23 C 23 23.552 22.552 24 22 24 C 21.448 24 21 23.552 21 23 L 19 23 L 19 23.5 C 19 23.771 18.771 24 18.5 24 C 18.229 24 18 23.771 18 23.5 L 18 23.123047 L 19.017578 19.052734 L 17.152344 6 z M 7 12 C 4.793 12 3 13.793 3 16 L 3 21.25 L 5 22.25 L 5 28 L 7 28 L 7 21 L 5 20 L 5 16 C 5 14.898 5.898 14 7 14 L 8.15625 14 C 8.91825 14 9.5975 14.40975 9.9375 15.09375 L 11.21875 17.65625 L 13.867188 19.628906 L 15 18 L 12.78125 16.34375 L 11.71875 14.21875 C 11.03475 12.85475 9.68025 12 8.15625 12 L 7 12 z M 12 20.484375 L 12 28 L 14 28 L 14 21.972656 L 13.271484 21.429688 L 12 20.484375 z M 8 21 L 8 28 L 10 28 L 10 21 L 8 21 z"/></Svg>);
};
export default SVGPersonBoothSolid;
