import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { firebaseConfig } from "./firebase.js";


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Send Fajar's response
window.sendResponse = async function(response) {

    const message =
        document.getElementById("responseMessage");

    const buttons =
        document.querySelectorAll(".buttons button");


    // Prevent double clicks
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
    });


    try {

        await addDoc(
            collection(db, "fajar_responses"),
            {
                response: response,
                time: serverTimestamp(),
                page: "Love Fajar"
            }
        );


        if (response === "ACCEPTED ❤️") {

            message.innerHTML =
                "🥺❤️ YAYYY! Thank you Fajar... I LOVE YOU SO MUCH! ❤️";

        } else {

            message.innerHTML =
                "😳 OH NOOO 😭 Fajar is still angry... Rahul ko aur manana padega 😂❤️";

        }

    } catch (error) {

        console.error(error);

        message.innerHTML =
            "Something went wrong. Please try again.";

        buttons.forEach(button => {
            button.disabled = false;
            button.style.opacity = "1";
            button.style.cursor = "pointer";
        });

    }

};
