function SparkMultiplayer (type) {}

/** 
 * <b>validity</b> All Scripts<p>Create a match between the given players.<p><b>params</b><p>players - An array of players to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
* @param { [SparkPlayer]}players
* @return {string}
*/ 
SparkMultiplayer.createMatch = function(players){};


/** 
 * <b>validity</b> All Scripts<p>Create a match between the players for the given playerIds.<p><b>params</b><p>playerIds - An array of playerIds to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
* @param { [string]}playerIds
* @return {string}
*/ 
SparkMultiplayer.createMatchById = function(playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Create a match between the given players, using the given matchId.<p><b>params</b><p>matchId - The matchId to use when creating this match<p>players - An array of players to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
* @param { string}matchId
* @param { [SparkPlayer]} players
* @return {string}
*/ 
SparkMultiplayer.createMatchWithMatchId = function(matchId,  players){};


/** 
 * <b>validity</b> All Scripts<p>Create a match between the players for the given playerIds, using the given matchId.<p><b>params</b><p>matchId - The matchId to use when creating this match<p>playerIds - An array of playerIds to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
* @param { string}matchId
* @param { [string]} playerIds
* @return {string}
*/ 
SparkMultiplayer.createMatchByIdWithMatchId = function(matchId,  playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Load the match with the given matchId<p><b>params</b><p>matchId - The id of the match to load<p><b>returns</b><p>The match if a match was found with the given id<p><b>
 * 
* @param { string}matchId
* @return {SparkMatch}
*/ 
SparkMultiplayer.loadMatch = function(matchId){};


/** 
 * <b>validity</b> All Scripts<p>Load the match configuration for the given shortCode<p><b>params</b><p>shortCode - The shortCode of the match configuration to load<p><b>returns</b><p>The match configuration if a one was found with the given shortCode<p><b>
 * 
* @param { string}shortCode
* @return {SparkMatchConfig}
*/ 
SparkMultiplayer.getMatchConfig = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Load the pending match with the given pendingMatchId<p><b>params</b><p>pendingMatchId - The id of the pending match to load<p><b>returns</b><p>The pending match if one was found with the given id<p><b>
 * 
* @param { string}pendingMatchId
* @return {PendingMatch}
*/ 
SparkMultiplayer.loadPendingMatchById = function(pendingMatchId){};


/** 
 * <b>validity</b> All Scripts<p>Load the pending match containing the given player for the match shortCode and match group.<p><b>params</b><p>player - A player within the pending match<p>shortCode - The shortCode of the match configuration for the pending match<p>matchGroup - The matchGroup for the pending match<p><b>returns</b><p>The pending match if one was found with the given id<p><b>
 * 
* @param { SparkPlayer}player
* @param { string} shortCode
* @param { string} matchGroup
* @return {PendingMatch}
*/ 
SparkMultiplayer.loadPendingMatchByPlayer = function(player,  shortCode,  matchGroup){};


/** 
 * <b>validity</b> All Scripts<p>Cancel matchmaking for the given player, match shortCode and match group.<p><b>params</b><p>player - A player within a pending match<p>shortCode - The shortCode of the match configuration for the pending match<p>matchGroup - The matchGroup for the pending match<p><b>
 * 
* @param { SparkPlayer}player
* @param { string} shortCode
* @param { string} matchGroup
*/ 
SparkMultiplayer.cancelMatchmaking = function(player,  shortCode,  matchGroup){};


