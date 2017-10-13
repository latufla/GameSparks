function SparkHttp (type) {}

/** 
 * Sets credentials to be used for Basic Auth<p><b>params</b><p>userName - the username to use<p>password - the password to use<p><b>
 * 
* @param { string}username
* @param { string} password
* @return {SparkHttp}
*/ 
SparkHttp.setBasicAuth = function(username,  password){};


/** 
 * Add custom header to the request<p><b>params</b><p>headers - A JSON object<p><b>
 * 
* @param { ?}headers
* @return {SparkHttp}
*/ 
SparkHttp.setHeaders = function(headers){};


/** 
 * Perform a HTTP GET request<p><b>
 * 
* @return {SparkHttpResponse}
*/ 
SparkHttp.get = function(){};


/** 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.postForm = function(form){};


/** 
 * Perform a HTTP POST using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { XMLObject}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.postXml = function(form){};


/** 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.postJson = function(form){};


/** 
 * Perform a HTTP POST using a string<p><b>params</b><p>data - the HTTP POST data<p><b>
 * 
* @param { string}data
* @return {SparkHttpResponse}
*/ 
SparkHttp.postString = function(data){};


/** 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.putForm = function(form){};


/** 
 * Perform a HTTP PUT using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { XMLObject}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.putXml = function(form){};


/** 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
* @return {SparkHttpResponse}
*/ 
SparkHttp.putJson = function(form){};


/** 
 * Perform a HTTP PUT using a string<p><b>params</b><p>data - the HTTP PUT data<p><b>
 * 
* @param { string}data
* @return {SparkHttpResponse}
*/ 
SparkHttp.putString = function(data){};


/** 
 * Perform a HTTP DELETE request<p><b>
 * 
* @return {SparkHttpResponse}
*/ 
SparkHttp.delete = function(){};


