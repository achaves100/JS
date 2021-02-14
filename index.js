function generator () {
    var who = ["Juan", "Maria", "Pablo", "Roberto"]; 
    var action = ["duerme", "come", "escribe", "habla"];
    var when = ["hoy", "despues", "durante clases", "anteayer"];
 
    var msg =
        who[Math.floor(Math.random() * who.length)] + " " +
        action[Math.floor(Math.random() * action.length)] + " " +
        when[Math.floor(Math.random() * when.length)];
        document.querySelector("#excuse").innerHTML=msg;
    }
    console.log(generator());