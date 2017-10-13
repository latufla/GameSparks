function SparkBulkScheduler (type) {}

/** 
 * <b>validity</b> All Scripts<p>Submit a job to be executed by running a Cloud Code module.<p><b>params</b><p>playerQuery - A query to be run against the player collection to identify the players to execute against<p>module - A Cloud Code module short code, to be executed against each player<p>data - Data to be passed in to the Cloud Code module<p>delaySeconds - The number of seconds in the future to execute the job<p><b>returns</b><p>The jobId if the job was accepted, or null<p><b>
 * 
* @param { ?}playerQuery
* @param { string} module
* @param { ?} data
* @param { number} delaySeconds
* @return {string}
*/ 
SparkBulkScheduler.submitJobModule = function(playerQuery,  module,  data,  delaySeconds){};


/** 
 * <b>validity</b> All Scripts<p>Submit a job to be executed by running an ad-hoc script.<p><b>params</b><p>playerQuery - A query to be run against the player collection to identify the players to execute against<p>script - A Cloud Code script to be executed against each player<p>data - Data to be passed in to the script<p>delaySeconds - The number of seconds in the future to execute the job<p><b>returns</b><p>The jobId if the job was accepted, or null<p><b>
 * 
* @param { ?}playerQuery
* @param { string} script
* @param { ?} data
* @param { number} delaySeconds
* @return {string}
*/ 
SparkBulkScheduler.submitJobScript = function(playerQuery,  script,  data,  delaySeconds){};


/** 
 * <b>validity</b> All Scripts<p>Cancel a previously scheduled bulk job.<p><b>params</b><p>jobId - The ID of the job to cancel<p><b>returns</b><p>true if the job was cancelled, false otherwise<p><b>
 * 
* @param { string}jobId
* @return {bool}
*/ 
SparkBulkScheduler.cancelJob = function(jobId){};


/** 
 * <b>validity</b> All Scripts<p>List previously scheduled bulk jobs.<p><b>params</b><p>jobIds - The IDs of the jobs to list, or null to list all pending jobs<p><b>returns</b><p>An array of bulk jobs<p><b>
 * 
* @param { [string]}jobIds
* @return {SparkBulkJob[]}
*/ 
SparkBulkScheduler.listBulkJobs = function(jobIds){};


