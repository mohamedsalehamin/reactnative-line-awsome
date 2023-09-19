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
const SVGDraft2Digital = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.769531 5.0507812 C 13.259531 5.0607812 11.000391 5.8398437 9.4003906 7.0898438 C 8.1303906 7.9398437 7.2507813 9.2800781 7.0507812 10.830078 L 7.0507812 10.849609 C 7.0207812 11.059609 7 11.28 7 11.5 C 7 13.43 8.57 15 10.5 15 C 12.43 15 14 13.43 14 11.5 C 14 10 13.050469 8.7304688 11.730469 8.2304688 C 11.990469 8.1804687 12.260781 8.140625 12.550781 8.140625 C 14.450781 8.140625 16 9.65 16 11.5 C 16 14.29 11.290312 18.689531 5.3203125 24.269531 L 3.4707031 26 L 23 26 L 23 29 L 30 25 L 23 21 L 23 24 L 17.150391 24 C 21.310391 19.6 24 16.429844 24 11.839844 C 24 7.9798438 20.490313 5.0707812 15.820312 5.0507812 L 15.789062 5.0507812 L 15.769531 5.0507812 z M 15.589844 7.0507812 L 15.789062 7.0507812 C 19.329062 7.0607812 22 9.1098438 22 11.839844 C 22 15.999844 19.239922 18.899219 14.669922 23.699219 L 14.390625 24 L 8.5292969 24 C 14.599297 18.27 18 14.68 18 11.5 C 18 9.65 17.039844 8.0207812 15.589844 7.0507812 z M 10.5 10 C 11.33 10 12 10.67 12 11.5 C 12 12.33 11.33 13 10.5 13 C 9.67 13 9 12.33 9 11.5 C 9 11.39 9.0192969 11.289453 9.0292969 11.189453 C 9.1792969 10.509453 9.78 10 10.5 10 z M 25 24.449219 L 25.970703 25 L 25 25.550781 L 25 24.449219 z"/></Svg>);
};
export default SVGDraft2Digital;
