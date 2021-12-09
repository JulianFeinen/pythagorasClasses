
let dreieckobj = new Dreieck();

function setCookie(cName,cValue,exdays)
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
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
    document.getElementById("inputA").value = getCookie("aLaenge");
    document.getElementById("inputB").value = getCookie("bLaenge");
    document.getElementById("inputC").value = getCookie("cLaenge");
}

function Berechnen()
{
    if(isKathetenInputValid()) 
    {  
         dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
       
        document.getElementById("inputC").value = dreieckobj.fKathetenBerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
        setAllCookies(dreieckobj);
    }

    if(isHypotenusenUndAInputValid())
    {
         dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
        if(dreieckobj.cLaenge>dreieckobj.aLaenge)
        {
        document.getElementById("inputB").value = dreieckobj.fHypotenuseUndABerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
        }
        else
        {
            alleInputsResetten()
            alert("Fehler: Die Kathetenlänge darf nicht höher als die Hypotenusenlänge sein.");
        }
        setAllCookies(dreieckobj);
    }

    if(isHypotenusenUndBInputValid())
    {
         dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);

        if(dreieckobj.cLaenge>dreieckobj.bLaenge)
        {
        document.getElementById("inputA").value = dreieckobj.fHypotenuseUndBBerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
        }
        else
        {
            alleInputsResetten()
            alert("Fehler: Die Kathetenlänge darf nicht höher als die Hypotenusenlänge sein.");
        }
        setAllCookies(dreieckobj);
    }
    let abstract = "a:" + dreieckobj.aLaenge + ", b:" + dreieckobj.bLaenge + ", c:" + dreieckobj.cLaenge;
    
    if((typeof dreieckobj.aLaenge !=="undefined") ||(typeof dreieckobj.bLaenge !=="undefined") || (typeof dreieckobj.cLaenge !=="undefined"))
    {
        document.getElementById("liste").innerHTML = "<li>" + abstract +"</li>" + document.getElementById("liste").innerHTML;
    }
}





function setAllCookies(dreieckobj) {
    setCookie("aLaenge", dreieckobj.aLaenge, 2);
    setCookie("bLaenge", dreieckobj.bLaenge, 2);
    setCookie("cLaenge", dreieckobj.cLaenge, 2);
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
    document.getElementById("labelF").innerHTML = "(Fläche)F:";
}