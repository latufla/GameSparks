function SparkCache (type) {}

/** 
 * fn(key: string, object: ?)
 * <p> 
 * Adds an object to the cache<p><b>
 * 
*/ 
SparkCache.put = function(){};


/** 
 * fn(key: string) -> ?
 * <p> 
 * Gets an objects from the cache<p><b>returns</b><p>A JavaScipt object, or null depending on whether put has ben called for the given key <p><b>
 * 
*/ 
SparkCache.get = function(){};


/** 
 * fn(key: string)
 * <p> 
 * Remove an object from the cache<p>The object will be removed form the cache, and form the database. Subsequent calls to get will return null<p><b>
 * 
*/ 
SparkCache.remove = function(){};


/** 
 * fn()
 * <p> 
 * Clears everything from the cache<p><b>
 * 
*/ 
SparkCache.removeAll = function(){};


/** 
 * fn(pattern: string)
 * <p> 
 * Clears all objects from the cache where the keys match the regex pattern provided.<p>the match pattern is ultimately used by mongo to do a $regex query, which uses<p>"Perl Compatible Regular Expressions" (PCRE) as the matching engine.<p><pre rel="highlighter" code-brush="js" contenteditable="false"> theCache.removeAll("match\..*\.2014)</pre><p>
 * 
*/ 
SparkCache.removeAll_4 = function(){};


