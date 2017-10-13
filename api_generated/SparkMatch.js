function SparkMatch (type) {}

/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The id of this match<p><b>
 * 
* @return {string}
*/ 
SparkMatch.getId = function(){};


/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The id of this match<p><b>
 * 
* @return {string}
*/ 
SparkMatch.prototype.getId = function(){};


/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>An array containing all of the participants of this match<p><b>
 * 
* @return {[SparkParticipant]}
*/ 
SparkMatch.getParticipants = function(){};


/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>An array containing all of the participants of this match<p><b>
 * 
* @return {[SparkParticipant]}
*/ 
SparkMatch.prototype.getParticipants = function(){};


/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The details of the realtime server on which this match will take place.<p><b>
 * 
* @return {SparkRealtimeServer}
*/ 
SparkMatch.getServer = function(){};


/** 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The details of the realtime server on which this match will take place.<p><b>
 * 
* @return {SparkRealtimeServer}
*/ 
SparkMatch.prototype.getServer = function(){};


/** 
 * <b>validity</b> All Scripts<p>Add the given players to this match.<p><b>
 * 
* @param {[SparkPlayer]}players
*/ 
SparkMatch.addPlayers = function(players){};


/** 
 * <b>validity</b> All Scripts<p>Add the given players to this match.<p><b>
 * 
* @param {[SparkPlayer]}players
*/ 
SparkMatch.prototype.addPlayers = function(players){};


/** 
 * <b>validity</b> All Scripts<p>Add the players with the given playerIds to this match.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkMatch.addPlayersById = function(playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Add the players with the given playerIds to this match.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkMatch.prototype.addPlayersById = function(playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Remove the given players from this match.<p><b>
 * 
* @param {[SparkPlayer]}players
*/ 
SparkMatch.removePlayers = function(players){};


/** 
 * <b>validity</b> All Scripts<p>Remove the given players from this match.<p><b>
 * 
* @param {[SparkPlayer]}players
*/ 
SparkMatch.prototype.removePlayers = function(players){};


/** 
 * <b>validity</b> All Scripts<p>Remove the players with the given playerIds from this match.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkMatch.removePlayersById = function(playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Remove the players with the given playerIds from this match.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkMatch.prototype.removePlayersById = function(playerIds){};


/** 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p>The realtime servers for this match will be configured to use the realtime script provided<p><b>
 * 
* @param {string}script
*/ 
SparkMatch.enableRealtime = function(script){};


/** 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p>The realtime servers for this match will be configured to use the realtime script provided<p><b>
 * 
* @param {string}script
*/ 
SparkMatch.prototype.enableRealtime = function(script){};


/** 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p><b>
 * 
*/ 
SparkMatch.enableRealtime_8 = function(){};


/** 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p><b>
 * 
*/ 
SparkMatch.prototype.enableRealtime_8 = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the matchData for the match instance.<p><b>
 * 
* @return {?}
*/ 
SparkMatch.getMatchData = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the matchData for the match instance.<p><b>
 * 
* @return {?}
*/ 
SparkMatch.prototype.getMatchData = function(){};


/** 
 * <b>validity</b> All Scripts<p>Whether this match has realtime servers enabled.<p><b>
 * 
* @return {bool}
*/ 
SparkMatch.isRealtimeEnabled = function(){};


/** 
 * <b>validity</b> All Scripts<p>Whether this match has realtime servers enabled.<p><b>
 * 
* @return {bool}
*/ 
SparkMatch.prototype.isRealtimeEnabled = function(){};


/** 
 * <b>validity</b> All Scripts<p>Sets the matchData for the match instance.<p><b>
 * 
* @param {?}matchData
*/ 
SparkMatch.setMatchData = function(matchData){};


/** 
 * <b>validity</b> All Scripts<p>Sets the matchData for the match instance.<p><b>
 * 
* @param {?}matchData
*/ 
SparkMatch.prototype.setMatchData = function(matchData){};


