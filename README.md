# list
## Introduction
**list** allows the user to paste a text from the clipboard and output an annotated text, in which the all the words are transformed into links. Klicking these links will
1. add the word to a list and
2. directly open the entry of the word in an online-dictionary*.

(* if this behaviour is allowed by the dictionary, cfr. below)

## Features
### 1. List
**General**

Words that are clicked are added to a list which includes
1. *textarea* with the word itself the way it is in the text,
2. *p* with the sentence from which it was picked in the text as an example,
3. *textarea* with mandatory translation(s) of the word added by the user,
4. *textarea* with optional annotation(s) added by the user.

**Drag and Drop**

Words can be dragged and dropped onto other words. result depends on the language. In a German text, dropping the prefix of a separable verb onto the verb will add the prefix to the beginning of the verb: dropping *ein* on *kaufen* will result in *einkaufen*. In a Swedish text, dropping a verb on a particle will combine the verb with the particle separated by a whitespace: dropping *tycker* on *om* will result in *tycker om*.

**_JSON_, _HTML_, _Copy_ and _Print_**

The list can be saved as a *.json*- or *html*-file and it can also be printed or copied to the users clipboard.

### 2. Online-Dictionaries
If the selected online-dictionary allows direct input into its search function, the entry of the clicked word will be opened directly in a new tab. If this behaviour is not allowed by the online-dictionary, the main page of the dictionary will open and the clicked word will be copied to the clipboard.

## Files
### list.html: 
Displays language menu if parameter _lang_ is not set (list.html?lang=_language_as_tld_). Then displays the textarea into which the text is copied and dictionaries. 

**Go**: Hides textarea, displays words as links to the selected dictionary. The list of words is added to the end of the text. If a word is added, the **JSON**, **HTML**, **Copy** and **Print**-buttons are shown.

### css/style.css
Styles the elements in list.html and most of the JS-generated elements.

### js/dictionaries.js
Contains the available dictionaries and further information on them. 
### js/lang.js
Contains the available languages for the language selection menu. Also contains the pattern for how to connect the drag&drop-elements.
### js/labels.js
Contains the texts for all the labeled elements in **list**, sorted by language.
### js/main.js
Contains the global variables and the main functions of **list**:
* addWord(_word_)
* allowDrop(_e_) 
* checkLabel(_label_)
* clearTextarea(_source_) 
* createUI()
* downloadList(_type_, _print_)
* drag(_e_, _val_)
* drop(_e_, _val_)
* go()
* removeWord(_word_)
* showLanguageSelect()
### js/templates.js
Contains both global and language-specific templates. Global templates are the format for the JSON-, HTML- and clipboard export. Here, the style of the exported html-file can be changed. Language-specific templates are the format of the created link in the text and how the single "wordItems" should be displayed in the list.
