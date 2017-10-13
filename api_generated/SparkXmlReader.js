function SparkXmlReader (type) {}

/** 
 * Registers a function to be called when a given element is found.<p><b>params</b><p>path - A dot notated path representing the element to attach to<p>function - Your javascript function that should be called when the element is found<p><b>
 * 
* @param { string}path
* @param { Function} startCallback
*/ 
SparkXmlReader.registerCallback = function(path,  startCallback){};


/** 
 * Processes each document element and triggers any registered callback<p><b>
 * 
*/ 
SparkXmlReader.process = function(){};


/** 
 * Returns the current element in the document, generally only useful during callbacks<p>The returned element only contains the element name and any attributes, it does not include children<p><b>returns</b><p>The current element<p><b>
 * 
* @return {?}
*/ 
SparkXmlReader.getElement = function(){};


/** 
 * Returns the current element in the document as a complete xml structure including all children<p><b>returns</b><p>The current element as a document<p><b>
 * 
* @return {?}
*/ 
SparkXmlReader.getXml = function(){};


