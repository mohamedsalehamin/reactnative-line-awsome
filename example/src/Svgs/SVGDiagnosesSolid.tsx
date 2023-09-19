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
const SVGDiagnosesSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 16 5 C 13.8 5 12 6.8 12 9 C 12 11.2 13.8 13 16 13 C 18.2 13 20 11.2 20 9 C 20 6.8 18.2 5 16 5 z M 16 13 L 14.619141 13 C 12.819141 13 11.169063 13.979531 10.289062 15.519531 C 10.999063 15.599531 11.619531 15.979297 12.019531 16.529297 C 12.539531 15.589297 13.529141 15 14.619141 15 L 17.380859 15 C 17.820859 15 18.229375 15.089766 18.609375 15.259766 C 18.819375 14.569766 19.320937 14.020469 19.960938 13.730469 C 19.200937 13.260469 18.310859 13 17.380859 13 L 16 13 z M 16 7 C 17.12 7 18 7.88 18 9 C 18 10.12 17.12 11 16 11 C 14.88 11 14 10.12 14 9 C 14 7.88 14.88 7 16 7 z M 21 15 A 1 1 0 0 0 21 17 A 1 1 0 0 0 21 15 z M 10 17 A 1 1 0 0 0 10 19 A 1 1 0 0 0 10 17 z M 22.730469 17.810547 C 22.280469 18.240547 21.67 18.5 21 18.5 C 20.95 18.5 20.889844 18.500234 20.839844 18.490234 L 22.089844 21.410156 L 22.279297 21.880859 L 22.810547 21.970703 L 27.810547 22.970703 L 28.189453 21.029297 L 23.720703 20.119141 L 22.730469 17.810547 z M 15 18 A 1 1 0 0 0 15 20 A 1 1 0 0 0 15 18 z M 8.3691406 19.900391 L 8.2792969 20.119141 L 3.8105469 21.029297 L 4.1894531 22.970703 L 9.1894531 21.970703 L 9.7207031 21.880859 L 9.9101562 21.410156 L 10.310547 20.480469 C 10.210547 20.490469 10.1 20.5 10 20.5 C 9.38 20.5 8.7991406 20.270391 8.3691406 19.900391 z M 18 21 A 1 1 0 0 0 18 23 A 1 1 0 0 0 18 21 z M 2 25 L 2 27 L 30 27 L 30 25 L 2 25 z"/></Svg>);
};
export default SVGDiagnosesSolid;
