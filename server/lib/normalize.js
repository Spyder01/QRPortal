const jsonExt = '.json';
 
function normalize(url){
    if (/(^q=AIP|^AIP)/ig.test(url))
        return normalizeFileName(url);
 
    if (/(^q=Echo|^Echo)/ig.test(url))
        return normalizeFileName(url);
 
    // add AIP as a default prefix
    return 'AIP/'.concat( normalizeFileName(url));
}
 
function normalizeFileName( fileName ){
    // add json as extension file name when required
    return (/(\.json)/ig.test(fileName) ? fileName : fileName + jsonExt);
}
 
module.exports = normalize;