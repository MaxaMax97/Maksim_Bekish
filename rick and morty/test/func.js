const help = {
allPers: function (mtd, url) {
   return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
     const div=document.getElementById('content')
     xhr.open(mtd, url);
     xhr.responseType = "json";
     xhr.onload = () => {
       if (xhr.status >= 400) {
         reject(xhr.response);
       } else {
         resolve(xhr.response);
         div.innerHTML = "";
          for (let i = 0; i <= xhr.response.results.length - 1; i++) {
            div.innerHTML += `<h6>name pers:${i} ${xhr.response.results[i].name} </h6>`;
          }
       }
     };
     xhr.send();
   });
 }
};

export const allPers = help.allPers;
