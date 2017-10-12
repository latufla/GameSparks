function SparkFiles (type) {}

/** 
 * fn(uploadId: string) -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Deletes a previously uploaded file by uploadId<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
*/ 
SparkFiles.deleteUploadedFile = function(){};


/** 
 * fn(uploadId: string) -> SparkXmlReader
 * <p> 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a SparkXmlReader interface<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
*/ 
SparkFiles.uploadedXml = function(){};


/** 
 * fn(uploadId: string) -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Provides access to an uploaded file via a JSON object<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>returns</b><p>A JSON object<p><b>
 * 
*/ 
SparkFiles.uploadedJson = function(){};


/** 
 * fn(shortCode: string) -> SparkXmlReader
 * <p> 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a SparkXmlReader interface<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
*/ 
SparkFiles.downloadableXml = function(){};


/** 
 * fn(shortCode: string) -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Provides access to a downloadable file via a JSON object<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
*/ 
SparkFiles.downloadableJson = function(){};


