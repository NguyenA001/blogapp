let userData = {};

function checkToken() {
  let result = false;
  let lsData = localStorage.getItem("Token");
  if (lsData && lsData != null) {
    result = true;
  }
  return result;
}

async function createAccount(createdUser) {
  let res = await fetch("https://nguyenablogbackend.azurewebsites.net/User/AddUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdUser),
  });
  if (!res.ok) {
    const message = `An Error has Occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  return data;
}

async function login(loginUser) {
  let res = await fetch("https://nguyenablogbackend.azurewebsites.net/User/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginUser),
  });
  if (!res.ok) {
    const message = `An Error has Occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  return data;
}

async function GetLoggedInUserData(username){
  let res = await fetch(`https://nguyenablogbackend.azurewebsites.net/User/userbyusername/${username}`);
  let data = await res.json();
  userData = data;
  console.log(userData);
}

function LoggedInData()
{
  return userData;
}

async function addBlogItems(newBlogItem){
  let res = await fetch ("https://nguyenablogbackend.azurewebsites.net/BlogItem/AddBlogItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlogItem),
  });
  if (!res.ok) {
    const message = `An Error has Occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  return data;
}

async function getBlogItems(){
  let res = await fetch('https://nguyenablogbackend.azurewebsites.net/BlogItem/GetAllBlogItem');
  let data = await res.json();
  return data;
}
async function getBlogItemsByUserId(userId){
  let res = await fetch(`https://nguyenablogbackend.azurewebsites.net/BlogItem/GetBlogItemByUserId/${userId}`);
  let data = await res.json();
  return data;
}

async function updateBlogItems(blogItems){
  let res = await fetch ("https://nguyenablogbackend.azurewebsites.net/BlogItem/UpdateBlogItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogItems),
  });
  if (!res.ok) {
    const message = `An Error has Occured ${res.status}`;
    throw new Error(message);
  }
  let data = await res.json();
  return data;
}

async function getPublishedBlogItems(){
  let res = await fetch('https://nguyenablogbackend.azurewebsites.net/BlogItem/GetPublishedItems');
  let data = await res.json();
  return data;
}


export { getPublishedBlogItems, updateBlogItems, getBlogItemsByUserId, getBlogItems, checkToken, createAccount, login, GetLoggedInUserData, LoggedInData, addBlogItems};
