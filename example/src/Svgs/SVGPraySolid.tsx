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
const SVGPraySolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 17.5 4 C 15.57 4 14 5.57 14 7.5 C 14 9.43 15.57 11 17.5 11 C 19.43 11 21 9.43 21 7.5 C 21 5.57 19.43 4 17.5 4 z M 17.5 6 C 18.327 6 19 6.673 19 7.5 C 19 8.327 18.327 9 17.5 9 C 16.673 9 16 8.327 16 7.5 C 16 6.673 16.673 6 17.5 6 z M 13.15625 12 C 12.05325 12 11.060953 12.654922 10.626953 13.669922 L 8.6601562 18.255859 C 8.1411562 19.467859 8.4643906 20.858672 9.5253906 21.763672 L 13.943359 25 L 7 25 L 7 27 L 15.484375 27 C 16.133375 27 16.706203 26.587703 16.908203 25.970703 C 17.110203 25.353703 16.892141 24.681828 16.369141 24.298828 L 10.767578 20.197266 C 10.433578 19.911266 10.325047 19.448922 10.498047 19.044922 L 12.464844 14.457031 C 12.667844 13.983031 13.368844 13.866141 13.714844 14.244141 L 16.148438 18.232422 L 16.220703 18.335938 C 16.535703 18.728937 17.005813 18.971047 17.507812 18.998047 C 18.018813 19.024047 18.502422 18.836469 18.857422 18.480469 L 22.779297 13.628906 L 21.222656 12.371094 L 17.630859 16.822266 L 15.380859 13.136719 L 15.308594 13.033203 C 14.782594 12.376203 13.99725 12 13.15625 12 z"/></Svg>);
};
export default SVGPraySolid;
