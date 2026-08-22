// =================================================
// FAJAR LOVE WEBSITE
// =================================================


// PASTE YOUR GOOGLE APPS SCRIPT URL HERE

const GOOGLE_SCRIPT_URL =
    "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";


// =================================================
// SEND RESPONSE
// =================================================

async function sendResponse(response) {

    const acceptButton =
        document.getElementById("acceptBtn");

    const rejectButton =
        document.getElementById("rejectBtn");

    const message =
        document.getElementById("responseMessage");


    // Disable both buttons

    acceptButton.disabled = true;
    rejectButton.disabled = true;


    acceptButton.style.opacity = "0.6";
    rejectButton.style.opacity = "0.6";


    message.innerHTML =
        "💌 Sending your answer...";


    try {

        await fetch(
            GOOGLE_SCRIPT_URL,
            {

                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body: JSON.stringify({

                    response: response,

                    page:
                        "Love You Fajar",

                    device:
                        navigator.userAgent

                })

            }
        );


        // ==============================
        // ACCEPTED
        // ==============================

        if (
            response ===
            "ACCEPTED ❤️"
        ) {

            message.innerHTML =
                "🥺❤️ YAYYYY! Fajar ne sorry accept kar li! I LOVE YOU SO MUCH! ❤️";


            createHeartExplosion();

        }


        // ==============================
        // REJECTED
        // ==============================

        else {

            message.innerHTML =
                "😭😤 OH NOOO! Fajar abhi bhi gussa hai... Rahul ko aur manana padega! ❤️";

        }


    } catch (error) {

        console.error(error);


        message.innerHTML =
            "❌ Response send nahi ho paya. Please try again.";


        acceptButton.disabled = false;
        rejectButton.disabled = false;

        acceptButton.style.opacity = "1";
        rejectButton.style.opacity = "1";

    }

}


// =================================================
// HEART EXPLOSION
// =================================================

function createHeartExplosion() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            ["❤️","💕","💗","💖"]
            [
                Math.floor(
                    Math.random() * 4
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            (15 + Math.random() * 30)
            + "px";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";


        const x =
            (Math.random() - .5)
            * 500;

        const y =
            (Math.random() - .5)
            * 500;


        heart.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.2)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1200 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            2200
        );

    }

}
