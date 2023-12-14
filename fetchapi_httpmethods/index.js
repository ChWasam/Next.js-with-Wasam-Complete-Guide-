// What is
// fetch( ) API?
// fetch( ) is a javaScript method/functions sometimes called fetch API
// starts the process of fetching a resource from the network,
// returning a promise that is fulfilled once the response is available

// fetch API sends the request from the client to the server, using
// HTTP methods (GET, POST, PUT/PATCH, DELETE).


let url = "https://simple-books-api.glitch.me/orders";

// async function getstatus(){
// const res = await  fetch(url); // by default http get method is used 
// if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
// throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
// }
// // console.log(res);
// const data = await res.json();
// console.log(data);
// }
// getstatus();

// get book

// async function getbook(){
//     const res = await  fetch(url);
//     if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
//     throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
//     }
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//     }
//     getbook();
// 

//Optional query parameters

// const queryParams = {
// "type" : "non-fiction",
// "limit": 4
// }

// const urlWithParam = new URL (url);

// Object.keys(queryParams).forEach((key) => urlWithParam.searchParams.append(key , queryParams[key]));
// // console.log(urlWithParam);

// async function getOutputWithParams(){
//     const res = await  fetch(urlWithParam);
//     if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
//     throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
//     }
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//     }
//     getOutputWithParams();

// Get a single book
// const id = 1;
// url = `https://simple-books-api.glitch.me/books/${id}`;

// async function getSingleBook(){
//     const res = await  fetch(url);
//     if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
//     throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
//     }
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//     }
//     getSingleBook();

//  Access Token 
// const user = {
//         clientName: "fxcsGYsfasfXv",
//         clientEmail: "vxsvweceGHvgxhfyaeveyucvy@example.com"   
// }
// async function accessToken(){
// const res = await  fetch(url, {
//     method: 'POST',
//     headers:{'Content-Type' : 'application/json'},
//     body: JSON.stringify(user)
// }); // by default http get method is used 

// if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
// throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
// }
// // console.log(res);
// const data = await res.json();
// console.log(data);
// }
// accessToken();

const token = "7deb9e03a5fb76f82ad1d7c042771accae306823a53a0c3d4b959ef8b65dd8f0"; 
//storing token here bcz we will use it in future 

// Submit an order

// const orderInfo = {
    
//         "bookId": 3,
//         "customerName": "wasam"
       
// }
// async function submitOrder(){
// const res = await  fetch(url, {
// method: 'POST',
// headers:{
//     'Authorization': `Bearer ${token}`,
//     'Content-Type' : 'application/json'
// },
// body: JSON.stringify(orderInfo)
// }); // by default http get method is used 

// if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
// throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
// }
// // console.log(res);
// const data = await res.json();
// console.log(data);
// }
// submitOrder();

// order id

const orderID = "XyKh2eaepaIydu3INKWeI";

//Get all orders



// async function getAllOrder(){
// const res = await  fetch(url, {
// method: 'GET',
// headers:{
// 'Authorization': `Bearer ${token}`,
// },

// }); // by default http get method is used 

// if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
// throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
// }
// // console.log(res);
// const data = await res.json();
// console.log(data);
// }
// getAllOrder();

// Get an order
const specificOrderUrl = `${url}/${orderID}`
async function getAnOrder(){
    const res = await  fetch(specificOrderUrl, {
    method: 'GET',
    headers:{
    'Authorization': `Bearer ${token}`,
    },
    
    }); // by default http get method is used 
    
    if (!res.ok){ // ok is basically present but not shown in the body called enumerator. it's value is in boolean
    throw new Error (`Could not fetch because of an invalid input, status: ${res.status}`); // called error handling 
    }
    // console.log(res);
    const data = await res.json();
    console.log(data);
    }
   // getAnOrder();

   

   // Update an order
   const infoToBeUpdated = {
    
            "customerName": "Rehan"
           
    }
    async function updateOrder(){
    const res = await  fetch(specificOrderUrl, {
    method: 'PATCH',
    headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(infoToBeUpdated)
    }); // by default http get method is used 

    if (res.ok){
console.log("Order Updated");
    }else{
"Unable to update an error"
    }
    //console.log(res.status);
    }
  //  updateOrder();

  //   getAnOrder();   


  // Delete AN ORDER

  async function deleteAnOrder(){
    const res = await  fetch(specificOrderUrl, {
    method: 'DELETE',
    headers:{
    'Authorization': `Bearer ${token}`,
    },
    
    }); // by default http get method is used 
    
    console.log(res.status);
    }

    //deleteAnOrder();

    getAnOrder();



