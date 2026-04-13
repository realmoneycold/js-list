const API = "https://jsonplaceholder.typicode.com/posts";
const boxes = document.getElementById("boxes");

const getData = async () => {
   fetch(API).then(response=>response.json()).then(result => {
    let html = ""
    result.forEach((item, index) => {
        html += `<div class="w-80 shadow-lg border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div class="w-full h-48">
            <img class="w-full h-full object-cover" src="https://picsum.photos/id/${index + 237}/200/300" alt="Image">
        </div>
        <div class="p-4 border-t border-gray-100">
            <h2 class="font-bold text-lg mb-2">${item.title}</h2>
            <p class="text-gray-600 text-sm">${item.body}</p> 
        </div>
    </div>`
    });
    boxes.innerHTML = html;
   }).catch(err=>{
    console.log(err);
   })
}
getData();