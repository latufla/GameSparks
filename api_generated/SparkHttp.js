function SparkHttp (type) {}

/** 
 * fn(username: string, password: string) -> SparkHttp
 * <p> 
 * Sets credentials to be used for Basic Auth<p><b>params</b><p>userName - the username to use<p>password - the password to use<p><b>
 * 
*/ 
SparkHttp.setBasicAuth = function(){};


/** 
 * fn(headers: ?) -> SparkHttp
 * <p> 
 * Add custom header to the request<p><b>params</b><p>headers - A JSON object<p><b>
 * 
*/ 
SparkHttp.setHeaders = function(){};


/** 
 * fn() -> SparkHttpResponse
 * <p> 
 * Perform a HTTP GET request<p><b>
 * 
*/ 
SparkHttp.get = function(){};


/** 
 * fn(form: ?) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.postForm = function(){};


/** 
 * fn(form: XMLObject) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP POST using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.postXml = function(){};


/** 
 * fn(form: ?) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP POST using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.postJson = function(){};


/** 
 * fn(data: string) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP POST using a string<p><b>params</b><p>data - the HTTP POST data<p><b>
 * 
*/ 
SparkHttp.postString = function(){};


/** 
 * fn(form: ?) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.putForm = function(){};


/** 
 * fn(form: XMLObject) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP PUT using an XML form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.putXml = function(){};


/** 
 * fn(form: ?) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP PUT using a JSON form object<p><b>params</b><p>form - the HTTP form data<p><b>
 * 
*/ 
SparkHttp.putJson = function(){};


/** 
 * fn(data: string) -> SparkHttpResponse
 * <p> 
 * Perform a HTTP PUT using a string<p><b>params</b><p>data - the HTTP PUT data<p><b>
 * 
*/ 
SparkHttp.putString = function(){};


/** 
 * fn() -> SparkHttpResponse
 * <p> 
 * Perform a HTTP DELETE request<p><b>
 * 
*/ 
SparkHttp.delete = function(){};


