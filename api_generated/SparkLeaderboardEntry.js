function SparkLeaderboardEntry (type) {}

/** 
 * fn() -> string
 * <p> 
 * Returns the playerId of the player whose entry in the leaderboard this is.<p><b>
 * 
*/ 
SparkLeaderboardEntry.getUserId = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns the displayName of the player whose entry in the leaderboard this is.<p><b>
 * 
*/ 
SparkLeaderboardEntry.getUserName = function(){};


/** 
 * fn() -> number
 * <p> 
 * Returns the position of this entry within the leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardEntry.getRank = function(){};


/** 
 * fn() -> number
 * <p> 
 * Returns the rank of the player as a percentage of total entries.<p><b>
 * 
*/ 
SparkLeaderboardEntry.getRankPercentage = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns a String representing the time this entry was recorded, in the format yyyy-MM-dd'T'HH:mm'Z'.<p><b>
 * 
*/ 
SparkLeaderboardEntry.getWhen = function(){};


/** 
 * fn(name: string) -> ?
 * <p> 
 * Returns the attribute <b>name</b> from this leaderboard entry.  Use this to get custom attributes from this entry.<p><b>params</b><p>name - the name of the attribute to be returned<p><b>
 * 
*/ 
SparkLeaderboardEntry.getAttribute = function(){};


