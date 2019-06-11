let templates = {
    "sv": {
    linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                x =`<a 
                    id="${i}"
                    href="${url}${searchString.toLowerCase()}${endString}"
                    target="_blank" 
                    class="textlink" 
                    onclick="addWord('${search}', '${example}', ${i}); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondrop="drop(event, '${search}', '${example}', ${i}); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                    ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                    ondragstart="drag(event, '${search}');" 
                    draggable="true"
                    >${x}</a>`;

                    return x;
                },
                
    wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                x = `<div class="worditem" id="${itemId}">
                        <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                        <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                        <p>
                            <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word.toLowerCase()}${word2}</textarea>
                        </p>            
                        <p contenteditable="true" class="example" id="exp${itemId}">
                            ${example}
                        </p>
                        <p>
                            <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                        </p>        
                        <p>
                            <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                        </p>
                    </div> 
                    <br>`;
                return x;
                }
    },

    "da": {
        linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                    x =`<a
                        id="${i}" 
                        href="${url}${searchString.toLowerCase()}${endString}"
                        target="_blank" 
                        class="textlink" 
                        onclick="addWord('${search}','${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrop="drop(event, '${search}', '${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                        ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                        ondragstart="drag(event, '${search}');" 
                        draggable="true"
                        >${x}</a>`;
    
                        return x;
                },

        wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                    x = `<div class="worditem" id="${itemId}">
                            <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                            <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                            <p>
                                <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word.toLowerCase()}${word2}</textarea>
                            </p>            
                            <p contenteditable="true" class="example" id="exp${itemId}">
                                ${example}
                            </p>
                            <p>
                                <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                            </p>        
                            <p>
                                <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                            </p>
                        </div> 
                        <br>`;
                    return x;
                }
    },

    "fo": {
        linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                    x =`<a 
                        id="${i}"
                        href="${url}${searchString.toLowerCase()}${endString}"
                        target="_blank" 
                        class="textlink" 
                        onclick="addWord('${search}','${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrop="drop(event, '${search}', '${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                        ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                        ondragstart="drag(event, '${search}');" 
                        draggable="true"
                        >${x}</a>`;
    
                        return x;
                },
        wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                    x = `<div class="worditem" id="${itemId}">
                            <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                            <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                            <p>
                                <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word.toLowerCase()}${word2}</textarea>
                            </p>            
                            <p contenteditable="true" class="example" id="exp${itemId}">
                                ${example}
                            </p>
                            <p>
                                <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                            </p>        
                            <p>
                                <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                            </p>
                        </div> 
                        <br>`;
                    return x;
                }
    },

    "is": {
        linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                    x =`<a 
                        id="${i}"
                        href="${url}${searchString.toLowerCase()}${endString}"
                        target="_blank" 
                        class="textlink" 
                        onclick="addWord('${search}','${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrop="drop(event, '${search}', '${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                        ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                        ondragstart="drag(event, '${search}');" 
                        draggable="true"
                        >${x}</a>`;
    
                        return x;
                },

        wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                    x = `<div class="worditem" id="${itemId}">
                            <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                            <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                            <p>
                                <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word.toLowerCase()}${word2}</textarea>
                            </p>            
                            <p contenteditable="true" class="example" id="exp${itemId}">
                                ${example}
                            </p>
                            <p>
                                <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                            </p>        
                            <p>
                                <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                            </p>
                        </div> 
                        <br>`;
                    return x;
                }
    },

    "no": {
        linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                    x =`<a
                        id="${i}" 
                        href="${url}${searchString.toLowerCase()}${endString}"
                        target="_blank" 
                        class="textlink" 
                        onclick="addWord('${search}','${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrop="drop(event, '${search}', '${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                        ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                        ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                        ondragstart="drag(event, '${search}');" 
                        draggable="true"
                        >${x}</a>`;
    
                        return x;
                    },

        wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                    x = `<div class="worditem" id="${itemId}">
                            <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                            <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                            <p>
                                <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word.toLowerCase()}${word2}</textarea>
                            </p>            
                            <p contenteditable="true" class="example" id="exp${itemId}">
                                ${example}
                            </p>
                            <p>
                                <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                            </p>        
                            <p>
                                <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                            </p>
                        </div> 
                        <br>`;
                    return x;
                }
    }, 
              
    "de": {
    linkFormat: (x, search, searchString, url, endString, example, i) => {                                        
                x =`<a
                    id="${i}" 
                    href="${url}${searchString}${endString}"
                    target="_blank" 
                    class="textlink" 
                    onclick="addWord('${search}','${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondrop="drop(event, '${search}', '${example}', '${i}'); this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondrag="this.style.color = 'rgb(64, 64, 64)'; this.style.backgroundColor = 'rgb(246, 246, 246)';"
                    ondragover="allowDrop(event); this.style.backgroundColor = 'rgb(144, 238, 144)';"
                    ondragleave="this.style.backgroundColor = 'rgb(256, 256, 256)';"                    
                    ondragstart="drag(event, '${search}');" 
                    draggable="true"
                    >${x}</a>`;
                    
                    return x;
                },

    wordItem: (itemId, word, word2, example, translation, annotation, id) => {
                x = `<div class="worditem" id="${itemId}">
                    <span class="backbtn" onclick="document.getElementById('${id}').scrollIntoView();">^</span>
                        <span class="delbtn" onclick="removeWord('${itemId}')">&#10005;</span>
                        <p>
                            <textarea id="lex${itemId}" onfocus="clearTextarea(this.id);" class="lex">${word}${word2}</textarea>
                        </p>            
                        <p contenteditable="true" class="example" id="exp${itemId}">
                            ${example}
                        </p>
                        <p>
                            <textarea  id="trans${itemId}" onfocus="clearTextarea(this.id);" class="trann">${translation}</textarea>
                        </p>        
                        <p>
                            <textarea id="ann${itemId}" onfocus="clearTextarea(this.id);" class="trann">${annotation}</textarea>
                        </p>
                    </div> 
                    <br>`;
                return x;
                }
    },

    "global": {
    exportHTMLStart: (exportFilename) => {
                x = `<!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="UTF-8">                
                        <title>${exportFilename}${Date.now()}.html</title>
                        <style type="text/css">
                        body
                        {
                            font-family: sans-serif;
                        }
                        .worditem
                        {
                            border: 1px solid black;
                            padding: 0.25%;
                        }
                        .lex
                        {
                            font-size: 125%;
                            font-weight: bold;
                        }
                        .exp
                        {
                            font-style: italic;
                            font-size: 75%;
                        }
                        .trans
                        {
                            font-size: 100%;
                        }
                        .ann
                        {
                            font-size: 100%;
                        }
                        .emp
                        {
                            font-weight: bold;
                            text-decoration: underline;
                        }
                        </style>               
                        </head>
                        <body>`;
                return x;
                },  

    exportHTML: (lex, exp, trans, ann)  => {
                x = `<div class="worditem">                        
                        <p contenteditable="true" class="lex">
                            ${lex}
                        </p>            
                        <p contenteditable="true" class="exp">
                            ${exp}
                        </p>
                        <p contenteditable="true" class="trans">
                            ${trans}
                        </p>
                        <p contenteditable="true" class="ann">
                            ${ann}
                        </p>
                    </div> 
                    <br>`;
                return x;
                },

    exportHTMLEnd: () => {
                x = `</body>
                </html>`; 
                return x;
                },
    
    exportJSONStart: (JSONArrayName) => {
                x = `{\r\t"${JSONArrayName}": [`;
                return x;
                },

    exportJSON: (lex, exp, trans, ann) => {
                x= `{\r\t\t"word": "${lex}",\r\t\t"example": "${exp}",\r\t\t"translation": "${trans}",\r\t\t"annotation": "${ann}"\r\t}, `;
                return x;
                },

    exportJSONEnd: () => { 
                x = `]\r}`;
                return x;
                },

    exportClipboard: (lex, exp, trans, ann, annString, expString) => {
                x = `${lex}: ${trans}\n${expString}: ${exp}\n${annString}: ${ann}\n\n`;    
                return x;
                }
    }
};