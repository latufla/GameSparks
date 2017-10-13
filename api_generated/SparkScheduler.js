function SparkScheduler (type) {}

/** 
 * Schedules the execution of the supplied module. The scheduled script will run in the context of the current player<p><b>params</b><p>shortCode - The shortCode of the module to execute<p>delaySeconds - How long to wait until executing the module<p>data - The data to pass to the module. This will be available as Spark.getData() when the module is running<p><b>
 * 
* @param { string}shortCode
* @param { number} delaySeconds
* @param { ?} data
*/ 
SparkScheduler.inSeconds = function(shortCode,  delaySeconds,  data){};


/** 
 * Schedules the execution of the supplied module<p><b>params</b><p>shortCode - The shortCode of the module to execute<p>delaySeconds - How long to wait until executing the module<p>data - The data to pass to the module. This will be available as Spark.getData() when the module is running<p>key - The id of the scheduled item. If schedule already exists for the given key it's details will be updated<p><b>
 * 
* @param { string}shortCode
* @param { number} delaySeconds
* @param { ?} data
* @param { string} key
*/ 
SparkScheduler.inSeconds_1 = function(shortCode,  delaySeconds,  data,  key){};


/** 
 * Cancels the execution of a previously scheduled module.<p><b>params</b><p>key - The id of the scheduled item to cancel.<p>
 * 
* @param { string}key
*/ 
SparkScheduler.cancel = function(key){};


