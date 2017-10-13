function SparkMongoCursor (type) {}

/** 
 * Limits the number of elements returned.<p><b>params</b><p>count - the limit to set<p><b>
 * 
* @param { number}count
* @return {SparkMongoCursor}
*/ 
SparkMongoCursor.limit = function(count){};


/** 
 * Discards a given number of elements at the beginning of the cursor.<p><b>params</b><p>count - the limit to set<p><b>
 * 
* @param { number}count
* @return {SparkMongoCursor}
*/ 
SparkMongoCursor.skip = function(count){};


/** 
 * Counts the number of objects matching the query this does take limit/skip into consideration.<p><b>
 * 
* @return {number}
*/ 
SparkMongoCursor.size = function(){};


/** 
 * Counts the number of objects matching the query this does take limit/skip into consideration.<p><b>
 * 
* @return {number}
*/ 
SparkMongoCursor.count = function(){};


/** 
 * Sorts this cursor's elements. This method must be called before getting any object from the cursor.<p><b>
 * 
* @param { ?}orderBy
* @return {SparkMongoCursor}
*/ 
SparkMongoCursor.sort = function(orderBy){};


/** 
 * Checks if there is another object available.<p><b>
 * 
* @return {bool}
*/ 
SparkMongoCursor.hasNext = function(){};


/** 
 * Returns the object the cursor is at and moves the cursor ahead by one.<p><b>returns</b><p>a JSON object<p><b>
 * 
* @return {?}
*/ 
SparkMongoCursor.next = function(){};


/** 
 * Returns the element the cursor is at.<p><b>returns</b><p>a JSON object<p><b>
 * 
* @return {?}
*/ 
SparkMongoCursor.curr = function(){};


