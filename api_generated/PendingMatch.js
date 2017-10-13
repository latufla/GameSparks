function PendingMatch (type) {}

/** 
 * <b>validity</b> All Scripts<p>The ID for the pending match.<p><b>
 * 
*/ 
PendingMatch.getId = function(){};


/** 
 * <b>validity</b> All Scripts<p>The match shortCode for the pending match.<p><b>
 * 
*/ 
PendingMatch.getMatchShortCode = function(){};


/** 
 * <b>validity</b> All Scripts<p>The match group for the pending match.<p><b>
 * 
*/ 
PendingMatch.getMatchGroup = function(){};


/** 
 * <b>validity</b> All Scripts<p>The average skill of players in this pending match.<p><b>
 * 
*/ 
PendingMatch.getSkill = function(){};


/** 
 * <b>validity</b> All Scripts<p>The players already part of this pending match.<p><b>
 * 
*/ 
PendingMatch.getMatchedPlayers = function(){};


/** 
 * <b>validity</b> All Scripts<p>Join this pending match to the given pending match.<p><b>returns</b><p>The merged SparkPendingMatch if it was joined successfully,<p>or null if the pendingMatch could not be joined.<p><b>
 * 
* @param { PendingMatch}pendingMatchToJoin
*/ 
PendingMatch.joinPendingMatch = function(pendingMatchToJoin){};


/** 
 * <b>validity</b> All Scripts<p>Find pending matches that are suitable for matchmaking with this one.<p><b>parameters</b><p>maxMatchesToFind - the maximum number of results to return<p><b>returns</b><p>An array of pending matches suitable for matching with this one.<p><b>
 * 
* @param { number}maxMatchesToFind
*/ 
PendingMatch.findPendingMatches = function(maxMatchesToFind){};


/** 
 * <b>validity</b> All Scripts<p>Returns the matchData for the pending match.<p><b>
 * 
*/ 
PendingMatch.getMatchData = function(){};


