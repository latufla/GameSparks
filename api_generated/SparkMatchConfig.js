function SparkMatchConfig (type) {}

/** 
 * <b>validity</b> All Scripts<p>Returns the shortCode of the match<p>
 * 
* @return {string}
*/ 
SparkMatchConfig.getShortCode = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the name of the match<p>
 * 
* @return {string}
*/ 
SparkMatchConfig.getName = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the description of the match<p>
 * 
* @return {string}
*/ 
SparkMatchConfig.getDescription = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
* @return {number}
*/ 
SparkMatchConfig.getMinPlayers = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
* @return {number}
*/ 
SparkMatchConfig.getMaxPlayers = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the minimum number of players in the match<p>
 * 
* @return {bool}
*/ 
SparkMatchConfig.getRealtime = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the Realtime script<p>
 * 
* @return {string}
*/ 
SparkMatchConfig.getRealtimeScript = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns true if the match is Drop In/Drop Out<p>
 * 
* @return {bool}
*/ 
SparkMatchConfig.getDropInDropOut = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the number of seconds before Drop In/Drop Out expires<p>
 * 
* @return {number}
*/ 
SparkMatchConfig.getDropInDropOutExpire = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns true if the match is a manual match<p>
 * 
* @return {bool}
*/ 
SparkMatchConfig.getManuallyMatch = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the number of seconds before players are disconnected for Drop In/Drop Out matches<p>
 * 
* @return {number}
*/ 
SparkMatchConfig.getPlayerDisconnectThreshold = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of thresholds in the match<p>
 * 
* @return {List}
*/ 
SparkMatchConfig.getThresholds = function(){};


/** 
 * <b>validity</b> All Scripts<p>Creates a new pending match containing the given players.<p>Any existing pending matches for these players with the same matchGroup will be cancelled.<p>
 * 
* @param { string}matchGroup
* @param { number} skill
* @param { [SparkPlayer]} players
* @return {PendingMatch}
*/ 
SparkMatchConfig.createPendingMatch = function(matchGroup,  skill,  players){};


/** 
 * <b>validity</b> All Scripts<p>Creates a new pending match containing the given players.<p>Any existing pending matches for these players with the same matchGroup will be cancelled.<p>
 * 
* @param { string}matchGroup
* @param { number} skill
* @param { ?} customQuery
* @param { ?} matchData
* @param { [SparkPlayer]} players
* @return {PendingMatch}
*/ 
SparkMatchConfig.createPendingMatchWithCustomQuery = function(matchGroup,  skill,  customQuery,  matchData,  players){};


