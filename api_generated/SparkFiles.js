function SparkFiles (type) {}

/** 
 * <b>validity</b> All Scripts<p>Deletes a previously uploaded file by uploadId<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
* @param { string}uploadId
*/ 
SparkFiles.deleteUploadedFile = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a SparkXmlReader interface<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
* @param { string}uploadId
*/ 
SparkFiles.uploadedXml = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a JSON object<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>returns</b><p>A JSON object<p><b>
 * 
* @param { string}uploadId
*/ 
SparkFiles.uploadedJson = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a SparkXmlReader interface<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param { string}shortCode
*/ 
SparkFiles.downloadableXml = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a JSON object<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param { string}shortCode
*/ 
SparkFiles.downloadableJson = function(shortCode){};


