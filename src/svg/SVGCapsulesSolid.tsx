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
const SVGCapsulesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 8.5 5 C 5.467 5 3 7.468 3 10.5 L 3 21.5 C 3 24.532 5.467 27 8.5 27 C 11.533 27 14 24.532 14 21.5 L 14 16.404297 L 20.054688 24.736328 C 21.129687 26.216328 22.808719 27.003906 24.511719 27.003906 C 25.632719 27.003906 26.763281 26.662078 27.738281 25.955078 L 27.738281 25.953125 C 30.191281 24.170125 30.735125 20.724484 28.953125 18.271484 L 22.488281 9.3710938 C 20.703281 6.9170937 17.260641 6.37225 14.806641 8.15625 C 14.426847 8.4323091 14.099303 8.751721 13.8125 9.0976562 C 13.190056 6.7436087 11.047517 5 8.5 5 z M 8.5 7 C 10.43 7 12 8.57 12 10.5 L 12 15 L 5 15 L 5 10.5 C 5 8.57 6.57 7 8.5 7 z M 18.035156 9.1054688 C 19.118156 9.1054688 20.186094 9.605875 20.871094 10.546875 L 23.515625 14.185547 L 17.853516 18.302734 L 15.207031 14.662109 C 14.072031 13.100109 14.421422 10.908437 15.982422 9.7734375 C 16.602422 9.3234375 17.322156 9.1054688 18.035156 9.1054688 z M 24.691406 15.802734 L 27.337891 19.445312 C 28.471891 21.007313 28.1235 23.200937 26.5625 24.335938 C 25.0015 25.470937 22.807828 25.122547 21.673828 23.560547 L 19.029297 19.919922 L 24.691406 15.802734 z M 5 17 L 12 17 L 12 21.5 C 12 23.43 10.43 25 8.5 25 C 6.57 25 5 23.43 5 21.5 L 5 17 z"/></Svg>);
};
export default SVGCapsulesSolid;
