function settings()
{        
    let children = document.getElementsByTagName("*");        

    let icon = document.createElement("div");        
    icon.style.position = "fixed";
    icon.style.right = "0.25%";
    icon.style.top = "0.5%";
    icon.style.textAlign = "right";
    icon.style.zIndex = "1000";        
    icon.style.fontSize = "12pt";
    icon.style.cursor = "pointer";
    icon.innerHTML = "&#x1f527;"
    icon.addEventListener("click", (e) => {
        if (overlay.style.display == "none") overlay.style.display = "block";
        else overlay.style.display = "none";
    });
    
    let overlay = document.createElement("div");        
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.display = "none";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "rgba(0,0,0,0.15)";
    overlay.style.zIndex = "999";
    overlay.addEventListener("click", (e) => {            
        if (e.target.id == "overlay") overlay.style.display = "none";
    });    

    let menuContainer = document.createElement("div");
    menuContainer.style.position = "absolute";
    menuContainer.style.top = "50%";
    menuContainer.style.left = "50%";
    menuContainer.style.transform = "translate(-50%,-50%)";
    menuContainer.style.fontFamily = "sans-serif";
    menuContainer.style.fontSize = "12pt";
    menuContainer.style.padding = "2%";
    menuContainer.style.backgroundColor = "rgb(255, 255, 255)";
    
    let fontFamilies = ["sans-serif", "serif", "monospace", "Arial, Helvetica, sans-serif", "Verdana, Geneva, sans-serif", "Tahoma, Geneva, sans-serif", "Georgia, serif", "Palatino, serif", "Times, serif", "Courier, monospace", "Monaco, monospace"].sort();        
    
    let fontFamilySelect = document.createElement("select");        
    for (i=-1; i<fontFamilies.length; i++)
    {
        let option = document.createElement("option");
        if (i == -1)
        {
            option.value = "";
            option.innerText = "(font family)"
        }
        else
        {
            option.value = fontFamilies[i];
            option.innerText = fontFamilies[i];
        }                     
        fontFamilySelect.appendChild(option);
    }                
    fontFamilySelect.addEventListener("change", (e) => {            
        document.body.style.fontFamily = e.target.value;
        for (i=0; i<children.length; i++)
        {
            children[i].style.fontFamily = e.target.value;
        }
    })        

    let fontSizeSelect = document.createElement("select");        
    for (i=0; i<18; i++)
    {
        let option = document.createElement("option");
        if (i == 0)
        {
            option.value = "";
            option.innerText = "(font size)"
        }
        else
        {
            option.value = i+8+"pt";
            option.innerText = i+8+"pt";
        }            
        fontSizeSelect.appendChild(option);
        i++;
    }
    fontSizeSelect.addEventListener("change", (e) => {
        document.body.style.fontSize = e.target.value;
        for (i=0; i<children.length; i++)
        {
            children[i].style.fontSize = e.target.value;
        }
    });        

    let lineHeightSelect = document.createElement("select");
    let lineHeightPercent = 50;
    for (i=0; i<11; i++)
    {
        let option = document.createElement("option");
        if (i == 0)
        {
            option.value = "";
            option.innerText = "(line height)"
        }
        else
        {
            option.value = lineHeightPercent+"%";
            option.innerText = lineHeightPercent+"%";
        }            
        lineHeightSelect.appendChild(option);            
        lineHeightPercent += 25;
    }
    lineHeightSelect.addEventListener("change", (e) => {
        document.body.style.lineHeight = e.target.value;
        for (i=0; i<children.length; i++)
        {
            children[i].style.lineHeight = e.target.value;
            if (children[i].className == "btn" || children[i].className == "button" ) children[i].style.lineHeight = "initial";
        }        
    });

    document.body.appendChild(icon);
    document.body.appendChild(overlay);
    overlay.appendChild(menuContainer);        
    menuContainer.appendChild(fontFamilySelect);        
    menuContainer.appendChild(fontSizeSelect);        
    menuContainer.appendChild(lineHeightSelect);
}
settings();