function reFormatCamelToOtherCase(str){;
    let reformattedStr = str.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
    reformattedStr = reformattedStr.charAt(0) === '-' ? reformattedStr.slice(1) : reformattedStr;
    //console.log(reformattedStr); // Output: "foo-bar"
    return reformattedStr;
}

export default reFormatCamelToOtherCase;