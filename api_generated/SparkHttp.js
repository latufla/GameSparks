function SparkHttp (type) {}

/** 
 * Sets credentials to be used for Basic Auth<p><b>params</b><p>userName - the username to use<p>password - the password to use<p><b>
 * 
* @param { string}username
* @param { string} password
*/ 
SparkHttp.setBasicAuth = function(username,  password){};


/** 
 * Add custom header to the request<p><b>params</b><p>headers - A JSON object<p><b>
 * 
* @param { ?}headers
*/ 
SparkHttp.setHeaders = function(headers){};


/** 
 * Perform a HTTP GET request<p><b>
 * 
*/ 
SparkHttp.get = function(){};


/** 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
*/ 
SparkHttp.postForm = function(form){};


/** 
 * Perform a HTTP POST using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { XMLObject}form
*/ 
SparkHttp.postXml = function(form){};


/** 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
*/ 
SparkHttp.postJson = function(form){};


/** 
 * Perform a HTTP POST using a string<p><b>params</b><p>data - the HTTP POST data<p><b>
 * 
* @param { string}data
*/ 
SparkHttp.postString = function(data){};


/** 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
*/ 
SparkHttp.putForm = function(form){};


/** 
 * Perform a HTTP PUT using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { XMLObject}form
*/ 
SparkHttp.putXml = function(form){};


/** 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
* @param { ?}form
*/ 
SparkHttp.putJson = function(form){};


/** 
 * Perform a HTTP PUT using a string<p><b>params</b><p>data - the HTTP PUT data<p><b>
 * 
* @param { string}data
*/ 
SparkHttp.putString = function(data){};


/** 
 * Perform a HTTP DELETE request<p><b>
 * 
*/ 
SparkHttp.delete = function(){};


