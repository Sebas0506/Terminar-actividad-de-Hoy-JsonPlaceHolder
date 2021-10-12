/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.title))/*/

const btnAdd=document.getElementById("btnCargar")
btnAdd.addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      //console.log(json)
      let info="";
      for (let i=0;i<json.length;i++){
          //console.log("usuario ",json[i])
          info+=`<option value = "${json[i].id}"> ${json[i].name} </option>`
      }
      const datos=document.getElementById("users")
      datos.innerHTML=info;
  })
})

const MenuUsers = document.getElementById("users");
MenuUsers.addEventListener("change",()=>{
  const divdatos = document.getElementById("posts")
  let id = document.getElementById("users").value
  fetch("https://jsonplaceholder.typicode.com/posts?userId="+id)
  .then((response) => response.json())
  .then((json) => {
    let datos = "";
    for (let i=0;i<json.length;i++){
      datos += `<div>
      <h3>${json[i].title}</h3>
      <p>${json[i].body}</p>
      <button id="btnCom">Comentarios</button>
      </div>`
    }
    divdatos.innerHTML = datos;
  })
})

const btnComentarios = document.getElementById("btnComentarios");
btnComentarios.addEventListener("click",()=> {
    const divcomentario = document.getElementById("comentarios")
    fetch("https://jsonplaceholder.typicode.com/comments/")
    .then((response) => response.json())
    .then((json)=> {
      let comentario = "";
      for (let i=0; i<json.length;i++){
        comentario += `<div><hr>
        <h3>${json[i].name}</h3> 
        <h3>${json[i].id}</h3>
        <p>${json[i].body}</p>
        </div>`
     } 
      divcomentario.innerHTML = comentario;
  })
})