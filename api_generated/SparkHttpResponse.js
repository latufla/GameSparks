function SparkHttpResponse (type) {}

/** 
 * Returns the headers from the response.<p><b>returns</b><p>A JSON object containing the headers<p><b>
 * 
* @return {?}
*/ 
SparkHttpResponse.getHeaders = function(){};


/** 
 * Returns values for 'Set-Cookie' headers in the response.<p><b>returns</b><p>A JSON array containing values of the Set-Cookie headers<p><b>
 * 
* @return {?}
*/ 
SparkHttpResponse.getCookies = function(){};


/** 
 * Returns the response code.<p>e.g. 200<p><b>returns</b><p>the HTTP status code<p><b>
 * 
* @return {number}
*/ 
SparkHttpResponse.getResponseCode = function(){};


/** 
 * Returns the body from the response.<p><b>returns</b><p>A string representing the body of the response.<p><b>
 * 
* @return {string}
*/ 
SparkHttpResponse.getResponseString = function(){};


/** 
 * Returns the body from the response as XML.<p><b>returns</b><p>An XML object representing the body of the response.<p><b>
 * 
* @return {?}
*/ 
SparkHttpResponse.getResponseXml = function(){};


/** 
 * Returns the body from the response as JSON.<p><b>returns</b><p>A JSON object representing the body of the response.<p><b>
 * 
* @return {?}
*/ 
SparkHttpResponse.getResponseJson = function(){};


