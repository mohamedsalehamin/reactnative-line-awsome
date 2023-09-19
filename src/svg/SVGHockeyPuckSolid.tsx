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
const SVGHockeyPuckSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 7 C 9.043 7 2 8.718 2 12 L 2 20 C 2 23.282 9.043 25 16 25 C 22.957 25 30 23.282 30 20 L 30 12 C 30 8.718 22.957 7 16 7 z M 16 9 C 23.444 9 28 10.942 28 12 C 28 12.92575 24.511289 14.527887 18.652344 14.914062 C 17.815352 14.96923 16.9305 15 16 15 C 8.556 15 4 13.058 4 12 C 4 10.942 8.556 9 16 9 z M 4 14.707031 C 4.0593107 14.741734 4.1337927 14.770781 4.1953125 14.804688 C 4.4193595 14.928263 4.6562304 15.046852 4.9082031 15.160156 C 5.0073799 15.204624 5.105776 15.248186 5.2089844 15.291016 C 5.554602 15.435032 5.9154537 15.573195 6.3027344 15.699219 C 7.1156522 15.963747 8.0276437 16.178887 8.984375 16.363281 C 9.2726291 16.417868 9.5709314 16.462519 9.8691406 16.509766 C 10.719255 16.647321 11.594568 16.756644 12.501953 16.833984 C 13.651431 16.931959 14.820743 17 16 17 C 17.179257 17 18.348569 16.931959 19.498047 16.833984 C 20.405432 16.756644 21.280745 16.647321 22.130859 16.509766 C 22.429069 16.462519 22.727371 16.417868 23.015625 16.363281 C 23.972356 16.178887 24.884348 15.963747 25.697266 15.699219 C 26.084546 15.573195 26.445398 15.435032 26.791016 15.291016 C 26.894224 15.248186 26.99262 15.204624 27.091797 15.160156 C 27.34377 15.046852 27.580641 14.928263 27.804688 14.804688 C 27.866207 14.770781 27.940689 14.741734 28 14.707031 L 28 20 C 28 21.058 23.444 23 16 23 C 8.556 23 4 21.058 4 20 L 4 14.707031 z"/></Svg>);
};
export default SVGHockeyPuckSolid;