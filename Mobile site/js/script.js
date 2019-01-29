function mobileOpenNavBar()
{
    document.getElementById("buttonBlock").style.display = "block";
}

function exitMobileNavBar()
{
    document.getElementById("buttonBlock").style.display = "none";
}

window.addEventListener('resize',function(){
    
if(window.innerWidth > 1400)
{
    document.getElementById("buttonBlock").style.display = "block";
    document.getElementById("navBarInfo").style.visibility = "visible";
    document.getElementById("navBarInfo").style.display = "block";
}

else
{
    document.getElementById("buttonBlock").style.display = "none";
    document.getElementById("navBarInfo").style.visibility = "hidden";
    document.getElementById("navBarInfo").style.display = "none";
}
});

function switchOpenClose()
{
    if(document.getElementById("navBarInfo").style.visibility == "hidden")
    {
        openInfo();
    }

    else
    {
        closeInfo();
    }
}

function openInfo()
{
    document.getElementById("navBarInfo").style.visibility = "visible";
    document.getElementById("navBarInfo").style.display = "block";
}

function closeInfo()
{
    document.getElementById("navBarInfo").style.visibility = "hidden";
    document.getElementById("navBarInfo").style.display = "none";    
}