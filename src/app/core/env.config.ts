// const _isDev = window.location.port.indexOf('4200') > -1;
// const getHost = () => {
//   const protocol = window.location.protocol;
//   const host = window.location.host;
//   return `${protocol}//${host}`;
// };
//const apiURI = _isDev ? 'http://localhost:3000/api2/' : `https://phonestablets-crm.herokuapp.com/api2/`;
// const apiURI = 'https://phonestablets-crm.herokuapp.com/api2/';
const apiURI = 'https://zuriback.herokuapp.com/api/';
//const apiURI = 'http://localhost:3000/api/';

export const ENV = {
  //BASE_URI: getHost(),
  BASE_API: apiURI,
  BASE_TOKEN: 'k8Sc8BpRaj8T8SuIzYl5',
  BASE_SUCCESS: 'gzqwquza3vxil6tbs8pz',
  BASE_RELATED_PRODUCTS: 'retk8Sc8sdfBpRaj8T8Su$IzYl5',
  BASE_IMAGE:'https://www.static.phonestablets.co.ke/img',
  //BASE_IMAGE: '/assets/images'
};
