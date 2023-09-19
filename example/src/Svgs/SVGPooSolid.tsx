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
const SVGPooSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17 6 C 14.162 6 11 8.6132812 11 12.363281 L 11 13 L 10 13 C 7.794 13 6 14.794 6 17 C 6 17.408 6.0645 17.811312 6.1875 18.195312 C 4.3455 18.758312 3 20.475 3 22.5 C 3 24.981 5.019 27 7.5 27 L 24.5 27 C 26.981 27 29 24.981 29 22.5 C 29 20.475 27.6555 18.757359 25.8125 18.193359 C 25.9365 17.809359 26 17.406047 26 16.998047 C 26 14.792047 24.206 12.998047 22 12.998047 L 20.931641 12.998047 C 20.674641 11.225047 19.738391 10.531906 19.025391 10.003906 C 18.278391 9.4499062 17.785141 9.0824688 17.994141 7.1054688 L 18.111328 6 L 17 6 z M 15.953125 8.1875 C 16.026125 10.0915 16.852937 10.880375 17.835938 11.609375 C 18.536938 12.130375 19 12.474 19 14 L 19 15 L 22 15 C 23.103 15 24 15.897 24 17 C 24 17.483 23.813562 17.954125 23.476562 18.328125 L 21.964844 20 L 24.5 20 C 25.879 20 27 21.121 27 22.5 C 27 23.879 25.879 25 24.5 25 L 7.5 25 C 6.121 25 5 23.879 5 22.5 C 5 21.121 6.121 20 7.5 20 L 10.035156 20 L 8.5234375 18.328125 C 8.1864375 17.954125 8 17.483 8 17 C 8 15.897 8.897 15 10 15 L 13 15 L 13 12.363281 C 13 10.362281 14.426125 8.7275 15.953125 8.1875 z M 12 17 A 1 1 0 0 0 12 19 A 1 1 0 0 0 12 17 z M 20 17 A 1 1 0 0 0 20 19 A 1 1 0 0 0 20 17 z M 14 20 C 14 21.105 14.895 22 16 22 C 17.105 22 18 21.105 18 20 L 14 20 z"/></Svg>);
};
export default SVGPooSolid;
