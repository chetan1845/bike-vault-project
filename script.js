const bikes=[
{name:"Royal Enfield Classic 350",category:"cruiser",price:"₹1.93 Lakh",engine:"349 cc",mileage:"41 km/l",power:"20.2 bhp",image:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"},
{name:"KTM Duke 390",category:"sports",price:"₹2.95 Lakh",engine:"399 cc",mileage:"30 km/l",power:"45 bhp",image:"https://images.unsplash.com/photo-1558980394-0c3c9f6c0f16?auto=format&fit=crop&w=800&q=80"},
{name:"Yamaha R15 V4",category:"sports",price:"₹1.83 Lakh",engine:"155 cc",mileage:"47 km/l",power:"18.4 bhp",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"},
{name:"Honda SP 125",category:"commuter",price:"₹91,000",engine:"124 cc",mileage:"65 km/l",power:"10.8 bhp",image:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80"},
{name:"Kawasaki Ninja 650",category:"sports",price:"₹7.16 Lakh",engine:"649 cc",mileage:"21 km/l",power:"68 bhp",image:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80"},
{name:"BMW G 310 GS",category:"adventure",price:"₹3.30 Lakh",engine:"313 cc",mileage:"30 km/l",power:"34 bhp",image:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80"},
{name:"Bajaj Pulsar NS200",category:"sports",price:"₹1.59 Lakh",engine:"199 cc",mileage:"40 km/l",power:"24.5 bhp",image:"https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80"},
{name:"TVS Apache RTR 200",category:"sports",price:"₹1.48 Lakh",engine:"197 cc",mileage:"38 km/l",power:"20.8 bhp",image:"https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=800&q=80"},
{name:"Hero Splendor Plus",category:"commuter",price:"₹76,000",engine:"97 cc",mileage:"70 km/l",power:"7.9 bhp",image:"https://images.unsplash.com/photo-1619771914272-e3c2e4d0f5f1?auto=format&fit=crop&w=800&q=80"},
{name:"Royal Enfield Himalayan",category:"adventure",price:"₹2.85 Lakh",engine:"452 cc",mileage:"30 km/l",power:"40 bhp",image:"https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=800&q=80"},
{name:"Honda CB350",category:"cruiser",price:"₹2.15 Lakh",engine:"348 cc",mileage:"35 km/l",power:"20.8 bhp",image:"https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=800&q=80"},
{name:"Suzuki V-Strom 250",category:"adventure",price:"₹2.19 Lakh",engine:"249 cc",mileage:"35 km/l",power:"26.1 bhp",image:"https://images.unsplash.com/photo-1558980664-10ea4c2c2a1e?auto=format&fit=crop&w=800&q=80"}];

const bikeList=document.getElementById("bikeList"),search=document.getElementById("search"),category=document.getElementById("category"),
modal=document.getElementById("modal"),close=document.getElementById("close"),details=document.getElementById("details"),themeBtn=document.getElementById("themeBtn");

function displayBikes(list){
bikeList.innerHTML="";
if(list.length===0){bikeList.innerHTML="<div class='no-result'><h3>No bikes found</h3><p>Try another bike name or category.</p></div>";return;}
list.forEach((bike,index)=>{bikeList.innerHTML+=`<div class="bike-card"><img src="${bike.image}" alt="${bike.name}">
<div class="bike-info"><h3>${bike.name}</h3><p>Engine: ${bike.engine}</p><p>Mileage: ${bike.mileage}</p>
<p class="price">${bike.price}</p><button class="details-btn" onclick="showDetails(${index})">View Details</button></div></div>`;});
}

function filterBikes(){
const s=search.value.toLowerCase(),c=category.value;
displayBikes(bikes.filter(b=>b.name.toLowerCase().includes(s)&&(c==="all"||b.category===c)));
}

function showDetails(index){
const b=bikes[index];
details.innerHTML=`<img src="${b.image}" alt="${b.name}"><h2>${b.name}</h2>
<p><strong>Category:</strong> ${b.category}</p><p><strong>Price:</strong> ${b.price}</p>
<p><strong>Engine:</strong> ${b.engine}</p><p><strong>Mileage:</strong> ${b.mileage}</p><p><strong>Power:</strong> ${b.power}</p>`;
modal.style.display="flex";
}

search.addEventListener("input",filterBikes);
category.addEventListener("change",filterBikes);
close.addEventListener("click",()=>modal.style.display="none");
window.addEventListener("click",e=>{if(e.target===modal)modal.style.display="none";});

themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
const dark=document.body.classList.contains("dark");
themeBtn.textContent=dark?"☀️":"🌙";
localStorage.setItem("theme",dark?"dark":"light");
});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");themeBtn.textContent="☀️";
}
displayBikes(bikes);

// Login system
function login(){
    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value;
    const message=document.getElementById("loginMessage");
    if(username==="admin" && password==="1234"){
        localStorage.setItem("bikeVaultLogin","true");
        document.getElementById("loginPage").style.display="none";
        document.getElementById("mainPage").classList.remove("hidden");
    }else{
        message.textContent="Invalid username or password";
    }
}

function logout(){
    localStorage.removeItem("bikeVaultLogin");
    location.reload();
}

if(localStorage.getItem("bikeVaultLogin")==="true"){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("mainPage").classList.remove("hidden");
}
