/* global */
by.tagWithText = function (tag,text) {
    return by.xpath("//" + tag + "[contains(.,'" + text + "')]")
}

by.buttonWithText = function (text) {
    return by.buttonText(text)
}

by.parent = function() {
    return by.xpath('..')
}


firstWord = function(s) {
    return s.split(/\b/)[0];
}
totalRecords=function(s) {
    if (s == '')
        return 0;
    var s1 = s.substring(s.indexOf("of ")+3);
    return s1.substr(0, s1.indexOf(" "));
}
