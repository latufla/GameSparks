function SparkPlayer (type) {}

/** 
 * Returns a map of the player's balance for each currency type.<p><b>
 * 
* @return {?}
*/ 
SparkPlayer.getAllBalances = function(){};


/** 
 * Gets the display name of the player.<p>This may be null for a player who has only used device authentication. Other authentication mechanisms will return a value.<p><b>
 * 
* @return {string}
*/ 
SparkPlayer.getDisplayName = function(){};


/** 
 * Gets the username name of the player.<p>For a player who has only used device authentication this value will be generated from the device id.<p><b>
 * 
* @return {string}
*/ 
SparkPlayer.getUserName = function(){};


/** 
 * Gets the GameSparks ID of the player<p><b>
 * 
* @return {string}
*/ 
SparkPlayer.getPlayerId = function(){};


/** 
 * Saves the players data to the DB. By default, changes are persisted after the script executes. This method ensures changes are saved immediately so other scripts running in parallel see the changes immediately.<p><b>
 * 
*/ 
SparkPlayer.persist = function(){};


/** 
 * Credits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit1 = function(quantity){};


/** 
 * Credits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit1_6 = function(quantity,  reason){};


/** 
 * Debits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>returns</b><p> true if the debit was successful, false if the current balance was not sufficient<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit1 = function(quantity,  reason){};


/** 
 * Debits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to debit<p><b>returns</b><p> true if the debit was successful, false if the current balance was not sufficient<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit1_8 = function(quantity){};


/** 
 * Credits the currency2 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit2 = function(quantity,  reason){};


/** 
 * Credits the currency2 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit2_10 = function(quantity){};


/** 
 * Debits the currency2 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit2 = function(quantity,  reason){};


/** 
 * Debits the currency2 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit2_12 = function(quantity){};


/** 
 * Credits the currency3 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit3 = function(quantity,  reason){};


/** 
 * Credits the currency3 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit3_14 = function(quantity){};


/** 
 * Debits the currency3 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit3 = function(quantity){};


/** 
 * Debits the currency3 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit3_16 = function(quantity,  reason){};


/** 
 * Credits the currency4 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit4 = function(quantity){};


/** 
 * Credits the currency4 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit4_18 = function(quantity,  reason){};


/** 
 * Debits the currency4 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit4 = function(quantity){};


/** 
 * Debits the currency4 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit4_20 = function(quantity,  reason){};


/** 
 * Credits the currency5 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit5 = function(quantity,  reason){};


/** 
 * Credits the currency5 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit5_22 = function(quantity){};


/** 
 * Debits the currency5 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit5 = function(quantity,  reason){};


/** 
 * Debits the currency5 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit5_24 = function(quantity){};


/** 
 * Credits the currency6 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
*/ 
SparkPlayer.credit6 = function(quantity,  reason){};


/** 
 * Credits the currency6 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
* @param { number}quantity
*/ 
SparkPlayer.credit6_26 = function(quantity){};


/** 
 * Debits the currency6 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
* @param { number}quantity
* @return {bool}
*/ 
SparkPlayer.debit6 = function(quantity){};


/** 
 * Debits the currency6 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { number}quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit6_28 = function(quantity,  reason){};


/** 
 * Gets the currency1 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance1 = function(){};


/** 
 * Debits the named currency balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>shortCode - the shortCode of the named currency to debit<p>quantity - the amount to debit<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @return {bool}
*/ 
SparkPlayer.debit = function(shortCode,  quantity){};


/** 
 * Debits the named currency balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>shortCode - the shortCode of the named currency to debit<p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.debit_31 = function(shortCode,  quantity,  reason){};


/** 
 * Gets the currency2 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance2 = function(){};


/** 
 * Credits the named currency balance of the player with the amount specified.<p><b>params</b><p>shortCode - the short code of the named currency to credit<p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @param { string} reason
*/ 
SparkPlayer.credit = function(shortCode,  quantity,  reason){};


/** 
 * Gets the currency3 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance3 = function(){};


/** 
 * Gets the currency4 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance4 = function(){};


/** 
 * Gets the currency5 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance5 = function(){};


/** 
 * Gets the currency6 balance of the player.<p><b>
 * 
* @return {number}
*/ 
SparkPlayer.getBalance6 = function(){};


/** 
 * Gets the player's balance for the specified currency.<p><b>params</b><p>shortCode - The short code of the named currency to get the player's balance for.<p><b>
 * 
* @param { string}shortCode
* @return {number}
*/ 
SparkPlayer.getBalance = function(shortCode){};


/** 
 * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.<p>Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to add<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @return {bool}
*/ 
SparkPlayer.addVGood = function(shortCode,  quantity){};


/** 
 * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.<p>Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to add<p>reason - the reason for adding the virtual good<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.addVGood_41 = function(shortCode,  quantity,  reason){};


/** 
 * Removes a quantity of virtual goods from the player.<p>Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to consume<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @return {bool}
*/ 
SparkPlayer.useVGood = function(shortCode,  quantity){};


/** 
 * Removes a quantity of virtual goods from the player.<p>Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to consume<p>reason - the reason for using the virtual good<p><b>
 * 
* @param { string}shortCode
* @param { number} quantity
* @param { string} reason
* @return {bool}
*/ 
SparkPlayer.useVGood_43 = function(shortCode,  quantity,  reason){};


/** 
 * Determines whether the player has a particular virtual good.<p>Returns the quantity of the virtual good the player has.<p><b>params</b><p>shortCode - the virtual good's short code<p><b>
 * 
* @param { string}shortCode
* @return {number}
*/ 
SparkPlayer.hasVGood = function(shortCode){};


/** 
 * Adds an achievement to the player this SparkPlayer object represents.<p>The player will be given any award that is configured against the award in the developer portal.<p>Returns true if the achievement was added. false if the player already had the achievement, or the shortCode does not exist<p><b>params</b><p>shortCode - The shortCode of the achievement<p><b>
 * 
* @param { string}shortCode
* @return {bool}
*/ 
SparkPlayer.addAchievement = function(shortCode){};


/** 
 * Removes an achievement from the player.<p>Returns true if the achievement was removed. false if player did not have the achievement.<p>Returns false if the player did not have the achievement.<p><b>params</b><p>shortCode the shortCode of the achievement to remove<p><b>
 * 
* @param { string}shortCode
* @return {bool}
*/ 
SparkPlayer.removeAchievement = function(shortCode){};


/** 
 * Determines whether the player has a particular achievement.<p>Returns true if the player has the achievement<p><b>params</b><p>shortCode - The shortCode of the achievement<p><b>
 * 
* @param { string}shortCode
* @return {bool}
*/ 
SparkPlayer.hasAchievement = function(shortCode){};


/** 
 * Allows a script to dismiss a given message that belongs to a player.<p>Returns true if a message was dismissed.<p><b>params</b><p>messageId<p><b>
 * 
* @param { string}messageId
* @return {bool}
*/ 
SparkPlayer.dismissMessage = function(messageId){};


/** 
 * Returns a map of external system ids to external ids.<p>This allows you to determine, for 
 * 
* @return {?}
*/ 
SparkPlayer.getExternalIds = function(){};


/** 
 * Returns an array of the player's social friend ids.<p><b>
 * 
* @return {?}
*/ 
SparkPlayer.getFriendIds = function(){};


/** 
 * Returns true if this player is currently has an open WebSocket.<p><b>
 * 
* @return {bool}
*/ 
SparkPlayer.isOnline = function(){};


/** 
 * Validates the given password against the one stored for this player.<p><b>params</b><p>password - the password to validate<p><b>returns</b><p>true if the given password matches the one stored for this player.<p><b>
 * 
* @param { string}password
* @return {bool}
*/ 
SparkPlayer.validatePassword = function(password){};


/** 
 * Sets a new password for this player.<p><b>params</b><p>password - the password to set<p><b>
 * 
* @param { string}password
*/ 
SparkPlayer.setPassword = function(password){};


/** 
 * Boolean value indicating if this player is currently being hidden from leaderboards.<p><b>
 * 
* @return {bool}
*/ 
SparkPlayer.isHiddenOnLeaderboards = function(){};


/** 
 * Hide the player from current leaderboards.  Prevents any new scores posted showing up as well.<p><b>
 * 
*/ 
SparkPlayer.hideOnLeaderboards = function(){};


/** 
 * Show the player on current leaderboards, redisplaying any existing scores.  New scores will begin to show up on leaderboards again as they are recorded.<p><b>
 * 
*/ 
SparkPlayer.showOnLeaderboards = function(){};


/** 
 * Gets push registrations of the player<p><b>
 * 
* @return {[SparkPushRegistration]}
*/ 
SparkPlayer.getPushRegistrations = function(){};


/** 
 * Removes the registration with the given id.  The device associated with this registration will no longer receive push notifications for this player.<p><b>
 * 
* @param { string}id
*/ 
SparkPlayer.removePushRegistration = function(id){};


/** 
 * Sets a value for a single segment against the player.<p><b>
 * 
* @param { string}segmentType
* @param { string} segmentValue
*/ 
SparkPlayer.setSegmentValue = function(segmentType,  segmentValue){};


/** 
 * Gets a value for a single segment from the player.<p><b>
 * 
* @param { string}segmentType
* @return {string}
*/ 
SparkPlayer.getSegmentValue = function(segmentType){};


/** 
 * Gets all segment values from the player.<p><b>
 * 
* @return {?}
*/ 
SparkPlayer.getSegments = function(){};


/** 
 * Disconnects this player, a SessionTerminatedMessage will be sent to the socket, and the socket will be unauthenticated<p><b>params</b><p>excludeCurrent - If the script is running in the context of the user being disconnected, the current socket will not be disconnected<p><b>
 * 
* @param { bool}excludeCurrent
*/ 
SparkPlayer.disconnect = function(excludeCurrent){};


/** 
 * Gets all achievements from this player<p><b>
 * 
* @return {[string]}
*/ 
SparkPlayer.getAchievements = function(){};


/** 
 * Gets all virtual goods from the player.<p><b>
 * 
* @return {?}
*/ 
SparkPlayer.getVirtualGoods = function(){};


/** 
 * Removes all auth tokens for this user, this will force a re-authentication.<p><b>
 * 
*/ 
SparkPlayer.resetAuthTokens = function(){};


/** 
 * Removes auth tokens for this user, this will force a re-authentication.<p><b>params</b><p>excludeCurrent - If the script is running in the context of the user having tokens reset, the current token will not be reset<p><b>
 * 
* @param { bool}excludeCurrent
*/ 
SparkPlayer.resetAuthTokens_66 = function(excludeCurrent){};


/** 
 * Gets the lastSeen value for the player.<p><b>
 * 
* @return {date}
*/ 
SparkPlayer.getLastSeen = function(){};


/** 
 * Unlocks the account for this player if it has been locked by too many failed login attempts.<p><b>
 * 
*/ 
SparkPlayer.unlock = function(){};


/** 
 * Gets the creation date of the player.<p><b>
 * 
* @return {date}
*/ 
SparkPlayer.getCreationDate = function(){};


/** 
 * Checks if this player would be returned by the given mongo query.<p><b>
 * 
* @param { ScriptableObject}mongoQuery
* @return {bool}
*/ 
SparkPlayer.matchesMongoQuery = function(mongoQuery){};


/** 
 * Checks if this player would be returned by the given mongo query (as a string).<p><b>
 * 
* @param { string}mongoQueryString
* @return {bool}
*/ 
SparkPlayer.matchesMongoQueryString = function(mongoQueryString){};


/** 
 * Returns the current experiment segments of the player.<p><b>
 * 
* @return {[SparkPlayerExperimentSegment]}
*/ 
SparkPlayer.getExperimentSegments = function(){};


/** 
 * Removes the player from the given experiment.<p><b>returns</b><p> true if the player was part of the experiment, false if the player was not part of the experiment<p><b>
 * 
* @param { number}experimentId
* @return {bool}
*/ 
SparkPlayer.removeExperiment = function(experimentId){};


/** 
 * Sets the experiment segment for the player.<p><b>returns</b><p> true if the experiment segment was added to the player, false if the player already had the experiment segment<p><b>
 * 
* @param { number}experimentId
* @param { string} experimentSegmentName
* @return {bool}
*/ 
SparkPlayer.setExperimentSegment = function(experimentId,  experimentSegmentName){};


/** 
 * Deletes this player and associated data from system collections.<p>Note that any data linked to the player in runtime collections is not deleted, since the GameSparks platform has no way of identifying this data automatically.<p>This deletion is irreversible and should be used with extreme caution.<p><b>
 * 
*/ 
SparkPlayer.deletePlayer = function(){};


/** 
 * Gets the value from a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { string}name
* @return {?}
*/ 
SparkPlayer.getPrivateData = function(name){};


/** 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p>The data is not visible to the client<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
* @param { string}name
* @param { ?} value
*/ 
SparkPlayer.setPrivateData = function(name,  value){};


/** 
 * Removes a value from a name value pair structure that allows custom data to be attached to this. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param { string}name
*/ 
SparkPlayer.removePrivateData = function(name){};


/** 
 * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { string}name
* @return {?}
*/ 
SparkPlayer.getScriptData = function(name){};


/** 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p>The data is visible to the client<p>This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.<p>When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
* @param { string}name
* @param { ?} value
*/ 
SparkPlayer.setScriptData = function(name,  value){};


/** 
 * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param { string}name
*/ 
SparkPlayer.removeScriptData = function(name){};


