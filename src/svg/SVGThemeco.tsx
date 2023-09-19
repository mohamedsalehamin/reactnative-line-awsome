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
const SVGThemeco = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 15.839844 2.9980469 C 15.354469 3.0010469 14.869609 3.1144375 14.474609 3.3359375 L 5.390625 8.4414062 C 4.584625 8.8934062 4 9.8829219 4 10.794922 L 4 21.144531 C 4 22.050531 4.5818125 23.040094 5.3828125 23.496094 L 14.472656 28.660156 C 14.873656 28.888156 15.364422 29.001953 15.857422 29.001953 C 16.337422 29.001953 16.817937 28.893734 17.210938 28.677734 L 26.603516 23.494141 C 27.412516 23.041141 28 22.053531 28 21.144531 L 28 10.794922 C 28 9.8769219 27.408703 8.8883125 26.595703 8.4453125 L 17.207031 3.3183594 C 16.809531 3.1018594 16.325219 2.9950469 15.839844 2.9980469 z M 15.859375 5 C 16.009375 5 16.158 5.0232187 16.25 5.0742188 L 25.638672 10.203125 C 25.803672 10.293125 26 10.613922 26 10.794922 L 26 21.144531 C 26 21.310531 25.812812 21.644141 25.632812 21.744141 L 16.242188 26.925781 C 16.059187 27.026781 15.642938 27.025875 15.460938 26.921875 L 6.3710938 21.757812 C 6.1860938 21.653813 6 21.312531 6 21.144531 L 6 10.794922 C 6 10.610922 6.1991406 10.280547 6.3691406 10.185547 L 15.453125 5.0800781 C 15.547125 5.0260781 15.704375 5 15.859375 5 z M 21.179688 13.136719 C 17.473688 13.136719 17.335687 18.863281 21.179688 18.863281 C 24.941688 18.862281 24.937688 13.136719 21.179688 13.136719 z M 10.589844 13.238281 C 9.7268438 13.238281 8.863 13.246094 8 13.246094 L 8 18.738281 L 9.0351562 18.738281 L 9.0351562 17.121094 L 10.589844 17.121094 C 13.279844 17.121094 13.272844 13.238281 10.589844 13.238281 z M 13.310547 13.238281 L 13.310547 18.738281 L 14.347656 18.738281 L 14.347656 16.902344 L 15.34375 16.902344 L 16.943359 18.738281 L 18.175781 18.738281 L 18.175781 18.667969 L 16.511719 16.792969 C 18.514719 16.385969 18.395828 13.261094 15.923828 13.246094 C 15.052828 13.246094 14.181547 13.238281 13.310547 13.238281 z M 21.179688 14.078125 C 23.567687 14.078125 23.604688 17.914062 21.179688 17.914062 C 18.754687 17.914062 18.774687 14.078125 21.179688 14.078125 z M 9.0019531 14.123047 L 10.751953 14.123047 C 11.898953 14.123047 11.894953 16.226562 10.751953 16.226562 L 9.0019531 16.226562 L 9.0019531 14.123047 z M 14.347656 14.210938 L 15.923828 14.210938 C 17.187828 14.210938 17.182828 15.96875 15.923828 15.96875 L 14.347656 15.96875 L 14.347656 14.210938 z"/></Svg>);
};
export default SVGThemeco;
