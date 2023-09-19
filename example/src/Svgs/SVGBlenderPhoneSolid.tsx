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
const SVGBlenderPhoneSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.578125 5 C 6.2480781 5.0113906 5.9349687 5.1815156 5.7617188 5.4785156 C 4.6437187 7.3915156 4 9.622 4 12 C 4 14.378 4.6437656 16.607484 5.7597656 18.521484 C 5.9907656 18.916484 6.47025 19.087031 6.90625 18.957031 L 8.8496094 18.376953 C 8.9856094 18.238953 9.0336562 18.035563 8.9726562 17.851562 L 8.1738281 15.427734 C 8.1048281 15.217734 7.9094062 15.076172 7.6914062 15.076172 L 6.8652344 15.076172 C 6.6352344 15.076172 6.4281406 14.922266 6.3691406 14.697266 C 6.1451406 13.835266 6.0292969 12.929 6.0292969 12 C 6.0292969 11.071 6.1451406 10.164734 6.3691406 9.3027344 C 6.4271406 9.0777344 6.6352344 8.9238281 6.8652344 8.9238281 L 7.6933594 8.9238281 C 7.9113594 8.9238281 8.1057813 8.7832187 8.1757812 8.5742188 L 8.9746094 6.1484375 C 9.0346094 5.9634375 8.9875625 5.7600469 8.8515625 5.6230469 L 6.9082031 5.0429688 C 6.7992031 5.0102187 6.6881406 4.9962031 6.578125 5 z M 9.9960938 5 L 11.876953 21.011719 C 10.281033 21.077888 9 22.388132 9 24 L 9 27 L 26 27 L 26 24 C 26 22.432317 24.786487 21.155867 23.251953 21.025391 L 26.957031 5 L 9.9960938 5 z M 12.246094 7 L 24.441406 7 L 23.978516 9 L 19 9 L 19 11 L 23.517578 11 L 23.054688 13 L 19 13 L 19 15 L 22.591797 15 L 22.128906 17 L 19 17 L 19 19 L 21.667969 19 L 21.205078 21 L 13.890625 21 L 12.246094 7 z M 12 23 L 12.109375 23 L 22.794922 23 L 23 23 C 23.551 23 24 23.449 24 24 L 24 25 L 11 25 L 11 24 C 11 23.449 11.449 23 12 23 z"/></Svg>);
};
export default SVGBlenderPhoneSolid;