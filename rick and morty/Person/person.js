import {getURLParameter,header,functionPerson} from "/function.js"
header()
let source = getURLParameter("id");



functionPerson(`https://rickandmortyapi.com/api/character/${source}`)
