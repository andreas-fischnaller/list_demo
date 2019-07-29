/* Create and set global variables*/
let cpText = document.getElementById("cp_text");                
let textbox = document.getElementById("textbox");
let output = document.getElementById("output");        
let wordlist = document.getElementById("wordlist");
let wordlistMenu = document.getElementById("wordlist_menu");
let languageSelect = document.getElementById("language_select");
let dictionary = "";

let forceInput = false;

document.body.addEventListener("keydown", function(e) 
{
    e = e || window.event;
    var key = e.which || e.keyCode; 
    var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); 

    if ( key == 67 && ctrl ) 
    {        
        if (wordlist.style.display == "block") downloadList("copy"); 
    }

},
false);

/* Check if language is set */
let lang = new URLSearchParams(document.location.search.substring(1)).get("lang");        
if (lang == null) 
{        
    showLanguageSelect();
}
else 
{
    createUI();
}

function showLanguageSelect()
{
    document.getElementById("languages").innerHTML = "Select language:<br><br>";
    if (languageSelect.style.display == "block" && lang != null)
    {        
        languageSelect.style.display = "none";        
    }
    else 
    { 
        languages.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        for (let i = 0; i < languages.length; i++)
        {                
            document.getElementById("languages").innerHTML += `
            <div class="btn" onclick="window.location.search = '?lang=${languages[i].value}'">
                ${languages[i].name}
            </div>                
            `;
        } 
        languageSelect.style.display = "block";
    }

}
    
function createUI() 
{
    document.getElementById("dictionary").innerHTML = checkLabel(labels[lang].dictionary)+": ";
    document.getElementById("go").innerHTML = checkLabel(labels[lang].go);
    document.getElementById("clearTextarea").innerHTML = checkLabel(labels[lang].clearTextarea);
    document.getElementById("print").innerHTML = checkLabel(labels[lang].print);
    document.getElementById("dl_copy").innerHTML = checkLabel(labels[lang].copy);
    cpText.value = checkLabel(labels[lang].textarea);
    let check, style = "";    
    dictionaries[lang].push({"name": "Wiktionary","value": "wiki","url": "https://"+lang+".wiktionary.org/wiki/","endString": "","directInput": true,"standard": false});    
    dictionaries[lang].sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
    for (let i = 0; i < dictionaries[lang].length; i++)
    {
        if (dictionaries[lang][i].standard == true) 
        {
            dictionary = dictionaries[lang][i].value;
            check = ` checked="checked"`;
        }
        else 
        {
            check = "";
        }
        if (dictionaries[lang][i].directInput == false) style = `style="background-color: rgba(255, 0, 0, 0.25);"`;
        else style = `style="background-color: rgba(0, 255, 0, 0.25);padding:0;"`;        
        document.getElementById("dictionary_select").innerHTML += `        
            <span style="white-space: nowrap;">    
                <label ${style}>
                    <input type="radio" name="dictionary" value="${dictionaries[lang][i].value}" onclick="dictionary = this.value;"${check}/> ${dictionaries[lang][i].name} 
                </label> 
            </span>`;
    }                    
}

function clearTextarea(source)
{   
    let inputStrings = [checkLabel(labels[lang].translation), checkLabel(labels[lang].annotation)]; 
    cpText.style.color = "rgb(0, 0, 0)";
    if (source == "textarea")
    {
        if (cpText.value == checkLabel(labels[lang].textarea))
        {
            cpText.value = "";                            
        }
    }    
    if (source == "button") cpText.value = ""; cpText.focus();                             
    if (source != "button" && source != "textarea")
    {
        let target = document.getElementById(source);                
        target.style.color = "rgb(0, 0, 0)";
        if (inputStrings.indexOf(target.innerHTML) != -1)
        {
            target.innerHTML = "";                            
        }
    }
}

function go()
{
    let textString = cpText.value;     
    while (/[ |\n]/g.test(textString.charAt(textString.length-1)))
    {
        textString = textString.slice(0, textString.length-1);
    }
    if (/[\.\:\!\?]/g.test(textString.charAt(textString.length-1)) == false) textString += `.`;    
    let annText = "";
    let url = dictionaries[lang].find(x => x.value === dictionary).url;
    let endString = dictionaries[lang].find(x => x.value === dictionary).endString;
    let directInput = dictionaries[lang].find(x => x.value === dictionary).directInput;    
    if (directInput == false)
    {                
        url = "https://" + new URL(url).hostname;                
        endString = "";
    }
    textString = textString.replace(/\n/g, " <br>").replace(/\"/gi, "&quot;").replace(/\'/gi, "&apos;");
    let words = textString.split(" ");
    let searchString;
    let example = "";
    let i_min = 0;
    let i_max = 0;    
    let links = words.map((x, i, a) => 
    { 
        i_max = i;              
        while(a[i_max].search(/([\.\:\!\?])/g) == -1)
        {
            i_max++;
        }
        i_max += 1;        
        example = words.slice(i_min, i_max).join(" ");                                
        if (x.search(/([\.\:\!\?])/g) != -1)
        {
            i_min = i+1;            
        }          
        let search = x.replace(/\&quot\;|\&apos\;|\<br\>|[\.\,\-\_\:\;\!\?\\\'\"\§\$\%\&\/\(\)\[\]\{\}\*\´\`\~\<\>\#]|[0-9]/gi, "");                
        if (directInput == false) searchString = "";
        else searchString = search;                
        x = templates[lang].linkFormat(x, search, searchString, url, endString, example, i);
        return x;        
    });
    annText = links.join(" ");
    textbox.style.display = "none";
    output.style.display = "block";
    output.innerHTML = annText;     
    // Islex-fix:
    if (dictionary == "islex" && directInput == true)                   
    {
        let form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("action", "http://islex.is/islex#lleit");
        form.setAttribute("id", "form");
        form.setAttribute("target", "_blank");
        form.innerHTML = `
                        <input type="hidden" name="finna" value="1">
                        <input type="hidden" name="dict" value="A">
                        <input type="hidden" name="erflokin" value="0">
                        <input type="hidden" name="nlo" value="1">
                        <input type="hidden" name="nlj" value="1">
                        <input type="hidden" name="fuzz" value="1">
                        <input type="hidden" name="samleit" value="" id="searchString">
        `;
        document.body.appendChild(form);
    }
}

function addWord(word, example, id, ddPattern)
{    
    let word2 = "";      
    if (word.split(/ /g).length > 1) 
    {
        word2 = word.split(/ /g)[1];
        word = word.split(/ /g)[0];                
    }
    example = example.split(/ /g);
    example = example.map((z) =>
    {   
        let y = z.replace(/\<br\>|[\.\,\-\_\:\;\!\?\\\'\"\§\$\%\&\/\(\)\[\]\{\}\*\´\`\~\<\>\#]|[0-9]/gi, "");                
        if (y == word || y == word2 && word2 != "") z = `<em class='emp'>${z}</em>`;
        return z;
    });
    if (!ddPattern) ddPattern = "";
    if (word2 != "") word2 = ddPattern + word2;
    example = example.join(" ");            
    wordlist.style.display = "block";
    wordlistMenu.style.display = "block";
    let itemId = Math.random().toString(36).substr(2, 7);
    while (document.getElementById(itemId))
    {
        itemId = Math.random().toString(36).substr(2, 7);
    }
    let translation = checkLabel(labels[lang].translation);
    let annotation = checkLabel(labels[lang].annotation);    
    let wordItem = document.createElement("div");
    wordItem.setAttribute("id", itemId);    
    wordItem.innerHTML = templates[lang].wordItem(itemId, word, word2, example, translation, annotation, id);            
    wordlist.appendChild(wordItem);
    document.getElementById(itemId).scrollIntoView();
    let directInput = dictionaries[lang].find(x => x.value === dictionary).directInput;
    if (directInput == false)
    {
        document.getElementById("lex"+itemId).select();
        document.execCommand("copy");            
    }
    // Islex-fix:    
    if (dictionary == "islex" && directInput == true)
    {        
        document.getElementById("searchString").value = word;
        document.getElementById("form").submit();
        document.getElementById(id).setAttribute("target", "");
        document.getElementById(id).setAttribute("href", "#");
    }
    if (forceInput == true)
    {
        document.getElementsByTagName("body")[0].setAttribute("style", "overflow:hidden;");
        document.getElementById("overlay").setAttribute("style", "display: block;")
    }
}

function removeWord(word, i)
{            
    let id = document.getElementById(word);
    id.parentNode.removeChild(id);
    if (wordlist.childElementCount < 1) 
    {
        wordlist.style.display = "none";
        wordlistMenu.style.display = "none";
    }
    if (forceInput == true)
    {
        document.getElementsByTagName("body")[0].setAttribute("style", "overflow:none;");    
        document.getElementById("overlay").setAttribute("style", "display: none;")
    }
    document.getElementById(i).scrollIntoView();
}

function checkInput(id, i)
{
    if (forceInput == true)
    {
        let translation = checkLabel(labels[lang].translation);    
        let input = document.getElementById(id).innerHTML;
        if (input !== translation && input !== "")
        {
        document.getElementsByTagName("body")[0].setAttribute("style", "overflow:none;");    
        document.getElementById("overlay").setAttribute("style", "display: none;")
        document.getElementById(i).scrollIntoView();
        }
    }
    else
    {
        document.getElementById(i).scrollIntoView();
    }
}

function downloadList(type, print)
{            
    let worditems = wordlist.getElementsByClassName("worditem");
    let ids = [];
    let copyString = "";
    for (let i = 0; i < worditems.length; i++)
    {
        ids.push(worditems[i].id);        
    }
    let exportFilename = checkLabel(labels[lang].exportFilename);
    let anchor = document.getElementById("dl_"+type);
    anchor.setAttribute('download', checkLabel(labels[lang].exportFilename) + Date.now() + '.'+type);
    if (type == "html") 
    {
        copyString = templates["global"].exportHTMLStart(exportFilename);
        ids.map((x) => {                
            let lex = document.getElementById("lex"+x).innerHTML;
            let exp = document.getElementById("exp"+x).innerHTML.replace(/[\n\t\r]| {2}|/g, "");
            let trans = document.getElementById("trans"+x).innerHTML;
            let ann = document.getElementById("ann"+x).innerHTML;
            copyString += templates["global"].exportHTML(lex, exp, trans, ann);                    
            return x;
        });
        if (print == true)
        {                    
            let printWindow = window.open("", checkLabel(labels[lang].exportFilename)+ Date.now()+".html", "toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,width=400,height=400");            
            printWindow.document.write(`${copyString}${templates["global"].exportHTMLEnd()}`); 
            printWindow.print();
        }
        else
        {                    
            anchor.setAttribute('href', `data:text/${type};charset=UTF-8,${copyString}${templates["global"].exportHTMLEnd()}`);            
        }
    }
    if (type == "json")
    {
        let JSONArrayName = checkLabel(labels[lang].JSONArrayName);

        copyString = templates["global"].exportJSONStart(JSONArrayName);
        ids.map((x) => {                
            let lex = document.getElementById("lex"+x).innerHTML;
            let exp = document.getElementById("exp"+x).innerHTML.replace(/[\n\t\r]| {2}| class=\"emp\"/g, "");
            let trans = document.getElementById("trans"+x).innerHTML;
            let ann = document.getElementById("ann"+x).innerHTML;
            copyString += templates["global"].exportJSON(lex, exp, trans, ann);
            return x; 
        });
        copyString = copyString.slice(0, copyString.length-2);
        anchor.setAttribute('href', `data:text/${type};charset=UTF-8,${copyString}${templates["global"].exportJSONEnd()}`);
    }
    if (type == "copy")
    {
        let annString = checkLabel(labels[lang].annotation);
        let expString = checkLabel(labels[lang].example);
        ids.map((x) => {                
            let lex = document.getElementById("lex"+x).innerHTML;
            let exp = document.getElementById("exp"+x).innerHTML.replace(/[\n\t\r]| {2}|<em class=\"emp\">|<\/em>/g, "");
            let trans = document.getElementById("trans"+x).innerHTML;
            let ann = document.getElementById("ann"+x).innerHTML;                
            
            copyString += templates["global"].exportClipboard(lex, exp, trans, ann, annString, expString);            
            return x;
        });
        copyString = copyString.slice(0, copyString.length-2);
        let hidden = document.createElement("textarea");
        wordlistMenu.appendChild(hidden);
        hidden.value = copyString;
        hidden.select();
        document.execCommand('copy');
        wordlistMenu.removeChild(hidden);
    }
}

function checkLabel(label)
{
    if (label.charAt(0) == "$")
    {
        let key = Object.keys(labels[lang]).find(x => labels[lang][x] === label);
        label = labels["en"][key];
    }
    return label;    
}

function drop(e, val, example, id)
{
    e.preventDefault();    
    let data = e.dataTransfer.getData("text").split("#");          
    let ddPattern;
    if (data[1] > id) ddPattern = languages.find(x => x.value === lang).ddPattern.rtl;    
    if (data[1] < id) ddPattern = languages.find(x => x.value === lang).ddPattern.ltr;    
    let url = dictionaries[lang].find(x => x.value === dictionary).url;
    let endString = dictionaries[lang].find(x => x.value === dictionary).endString;
    let directInput = dictionaries[lang].find(x => x.value === dictionary).directInput;        
    addWord(data[0] + ddPattern + val, example, id, ddPattern);
    if (directInput == false)
    {
        url = "https://" + new URL(url).hostname;                
        window.open(url);
    }
    else
    {           
        window.open(`${url}${data[0]}${ddPattern}${val}${endString}`);
    } 
}

function drag(e, val)
{
    e.dataTransfer.setData("text", val);    
}

function allowDrop(e)
{
    e.preventDefault();
}