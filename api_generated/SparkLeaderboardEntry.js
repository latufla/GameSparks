function SparkLeaderboardEntry (type) {}

/** 
 * Returns the playerId of the player whose entry in the leaderboard this is.<p><b>
 * 
* @return {string}
*/ 
SparkLeaderboardEntry.getUserId = function(){};


/** 
 * Returns the displayName of the player whose entry in the leaderboard this is.<p><b>
 * 
* @return {string}
*/ 
SparkLeaderboardEntry.getUserName = function(){};


/** 
 * Returns the position of this entry within the leaderboard.<p><b>
 * 
* @return {number}
*/ 
SparkLeaderboardEntry.getRank = function(){};


/** 
 * Returns the rank of the player as a percentage of total entries.<p><b>
 * 
* @return {number}
*/ 
SparkLeaderboardEntry.getRankPercentage = function(){};


/** 
 * Returns a String representing the time this entry was recorded, in the format yyyy-MM-dd'T'HH:mm'Z'.<p><b>
 * 
* @return {string}
*/ 
SparkLeaderboardEntry.getWhen = function(){};


/** 
 * Returns the attribute <b>name</b> from this leaderboard entry.  Use this to get custom attributes from this entry.<p><b>params</b><p>name - the name of the attribute to be returned<p><b>
 * 
* @param { string}name
* @return {?}
*/ 
SparkLeaderboardEntry.getAttribute = function(name){};


