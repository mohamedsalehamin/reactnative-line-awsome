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
const SVGPinterestSquare = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 13.513672 25 C 13.765525 24.49367 13.992121 23.971433 14.115234 23.496094 C 14.249234 22.982094 15 20.740234 15 20.740234 C 15.357 21.423234 16.402672 22 17.513672 22 C 20.821672 22 23 19.107078 23 15.330078 C 23 11.710078 20.044234 9 16.240234 9 C 11.508234 9 9 12.174766 9 15.634766 C 9 17.241766 9.8566563 19.241859 11.222656 19.880859 C 11.432656 19.978859 11.540844 19.933422 11.589844 19.732422 C 11.625844 19.580422 11.811578 18.836188 11.892578 18.492188 C 11.919578 18.380188 11.905406 18.287688 11.816406 18.179688 C 11.365406 17.629687 11 16.621688 11 15.679688 C 11 13.259688 12.830172 10.919922 15.951172 10.919922 C 18.643172 10.919922 20.53125 12.755859 20.53125 15.380859 C 20.53125 18.344859 19.236156 20.251953 17.285156 20.251953 C 16.209156 20.251953 15.204984 19.510016 15.458984 18.416016 C 15.766984 17.112016 16.365234 15.705672 16.365234 14.763672 C 16.365234 12.397672 12.998047 12.724859 12.998047 15.880859 C 12.998047 16.849859 13.320313 17.509766 13.320312 17.509766 C 12.257514 22.24839 11.955636 23.282208 12.048828 25 L 7 25 L 7 7 z"/></Svg>);
};
export default SVGPinterestSquare;