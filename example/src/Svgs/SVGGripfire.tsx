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
const SVGGripfire = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.685547 1 C 15.706547 1.2 15.716797 1.3996094 15.716797 1.5996094 C 15.716797 7.1776094 7 10.921469 7 17.855469 C 7 20.866469 9.4856719 22.881438 11.513672 24.648438 C 15.375672 27.470437 16.142578 28.73425 16.142578 29.65625 C 16.142578 30.26725 16 30.678 16 31 C 16.768 29.989 16.857187 29.074266 16.867188 28.197266 C 16.867188 26.408266 15.609391 24.788078 14.275391 22.955078 C 13.326391 21.610078 11.769531 20.377859 11.769531 18.755859 C 11.769531 14.288859 18 11.344797 18 6.4667969 C 18 3.6217969 15.983547 1.144 15.685547 1 z M 19.375 9 L 19.615234 9.4335938 C 19.756234 9.7445938 19.820312 10.087844 19.820312 10.464844 C 19.820312 13.157844 16.337547 17.169953 16.185547 17.501953 C 16.054547 17.811953 16 18.145078 16 18.455078 C 16 19.674078 16.911219 21.003906 17.074219 21.003906 C 17.216219 21.003906 20.484031 17.656078 20.582031 15.705078 C 20.962031 16.414078 21.125 17.068656 21.125 17.722656 C 21.125 20.205656 18.605469 23.574219 18.605469 23.574219 C 18.605469 24.272219 20.527141 26.777344 20.744141 26.777344 C 20.809141 26.777344 20.885453 26.700766 20.939453 26.634766 C 23.229453 24.262766 25 21.502953 25 18.376953 C 25 17.899953 24.956141 17.400625 24.869141 16.890625 C 24.141141 12.867625 20.374 9.388 19.375 9 z"/></Svg>);
};
export default SVGGripfire;
