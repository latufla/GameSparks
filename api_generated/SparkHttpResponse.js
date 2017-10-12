function SparkHttpResponse (type) {}

/** 
 * fn() -> ?
 * <p> 
 * Returns the headers from the response.<p><b>returns</b><p>A JSON object containing the headers<p><b>
 * 
*/ 
SparkHttpResponse.getHeaders = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns values for 'Set-Cookie' headers in the response.<p><b>returns</b><p>A JSON array containing values of the Set-Cookie headers<p><b>
 * 
*/ 
SparkHttpResponse.getCookies = function(){};


/** 
 * fn() -> number
 * <p> 
 * Returns the response code.<p>e.g. 200<p><b>returns</b><p>the HTTP status code<p><b>
 * 
*/ 
SparkHttpResponse.getResponseCode = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns the body from the response.<p><b>returns</b><p>A string representing the body of the response.<p><b>
 * 
*/ 
SparkHttpResponse.getResponseString = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the body from the response as XML.<p><b>returns</b><p>An XML object representing the body of the response.<p><b>
 * 
*/ 
SparkHttpResponse.getResponseXml = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the body from the response as JSON.<p><b>returns</b><p>A JSON object representing the body of the response.<p><b>
 * 
*/ 
SparkHttpResponse.getResponseJson = function(){};


