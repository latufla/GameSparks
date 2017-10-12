function SparkTeam (type) {}

/** 
 * fn() -> string
 * <p> 
 * Gets the playerId of the player who owns this team.<p><b>
 * 
*/ 
SparkTeam.getOwnerId = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the teamId of this team.<p><b>
 * 
*/ 
SparkTeam.getTeamId = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the name of this team.<p><b>
 * 
*/ 
SparkTeam.getTeamName = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the teamType of this team.<p><b>
 * 
*/ 
SparkTeam.getTeamType = function(){};


/** 
 * fn() -> [string]
 * <p> 
 * Gets an array containing the playerIds of the members of this team.<p><b>
 * 
*/ 
SparkTeam.getMemberIds = function(){};


/** 
 * fn(playerId: string) -> bool
 * <p> 
 * Updates the ownerId of this team.<p>Returns true if the ownerId was successfully updated, otherwise false.<p><b>
 * 
*/ 
SparkTeam.setOwnerId = function(){};


/** 
 * fn(teamName: string) -> bool
 * <p> 
 * Sets the name of this team.<p><b>
 * 
*/ 
SparkTeam.setTeamName = function(){};


/** 
 * fn(playerIds: [string])
 * <p> 
 * Adds the given playerIds as members to this team.<p><b>
 * 
*/ 
SparkTeam.addMembers = function(){};


/** 
 * fn(playerIds: [string])
 * <p> 
 * Removes the given playerIds from the list of members of this team.<p><b>
 * 
*/ 
SparkTeam.removeMembers = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Drops this team instance, deleting the underlying team data.<p>Returns true if the team has been dropped.<p><b>
 * 
*/ 
SparkTeam.drop = function(){};


/** 
 * fn(count: number, offset: number) -> [ChatMessage]
 * <p> 
 * Lists the last <pre>count</pre> chat messages for this team, starting from the <pre>offset</pre>th message, most recent first.<p><b>
 * 
*/ 
SparkTeam.listChatMessages = function(){};


/** 
 * fn(chatMessageId: string) -> ?
 * <p> 
 * Get a message from the chat history by its id.<p><b>
 * 
*/ 
SparkTeam.getChatMessage = function(){};


/** 
 * fn(chatMessageId: string) -> bool
 * <p> 
 * Delete a message from the chat history by its id.<p>Returns true if the message has been removed from the chat history.<p><b>
 * 
*/ 
SparkTeam.deleteChatMessage = function(){};


/** 
 * fn(achievementShortCode: string) -> bool
 * <p> 
 * Add an achievement to this team (and its players).<p>Returns true if the achievement was added to the team or any of its players.<p><b>
 * 
*/ 
SparkTeam.addAchievement = function(){};


/** 
 * fn(achievementShortCode: string) -> bool
 * <p> 
 * Remove an achievement from this team (and its players).<p>Returns true if the achievement was removed from the team or any of its players.<p><b>
 * 
*/ 
SparkTeam.removeAchievement = function(){};


