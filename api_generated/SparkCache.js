function SparkCache (type) {}

/** 
 * Adds an object to the cache<p><b>
 * 
* @param {string}key
* @param {?} object
*/ 
SparkCache.put = function(key,  object){};


/** 
 * Adds an object to the cache<p><b>
 * 
* @param {string}key
* @param {?} object
*/ 
SparkCache.prototype.put = function(key,  object){};


/** 
 * Gets an objects from the cache<p><b>returns</b><p>A JavaScipt object, or null depending on whether put has ben called for the given key <p><b>
 * 
* @param {string}key
* @return {?}
*/ 
SparkCache.get = function(key){};


/** 
 * Gets an objects from the cache<p><b>returns</b><p>A JavaScipt object, or null depending on whether put has ben called for the given key <p><b>
 * 
* @param {string}key
* @return {?}
*/ 
SparkCache.prototype.get = function(key){};


/** 
 * Remove an object from the cache<p>The object will be removed form the cache, and form the database. Subsequent calls to get will return null<p><b>
 * 
* @param {string}key
*/ 
SparkCache.remove = function(key){};


/** 
 * Remove an object from the cache<p>The object will be removed form the cache, and form the database. Subsequent calls to get will return null<p><b>
 * 
* @param {string}key
*/ 
SparkCache.prototype.remove = function(key){};


/** 
 * Clears everything from the cache<p><b>
 * 
*/ 
SparkCache.removeAll = function(){};


/** 
 * Clears everything from the cache<p><b>
 * 
*/ 
SparkCache.prototype.removeAll = function(){};


/** 
 * Clears all objects from the cache where the keys match the regex pattern provided.<p>the match pattern is ultimately used by mongo to do a $regex query, which uses<p>"Perl Compatible Regular Expressions" (PCRE) as the matching engine.<p><pre rel="highlighter" code-brush="js" contenteditable="false"> theCache.removeAll("match\..*\.2014)</pre><p>
 * 
* @param {string}pattern
*/ 
SparkCache.removeAll_4 = function(pattern){};


/** 
 * Clears all objects from the cache where the keys match the regex pattern provided.<p>the match pattern is ultimately used by mongo to do a $regex query, which uses<p>"Perl Compatible Regular Expressions" (PCRE) as the matching engine.<p><pre rel="highlighter" code-brush="js" contenteditable="false"> theCache.removeAll("match\..*\.2014)</pre><p>
 * 
* @param {string}pattern
*/ 
SparkCache.prototype.removeAll_4 = function(pattern){};


