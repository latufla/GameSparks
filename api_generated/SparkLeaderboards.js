function SparkLeaderboards (type) {}

/** 
 * fn(shortCode: string) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a SparkLeaderboard object by its shortCode.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getLeaderboard = function(){};


/** 
 * fn(shortCode: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getSocialLeaderboard = function(){};


/** 
 * fn(shortCode: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getInverseSocialLeaderboard = function(){};


/** 
 * fn(shortCode: string, playerId: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player with the given playerId and the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getSocialLeaderboardAs = function(){};


/** 
 * fn(shortCode: string, playerId: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getInverseSocialLeaderboardAs = function(){};


/** 
 * fn(shortCode: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the current player and the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getTeamLeaderboard = function(){};


/** 
 * fn(shortCode: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the current player, where the social group excludes the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getInverseTeamLeaderboard = function(){};


/** 
 * fn(shortCode: string, playerId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode, where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getTeamLeaderboardAs = function(){};


/** 
 * fn(shortCode: string, playerId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard object by its shortCode for the given player, where the social group excludes the players belonging to the teams with the given teamIds<p><b>params</b><p>shortCode - the shortCode of the leaderboard.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getInverseTeamLeaderboardAs = function(){};


/** 
 * fn() -> [SparkLeaderboard]
 * <p> 
 * <b>validity</b> All Scripts<p>Gives access to all leaderboards configured for the game<p><b>
 * 
*/ 
SparkLeaderboards.listLeaderboards = function(){};


/** 
 * fn(challengeInstanceId: string) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a SparkLeaderboard object for a specific challenge by the challengeInstanceId.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p><b>
 * 
*/ 
SparkLeaderboards.getChallengeLeaderboard = function(){};


/** 
 * fn(challengeInstanceId: string, friendsIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getSocialChallengeLeaderboard = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.union = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.union_13 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.union_14 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a union on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.union_15 = function(){};


/** 
 * fn(challengeInstanceId: string, friendsIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with the given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>friendsIds - the ids of the other players to be excluded from this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getInverseSocialChallengeLeaderboard = function(){};


/** 
 * fn(challengeInstanceId: string, playerId: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the player with the given playerId and the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the other players to be included in this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getSocialChallengeLeaderboardAs = function(){};


/** 
 * fn(challengeInstanceId: string, playerId: string, friendIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players with given playerIds.<p>If no playerIds are provided the player's game friends are used.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>friendsIds - the ids of the players to be excluded from this social leaderboard.<p><b>
 * 
*/ 
SparkLeaderboards.getInverseSocialChallengeLeaderboardAs = function(){};


/** 
 * fn(challengeInstanceId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge, where the social group contains the current player and the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getTeamChallengeLeaderboard = function(){};


/** 
 * fn(challengeInstanceId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the current player, where the social group excludes the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getInverseTeamChallengeLeaderboard = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.intersection = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.intersection_22 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.intersection_23 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs an intersection on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.intersection_24 = function(){};


/** 
 * fn(challengeInstanceId: string, playerId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge where the social group contains the player for the given playerId and the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be included in this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getTeamChallengeLeaderboardAs = function(){};


/** 
 * fn(challengeInstanceId: string, playerId: string, teamIds: [string]) -> SparkLeaderboard
 * <p> 
 * <b>validity</b> All Scripts<p>Allows a script to load a social SparkLeaderboard for a specific challenge for the given player, where the social group  excludes the players belonging to the teams with the given teamIds.<p><b>params</b><p>challengeInstanceId - the id of the challenge instance to load the leaderboard for.<p>playerId - the playerId to load the social leaderboard for.<p>teamids - the ids of the teams to be excluded from this social leaderboard<p><b>
 * 
*/ 
SparkLeaderboards.getInverseTeamChallengeLeaderboardAs = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating the operation and the owners of entries within the leaderboard.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.difference = function(){};


/** 
 * fn(lhs: SparkLeaderboardOperations, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners returned as result of evaluating the first operation and the set of owners returned as result of evaluating the second operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.difference_28 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboardOperations) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners of entries within the leaderboard and the set of owners returned as result of evaluating the operation.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.difference_29 = function(){};


/** 
 * fn(lhs: SparkLeaderboard, rhs: SparkLeaderboard) -> SparkLeaderboardOperations
 * <p> 
 * <b>validity</b> All Scripts<p>Performs a difference on the set of owners of entries within the first leaderboard and the set of owners of entries within the second.<p>Returns a SparkLeaderboardOperations object to allow further operations to be chained before evaluation.<p>To obtain the result of the operation call evaluate() on the SparkLeaderboardOperations returned.<p><b>params</b><p>lhs - the left-hand side of the operation.<p>rhs - the the right-hand side of the operation.<p><b>
 * 
*/ 
SparkLeaderboards.difference_30 = function(){};


