function GetReplacedHelper(text, replaceKey) {
    let locale = 'ko';
    let replacementText = document.getElementById("replacer").value;
    if(replacementText[replacementText.length-1] == ','){
        replacementText = replacementText.substring(0, replacementText.length-1);
    }
    let replacements = eval('(' + replacementText + ')');
    /*for (let i = 0; i < replacements.length; ++i) {
        let r = replacements[i];
        if (r.locale && r.locale != locale)
            continue;
        if (!r[replaceKey])
            continue;
        console.log("asd");*/
        let keys = Object.keys(replacements[replaceKey]);
        console.log(keys);
        for (let j = 0; j < keys.length; ++j){
            let re = new RegExp(keys[j],"gi");
            text = text.replace(re, replacements[replaceKey][keys[j]]);
        }
    //}
    return text;
}

function GetReplaced(text) {
    text = this.GetReplacedHelper(text, 'replaceText');
    document.getElementById('result').value = this.GetReplacedHelper(text, 'replaceSync');
}