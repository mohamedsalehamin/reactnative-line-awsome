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
const SVGThermometerThreeQuartersSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M12,4v11.5c-1.8,1.3-3,3.2-3,5.5c0,3.9,3.1,7,7,7s7-3.1,7-7c0-2.3-1.3-4.3-3-5.5V14h2v-2h-2v-2h2V8h-2V6h2V4H12z M14,6h4 v10.4l0.5,0.3C20,17.6,21,19.1,21,21c0,2.8-2.2,5-5,5s-5-2.2-5-5c0-1.9,1-3.4,2.5-4.3l0.5-0.3V6z M15,10v8.2c-1.2,0.4-2,1.5-2,2.8 c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.3-0.8-2.4-2-2.8V10H15z"/></Svg>);
};
export default SVGThermometerThreeQuartersSolid;
