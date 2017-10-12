function SparkBulkScheduler (type) {}

/** 
 * fn(playerQuery: ?, module: string, data: ?, delaySeconds: number) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Submit a job to be executed by running a Cloud Code module.<p><b>params</b><p>playerQuery - A query to be run against the player collection to identify the players to execute against<p>module - A Cloud Code module short code, to be executed against each player<p>data - Data to be passed in to the Cloud Code module<p>delaySeconds - The number of seconds in the future to execute the job<p><b>returns</b><p>The jobId if the job was accepted, or null<p><b>
 * 
*/ 
SparkBulkScheduler.submitJobModule = function(){};


/** 
 * fn(playerQuery: ?, script: string, data: ?, delaySeconds: number) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Submit a job to be executed by running an ad-hoc script.<p><b>params</b><p>playerQuery - A query to be run against the player collection to identify the players to execute against<p>script - A Cloud Code script to be executed against each player<p>data - Data to be passed in to the script<p>delaySeconds - The number of seconds in the future to execute the job<p><b>returns</b><p>The jobId if the job was accepted, or null<p><b>
 * 
*/ 
SparkBulkScheduler.submitJobScript = function(){};


/** 
 * fn(jobId: string) -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Cancel a previously scheduled bulk job.<p><b>params</b><p>jobId - The ID of the job to cancel<p><b>returns</b><p>true if the job was cancelled, false otherwise<p><b>
 * 
*/ 
SparkBulkScheduler.cancelJob = function(){};


/** 
 * fn(jobIds: [string]) -> SparkBulkJob[]
 * <p> 
 * <b>validity</b> All Scripts<p>List previously scheduled bulk jobs.<p><b>params</b><p>jobIds - The IDs of the jobs to list, or null to list all pending jobs<p><b>returns</b><p>An array of bulk jobs<p><b>
 * 
*/ 
SparkBulkScheduler.listBulkJobs = function(){};


