function SparkMatch (type) {}

/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The id of this match<p><b>
 * 
*/ 
SparkMatch.getId = function(){};


/** 
 * fn() -> [SparkParticipant]
 * <p> 
 * <b>validity</b> All Scripts<p><b>returns</b><p>An array containing all of the participants of this match<p><b>
 * 
*/ 
SparkMatch.getParticipants = function(){};


/** 
 * fn() -> SparkRealtimeServer
 * <p> 
 * <b>validity</b> All Scripts<p><b>returns</b><p>The details of the realtime server on which this match will take place.<p><b>
 * 
*/ 
SparkMatch.getServer = function(){};


/** 
 * fn(players: [SparkPlayer])
 * <p> 
 * <b>validity</b> All Scripts<p>Add the given players to this match.<p><b>
 * 
*/ 
SparkMatch.addPlayers = function(){};


/** 
 * fn(playerIds: [string])
 * <p> 
 * <b>validity</b> All Scripts<p>Add the players with the given playerIds to this match.<p><b>
 * 
*/ 
SparkMatch.addPlayersById = function(){};


/** 
 * fn(players: [SparkPlayer])
 * <p> 
 * <b>validity</b> All Scripts<p>Remove the given players from this match.<p><b>
 * 
*/ 
SparkMatch.removePlayers = function(){};


/** 
 * fn(playerIds: [string])
 * <p> 
 * <b>validity</b> All Scripts<p>Remove the players with the given playerIds from this match.<p><b>
 * 
*/ 
SparkMatch.removePlayersById = function(){};


/** 
 * fn(script: string)
 * <p> 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p>The realtime servers for this match will be configured to use the realtime script provided<p><b>
 * 
*/ 
SparkMatch.enableRealtime = function(){};


/** 
 * fn()
 * <p> 
 * <b>validity</b> All Scripts<p>If this match is not already realtime enabled, this method will enabled realtime.<p><b>
 * 
*/ 
SparkMatch.enableRealtime_8 = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the matchData for the match instance.<p><b>
 * 
*/ 
SparkMatch.getMatchData = function(){};


/** 
 * fn() -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Whether this match has realtime servers enabled.<p><b>
 * 
*/ 
SparkMatch.isRealtimeEnabled = function(){};


/** 
 * fn(matchData: ?)
 * <p> 
 * <b>validity</b> All Scripts<p>Sets the matchData for the match instance.<p><b>
 * 
*/ 
SparkMatch.setMatchData = function(){};


