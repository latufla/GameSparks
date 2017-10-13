function SparkBulkJob (type) {}

/** 
 * Returns the ID of this bulk job.<p><b>
 * 
* @return {string}
*/ 
SparkBulkJob.getId = function(){};


/** 
 * The actual count of players affected by the bulk job<p>
 * 
* @return {number}
*/ 
SparkBulkJob.getActualCount = function(){};


/** 
 * The time at which the bulk job completed execution<p>
 * 
* @return {date}
*/ 
SparkBulkJob.getCompleted = function(){};


/** 
 * The time at which the bulk job was created<p>
 * 
* @return {date}
*/ 
SparkBulkJob.getCreated = function(){};


/** 
 * Data to be passed into the Module or Script<p>
 * 
* @return {?}
*/ 
SparkBulkJob.getData = function(){};


/** 
 * The number of players processed by the bulk job<p>
 * 
* @return {number}
*/ 
SparkBulkJob.getDoneCount = function(){};


/** 
 * The number of errors encountered whilst running the Module or Script for players<p>
 * 
* @return {number}
*/ 
SparkBulkJob.getErrorCount = function(){};


/** 
 * The estimated count of players affected by the bulk job<p>
 * 
* @return {number}
*/ 
SparkBulkJob.getEstimatedCount = function(){};


/** 
 * The Cloud Code Module to run for each player<p>
 * 
* @return {string}
*/ 
SparkBulkJob.getModuleShortCode = function(){};


/** 
 * The query to identify players to perform the bulk job on<p>
 * 
* @return {?}
*/ 
SparkBulkJob.getPlayerQuery = function(){};


/** 
 * The time at which the job was scheduled to run<p>
 * 
* @return {date}
*/ 
SparkBulkJob.getScheduledTime = function(){};


/** 
 * The Cloud Code script to run for each player<p>
 * 
* @return {string}
*/ 
SparkBulkJob.getScript = function(){};


/** 
 * The time at which the bulk job started to execute<p>
 * 
* @return {date}
*/ 
SparkBulkJob.getStarted = function(){};


