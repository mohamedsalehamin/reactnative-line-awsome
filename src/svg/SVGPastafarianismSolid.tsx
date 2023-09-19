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
const SVGPastafarianismSolid = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 11 4 C 9.346 4 8 5.346 8 7 C 8 8.3187364 8.8616949 9.4290222 10.046875 9.8300781 C 10.101731 10.518393 10.236262 11.496329 10.583984 12.419922 C 9.6720571 12.897795 8.8741492 13.468406 8.2597656 14.099609 C 8.1586617 14.19517 8.0692497 14.300713 7.9785156 14.40625 C 7.921508 14.473445 7.8493091 14.537233 7.796875 14.605469 L 7.8085938 14.613281 C 7.7298262 14.718281 7.6581738 14.826842 7.5898438 14.939453 C 7.0893402 14.810164 6.8243357 14.412343 6.3945312 13.552734 C 5.8855313 12.535734 5.118 11 3 11 L 3 13 C 3.81 13 4.0694687 13.375266 4.6054688 14.447266 C 5.0249559 15.285416 5.6336099 16.462611 7.015625 16.855469 C 7.0138298 16.904596 7 16.950441 7 17 C 7 17.961626 7.3545554 18.832864 7.921875 19.523438 C 7.6901112 20.371513 6.9206795 21 6 21 C 4.897 21 4 20.103 4 19 L 2 19 C 2 21.206 3.794 23 6 23 C 7.5831452 23 8.9418847 22.067584 9.5898438 20.730469 C 10.030207 20.897643 10.501653 21 11 21 C 11.17332 21 11.338296 20.970697 11.505859 20.949219 C 11.429226 21.246426 11.363954 21.544449 11.3125 21.808594 C 10.9655 23.591594 10.69 25 8 25 L 8 27 C 12.339 27 12.925391 23.990406 13.275391 22.191406 C 13.376223 21.673476 13.457022 21.367031 13.533203 21.134766 C 14.223515 21.677695 15.082908 22 16 22 C 16.916915 22 17.776392 21.677502 18.466797 21.134766 C 18.542978 21.367024 18.623777 21.673132 18.724609 22.191406 C 19.074609 23.990406 19.661 27 24 27 L 24 25 C 21.31 25 21.0355 23.591594 20.6875 21.808594 C 20.63593 21.543856 20.569072 21.245162 20.492188 20.947266 C 20.66043 20.968922 20.82595 21 21 21 C 21.498347 21 21.969793 20.897643 22.410156 20.730469 C 23.058115 22.067584 24.416855 23 26 23 C 28.206 23 30 21.206 30 19 L 28 19 C 28 20.103 27.103 21 26 21 C 25.07932 21 24.309889 20.371513 24.078125 19.523438 C 24.645445 18.832864 25 17.961626 25 17 C 25 16.950441 24.98617 16.904596 24.984375 16.855469 C 26.36639 16.462611 26.975044 15.285416 27.394531 14.447266 C 27.930531 13.375266 28.19 13 29 13 L 29 11 C 26.882 11 26.114469 12.535734 25.605469 13.552734 C 25.175664 14.412343 24.91066 14.810164 24.410156 14.939453 C 24.341826 14.826842 24.270174 14.718281 24.191406 14.613281 L 24.203125 14.605469 C 24.150691 14.537233 24.078492 14.473445 24.021484 14.40625 C 23.93075 14.300713 23.841338 14.19517 23.740234 14.099609 C 23.125851 13.468406 22.327943 12.897795 21.416016 12.419922 C 21.763738 11.496329 21.898269 10.518393 21.953125 9.8300781 C 23.138305 9.4290222 24 8.3187364 24 7 C 24 5.346 22.654 4 21 4 C 19.346 4 18 5.346 18 7 C 18 8.2827656 18.814234 9.3707852 19.949219 9.7988281 C 19.895302 10.354275 19.790445 11.041189 19.583984 11.630859 C 18.404474 11.233514 17.162357 11 16 11 C 14.837862 11 13.595328 11.231699 12.416016 11.628906 C 12.211454 11.040989 12.105325 10.353756 12.050781 9.7988281 C 13.185766 9.3707852 14 8.2827656 14 7 C 14 5.346 12.654 4 11 4 z M 11 6 C 11.552 6 12 6.448 12 7 C 12 7.552 11.552 8 11 8 C 10.448 8 10 7.552 10 7 C 10 6.448 10.448 6 11 6 z M 21 6 C 21.552 6 22 6.448 22 7 C 22 7.552 21.552 8 21 8 C 20.448 8 20 7.552 20 7 C 20 6.448 20.448 6 21 6 z M 16 13 C 16.975018 13 18.027356 13.205928 19.021484 13.544922 C 17.820493 14.235836 17 15.517496 17 17 C 17 17.788294 17.235759 18.518657 17.630859 19.138672 C 17.262157 19.664168 16.662618 20 16 20 C 15.337382 20 14.737362 19.664168 14.369141 19.138672 C 14.764241 18.518657 15 17.788294 15 17 C 15 15.517496 14.179507 14.235836 12.978516 13.544922 C 13.972644 13.205928 15.024982 13 16 13 z M 11 15 C 12.103 15 13 15.897 13 17 C 13 18.103 12.103 19 11 19 C 9.897 19 9 18.103 9 17 C 9 16.527617 9.1705436 16.098396 9.4453125 15.755859 C 9.5092845 15.676529 9.5893186 15.601036 9.6621094 15.523438 C 10.017234 15.201391 10.483844 15 11 15 z M 21 15 C 21.516156 15 21.982766 15.201391 22.337891 15.523438 C 22.410681 15.601036 22.490716 15.676529 22.554688 15.755859 C 22.829456 16.098396 23 16.527617 23 17 C 23 18.103 22.103 19 21 19 C 19.897 19 19 18.103 19 17 C 19 15.897 19.897 15 21 15 z"/></Svg>);
};
export default SVGPastafarianismSolid;
