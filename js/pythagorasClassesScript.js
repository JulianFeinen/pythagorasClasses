/*class Dreieck {
    constructor(aLaenge, bLaenge, cLaenge, doppelF) {
        this.aLaenge = aLaenge;
        this.bLaenge = bLaenge;
        this.cLaenge = cLaenge;
    }

    fKathetenBerechnen() {
        return this.cLaenge = Math.sqrt((this.aLaenge * this.aLaenge) + (this.bLaenge * this.bLaenge));
    }

    FlaechenRechnung() {
        return this.doppelF = (this.aLaenge * this.bLaenge) / 2;
    }

    fHypotenuseUndABerechnen() {
        return this.bLaenge = Math.sqrt((this.cLaenge * this.cLaenge) - (this.aLaenge * this.aLaenge));
    }

    fHypotenuseUndBBerechnen() {
        return this.aLaenge = Math.sqrt((this.cLaenge * this.cLaenge) - (this.cLaenge * this.bLaenge));
    }

}*/
let dreieckobj = new Dreieck();

function setCookie(cName,cValue,exdays)
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    let a =  cName + "=" + cValue + ";" + expires + "path=/";
    document.cookie = a; 
    
}
function getCookie(cName)//mein Ansatz aLaenge=129.33676971379793; bLaenge=13; cLaenge=136
{
    let cN = cName;
    let allCookies = document.cookie.split(";");
    for(let i = 0; i<allCookies.length;i++)
    {
        if(allCookies[i].includes(cN))
        {
            let temp = allCookies[i].replace(cN+"=", "");
            return temp;
        }
    }
}
function mainLoaded()
{
     if((typeof dreieckobj.aLaenge !=="undefined") && (typeof dreieckobj.bLaenge !=="undefined") && (typeof dreieckobj.cLaenge !=="undefined"))
     {   
        document.getElementById("inputA").value = getCookie("aLaenge");
        document.getElementById("inputB").value = getCookie("bLaenge");
        document.getElementById("inputC").value = getCookie("cLaenge");
     }
}

function Berechnen()
{
    if(isKathetenInputValid()) 
    {  
         dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
       
        document.getElementById("inputC").value = dreieckobj.fKathetenBerechnen();
        document.getElementById("labelF").value = (dreieckobj.FlaechenRechnung());
     
        fresultList(); 
    }

    if(isHypotenusenUndAInputValid())
    {
        dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
        if (parseFloat(dreieckobj.cLaenge) > parseFloat(dreieckobj.aLaenge))
        {
        document.getElementById("inputB").value = dreieckobj.fHypotenuseUndABerechnen();
        document.getElementById("labelF").value = (dreieckobj.FlaechenRechnung());
 
        fresultList();
        }
        else
        {
            alleInputsResetten()
            alert("FehlerA: Die Kathetenlänge darf nicht höher als die Hypotenusenlänge sein.");
        }
    }

    if(isHypotenusenUndBInputValid())
    {
        dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
        

        if(parseFloat(dreieckobj.cLaenge)>parseFloat(dreieckobj.bLaenge))
        {
        document.getElementById("inputA").value = dreieckobj.fHypotenuseUndBBerechnen();
        document.getElementById("labelF").value = (dreieckobj.FlaechenRechnung());
 
        fresultList();
        }
        else
        {
            alleInputsResetten()
            alert("FehlerB: Die Kathetenlänge darf nicht höher als die Hypotenusenlänge sein.");
        }
    }
    setAllCookies(dreieckobj);
    return false;
}





function fresultList() {
    let abstract = "a:" + dreieckobj.aLaenge + ", b:" + dreieckobj.bLaenge + ", c:" + dreieckobj.cLaenge;

    if ((typeof dreieckobj.aLaenge !== "undefined") || (typeof dreieckobj.bLaenge !== "undefined") || (typeof dreieckobj.cLaenge !== "undefined")) {
        document.getElementById("liste").innerHTML = "<li>" + abstract + "</li>" + document.getElementById("liste").innerHTML;
    }
}

function setAllCookies(dreieckobj) {
    setCookie("aLaenge", dreieckobj.aLaenge, 2);
    setCookie("bLaenge", dreieckobj.bLaenge, 2);
    setCookie("cLaenge", dreieckobj.cLaenge, 2);
    //setCookie("doppelF", dreieckobj.doppelF, 2);
    
}

function isHypotenusenUndBInputValid() {
    return (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputA").value == "");
}

function isHypotenusenUndAInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputB").value == "");
}

function isKathetenInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value == "");
}

function alleInputsResetten()
{
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
    document.getElementById("labelF").value = "";
}