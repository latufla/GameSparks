function SparkFiles (type) {}

/** 
 * <b>validity</b> All Scripts<p>Deletes a previously uploaded file by uploadId<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
* @param {string}uploadId
* @return {bool}
*/ 
SparkFiles.deleteUploadedFile = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a SparkXmlReader interface<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
* @param {string}uploadId
* @return {SparkXmlReader}
*/ 
SparkFiles.uploadedXml = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a JSON object<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>returns</b><p>A JSON object<p><b>
 * 
* @param {string}uploadId
* @return {?}
*/ 
SparkFiles.uploadedJson = function(uploadId){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a SparkXmlReader interface<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param {string}shortCode
* @return {SparkXmlReader}
*/ 
SparkFiles.downloadableXml = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a JSON object<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param {string}shortCode
* @return {?}
*/ 
SparkFiles.downloadableJson = function(shortCode){};


