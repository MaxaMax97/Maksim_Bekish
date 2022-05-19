export function getURLParameter(name) {
   return decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || '');
 }

export default getURLParameter