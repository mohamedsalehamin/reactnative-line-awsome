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
const SVGReacteurope = ({width, height, fill, stroke, style}: ReactFromSVGProps) => {
  return (<Svg viewBox="0 0 32 32" width={width} height={height} fill={fill} stroke={stroke} style={style}><Path d="M 21.107422 4.3378906 C 19.673844 4.3777812 17.910297 5.4194062 16.123047 7.1601562 C 16.278047 7.3101563 16.432891 7.465 16.587891 7.625 C 20.346891 3.98 22.038656 5.18675 22.097656 5.21875 C 23.118656 5.79775 23.736734 7.7620469 22.802734 11.498047 C 21.533734 11.207047 20.245266 11.00925 18.947266 10.90625 C 15.671266 6.32725 12.542484 4.4296875 10.646484 4.4296875 C 9.2434844 4.4296875 8.6495625 5.3863594 8.4765625 5.6933594 C 7.6515625 7.1513594 7.8714219 9.5290625 8.4824219 11.789062 C 5.2704219 12.714063 2.9829531 14.255141 3.0019531 16.119141 C 3.0249531 18.835141 7.7034531 20.120656 8.5644531 20.347656 C 7.6304531 24.079656 8.1040781 26.526375 9.5800781 27.359375 C 10.856078 28.079375 13.001953 27.63175 15.876953 24.84375 C 15.721953 24.69375 15.567109 24.538906 15.412109 24.378906 C 11.653109 28.023906 9.9573437 26.817156 9.9023438 26.785156 C 8.8863437 26.211156 8.2632656 24.251953 9.1972656 20.501953 C 9.7622656 20.633953 11.102734 20.93475 13.052734 21.09375 C 16.328734 25.66875 19.458609 27.564453 21.349609 27.564453 C 22.752609 27.564453 23.344578 26.607734 23.517578 26.302734 C 24.337578 24.848734 24.124672 22.470078 23.513672 20.205078 C 30.453672 18.209078 30.630594 14.271875 25.058594 12.171875 L 25.058594 12.169922 C 24.526594 11.970922 23.984547 11.798297 23.435547 11.654297 C 24.328547 8.1002969 23.964922 5.5165781 22.419922 4.6425781 C 22.026922 4.4220781 21.585281 4.3245938 21.107422 4.3378906 z M 10.646484 5.0917969 C 12.323484 5.0917969 15.148891 6.8957969 18.087891 10.841797 C 16.661891 10.761797 15.232594 10.774812 13.808594 10.882812 C 14.399594 10.047812 15.041469 9.2501406 15.730469 8.4941406 C 15.575469 8.3351406 15.420625 8.1793438 15.265625 8.0273438 C 14.429625 8.9483437 13.657078 9.9251719 12.955078 10.951172 C 11.658078 11.076172 10.373375 11.299188 9.109375 11.617188 C 9.100375 11.553187 8.0026875 7.8726719 9.0546875 6.0136719 L 9.0566406 6.015625 C 9.1886406 5.783625 9.5984844 5.0917969 10.646484 5.0917969 z M 15.955078 11.359375 C 16.809328 11.35175 17.665078 11.378 18.517578 11.4375 C 19.952578 13.4695 19.833125 13.629953 20.453125 14.376953 C 20.573125 14.218953 20.738734 14.100062 20.927734 14.039062 C 20.635734 13.520062 20.126234 12.625766 19.365234 11.509766 C 21.206234 11.696766 22.326297 11.965969 22.654297 12.042969 C 22.472297 12.698969 22.249234 13.372641 21.990234 14.056641 C 22.105234 14.100641 22.210781 14.168906 22.300781 14.253906 L 22.304688 14.257812 C 22.396687 14.117812 22.544938 14.025906 22.710938 14.003906 C 22.933937 13.392906 23.130922 12.791125 23.294922 12.203125 C 23.826922 12.344125 24.350234 12.510125 24.865234 12.703125 C 29.699234 14.521125 28.237828 16.708266 28.173828 16.822266 C 27.271828 18.422266 24.524422 19.338875 23.357422 19.671875 C 23.193422 19.129875 23.006969 18.574672 22.792969 18.013672 C 22.596969 18.015672 22.412688 17.917906 22.304688 17.753906 L 22.300781 17.757812 C 22.228781 17.825813 22.145688 17.880875 22.054688 17.921875 C 22.314688 18.573875 22.537609 19.216703 22.724609 19.845703 C 21.645609 20.117703 20.549359 20.3155 19.443359 20.4375 C 19.602359 20.1965 20.227156 19.242797 20.910156 17.966797 C 20.813156 17.930797 20.720719 17.881312 20.636719 17.820312 C 20.586719 17.875312 20.473625 18.011719 20.140625 18.011719 C 19.857625 18.521719 19.347703 19.420344 18.595703 20.527344 C 16.892703 20.677344 15.179609 20.691266 13.474609 20.572266 C 13.114609 20.062266 12.493875 19.156453 11.796875 17.939453 C 11.749875 17.920453 11.704156 17.897094 11.660156 17.871094 C 11.573156 17.944094 11.481937 18.017578 11.085938 18.017578 C 11.372938 18.527578 11.883953 19.416859 12.626953 20.505859 C 11.519953 20.401859 10.419937 20.223656 9.3359375 19.972656 C 9.5139375 19.334656 9.7285156 18.683578 9.9785156 18.017578 C 9.8325156 18.017578 9.7327031 18.025703 9.5957031 17.970703 C 9.4947031 18.006703 9.38725 18.023578 9.28125 18.017578 C 9.05825 18.628578 8.8651719 19.2245 8.7011719 19.8125 C 1.4151719 17.8695 2.3097656 14.178844 8.6347656 12.339844 C 8.7987656 12.881844 8.9852187 13.437047 9.1992188 13.998047 C 9.6732188 13.998047 9.7874687 14.152281 9.8554688 14.238281 C 9.8854687 14.200281 9.9219375 14.166672 9.9609375 14.138672 C 9.6969375 13.468672 9.4635781 12.809016 9.2675781 12.166016 C 9.5865781 12.084016 10.743828 11.783219 12.548828 11.574219 C 11.824828 12.681219 11.330734 13.57375 11.052734 14.09375 C 11.191734 14.17475 11.296703 14.304984 11.345703 14.458984 C 11.460703 14.288984 11.621547 14.157172 11.810547 14.076172 C 12.106547 13.543172 12.626484 12.621422 13.396484 11.482422 C 14.247984 11.407422 15.100828 11.367 15.955078 11.359375 z M 16 12.775391 L 15.894531 13.085938 L 15.570312 13.091797 L 15.830078 13.287109 L 15.734375 13.597656 L 16 13.410156 L 16.263672 13.597656 L 16.167969 13.287109 L 16.427734 13.091797 L 16.103516 13.085938 L 16 12.775391 z M 14.544922 13.164062 L 14.439453 13.474609 L 14.111328 13.478516 L 14.371094 13.675781 L 14.28125 13.984375 L 14.546875 13.798828 L 14.810547 13.984375 L 14.714844 13.675781 L 14.974609 13.478516 L 14.650391 13.474609 L 14.544922 13.164062 z M 17.443359 13.164062 L 17.337891 13.474609 L 17.009766 13.478516 L 17.269531 13.675781 L 17.183594 13.984375 L 17.447266 13.798828 L 17.712891 13.984375 L 17.615234 13.675781 L 17.876953 13.478516 L 17.548828 13.474609 L 17.443359 13.164062 z M 21.412109 14.443359 C 20.952109 14.443359 20.716797 14.657938 20.716797 15.085938 L 20.716797 16.912109 C 20.716797 17.336109 20.952109 17.554688 21.412109 17.554688 L 21.449219 17.554688 C 21.909219 17.554688 22.146484 17.335109 22.146484 16.912109 L 22.146484 15.085938 C 22.146484 14.659937 21.909219 14.445312 21.449219 14.445312 L 21.449219 14.443359 L 21.412109 14.443359 z M 12.423828 14.445312 C 11.963828 14.445312 11.658203 14.636891 11.658203 15.087891 L 11.658203 16.912109 C 11.658203 17.386109 11.963828 17.554688 12.423828 17.554688 L 12.431641 17.554688 C 12.891641 17.554688 13.197266 17.381109 13.197266 16.912109 C 13.198266 16.463109 13.247437 16.285156 13.023438 16.285156 L 12.869141 16.285156 C 12.650141 16.285156 12.695312 16.468891 12.695312 16.837891 C 12.695312 17.051891 12.590641 17.115234 12.431641 17.115234 C 12.272641 17.115234 12.167969 17.051891 12.167969 16.837891 L 12.167969 15.169922 C 12.167969 14.955922 12.272641 14.892578 12.431641 14.892578 C 12.590641 14.892578 12.695312 14.955922 12.695312 15.169922 C 12.695312 15.497922 12.664141 15.648437 12.869141 15.648438 L 13.023438 15.648438 C 13.237438 15.643437 13.197266 15.469891 13.197266 15.087891 C 13.197266 14.636891 12.891641 14.445312 12.431641 14.445312 L 12.423828 14.445312 z M 16.941406 14.476562 C 16.896406 14.471562 16.856563 14.505781 16.851562 14.550781 C 16.851562 14.554781 16.850562 14.5585 16.851562 14.5625 L 16.851562 16.910156 C 16.851562 17.347156 17.079063 17.552734 17.539062 17.552734 L 17.556641 17.552734 C 18.016641 17.552734 18.244141 17.342156 18.244141 16.910156 L 18.244141 14.5625 C 18.242141 14.5125 18.200391 14.474562 18.150391 14.476562 C 18.149391 14.477562 18.148484 14.477516 18.146484 14.478516 L 18.091797 14.478516 C 18.047797 14.474516 18.008906 14.505828 18.003906 14.548828 L 18.003906 14.564453 L 18.003906 16.832031 C 18.003906 17.192031 17.886922 17.339844 17.544922 17.339844 C 17.202922 17.339844 17.083984 17.197031 17.083984 16.832031 L 17.083984 14.564453 C 17.089984 14.522453 17.059578 14.482563 17.017578 14.476562 C 17.010578 14.475563 17.003094 14.475563 16.996094 14.476562 L 16.941406 14.476562 z M 10.378906 14.480469 C 10.286906 14.472469 10.203312 14.540812 10.195312 14.632812 L 10.195312 14.634766 L 9.6953125 17.332031 C 9.6723125 17.455031 9.7356094 17.519531 9.8496094 17.519531 L 9.9863281 17.519531 C 10.080328 17.528531 10.164828 17.459234 10.173828 17.365234 C 10.173828 17.363234 10.172828 17.362375 10.173828 17.359375 L 10.255859 16.84375 L 10.8125 16.84375 L 10.894531 17.359375 C 10.900531 17.453375 10.980219 17.525531 11.074219 17.519531 C 11.076219 17.519531 11.077078 17.518578 11.080078 17.517578 L 11.240234 17.517578 C 11.358234 17.517578 11.417531 17.453078 11.394531 17.330078 L 10.882812 14.634766 C 10.872813 14.538766 10.786406 14.470469 10.691406 14.480469 L 10.378906 14.480469 z M 13.556641 14.480469 C 13.442641 14.480469 13.384766 14.538344 13.384766 14.652344 L 13.384766 14.748047 C 13.384766 14.862047 13.442641 14.921875 13.556641 14.921875 L 13.890625 14.921875 L 13.890625 17.345703 C 13.890625 17.459703 13.9485 17.519531 14.0625 17.519531 L 14.21875 17.519531 C 14.33275 17.521531 14.390625 17.459656 14.390625 17.347656 L 14.390625 17.345703 L 14.390625 14.921875 L 14.732422 14.921875 C 14.846422 14.921875 14.90625 14.862047 14.90625 14.748047 L 14.90625 14.652344 C 14.90625 14.538344 14.846422 14.480469 14.732422 14.480469 L 13.556641 14.480469 z M 15.310547 14.480469 C 15.265547 14.475469 15.225703 14.507734 15.220703 14.552734 C 15.220703 14.556734 15.219703 14.562406 15.220703 14.566406 L 15.220703 17.4375 C 15.217703 17.4825 15.252828 17.520437 15.298828 17.523438 L 15.310547 17.523438 L 16.335938 17.523438 C 16.379938 17.529438 16.421734 17.499078 16.427734 17.455078 C 16.428734 17.449078 16.428734 17.4425 16.427734 17.4375 L 16.427734 17.402344 C 16.433734 17.356344 16.401469 17.314594 16.355469 17.308594 C 16.349469 17.307594 16.341937 17.307594 16.335938 17.308594 L 16.335938 17.304688 L 15.453125 17.304688 L 15.453125 16.087891 L 16.1875 16.087891 C 16.2345 16.090891 16.274344 16.055813 16.277344 16.007812 L 16.277344 15.996094 L 16.277344 15.960938 C 16.280344 15.913937 16.245266 15.872141 16.197266 15.869141 L 16.1875 15.869141 L 15.453125 15.869141 L 15.453125 14.693359 L 16.322266 14.693359 C 16.369266 14.696359 16.411063 14.661281 16.414062 14.613281 L 16.414062 14.603516 L 16.414062 14.566406 C 16.418063 14.522406 16.384844 14.484469 16.339844 14.480469 L 16.322266 14.480469 L 15.310547 14.480469 z M 18.892578 14.480469 C 18.847578 14.475469 18.807734 14.509688 18.802734 14.554688 C 18.802734 14.558687 18.801734 14.562406 18.802734 14.566406 L 18.802734 17.4375 C 18.799734 17.4825 18.834859 17.522391 18.880859 17.525391 L 18.892578 17.525391 L 18.947266 17.525391 C 18.991266 17.529391 19.030156 17.496125 19.035156 17.453125 L 19.035156 17.439453 L 19.035156 16.212891 L 19.564453 16.212891 L 20.037109 17.451172 C 20.053109 17.494172 20.096578 17.522531 20.142578 17.519531 L 20.210938 17.519531 C 20.274938 17.519531 20.302297 17.473063 20.279297 17.414062 L 19.794922 16.171875 C 20.072922 16.098875 20.214844 15.892453 20.214844 15.564453 L 20.214844 15.123047 C 20.214844 14.695047 19.977578 14.480469 19.517578 14.480469 L 18.892578 14.480469 z M 8.3457031 14.482422 C 8.2367031 14.477422 8.1757813 14.540297 8.1757812 14.654297 L 8.1757812 17.347656 C 8.1757812 17.461656 8.2356094 17.521484 8.3496094 17.521484 L 9.3476562 17.521484 C 9.4616563 17.521484 9.5195312 17.461656 9.5195312 17.347656 L 9.5195312 17.251953 C 9.5195312 17.138953 9.4616563 17.078125 9.3476562 17.078125 L 8.6777344 17.078125 L 8.6777344 16.199219 L 9.1953125 16.199219 C 9.3093125 16.199219 9.3691406 16.141344 9.3691406 16.027344 L 9.3691406 15.931641 C 9.3691406 15.817641 9.3093125 15.757813 9.1953125 15.757812 L 8.6777344 15.757812 L 8.6777344 14.923828 L 9.3320312 14.923828 C 9.4460313 14.923828 9.5058594 14.865953 9.5058594 14.751953 L 9.5058594 14.654297 C 9.5058594 14.540297 9.4460312 14.482422 9.3320312 14.482422 L 8.3457031 14.482422 z M 22.794922 14.484375 C 22.754922 14.474375 22.713125 14.499063 22.703125 14.539062 C 22.701125 14.548063 22.700172 14.558359 22.701172 14.568359 L 22.701172 17.439453 C 22.698172 17.484453 22.733297 17.522391 22.779297 17.525391 L 22.792969 17.525391 L 22.847656 17.525391 C 22.891656 17.529391 22.930547 17.498078 22.935547 17.455078 L 22.935547 17.439453 L 22.935547 16.251953 L 23.417969 16.251953 C 23.877969 16.251953 24.115234 16.032375 24.115234 15.609375 L 24.115234 15.130859 C 24.115234 14.698859 23.877969 14.484375 23.417969 14.484375 L 22.794922 14.484375 z M 24.664062 14.484375 C 24.624063 14.474375 24.584219 14.499062 24.574219 14.539062 C 24.572219 14.548063 24.571266 14.558359 24.572266 14.568359 L 24.572266 17.439453 C 24.569266 17.484453 24.604391 17.522391 24.650391 17.525391 L 24.664062 17.525391 L 25.689453 17.525391 C 25.734453 17.530391 25.774297 17.498125 25.779297 17.453125 C 25.779297 17.449125 25.780297 17.443453 25.779297 17.439453 L 25.779297 17.404297 C 25.782297 17.358297 25.747172 17.317453 25.701172 17.314453 L 25.689453 17.314453 L 25.689453 17.310547 L 24.806641 17.310547 L 24.806641 16.09375 L 25.541016 16.09375 C 25.588016 16.09675 25.629812 16.059719 25.632812 16.011719 L 25.632812 16.001953 L 25.632812 15.966797 C 25.635813 15.919797 25.598781 15.878 25.550781 15.875 L 25.541016 15.875 L 24.806641 15.875 L 24.806641 14.699219 L 25.677734 14.699219 C 25.724734 14.702219 25.764578 14.665188 25.767578 14.617188 L 25.767578 14.607422 L 25.767578 14.572266 C 25.771578 14.528266 25.738359 14.488375 25.693359 14.484375 L 25.677734 14.484375 L 24.664062 14.484375 z M 6.390625 14.486328 C 6.276625 14.486328 6.2167969 14.546156 6.2167969 14.660156 L 6.2167969 17.353516 C 6.2167969 17.467516 6.276625 17.525391 6.390625 17.525391 L 6.5449219 17.525391 C 6.6589219 17.525391 6.71875 17.467516 6.71875 17.353516 L 6.71875 16.310547 L 6.9726562 16.310547 L 7.3105469 17.380859 C 7.3305469 17.470859 7.4128594 17.534344 7.5058594 17.527344 L 7.65625 17.527344 C 7.78425 17.527344 7.8387344 17.444172 7.8027344 17.326172 L 7.4335938 16.236328 C 7.6435937 16.145328 7.7675781 15.963875 7.7675781 15.671875 L 7.7675781 15.128906 C 7.7675781 14.668906 7.4619531 14.486328 7.0019531 14.486328 L 6.390625 14.486328 z M 21.435547 14.65625 C 21.776547 14.65625 21.914062 14.802109 21.914062 15.162109 L 21.914062 16.830078 C 21.909063 17.195078 21.776547 17.337891 21.435547 17.337891 C 21.094547 17.337891 20.957031 17.195078 20.957031 16.830078 L 20.957031 15.162109 C 20.957031 14.802109 21.094547 14.65625 21.435547 14.65625 z M 19.039062 14.693359 L 19.503906 14.693359 C 19.845906 14.693359 19.982422 14.834219 19.982422 15.199219 L 19.982422 15.492188 C 19.982422 15.849187 19.844906 15.994141 19.503906 15.994141 L 19.503906 15.992188 L 19.039062 15.992188 L 19.039062 14.693359 z M 22.939453 14.699219 L 23.404297 14.699219 C 23.746297 14.694219 23.882813 14.841172 23.882812 15.201172 L 23.882812 15.523438 C 23.882812 15.883437 23.745297 16.029297 23.404297 16.029297 L 22.939453 16.029297 L 22.939453 14.699219 z M 6.71875 14.923828 L 6.9824219 14.923828 C 7.1464219 14.923828 7.2597656 14.982172 7.2597656 15.201172 L 7.2597656 15.597656 C 7.2597656 15.816656 7.1464219 15.876953 6.9824219 15.876953 L 6.71875 15.876953 L 6.71875 14.923828 z M 10.535156 15.072266 L 10.75 16.425781 L 10.322266 16.425781 L 10.535156 15.072266 z M 14.582031 18.0625 L 14.476562 18.371094 L 14.152344 18.376953 L 14.412109 18.572266 L 14.316406 18.882812 L 14.580078 18.695312 L 14.845703 18.882812 L 14.748047 18.572266 L 15.009766 18.376953 L 14.6875 18.371094 L 14.582031 18.0625 z M 17.417969 18.0625 L 17.3125 18.371094 L 16.988281 18.376953 L 17.248047 18.572266 L 17.152344 18.882812 L 17.416016 18.695312 L 17.679688 18.882812 L 17.583984 18.572266 L 17.84375 18.376953 L 17.521484 18.371094 L 17.417969 18.0625 z M 16 18.398438 L 15.894531 18.708984 L 15.570312 18.714844 L 15.830078 18.910156 L 15.734375 19.220703 L 16 19.03125 L 16.263672 19.21875 L 16.167969 18.908203 L 16.427734 18.712891 L 16.105469 18.708984 L 16 18.398438 z M 22.890625 20.384766 C 23.923625 24.228766 23.093359 25.713328 22.943359 25.986328 C 22.811359 26.218328 22.405516 26.912109 21.353516 26.912109 C 19.681516 26.912109 16.856109 25.117109 13.912109 21.162109 C 15.337109 21.245109 16.767406 21.231094 18.191406 21.121094 C 17.600406 21.956094 16.958531 22.753766 16.269531 23.509766 C 16.424531 23.668766 16.579375 23.823609 16.734375 23.974609 C 17.571375 23.054609 18.343922 22.075828 19.044922 21.048828 C 21.199922 20.834828 22.703625 20.434766 22.890625 20.384766 z"/></Svg>);
};
export default SVGReacteurope;
