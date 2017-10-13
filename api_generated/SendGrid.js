function SendGrid (type) {}

/** 
 * Adds a recipient to this email<p><b>params</b><p>email - The email address of the recipient<p>query - The name of the recipient (optional)<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}email
* @param { string} name
*/ 
SendGrid.addTo = function(email,  name){};


/** 
 * Sends this email, this step should be performed after configuring the email fully<p><b>returns</b><p>The response from SendGrid<p><b>
 * 
*/ 
SendGrid.send = function(){};


/** 
 * Sets the from address of this email<p><b>params</b><p>email - The email address of the sender<p>query - The name of the sender (optional)<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}email
* @param { string} name
*/ 
SendGrid.setFrom = function(email,  name){};


/** 
 * Sets the replyTo address of this email<p><b>params</b><p>email - The email address to replyTo<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}email
*/ 
SendGrid.setReplyTo = function(email){};


/** 
 * Sets a bcc address to this email. SendGrid only allows one address in this field<p><b>params</b><p>email - The email address to add as bcc<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}bcc
*/ 
SendGrid.setBcc = function(bcc){};


/** 
 * Sets the subject of this email<p><b>params</b><p>subject - The subject of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}subject
*/ 
SendGrid.setSubject = function(subject){};


/** 
 * Sets the text body of this email. If html is set this value is ignored.<p><b>params</b><p>text - The body of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}text
*/ 
SendGrid.setText = function(text){};


/** 
 * Sets the html body of this email.<p><b>params</b><p>html - The html body of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}html
*/ 
SendGrid.setHtml = function(html){};


/** 
 * Adds an uploaded file to the email as an attachment<p><b>params</b><p>uploadId - The id of the uploaded file<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}uploadId
*/ 
SendGrid.addUploaded = function(uploadId){};


/** 
 * Adds an downloadable file to the email as an attachment<p><b>params</b><p>shortCode - The shortCode of the downloadable<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}shortCode
*/ 
SendGrid.addDownloadable = function(shortCode){};


/** 
 * Adds an custom SMTP header to this email<p><b>params</b><p>name - The header name to set<p>value - The value to set for the header<p><b>returns</b><p>This SendGrid object<p><b>
 * 
* @param { string}key
* @param { string} value
*/ 
SendGrid.addHeader = function(key,  value){};


