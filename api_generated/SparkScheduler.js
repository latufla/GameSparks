function SparkScheduler (type) {}

/** 
 * fn(shortCode: string, delaySeconds: number, data: ?) -> bool
 * <p> 
 * Schedules the execution of the supplied module. The scheduled script will run in the context of the current player<p><b>params</b><p>shortCode - The shortCode of the module to execute<p>delaySeconds - How long to wait until executing the module<p>data - The data to pass to the module. This will be available as Spark.getData() when the module is running<p><b>
 * 
*/ 
SparkScheduler.inSeconds = function(){};


/** 
 * fn(shortCode: string, delaySeconds: number, data: ?, key: string) -> bool
 * <p> 
 * Schedules the execution of the supplied module<p><b>params</b><p>shortCode - The shortCode of the module to execute<p>delaySeconds - How long to wait until executing the module<p>data - The data to pass to the module. This will be available as Spark.getData() when the module is running<p>key - The id of the scheduled item. If schedule already exists for the given key it's details will be updated<p><b>
 * 
*/ 
SparkScheduler.inSeconds_1 = function(){};


/** 
 * fn(key: string)
 * <p> 
 * Cancels the execution of a previously scheduled module.<p><b>params</b><p>key - The id of the scheduled item to cancel.<p>
 * 
*/ 
SparkScheduler.cancel = function(){};


