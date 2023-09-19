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
const SVGPhoenixFramework = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 6.6914062 6 C 4.7821152 6.0138906 2.6172656 6.5645937 1.1035156 7.6679688 C 1.0665156 7.6969687 1.033 7.7239531 1 7.7519531 C 1.005 7.7609531 1.0057656 7.7663906 1.0097656 7.7753906 C 1.0477656 7.7753906 1.0830937 7.769625 1.1210938 7.765625 C 1.4160938 7.718625 1.7080469 7.7282969 1.9980469 7.7792969 C 3.1140469 7.9812969 4.2331875 8.8622344 4.6171875 11.365234 C 4.8651875 12.973234 4.5841875 13.747344 4.9921875 15.402344 C 5.8831875 19.016344 9.2594688 20.446625 10.980469 20.390625 C 11.158469 20.385625 12.048687 20.324109 12.179688 20.287109 C 12.066688 20.165109 10.136187 20.240891 8.9921875 17.962891 C 8.7901875 17.559891 8.6394063 17.136969 8.6914062 16.667969 C 8.8274062 15.472969 10.233906 15.261781 11.128906 15.800781 C 12.816906 16.812781 14.095984 20.081094 16.458984 20.371094 C 18.192984 20.582094 20.42525 19.573188 21.53125 18.242188 C 21.50325 18.237188 21.493375 18.234281 21.484375 18.238281 C 21.465375 18.243281 21.445641 18.246953 21.431641 18.251953 C 19.870641 18.818953 17.011188 18.707594 15.117188 17.558594 C 13.354188 16.489594 12.628453 14.805547 12.689453 14.060547 C 12.773453 13.062547 13.763047 12.974578 14.373047 13.142578 C 15.048047 13.325578 15.516313 13.966781 16.195312 14.425781 C 16.926313 14.912781 17.738563 15.067203 18.601562 14.908203 C 19.299563 14.781203 20.2135 14.331516 20.3125 14.228516 C 20.2605 14.223516 20.228312 14.224703 20.195312 14.220703 C 19.904312 14.192703 19.614125 14.183625 19.328125 14.140625 C 14.116125 13.367625 13.286188 6.4703906 7.4921875 6.0253906 C 7.2325625 6.0055156 6.9641621 5.9980156 6.6914062 6 z M 6.1855469 6.9746094 C 6.1335469 7.6636094 5.1432969 7.9729687 4.5292969 7.2929688 C 4.4862969 7.2459688 4.48675 7.2372187 4.46875 7.1992188 C 5.03575 7.0772188 5.6035469 7.0076094 6.1855469 6.9746094 z M 13.492188 8.703125 C 13.538187 8.755125 13.563797 8.7845 13.591797 8.8125 C 14.294797 9.5485 15.095 10.157094 16 10.621094 C 17.083 11.170094 18.218406 11.46575 19.441406 11.34375 C 19.858406 11.30575 20.260625 11.197766 20.640625 11.009766 C 20.668625 10.995766 20.696609 10.972125 20.724609 10.953125 C 20.696609 10.939125 20.673297 10.934453 20.654297 10.939453 C 20.452297 10.963453 20.256688 11.000531 20.054688 11.019531 C 19.445687 11.075531 18.869609 10.982625 18.349609 10.640625 C 17.505609 10.082625 16.919094 9.4726562 15.996094 9.0976562 C 14.885094 8.6476562 13.848187 8.703125 13.492188 8.703125 z M 15.240234 11.001953 C 15.188234 11.069953 15.269734 11.105484 15.302734 11.146484 C 17.482734 13.755484 21.24075 14.157406 23.59375 13.316406 C 25.36075 12.688406 26.529672 13.674922 26.763672 14.669922 C 26.767672 14.687922 26.776156 14.710516 26.785156 14.728516 C 26.794156 14.723516 26.805453 14.722656 26.814453 14.722656 C 26.814453 14.315656 26.738219 13.850781 26.574219 13.425781 C 26.297219 12.707781 25.825312 12.155328 25.070312 11.861328 C 23.889312 11.404328 22.722125 11.774766 21.953125 12.009766 C 20.767125 12.375766 19.636984 12.521094 18.208984 12.246094 C 17.176984 12.051094 16.230812 11.666547 15.382812 11.060547 C 15.339813 11.028547 15.245234 10.992953 15.240234 11.001953 z M 23.720703 15.443359 C 23.424812 15.430984 23.110188 15.447844 22.773438 15.496094 C 21.354438 15.702094 20.544297 16.344219 19.529297 16.949219 C 18.660297 17.460219 18.138859 17.400656 17.005859 17.222656 C 17.005859 17.231656 17 17.235141 17 17.244141 C 17.018 17.253141 17.030922 17.264437 17.044922 17.273438 C 18.000922 17.760437 18.819734 17.807437 20.052734 17.648438 C 21.444734 17.465438 22.099047 16.967906 22.873047 16.503906 C 23.806047 15.945906 24.675234 16.110406 25.990234 16.316406 C 25.994234 16.307406 25.995 16.296109 26 16.287109 C 25.331 15.780859 24.608375 15.480484 23.720703 15.443359 z M 25.609375 16.933594 C 24.133428 17.043393 23.25025 17.935047 22.453125 18.763672 C 22.103125 19.128672 21.757672 19.495891 21.388672 19.837891 C 20.687672 20.493891 20.131 20.545234 20 20.615234 L 20 20.634766 C 20.29 20.653766 21.247656 20.6105 22.097656 20.4375 C 25.359656 19.7665 25.425453 17.426969 26.939453 17.417969 C 27.290453 17.417969 27.630031 17.445266 27.957031 17.572266 C 27.966031 17.577266 27.977 17.572266 28 17.572266 C 27.986 17.553266 27.980797 17.54025 27.966797 17.53125 C 27.648797 17.32025 27.358297 17.019547 26.279297 16.935547 C 26.042797 16.916797 25.820225 16.917908 25.609375 16.933594 z M 27.892578 18.214844 C 27.321031 18.162063 26.776359 18.321281 26.255859 18.644531 C 26.241859 18.654531 26.227219 18.673938 26.199219 18.710938 C 26.536219 18.734937 27.048578 18.749469 27.517578 19.105469 C 28.084578 19.537469 28.421047 20.051375 28.998047 20.234375 C 29.936047 20.530375 30.836 20.131328 31 19.986328 C 30.991 19.967328 30.985469 19.963797 30.980469 19.966797 C 30.881469 19.938797 30.404438 19.961609 29.898438 19.474609 C 29.373437 18.973609 29.058656 18.536844 28.472656 18.339844 C 28.275906 18.273094 28.083094 18.232437 27.892578 18.214844 z M 7.0195312 20 L 7 20.017578 C 7.085 20.162578 7.6619063 20.851125 7.8789062 21.078125 C 9.3679062 22.649125 11.692844 23.913375 13.714844 23.859375 C 15.188844 23.818375 16.210953 23.488078 17.376953 23.580078 C 18.501953 23.661078 19.048391 23.933953 19.275391 24.001953 C 19.280391 23.992953 19.289922 23.987516 19.294922 23.978516 C 19.200922 23.846516 18.931359 23.583188 18.818359 23.492188 C 17.202359 22.214187 15.462609 22.903797 14.224609 22.341797 C 13.676609 22.092797 13.653531 21.7615 13.894531 21.5625 C 14.078531 21.4035 14.153344 21.377078 15.027344 21.205078 C 14.927344 21.051078 14.063234 20.653219 12.990234 21.074219 C 11.880234 21.508219 10.751422 21.539656 9.6074219 21.222656 C 8.2324219 20.842656 7.3315313 20.186 7.0195312 20 z M 16.6875 24.050781 C 16.6745 24.050781 16.659719 24.059359 16.636719 24.068359 C 16.951719 24.152359 17.860469 24.302937 18.855469 25.460938 C 19.444469 26.145937 20.147188 26.435953 20.992188 26.501953 C 20.997188 26.477953 21.025781 26.464203 20.925781 26.408203 C 20.696781 26.277203 20.508328 26.113672 20.361328 25.888672 C 20.060328 25.424672 19.617891 24.532422 18.462891 24.232422 C 17.878891 24.082422 17.2855 24.055781 16.6875 24.050781 z"/></Svg>);
};
export default SVGPhoenixFramework;
