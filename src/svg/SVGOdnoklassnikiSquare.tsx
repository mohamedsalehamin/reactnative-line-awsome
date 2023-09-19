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
const SVGOdnoklassnikiSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 16 9 C 14.07 9 12.5 10.57 12.5 12.5 C 12.5 14.43 14.07 16 16 16 C 17.93 16 19.5 14.43 19.5 12.5 C 19.5 10.57 17.93 9 16 9 z M 16 11 C 16.827 11 17.5 11.673 17.5 12.5 C 17.5 13.327 16.827 14 16 14 C 15.173 14 14.5 13.327 14.5 12.5 C 14.5 11.673 15.173 11 16 11 z M 12.859375 16.009766 C 12.606 16.045641 12.366672 16.177937 12.201172 16.398438 C 11.869172 16.839437 11.957437 17.466828 12.398438 17.798828 C 13.098344 18.32577 13.894166 18.671369 14.734375 18.851562 L 12.292969 21.292969 C 11.901969 21.683969 11.901969 22.316031 12.292969 22.707031 C 12.683969 23.098031 13.316031 23.098031 13.707031 22.707031 L 16 20.414062 L 18.292969 22.707031 C 18.487969 22.902031 18.744 23 19 23 C 19.256 23 19.512031 22.902031 19.707031 22.707031 C 20.098031 22.316031 20.098031 21.683969 19.707031 21.292969 L 17.265625 18.851562 C 18.105029 18.671462 18.899238 18.326228 19.599609 17.800781 C 20.040609 17.468781 20.129828 16.841391 19.798828 16.400391 C 19.467828 15.957391 18.842437 15.869172 18.398438 16.201172 C 17.005438 17.248172 14.990609 17.246172 13.599609 16.201172 C 13.379609 16.035172 13.11275 15.973891 12.859375 16.009766 z"/></Svg>);
};
export default SVGOdnoklassnikiSquare;
