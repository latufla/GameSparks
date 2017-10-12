function SparkPlayer (type) {}

/** 
 * fn() -> ?
 * <p> 
 * Returns a map of the player's balance for each currency type.<p><b>
 * 
*/ 
SparkPlayer.getAllBalances = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the display name of the player.<p>This may be null for a player who has only used device authentication. Other authentication mechanisms will return a value.<p><b>
 * 
*/ 
SparkPlayer.getDisplayName = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the username name of the player.<p>For a player who has only used device authentication this value will be generated from the device id.<p><b>
 * 
*/ 
SparkPlayer.getUserName = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the GameSparks ID of the player<p><b>
 * 
*/ 
SparkPlayer.getPlayerId = function(){};


/** 
 * fn()
 * <p> 
 * Saves the players data to the DB. By default, changes are persisted after the script executes. This method ensures changes are saved immediately so other scripts running in parallel see the changes immediately.<p><b>
 * 
*/ 
SparkPlayer.persist = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit1 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit1_6 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>returns</b><p> true if the debit was successful, false if the current balance was not sufficient<p><b>
 * 
*/ 
SparkPlayer.debit1 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency1 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to debit<p><b>returns</b><p> true if the debit was successful, false if the current balance was not sufficient<p><b>
 * 
*/ 
SparkPlayer.debit1_8 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency2 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit2 = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency2 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit2_10 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency2 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit2 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency2 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit2_12 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency3 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit3 = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency3 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit3_14 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency3 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit3 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency3 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit3_16 = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency4 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit4 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency4 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit4_18 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency4 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit4 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency4 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit4_20 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency5 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit5 = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency5 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit5_22 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency5 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit5 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency5 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit5_24 = function(){};


/** 
 * fn(quantity: number, reason: string)
 * <p> 
 * Credits the currency6 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit6 = function(){};


/** 
 * fn(quantity: number)
 * <p> 
 * Credits the currency6 balance of the player with the amount specified.<p><b>params</b><p>quantity - the amount to credit<p><b>
 * 
*/ 
SparkPlayer.credit6_26 = function(){};


/** 
 * fn(quantity: number) -> bool
 * <p> 
 * Debits the currency6 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit6 = function(){};


/** 
 * fn(quantity: number, reason: string) -> bool
 * <p> 
 * Debits the currency6 balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit6_28 = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency1 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance1 = function(){};


/** 
 * fn(shortCode: string, quantity: number) -> bool
 * <p> 
 * Debits the named currency balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>shortCode - the shortCode of the named currency to debit<p>quantity - the amount to debit<p><b>
 * 
*/ 
SparkPlayer.debit = function(){};


/** 
 * fn(shortCode: string, quantity: number, reason: string) -> bool
 * <p> 
 * Debits the named currency balance of the player with the amount specified.<p>Returns true if the debit was successful, false if the current balance was not sufficient.<p><b>params</b><p>shortCode - the shortCode of the named currency to debit<p>quantity - the amount to debit<p>reason - the reason for the debit<p><b>
 * 
*/ 
SparkPlayer.debit_31 = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency2 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance2 = function(){};


/** 
 * fn(shortCode: string, quantity: number, reason: string)
 * <p> 
 * Credits the named currency balance of the player with the amount specified.<p><b>params</b><p>shortCode - the short code of the named currency to credit<p>quantity - the amount to credit<p>reason - the reason for the credit<p><b>
 * 
*/ 
SparkPlayer.credit = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency3 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance3 = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency4 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance4 = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency5 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance5 = function(){};


/** 
 * fn() -> number
 * <p> 
 * Gets the currency6 balance of the player.<p><b>
 * 
*/ 
SparkPlayer.getBalance6 = function(){};


/** 
 * fn(shortCode: string) -> number
 * <p> 
 * Gets the player's balance for the specified currency.<p><b>params</b><p>shortCode - The short code of the named currency to get the player's balance for.<p><b>
 * 
*/ 
SparkPlayer.getBalance = function(){};


/** 
 * fn(shortCode: string, quantity: number) -> bool
 * <p> 
 * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.<p>Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to add<p><b>
 * 
*/ 
SparkPlayer.addVGood = function(){};


/** 
 * fn(shortCode: string, quantity: number, reason: string) -> bool
 * <p> 
 * Finds a virtual good by short code and adds the quantity specified to the player this SparkPlayer object represents.<p>Returns true if the add was successful. false if the shortcode does not exist, or the user already has the maximum amount of the specified good.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to add<p>reason - the reason for adding the virtual good<p><b>
 * 
*/ 
SparkPlayer.addVGood_41 = function(){};


/** 
 * fn(shortCode: string, quantity: number) -> bool
 * <p> 
 * Removes a quantity of virtual goods from the player.<p>Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to consume<p><b>
 * 
*/ 
SparkPlayer.useVGood = function(){};


/** 
 * fn(shortCode: string, quantity: number, reason: string) -> bool
 * <p> 
 * Removes a quantity of virtual goods from the player.<p>Returns true if the player had enough of the virtual good specified by short code. If the method returns false, no modification is made.<p><b>params</b><p>shortCode - the virtual good's short code<p>quantity - the amount to consume<p>reason - the reason for using the virtual good<p><b>
 * 
*/ 
SparkPlayer.useVGood_43 = function(){};


/** 
 * fn(shortCode: string) -> number
 * <p> 
 * Determines whether the player has a particular virtual good.<p>Returns the quantity of the virtual good the player has.<p><b>params</b><p>shortCode - the virtual good's short code<p><b>
 * 
*/ 
SparkPlayer.hasVGood = function(){};


/** 
 * fn(shortCode: string) -> bool
 * <p> 
 * Adds an achievement to the player this SparkPlayer object represents.<p>The player will be given any award that is configured against the award in the developer portal.<p>Returns true if the achievement was added. false if the player already had the achievement, or the shortCode does not exist<p><b>params</b><p>shortCode - The shortCode of the achievement<p><b>
 * 
*/ 
SparkPlayer.addAchievement = function(){};


/** 
 * fn(shortCode: string) -> bool
 * <p> 
 * Removes an achievement from the player.<p>Returns true if the achievement was removed. false if player did not have the achievement.<p>Returns false if the player did not have the achievement.<p><b>params</b><p>shortCode the shortCode of the achievement to remove<p><b>
 * 
*/ 
SparkPlayer.removeAchievement = function(){};


/** 
 * fn(shortCode: string) -> bool
 * <p> 
 * Determines whether the player has a particular achievement.<p>Returns true if the player has the achievement<p><b>params</b><p>shortCode - The shortCode of the achievement<p><b>
 * 
*/ 
SparkPlayer.hasAchievement = function(){};


/** 
 * fn(messageId: string) -> bool
 * <p> 
 * Allows a script to dismiss a given message that belongs to a player.<p>Returns true if a message was dismissed.<p><b>params</b><p>messageId<p><b>
 * 
*/ 
SparkPlayer.dismissMessage = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns a map of external system ids to external ids.<p>This allows you to determine, for 
 * 
*/ 
SparkPlayer.getExternalIds = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns an array of the player's social friend ids.<p><b>
 * 
*/ 
SparkPlayer.getFriendIds = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Returns true if this player is currently has an open WebSocket.<p><b>
 * 
*/ 
SparkPlayer.isOnline = function(){};


/** 
 * fn(password: string) -> bool
 * <p> 
 * Validates the given password against the one stored for this player.<p><b>params</b><p>password - the password to validate<p><b>returns</b><p>true if the given password matches the one stored for this player.<p><b>
 * 
*/ 
SparkPlayer.validatePassword = function(){};


/** 
 * fn(password: string)
 * <p> 
 * Sets a new password for this player.<p><b>params</b><p>password - the password to set<p><b>
 * 
*/ 
SparkPlayer.setPassword = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Boolean value indicating if this player is currently being hidden from leaderboards.<p><b>
 * 
*/ 
SparkPlayer.isHiddenOnLeaderboards = function(){};


/** 
 * fn()
 * <p> 
 * Hide the player from current leaderboards.  Prevents any new scores posted showing up as well.<p><b>
 * 
*/ 
SparkPlayer.hideOnLeaderboards = function(){};


/** 
 * fn()
 * <p> 
 * Show the player on current leaderboards, redisplaying any existing scores.  New scores will begin to show up on leaderboards again as they are recorded.<p><b>
 * 
*/ 
SparkPlayer.showOnLeaderboards = function(){};


/** 
 * fn() -> [SparkPushRegistration]
 * <p> 
 * Gets push registrations of the player<p><b>
 * 
*/ 
SparkPlayer.getPushRegistrations = function(){};


/** 
 * fn(id: string)
 * <p> 
 * Removes the registration with the given id.  The device associated with this registration will no longer receive push notifications for this player.<p><b>
 * 
*/ 
SparkPlayer.removePushRegistration = function(){};


/** 
 * fn(segmentType: string, segmentValue: string)
 * <p> 
 * Sets a value for a single segment against the player.<p><b>
 * 
*/ 
SparkPlayer.setSegmentValue = function(){};


/** 
 * fn(segmentType: string) -> string
 * <p> 
 * Gets a value for a single segment from the player.<p><b>
 * 
*/ 
SparkPlayer.getSegmentValue = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Gets all segment values from the player.<p><b>
 * 
*/ 
SparkPlayer.getSegments = function(){};


/** 
 * fn(excludeCurrent: bool)
 * <p> 
 * Disconnects this player, a SessionTerminatedMessage will be sent to the socket, and the socket will be unauthenticated<p><b>params</b><p>excludeCurrent - If the script is running in the context of the user being disconnected, the current socket will not be disconnected<p><b>
 * 
*/ 
SparkPlayer.disconnect = function(){};


/** 
 * fn() -> [string]
 * <p> 
 * Gets all achievements from this player<p><b>
 * 
*/ 
SparkPlayer.getAchievements = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Gets all virtual goods from the player.<p><b>
 * 
*/ 
SparkPlayer.getVirtualGoods = function(){};


/** 
 * fn()
 * <p> 
 * Removes all auth tokens for this user, this will force a re-authentication.<p><b>
 * 
*/ 
SparkPlayer.resetAuthTokens = function(){};


/** 
 * fn(excludeCurrent: bool)
 * <p> 
 * Removes auth tokens for this user, this will force a re-authentication.<p><b>params</b><p>excludeCurrent - If the script is running in the context of the user having tokens reset, the current token will not be reset<p><b>
 * 
*/ 
SparkPlayer.resetAuthTokens_66 = function(){};


/** 
 * fn() -> date
 * <p> 
 * Gets the lastSeen value for the player.<p><b>
 * 
*/ 
SparkPlayer.getLastSeen = function(){};


/** 
 * fn()
 * <p> 
 * Unlocks the account for this player if it has been locked by too many failed login attempts.<p><b>
 * 
*/ 
SparkPlayer.unlock = function(){};


/** 
 * fn() -> date
 * <p> 
 * Gets the creation date of the player.<p><b>
 * 
*/ 
SparkPlayer.getCreationDate = function(){};


/** 
 * fn(mongoQuery: ScriptableObject) -> bool
 * <p> 
 * Checks if this player would be returned by the given mongo query.<p><b>
 * 
*/ 
SparkPlayer.matchesMongoQuery = function(){};


/** 
 * fn(mongoQueryString: string) -> bool
 * <p> 
 * Checks if this player would be returned by the given mongo query (as a string).<p><b>
 * 
*/ 
SparkPlayer.matchesMongoQueryString = function(){};


/** 
 * fn() -> [SparkPlayerExperimentSegment]
 * <p> 
 * Returns the current experiment segments of the player.<p><b>
 * 
*/ 
SparkPlayer.getExperimentSegments = function(){};


/** 
 * fn(experimentId: number) -> bool
 * <p> 
 * Removes the player from the given experiment.<p><b>returns</b><p> true if the player was part of the experiment, false if the player was not part of the experiment<p><b>
 * 
*/ 
SparkPlayer.removeExperiment = function(){};


/** 
 * fn(experimentId: number, experimentSegmentName: string) -> bool
 * <p> 
 * Sets the experiment segment for the player.<p><b>returns</b><p> true if the experiment segment was added to the player, false if the player already had the experiment segment<p><b>
 * 
*/ 
SparkPlayer.setExperimentSegment = function(){};


/** 
 * fn()
 * <p> 
 * Deletes this player and associated data from system collections.<p>Note that any data linked to the player in runtime collections is not deleted, since the GameSparks platform has no way of identifying this data automatically.<p>This deletion is irreversible and should be used with extreme caution.<p><b>
 * 
*/ 
SparkPlayer.deletePlayer = function(){};


/** 
 * fn(name: string) -> ?
 * <p> 
 * Gets the value from a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkPlayer.getPrivateData = function(){};


/** 
 * fn(name: string, value: ?)
 * <p> 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p>The data is not visible to the client<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
*/ 
SparkPlayer.setPrivateData = function(){};


/** 
 * fn(name: string)
 * <p> 
 * Removes a value from a name value pair structure that allows custom data to be attached to this. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
*/ 
SparkPlayer.removePrivateData = function(){};


/** 
 * fn(name: string) -> ?
 * <p> 
 * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkPlayer.getScriptData = function(){};


/** 
 * fn(name: string, value: ?)
 * <p> 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p>The data is visible to the client<p>This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.<p>When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
*/ 
SparkPlayer.setScriptData = function(){};


/** 
 * fn(name: string)
 * <p> 
 * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
*/ 
SparkPlayer.removeScriptData = function(){};


