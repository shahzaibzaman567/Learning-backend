//backend routing
//crud methods 
//middle wire
//install paskage of express 
// nodemon install
//port = 5555
//express \. \router
//crud with express
//practicce on data post and  get of todo 
//TC
//dependencies 
//dev dependencise
//what is docker
//controllar

// sunday
//what is salt 
//bcyrpt










































//🔥 Docker اصل میں کیا ہے؟

// Docker = ek lightweight “container” system

// Iska kaam: apps ko safe aur portable environment me chalana

// Matlab: app chalane ke liye har machine pe same environment mile

// Real-life example 🏠

// Socho:

// Tumhare paas ek chhota box hai

// Is box ke andar: app, libraries, dependencies sab pack hai

// Tum ye box kisi bhi computer me le jao → app bilkul waise hi chalega

// Yehi Docker karta hai 💪

// Comparison
// Docker	Normal Setup
// App + environment bundled	App depend karta hai system pe installed software pe
// Portable	Machine change → errors aa sakte hain
// Lightweight	Heavy VM se better
// Fast to deploy	Slow
// Docker me key terms

// 1️⃣ Image

// Ek blueprint ya template

// “Ye app ka environment kaise chahiye” define karta hai

// 2️⃣ Container

// Image ka running version

// Box jaisa hai jisme app chal raha hai

// 3️⃣ Dockerfile

// Ek file jisme likha hota hai:

// Base image kaunsa

// App kaise install hoga

// Ports kaise open honge

// Example: Simple Node App
// # Base image
// FROM node:20

// # Working directory
// WORKDIR /app

// # Copy code
// COPY . .

// # Install dependencies
// RUN npm install

// # Start app
// CMD ["node", "index.js"]


// Ye Dockerfile image banata hai

// Phir image se container run kar sakte ho:

// docker build -t my-node-app .
// docker run -p 3000:3000 my-node-app


// Browser me jao → localhost:3000 → Node app chal raha hai 🚀

// 🧠 Easy Yaad Rakhne ke Liye

// Docker = App ka portable “box” jo kahin bhi kaam karega, bina system ke dependencies ka tension liye 😄

// اگر چاہو تو میں backend beginner friendly roadmap ke sath Docker ka simple example bhi bana ke dikhau — jisse tum samajh jao ke real project me kaise use hota hai 💪