const myText = document.getElementById("user_input");
myText.addEventListener("input", function(e){
  const currentValue = e.target.value;
  console.log(currentValue);
})

const input = document.getElementById("user_input");
const btn = document.getElementById("btn");
const content = document.getElementById("show");

btn.onclick= ()=>{
  
  const result = input.value;
  const res = sendtoserver(result);
}


const sendtoserver = (props) => {
  fetch('http://localhost:5000/generate_text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user_input: props })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.generated_text);
    const output = document.getElementById("generated_text");
    //display.innerHTML = data.generated_text; // Assuming 'data' is an object 
    const formattedText = data.generated_text.replace(/\*\*(.*?)\*\*/g, "<br>$1");
    content.style.display='block';
    const filteredText = formattedText.replace(/\*/g, '');
    output.innerHTML = filteredText;
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}



const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
  document.getElementById('show').style.display = 'none'; 
  document.getElementById('user_input').value = '';
  document.getElementById('user_input').placeholder = 'Search';
});













// const  sendtoserver = (props) => {
//   fetch('http://localhost:5000/generate_text',{method: 'POST', headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ user_input: props })})
//   .then(response => {
//     // Check if response is successful
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // Parse JSON
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data
//     console.log(data);
//     //var res = JSON.parse(data);
//     for(var i=0;i<stringify.length; i++){
//       console.log(res[i]['generated_text']);
//     }
//     return 
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
// }



 //const display = document.getElementById("generated_text");
 // display.innerHTML = res.generated_text;