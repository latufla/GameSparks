function SendGrid (type) {}

/** 
 * fn(email: string, name: string) -> SendGrid
 * <p> 
 * Adds a recipient to this email<p><b>params</b><p>email - The email address of the recipient<p>query - The name of the recipient (optional)<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.addTo = function(){};


/** 
 * fn() -> string
 * <p> 
 * Sends this email, this step should be performed after configuring the email fully<p><b>returns</b><p>The response from SendGrid<p><b>
 * 
*/ 
SendGrid.send = function(){};


/** 
 * fn(email: string, name: string) -> SendGrid
 * <p> 
 * Sets the from address of this email<p><b>params</b><p>email - The email address of the sender<p>query - The name of the sender (optional)<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setFrom = function(){};


/** 
 * fn(email: string) -> SendGrid
 * <p> 
 * Sets the replyTo address of this email<p><b>params</b><p>email - The email address to replyTo<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setReplyTo = function(){};


/** 
 * fn(bcc: string) -> SendGrid
 * <p> 
 * Sets a bcc address to this email. SendGrid only allows one address in this field<p><b>params</b><p>email - The email address to add as bcc<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setBcc = function(){};


/** 
 * fn(subject: string) -> SendGrid
 * <p> 
 * Sets the subject of this email<p><b>params</b><p>subject - The subject of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setSubject = function(){};


/** 
 * fn(text: string) -> SendGrid
 * <p> 
 * Sets the text body of this email. If html is set this value is ignored.<p><b>params</b><p>text - The body of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setText = function(){};


/** 
 * fn(html: string) -> SendGrid
 * <p> 
 * Sets the html body of this email.<p><b>params</b><p>html - The html body of the email<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.setHtml = function(){};


/** 
 * fn(uploadId: string) -> SendGrid
 * <p> 
 * Adds an uploaded file to the email as an attachment<p><b>params</b><p>uploadId - The id of the uploaded file<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.addUploaded = function(){};


/** 
 * fn(shortCode: string) -> SendGrid
 * <p> 
 * Adds an downloadable file to the email as an attachment<p><b>params</b><p>shortCode - The shortCode of the downloadable<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.addDownloadable = function(){};


/** 
 * fn(key: string, value: string) -> SendGrid
 * <p> 
 * Adds an custom SMTP header to this email<p><b>params</b><p>name - The header name to set<p>value - The value to set for the header<p><b>returns</b><p>This SendGrid object<p><b>
 * 
*/ 
SendGrid.addHeader = function(){};


