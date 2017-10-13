function SparkLeaderboardOperations (type) {}

/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.union = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.union_1 = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.intersection = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.intersection_3 = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.difference = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}rhs
* @return {SparkLeaderboardOperations}
*/ 
SparkLeaderboardOperations.difference_5 = function(rhs){};


/** 
 * <b>validity</b> All Scripts<p>Returns an array of ids representing the result set of evaluating this operation.<p><b>
 * 
* @return {[string]}
*/ 
SparkLeaderboardOperations.evaluate = function(){};


