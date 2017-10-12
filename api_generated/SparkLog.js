function SparkLog (type) {}

/** 
 * fn(msg: ?)
 * <p> 
 * Records value into the spark.log table with the level set to debug.<p><b>params</b><p>msg - the message to log<p><b>
 * 
*/ 
SparkLog.debug = function(){};


/** 
 * fn(msg: ?)
 * <p> 
 * Records value into the spark.log table with the level set to info.<p><b>params</b><p>msg - the message to log<p><b>
 * 
*/ 
SparkLog.info = function(){};


/** 
 * fn(msg: ?)
 * <p> 
 * Records value into the spark.log table with the level set to warn.<p><b>params</b><p>msg - the message to log<p><b>
 * 
*/ 
SparkLog.warn = function(){};


/** 
 * fn(msg: ?)
 * <p> 
 * Records value into the spark.log table with the level set to info.<p><b>params</b><p>msg - the message to log<p><b>
 * 
*/ 
SparkLog.error = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns the currently configured log level.<p><b>
 * 
*/ 
SparkLog.getLevel = function(){};


/** 
 * fn(level: string)
 * <p> 
 * Updates the current level that logs will be written at.<p>Entries will only be written if the level is greater than the current level set.<p>Available levels are: "DEBUG", "INFO", "WARN", "ERROR".<p>Note: this change takes time to propagate throughout the system, it may be minutes before all servers are using the new level.<p><b>params</b><p>level - the new level at which to log<p><b>
 * 
*/ 
SparkLog.setLevel = function(){};


