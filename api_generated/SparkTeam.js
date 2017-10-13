function SparkTeam (type) {}

/** 
 * Gets the playerId of the player who owns this team.<p><b>
 * 
* @return {string}
*/ 
SparkTeam.getOwnerId = function(){};


/** 
 * Gets the teamId of this team.<p><b>
 * 
* @return {string}
*/ 
SparkTeam.getTeamId = function(){};


/** 
 * Gets the name of this team.<p><b>
 * 
* @return {string}
*/ 
SparkTeam.getTeamName = function(){};


/** 
 * Gets the teamType of this team.<p><b>
 * 
* @return {string}
*/ 
SparkTeam.getTeamType = function(){};


/** 
 * Gets an array containing the playerIds of the members of this team.<p><b>
 * 
* @return {[string]}
*/ 
SparkTeam.getMemberIds = function(){};


/** 
 * Updates the ownerId of this team.<p>Returns true if the ownerId was successfully updated, otherwise false.<p><b>
 * 
* @param {string}playerId
* @return {bool}
*/ 
SparkTeam.setOwnerId = function(playerId){};


/** 
 * Sets the name of this team.<p><b>
 * 
* @param {string}teamName
* @return {bool}
*/ 
SparkTeam.setTeamName = function(teamName){};


/** 
 * Adds the given playerIds as members to this team.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkTeam.addMembers = function(playerIds){};


/** 
 * Removes the given playerIds from the list of members of this team.<p><b>
 * 
* @param {[string]}playerIds
*/ 
SparkTeam.removeMembers = function(playerIds){};


/** 
 * Drops this team instance, deleting the underlying team data.<p>Returns true if the team has been dropped.<p><b>
 * 
* @return {bool}
*/ 
SparkTeam.drop = function(){};


/** 
 * Lists the last <pre>count</pre> chat messages for this team, starting from the <pre>offset</pre>th message, most recent first.<p><b>
 * 
* @param {number}count
* @param {number} offset
* @return {[ChatMessage]}
*/ 
SparkTeam.listChatMessages = function(count,  offset){};


/** 
 * Get a message from the chat history by its id.<p><b>
 * 
* @param {string}chatMessageId
* @return {?}
*/ 
SparkTeam.getChatMessage = function(chatMessageId){};


/** 
 * Delete a message from the chat history by its id.<p>Returns true if the message has been removed from the chat history.<p><b>
 * 
* @param {string}chatMessageId
* @return {bool}
*/ 
SparkTeam.deleteChatMessage = function(chatMessageId){};


/** 
 * Add an achievement to this team (and its players).<p>Returns true if the achievement was added to the team or any of its players.<p><b>
 * 
* @param {string}achievementShortCode
* @return {bool}
*/ 
SparkTeam.addAchievement = function(achievementShortCode){};


/** 
 * Remove an achievement from this team (and its players).<p>Returns true if the achievement was removed from the team or any of its players.<p><b>
 * 
* @param {string}achievementShortCode
* @return {bool}
*/ 
SparkTeam.removeAchievement = function(achievementShortCode){};


