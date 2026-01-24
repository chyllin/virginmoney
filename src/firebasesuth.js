// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
 import { getAuth, createUsedWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display='block';
    messageDiv.innerText=message;
    messageDiv.style.opacity='1';
    setTimeout(function(){
      messageDiv.style.opacity='0';

    },5000);
  }
  const firebaseConfig = {
    apiKey: "AIzaSyCLjhA5vjoPq9dml_n_wm-WfY0v9ksv2tI",
    authDomain: "virgin-43c2b.firebaseapp.com",
    projectId: "virgin-43c2b",
    storageBucket: "virgin-43c2b.firebasestorage.app",
    messagingSenderId: "214661170235",
    appId: "1:214661170235:web:a69e9d7741f1dd4346c81e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const signup=document.getElementById('submitsignup');
  signup.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstname=document.getElementById('fName').value;
    const lastname=document.getElementById('lName').value;
    const auth=getAuth();
    const db=getFirestore();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user;
      const userData={
        email:email,
        firstName:firstname,
        lastName:lastname,
        balance:0
      };
      showMessage('Account created successfully!','signUpMessage');
      const docRef=doc(db,'users',user.uid);
      setDoc(docRef,userData)
      .then(()=>{
         Window.location.href='index.html';
      })
      .catch((error)=>{
        console.error('Error writing document',error);

      });
      })
      .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use')
          showMessage('Email Address Exists!!!','signUpMessage');
        else
          showMessage('unable to create user', 'signUpMessage');
      
      
  })
  });