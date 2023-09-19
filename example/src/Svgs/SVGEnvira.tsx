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
const SVGEnvira = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 C 7.614 13.976 7.3624844 18.181359 11.896484 21.693359 C 15.866512 24.718533 19.835971 23.92952 22.007812 23.607422 L 25.398438 27 L 27.398438 27 L 23.417969 23.019531 C 23.392969 20.612531 29.01 5 5 5 z M 8.0839844 7.0019531 C 8.2194063 7.0131094 8.5336094 7.1234375 9.1308594 7.3984375 C 13.129859 9.2474375 14.5385 11.989828 16.0625 14.798828 C 17.1585 16.820828 19.080547 19.900578 20.435547 20.892578 C 21.791547 21.875578 23.272437 22.602016 20.148438 21.291016 C 17.014437 19.980016 14.730797 16.259406 13.216797 13.441406 C 12.052797 11.279406 11.053859 9.288125 8.8808594 7.828125 C 8.8808594 7.828125 7.6777188 6.9684844 8.0839844 7.0019531 z"/></Svg>);
};
export default SVGEnvira;
