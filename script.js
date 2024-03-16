function toggleInfoVisibility(){
    var x = document.getElementById("info");
    var y = document.getElementById("main");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
    if (y.style.display === "none"){
        y.style.display = "block";
    }
    else{
        y.style.display = "none";
    }
}

function toggleLinks(){
    var x = document.getElementById("links");
    var y = document.getElementById("main");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
    if (y.style.display === "none"){
        y.style.display = "block";
    }
    else{
        y.style.display = "none";
    }
}

function toggleProjects(){
    var x = document.getElementById("projects");
    var y = document.getElementById("main");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
    if (y.style.display === "none"){
        y.style.display = "block";
    }
    else{
        y.style.display = "none";
    }
}

function setTime(){
    var now = new Date();
    now.setMinutes(now.getMinutes() + 120);
    document.getElementById('localTime').innerHTML = "ZA " + now.toISOString().slice(11,16);
}

setInterval(setTime, 100)

function calculateAge(){
    var birthday = new Date("2002-08-04");
    var ageDif = Date.now() - birthday;
    var age = new Date(ageDif);
    document.getElementById("gabby_age").innerHTML = Math.abs(age.getUTCFullYear() - 1970);
}