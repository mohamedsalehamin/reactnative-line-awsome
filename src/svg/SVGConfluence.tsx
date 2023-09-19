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
const SVGConfluence = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 22.507812 5 C 22.271812 5 22.040344 5.1123125 21.902344 5.3203125 C 21.892344 5.3303125 21.883047 5.3510937 21.873047 5.3710938 C 20.424047 7.7940938 19.528094 8.8769531 17.996094 8.8769531 C 16.341094 8.8769531 13.942734 7.6111563 9.3027344 5.4101562 C 9.2017344 5.3601563 9.0942812 5.3378906 8.9882812 5.3378906 C 8.7192812 5.3378906 8.4590781 5.4929531 8.3300781 5.7519531 C 8.3300781 5.7519531 8.3303125 5.7614844 8.3203125 5.7714844 L 6.0664062 10.882812 C 5.8964063 11.243813 6.0667344 11.673984 6.4277344 11.833984 C 7.4197344 12.304984 9.3927812 13.237609 11.175781 14.099609 C 13.989781 15.459609 16.32625 16 18.28125 16 C 24.04425 16 26.471578 11.298063 27.892578 9.0390625 C 28.102578 8.6980625 27.992344 8.256875 27.652344 8.046875 L 22.914062 5.1210938 C 22.788062 5.0390937 22.646812 5 22.507812 5 z M 22.923828 7.4765625 L 25.515625 9.078125 C 23.836625 11.733125 21.92925 14 18.28125 14 C 16.47825 14 14.381875 13.427828 12.046875 12.298828 C 10.788875 11.690828 9.4344844 11.046687 8.3964844 10.554688 L 9.6210938 7.7792969 C 9.7920937 7.8612969 9.9590469 7.9415312 10.123047 8.0195312 C 13.977047 9.8615313 16.099141 10.876953 17.994141 10.876953 C 20.297141 10.876953 21.637828 9.4645625 22.923828 7.4765625 z M 13.710938 16 C 7.9469375 16 5.5224219 20.724844 4.1074219 22.964844 C 3.8974219 23.305844 4.0066563 23.75775 4.3476562 23.96875 L 9.0996094 26.890625 C 9.2196094 26.964625 9.3514219 27 9.4824219 27 C 9.7254219 27 9.9655625 26.878391 10.101562 26.650391 C 11.544562 24.221391 12.437469 23.136719 13.980469 23.136719 C 15.634469 23.136719 18.030406 24.401375 22.691406 26.609375 C 22.795406 26.660375 22.904719 26.685547 23.011719 26.685547 C 23.284719 26.685547 23.541063 26.529531 23.664062 26.269531 C 23.674063 26.269531 23.673828 26.258047 23.673828 26.248047 L 25.939453 21.128906 C 26.099453 20.767906 25.929359 20.336781 25.568359 20.175781 C 24.576359 19.703781 22.600172 18.770016 20.826172 17.916016 C 18.008172 16.545016 15.667938 16 13.710938 16 z M 13.710938 18 C 15.514938 18 17.615938 18.57775 19.960938 19.71875 C 21.214938 20.32175 22.567469 20.964031 23.605469 21.457031 L 22.373047 24.242188 C 22.184047 24.152188 22.000312 24.064516 21.820312 23.978516 C 17.982312 22.145516 15.868469 21.136719 13.980469 21.136719 C 11.674469 21.136719 10.3375 22.540531 9.0625 24.519531 L 6.4804688 22.933594 C 8.1614687 20.275594 10.064937 18 13.710938 18 z"/></Svg>);
};
export default SVGConfluence;