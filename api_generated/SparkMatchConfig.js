function SparkMatchConfig (type) {}

/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the shortCode of the match<p>
 * 
*/ 
SparkMatchConfig.getShortCode = function(){};


/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the name of the match<p>
 * 
*/ 
SparkMatchConfig.getName = function(){};


/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the description of the match<p>
 * 
*/ 
SparkMatchConfig.getDescription = function(){};


/** 
 * fn() -> number
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
*/ 
SparkMatchConfig.getMinPlayers = function(){};


/** 
 * fn() -> number
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
*/ 
SparkMatchConfig.getMaxPlayers = function(){};


/** 
 * fn() -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
*/ 
SparkMatchConfig.getRealtime = function(){};


/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the Realtime script<p>
 * 
*/ 
SparkMatchConfig.getRealtimeScript = function(){};


/** 
 * fn() -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Returns true if the match is Drop In/Drop Out<p>
 * 
*/ 
SparkMatchConfig.getDropInDropOut = function(){};


/** 
 * fn() -> number
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the number of seconds before Drop In/Drop Out expires<p>
 * 
*/ 
SparkMatchConfig.getDropInDropOutExpire = function(){};


/** 
 * fn() -> bool
 * <p> 
 * <b>validity</b> All Scripts<p>Returns true if the match is a manual match<p>
 * 
*/ 
SparkMatchConfig.getManuallyMatch = function(){};


/** 
 * fn() -> number
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the number of seconds before players are disconnected for Drop In/Drop Out matches<p>
 * 
*/ 
SparkMatchConfig.getPlayerDisconnectThreshold = function(){};


/** 
 * fn() -> List
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of thresholds in the match<p>
 * 
*/ 
SparkMatchConfig.getThresholds = function(){};


/** 
 * fn(matchGroup: string, skill: number, players: [SparkPlayer]) -> PendingMatch
 * <p> 
 * <b>validity</b> All Scripts<p>Creates a new pending match containing the given players.<p>Any existing pending matches for these players with the same matchGroup will be cancelled.<p>
 * 
*/ 
SparkMatchConfig.createPendingMatch = function(){};


/** 
 * fn(matchGroup: string, skill: number, customQuery: ?, matchData: ?, players: [SparkPlayer]) -> PendingMatch
 * <p> 
 * <b>validity</b> All Scripts<p>Creates a new pending match containing the given players.<p>Any existing pending matches for these players with the same matchGroup will be cancelled.<p>
 * 
*/ 
SparkMatchConfig.createPendingMatchWithCustomQuery = function(){};


