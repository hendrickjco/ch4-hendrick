const c_rock = document.getElementById("rock-com");
const c_paper = document.getElementById("paper-com");
const c_scr = document.getElementById("scr-com");

const p_rock = document.getElementById("rock-pl");
const p_paper = document.getElementById("paper-pl");
const p_scr = document.getElementById("scr-pl");

c_rock.addEventListener("mouseover", setBGC);
c_rock.addEventListener("mouseleave", removeBGC);
c_rock.addEventListener("click");

function setBGC() {
    c_rock.style.backgroundColor = "red";
    console.log("Com Rock");
}

function removeBGC() {
    c_rock.style.backgroundColor = "";
    console.log("bye com rock");
}

c_paper.addEventListener("mouseover", setBGC);
c_paper.addEventListener("mouseleave", removeBGC);
c_paper.addEventListener("click");

function setBGC() {
    c_rock.style.backgroundColor = "red";
    console.log("Com Rock");
}

function removeBGC() {
    c_rock.style.backgroundColor = "";
    console.log("bye com rock");
}