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
const SVGItunesNote = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 23.068359 5.0058594 C 22.890359 5.0058594 21.625813 5.2552656 11.257812 7.1972656 C 11.176812 7.1972656 10.789172 7.2985625 10.576172 7.4765625 C 10.367172 7.6445625 10.255844 7.8688125 10.214844 8.1328125 C 10.041844 8.8238125 10.593078 21.281234 10.080078 21.865234 C 9.8560781 22.114234 9.46125 22.186187 9.15625 22.242188 C 7.33225 22.562188 6.1179062 22.729734 5.2539062 23.552734 C 3.7649063 25.005734 4.5364219 27.541125 6.7324219 27.953125 C 7.5554219 28.105125 9.1010781 27.898781 9.9550781 27.425781 C 10.707078 27.038781 11.277234 26.342969 11.490234 25.417969 C 11.673234 24.624969 11.617188 25.173141 11.617188 13.244141 C 11.617188 12.659141 11.780828 12.506531 12.298828 12.394531 C 12.298828 12.394531 21.319328 10.707719 21.736328 10.636719 C 22.320328 10.534719 22.599609 10.692719 22.599609 11.261719 C 22.599609 19.348719 22.701953 19.190641 22.376953 19.556641 C 22.152953 19.805641 21.887031 19.875641 21.582031 19.931641 C 19.757031 20.251641 18.655016 20.307859 17.791016 21.130859 C 16.698016 22.197859 16.712734 23.890109 17.927734 24.912109 C 18.832734 25.602109 19.84875 25.771969 21.09375 25.542969 C 22.51175 25.277969 23.569531 24.494563 23.894531 23.101562 C 24.041531 22.466562 23.994281 23.406391 23.988281 5.9003906 C 23.988281 5.3103906 23.652359 4.9648594 23.068359 5.0058594 z"/></Svg>);
};
export default SVGItunesNote;
