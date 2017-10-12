function SparkMultiplayer (type) {}

/** 
 * fn(players: [SparkPlayer]) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Create a match between the given players.<p><b>params</b><p>players - An array of players to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
*/ 
SparkMultiplayer.createMatch = function(){};


/** 
 * fn(playerIds: [string]) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Create a match between the players for the given playerIds.<p><b>params</b><p>playerIds - An array of playerIds to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
*/ 
SparkMultiplayer.createMatchById = function(){};


/** 
 * fn(matchId: string, players: [SparkPlayer]) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Create a match between the given players, using the given matchId.<p><b>params</b><p>matchId - The matchId to use when creating this match<p>players - An array of players to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
*/ 
SparkMultiplayer.createMatchWithMatchId = function(){};


/** 
 * fn(matchId: string, playerIds: [string]) -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Create a match between the players for the given playerIds, using the given matchId.<p><b>params</b><p>matchId - The matchId to use when creating this match<p>playerIds - An array of playerIds to include in the match<p><b>returns</b><p>The matchId if a match was successfully created, or null<p><b>
 * 
*/ 
SparkMultiplayer.createMatchByIdWithMatchId = function(){};


/** 
 * fn(matchId: string) -> SparkMatch
 * <p> 
 * <b>validity</b> All Scripts<p>Load the match with the given matchId<p><b>params</b><p>matchId - The id of the match to load<p><b>returns</b><p>The match if a match was found with the given id<p><b>
 * 
*/ 
SparkMultiplayer.loadMatch = function(){};


/** 
 * fn(shortCode: string) -> SparkMatchConfig
 * <p> 
 * <b>validity</b> All Scripts<p>Load the match configuration for the given shortCode<p><b>params</b><p>shortCode - The shortCode of the match configuration to load<p><b>returns</b><p>The match configuration if a one was found with the given shortCode<p><b>
 * 
*/ 
SparkMultiplayer.getMatchConfig = function(){};


/** 
 * fn(pendingMatchId: string) -> PendingMatch
 * <p> 
 * <b>validity</b> All Scripts<p>Load the pending match with the given pendingMatchId<p><b>params</b><p>pendingMatchId - The id of the pending match to load<p><b>returns</b><p>The pending match if one was found with the given id<p><b>
 * 
*/ 
SparkMultiplayer.loadPendingMatchById = function(){};


/** 
 * fn(player: SparkPlayer, shortCode: string, matchGroup: string) -> PendingMatch
 * <p> 
 * <b>validity</b> All Scripts<p>Load the pending match containing the given player for the match shortCode and match group.<p><b>params</b><p>player - A player within the pending match<p>shortCode - The shortCode of the match configuration for the pending match<p>matchGroup - The matchGroup for the pending match<p><b>returns</b><p>The pending match if one was found with the given id<p><b>
 * 
*/ 
SparkMultiplayer.loadPendingMatchByPlayer = function(){};


/** 
 * fn(player: SparkPlayer, shortCode: string, matchGroup: string)
 * <p> 
 * <b>validity</b> All Scripts<p>Cancel matchmaking for the given player, match shortCode and match group.<p><b>params</b><p>player - A player within a pending match<p>shortCode - The shortCode of the match configuration for the pending match<p>matchGroup - The matchGroup for the pending match<p><b>
 * 
*/ 
SparkMultiplayer.cancelMatchmaking = function(){};


