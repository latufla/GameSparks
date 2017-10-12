function SparkMongoCursor (type) {}

/** 
 * fn(count: number) -> SparkMongoCursor
 * <p> 
 * Limits the number of elements returned.<p><b>params</b><p>count - the limit to set<p><b>
 * 
*/ 
SparkMongoCursor.limit = function(){};


/** 
 * fn(count: number) -> SparkMongoCursor
 * <p> 
 * Discards a given number of elements at the beginning of the cursor.<p><b>params</b><p>count - the limit to set<p><b>
 * 
*/ 
SparkMongoCursor.skip = function(){};


/** 
 * fn() -> number
 * <p> 
 * Counts the number of objects matching the query this does take limit/skip into consideration.<p><b>
 * 
*/ 
SparkMongoCursor.size = function(){};


/** 
 * fn() -> number
 * <p> 
 * Counts the number of objects matching the query this does take limit/skip into consideration.<p><b>
 * 
*/ 
SparkMongoCursor.count = function(){};


/** 
 * fn(orderBy: ?) -> SparkMongoCursor
 * <p> 
 * Sorts this cursor's elements. This method must be called before getting any object from the cursor.<p><b>
 * 
*/ 
SparkMongoCursor.sort = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Checks if there is another object available.<p><b>
 * 
*/ 
SparkMongoCursor.hasNext = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the object the cursor is at and moves the cursor ahead by one.<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCursor.next = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the element the cursor is at.<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCursor.curr = function(){};


