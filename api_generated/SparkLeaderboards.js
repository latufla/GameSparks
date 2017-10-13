function SparkLeaderboards (type) {}

/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a SparkLeaderboard object by its shortCode.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p><b>
 * 
* @param { string}shortCode
*/ 
SparkLeaderboards.getLeaderboard = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
* @param { string}shortCode
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getSocialLeaderboard = function(shortCode,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
* @param { string}shortCode
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getInverseSocialLeaderboard = function(shortCode,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player with the given playerId and the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
* @param { string}shortCode
* @param { string} playerId
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getSocialLeaderboardAs = function(shortCode,  playerId,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
* @param { string}shortCode
* @param { string} playerId
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getInverseSocialLeaderboardAs = function(shortCode,  playerId,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
* @param { string}shortCode
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getTeamLeaderboard = function(shortCode,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
* @param { string}shortCode
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getInverseTeamLeaderboard = function(shortCode,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
* @param { string}shortCode
* @param { string} playerId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getTeamLeaderboardAs = function(shortCode,  playerId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
* @param { string}shortCode
* @param { string} playerId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getInverseTeamLeaderboardAs = function(shortCode,  playerId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Gives access to all leaderboards configured for the game<p><b>
 * 
*/ 
SparkLeaderboards.listLeaderboards = function(){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a SparkLeaderboard object for a specific challenge by the challengeInstanceId.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p><b>
 * 
* @param { string}challengeInstanceId
*/ 
SparkLeaderboards.getChallengeLeaderboard = function(challengeInstanceId){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
* @param { string}challengeInstanceId
* @param { [string]} friendsIds
*/ 
SparkLeaderboards.getSocialChallengeLeaderboard = function(challengeInstanceId,  friendsIds){};


/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.union = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.union_13 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.union_14 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.union_15 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
* @param { string}challengeInstanceId
* @param { [string]} friendsIds
*/ 
SparkLeaderboards.getInverseSocialChallengeLeaderboard = function(challengeInstanceId,  friendsIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the player with the given playerId and the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
* @param { string}challengeInstanceId
* @param { string} playerId
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getSocialChallengeLeaderboardAs = function(challengeInstanceId,  playerId,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the players to be excluded from this social leaderboard.<p><b>
 * 
* @param { string}challengeInstanceId
* @param { string} playerId
* @param { [string]} friendIds
*/ 
SparkLeaderboards.getInverseSocialChallengeLeaderboardAs = function(challengeInstanceId,  playerId,  friendIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
* @param { string}challengeInstanceId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getTeamChallengeLeaderboard = function(challengeInstanceId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
* @param { string}challengeInstanceId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getInverseTeamChallengeLeaderboard = function(challengeInstanceId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.intersection = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.intersection_22 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.intersection_23 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.intersection_24 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
* @param { string}challengeInstanceId
* @param { string} playerId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getTeamChallengeLeaderboardAs = function(challengeInstanceId,  playerId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the given player, where the social group  excludes the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
* @param { string}challengeInstanceId
* @param { string} playerId
* @param { [string]} teamIds
*/ 
SparkLeaderboards.getInverseTeamChallengeLeaderboardAs = function(challengeInstanceId,  playerId,  teamIds){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.difference = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboardOperations}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.difference_28 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboardOperations} rhs
*/ 
SparkLeaderboards.difference_29 = function(lhs,  rhs){};


/** 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
* @param { SparkLeaderboard}lhs
* @param { SparkLeaderboard} rhs
*/ 
SparkLeaderboards.difference_30 = function(lhs,  rhs){};


