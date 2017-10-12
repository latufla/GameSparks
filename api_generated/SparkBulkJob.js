function SparkBulkJob (type) {}

/** 
 * fn() -> string
 * <p> 
 * Returns the ID of this bulk job.<p><b>
 * 
*/ 
SparkBulkJob.getId = function(){};


/** 
 * fn() -> number
 * <p> 
 * The actual count of players affected by the bulk job<p>
 * 
*/ 
SparkBulkJob.getActualCount = function(){};


/** 
 * fn() -> date
 * <p> 
 * The time at which the bulk job completed execution<p>
 * 
*/ 
SparkBulkJob.getCompleted = function(){};


/** 
 * fn() -> date
 * <p> 
 * The time at which the bulk job was created<p>
 * 
*/ 
SparkBulkJob.getCreated = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Data to be passed into the Module or Script<p>
 * 
*/ 
SparkBulkJob.getData = function(){};


/** 
 * fn() -> number
 * <p> 
 * The number of players processed by the bulk job<p>
 * 
*/ 
SparkBulkJob.getDoneCount = function(){};


/** 
 * fn() -> number
 * <p> 
 * The number of errors encountered whilst running the Module or Script for players<p>
 * 
*/ 
SparkBulkJob.getErrorCount = function(){};


/** 
 * fn() -> number
 * <p> 
 * The estimated count of players affected by the bulk job<p>
 * 
*/ 
SparkBulkJob.getEstimatedCount = function(){};


/** 
 * fn() -> string
 * <p> 
 * The Cloud Code Module to run for each player<p>
 * 
*/ 
SparkBulkJob.getModuleShortCode = function(){};


/** 
 * fn() -> ?
 * <p> 
 * The query to identify players to perform the bulk job on<p>
 * 
*/ 
SparkBulkJob.getPlayerQuery = function(){};


/** 
 * fn() -> date
 * <p> 
 * The time at which the job was scheduled to run<p>
 * 
*/ 
SparkBulkJob.getScheduledTime = function(){};


/** 
 * fn() -> string
 * <p> 
 * The Cloud Code script to run for each player<p>
 * 
*/ 
SparkBulkJob.getScript = function(){};


/** 
 * fn() -> date
 * <p> 
 * The time at which the bulk job started to execute<p>
 * 
*/ 
SparkBulkJob.getStarted = function(){};


