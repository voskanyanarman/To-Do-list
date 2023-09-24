let btn=document.querySelector('#add');
let close = document.getElementsByClassName("close");
let yes = document.querySelector("#yes");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  alertPlaceholder.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible col-4" role="alert">`,
    `   <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
  </svg>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('yes')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert(' The task is deleted', 'success')
  })
}
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            yes.onclick=function () {
            var tr =close[i].parentElement;
            tr.parentElement.parentElement.remove()
        }
      }}

    
let text=document.querySelector('#text');
text.oninput=function () { 
    btn.removeAttribute('disabled')  
}
text.addEventListener('keydown', function(event) {
    const key = event.key; 
    if (key === "Backspace" || key === "Delete") {
        btn.setAttribute('disabled','');
    }
});

btn.addEventListener("click", function () {
    let text=document.querySelector('#text').value;
    if(text){
        
        document.getElementById("table").insertAdjacentHTML("afterend","<tr class = 'close_tr'><td>" + text + "</td><td><button class='btn btn-outline-primary close' data-bs-toggle='modal' data-bs-target='#exampleModal' id='myModal' >Delete</button></td>")
        document.querySelector('#text').value='';
    }
    yes.addEventListener('click',function () {
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            yes.onclick=function () {
                var tr = close[i].parentElement;
                tr.parentElement.parentElement.remove()
            }
      }
    }
})
    btn.setAttribute('disabled','')

    
    appendAlert(' The task is added successfully', 'success')
      
  
});


