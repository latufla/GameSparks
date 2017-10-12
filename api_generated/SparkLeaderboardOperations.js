function SparkLeaderboardOperations (type) {}

/** 
 * fn(rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.union = function(){};


/** 
 * fn(rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.union_1 = function(){};


/** 
 * fn(rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.intersection = function(){};


/** 
 * fn(rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.intersection_3 = function(){};


/** 
 * fn(rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating this operation and the owners of entries within the given leaderboard.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.difference = function(){};


/** 
 * fn(rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating this operation and the set of owners returned as result of evaluating the given operation.<p>Returns a new SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.difference_5 = function(){};


/** 
 * fn() -> [string]
 * <p> 
 * <b>validity</b> All Scripts<p>Returns an array of ids representing the result set of evaluating this operation.<p><b>
 * 
*/ 
SparkLeaderboardOperations.evaluate = function(){};


