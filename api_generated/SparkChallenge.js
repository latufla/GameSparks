function SparkChallenge (type) {}

/** 
 * The run state of the object. Valid states are:<p>ACCEPTED - All players have accepted the challenge<p>WAITING - The challenge is in it's waiting state, between expiryDate and startDate<p>RUNNING - The challenge is running<p>COMPLETE - The challenge is complete<p>DECLINED - All players have declined the challenge<p>EXPIRED - The expiry time for the challenge has passed before all players have accepted<p>ISSUED - The challenge has been issued but is waiting for other to accept before play can begin<p>WITHDRAWN - The challenger has withdrawn the challenge<p>LAPSED - The end time of this challenge has passed before the challenge was started<p><b>
 * 
* @return {string}
*/ 
SparkChallenge.getRunState = function(){};


/** 
 * Gets the ID of this challenge.<p><b>
 * 
* @return {string}
*/ 
SparkChallenge.getId = function(){};


/** 
 * Returns the shortCode of the challenge<p>Can be useful when block or code should only run for a particular challenge type.<p><b>
 * 
* @return {string}
*/ 
SparkChallenge.getShortCode = function(){};


/** 
 * Complete the challenge and uses the provided SparkPlayer as the winner.<p>If the supplied SparkPlayer is not part of the challenge this call will be ignored (silently)<p><b>params</b><p>winner - the SparkPlayer to set as the winner<p><b>
 * 
* @param {SparkPlayer}winner
*/ 
SparkChallenge.winChallenge = function(winner){};


/** 
 * Complete the challenge with no winner.<p><b>
 * 
*/ 
SparkChallenge.drawChallenge = function(){};


/** 
 * Starts the challenge in the current state. This method only checks that the state is ISSUED or WAITING and that there is at least 2 players in the challenge <p><b>
 * 
*/ 
SparkChallenge.startChallenge = function(){};


/** 
 * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)<p><b>returns</b><p>The array of player Ids this challenge was issued to<p><b>
 * 
* @return {[string]}
*/ 
SparkChallenge.getChallengedPlayerIds = function(){};


/** 
 * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)<p><b>returns</b><p>The array of player Ids who have accepted this challenge<p><b>
 * 
* @return {[string]}
*/ 
SparkChallenge.getAcceptedPlayerIds = function(){};


/** 
 * Returns a list of Players ID's that can be used to load the player details using Spark.getPlayer(String player)<p><b>returns</b><p>The array of player Ids who have declined this challenge<p><b>
 * 
* @return {[string]}
*/ 
SparkChallenge.getDeclinedPlayerIds = function(){};


/** 
 * Gets the player id of whoever issued the challenge.<p><b>
 * 
* @return {string}
*/ 
SparkChallenge.getChallengerId = function(){};


/** 
 * Gets the end date of the challenge.<p><b>
 * 
* @return {date}
*/ 
SparkChallenge.getEndDate = function(){};


/** 
 * Gets the expiry date of the challenge.<p><b>
 * 
* @return {date}
*/ 
SparkChallenge.getExpiryDate = function(){};


/** 
 * Gets the start date of the challenge.<p><b>
 * 
* @return {date}
*/ 
SparkChallenge.getStartDate = function(){};


/** 
 * Takes a turn for a player in a turn based challenge, without sending a ChallengeTurnTaken message.<p><b>params</b><p>playerId - the id of the player who has taken their turn<p><b>
 * 
* @param {string}playerId
* @return {bool}
*/ 
SparkChallenge.consumeTurn = function(playerId){};


/** 
 * Takes a turn for a player in a turn based challenge, and sends a ChallengeTurnTaken message.<p><b>params</b><p>playerId - the id of the player who has taken their turn<p><b>
 * 
* @param {string}playerId
* @return {bool}
*/ 
SparkChallenge.takeTurn = function(playerId){};


/** 
 * Removes a player from this challenge.<p><b>params</b><p>playerId - the id of the player to remove<p><b>
 * 
* @param {string}playerId
* @return {bool}
*/ 
SparkChallenge.removePlayer = function(playerId){};


/** 
 * Gets the challenge name<p>
 * 
* @return {string}
*/ 
SparkChallenge.getChallengeName = function(){};


/** 
 * Gets the value from a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param {string}name
* @return {?}
*/ 
SparkChallenge.getPrivateData = function(name){};


/** 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to this object. This data can either be complex JSON or simple values.<p>The data is not visible to the client<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
* @param {string}name
* @param {?} value
*/ 
SparkChallenge.setPrivateData = function(name,  value){};


/** 
 * Removes a value from a name value pair structure that allows custom data to be attached to this. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param {string}name
*/ 
SparkChallenge.removePrivateData = function(name){};


/** 
 * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param {string}name
* @return {?}
*/ 
SparkChallenge.getScriptData = function(name){};


/** 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p>The data is visible to the client<p>This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.<p>When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
* @param {string}name
* @param {?} value
*/ 
SparkChallenge.setScriptData = function(name,  value){};


/** 
 * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param {string}name
*/ 
SparkChallenge.removeScriptData = function(name){};


