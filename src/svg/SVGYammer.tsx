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
const SVGYammer = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.3613281 6.0410156 C 6.2066406 6.0316406 6.0503906 6.0496094 5.9003906 6.0996094 C 5.2003906 6.2996094 4.9 6.9996094 5 7.5996094 L 10.199219 20.599609 C 9.4992188 22.699609 8.7992188 23.699219 7.1992188 23.699219 L 6.5 23.699219 C 6 23.699219 5.5003906 24.000391 5.4003906 24.400391 C 5.3003906 25.000391 5.5992188 25.600781 6.1992188 25.800781 C 6.5992187 25.900781 7.0003906 25.900391 7.4003906 25.900391 C 10.400391 25.900391 11.300781 24.300781 12.300781 21.800781 L 18 7.5996094 C 18.1 6.9996094 17.800781 6.3992188 17.300781 6.1992188 C 16.700781 5.9992188 15.899219 6.3003906 15.699219 6.9003906 L 11.699219 17.5 L 11.599609 17.5 L 7.5 6.8007812 C 7.275 6.3507812 6.8253906 6.0691406 6.3613281 6.0410156 z M 24.814453 8.0644531 C 24.706641 8.0628906 24.6 8.0746094 24.5 8.0996094 C 24.5 8.1996094 24.400391 8.1992188 24.400391 8.1992188 C 23.700391 8.5992188 18.499609 12.199609 19.099609 12.599609 C 19.699609 12.999609 23.199609 11.399609 25.599609 10.099609 C 26.099609 9.6996094 26.199219 8.9 25.699219 8.5 C 25.474219 8.2 25.137891 8.0691406 24.814453 8.0644531 z M 27.900391 14.900391 C 27.000391 14.900391 20.7 15.599219 21 16.199219 C 21.3 16.799219 25.2 17.099609 28 17.099609 C 28.7 16.999609 29.1 16.400781 29 15.800781 C 28.9 15.300781 28.499609 15.000391 28.099609 14.900391 L 27.900391 14.900391 z M 19.552734 19.439453 C 19.394922 19.431445 19.274219 19.45 19.199219 19.5 C 18.599219 19.9 23.7 23.500391 24.5 23.900391 C 24.5 24.000391 24.599609 24 24.599609 24 C 25.199609 24.2 25.8 23.799219 26 23.199219 C 26.1 22.699219 25.899219 22.2 25.699219 22 C 23.599219 20.8625 20.657422 19.495508 19.552734 19.439453 z"/></Svg>);
};
export default SVGYammer;
