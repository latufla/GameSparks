function Spark (type) {}

/** 
 * <b>validity</b> All except Global Message Scripts<p>Returns a SparkPlayer object that represents the player who either sent, or is going to receive the object that is invoking this script.<p><b>
 * 
*/ 
Spark.getPlayer = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a SparkPlayer object that represents the player that has the supplied GameSparks player ID.<p><b>params</b><p>playerId - the unique player identifier.<p><b>
 * 
* @param { string}playerId
*/ 
Spark.loadPlayer = function(playerId){};


/** 
 * <b>validity</b> All Scripts<p>Returns a SparkPlayer object that represents the player that in the supplied external system has the supplied external ID.<p><b>params</b><p>externalSystem - the unique external system identifier, supplied as a two letter ID. The options are: {FACEBOOK:FB, AMAZON:AM, GAME_CENTER:GC<p>GOOGLE_PLAY:GY , GOOGLE_PLUS:GP, KONGREGATE:KO, PSN:PS, QQ:QQ, STEAM:ST, TWITCH:TC, TWITTER:TW, VIBER:VB, WECHAT:WC, XBOX:XB<p>XBOXONE:X1, NINTENDO:NX}<p>externalId - the player identifier in the external system.<p><b>
 * 
* @param { string}externalSystem
* @param { string} externalId
*/ 
Spark.loadPlayerByExternalId = function(externalSystem,  externalId){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to load a SparkChallenge object by it's ID.<p>This is mainly used on LogChallengeEventRequests where the ID of the SparkChallenge can be retrieved using Spark.data.challengeId.<p><b>params</b><p>challengeInstanceId - the unique challenge identifier.<p><b>
 * 
* @param { string}challengeInstanceId
*/ 
Spark.getChallenge = function(challengeInstanceId){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players.<p>The 'data' attribute of the SparkMessage will match the data parameter supplied.<p><b>params</b><p>data - the JSON Data to send.<p>players - the SparkPlayer array to send the message to.<p><b>
 * 
* @param { ?}data
* @param { [SparkPlayer]} players
*/ 
Spark.sendMessage = function(data,  players){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players.<p>The 'data' attribute of the SparkMessage will match the data parameter supplied.<p>The extCode parameter will be used to look up the configuration for the message from ScriptMessage Extensions<p><b>params</b><p>data - the JSON Data to send.<p>extCode - The short code of the ScriptMessage extension, if not found, the default ScriptMessage will be used.<p>players - the SparkPlayer array to send the message to. If empty or null no message will be sent.<p><b>
 * 
* @param { ?}data
* @param { string} extCode
* @param { [SparkPlayer]} players
*/ 
Spark.sendMessageExt = function(data,  extCode,  players){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players. Push notifications will be supressed for this message<p>The 'data' attribute of the SparkMessage will match the data parameter supplied.<p><b>params</b><p>data - the JSON Data to send.<p>players - the SparkPlayer array to send the message to.<p><b>
 * 
* @param { ?}data
* @param { [SparkPlayer]} players
*/ 
Spark.sendMessageWithoutPush = function(data,  players){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players.<p>The 'data' attribute of the SparkMessage will match the data parameter supplied.<p><b>params</b><p>data - the JSON Data to send.<p>playerIds - An array of player id strings to send the message to.<p><b>
 * 
* @param { ?}data
* @param { [string]} playerIds
*/ 
Spark.sendMessageById = function(data,  playerIds){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players.<p>The 'data' attribute of the SparkMessage will match the data parameter supplied.<p>The extCode parameter will be used to look up the configuration for the message from ScriptMessage Extensions<p><b>params</b><p>data - the JSON Data to send.<p>extCode - The short code of the ScriptMessage extension, if not found, the default ScriptMessage will be used.<p>playerIds - An array of player id strings to send the message to.<p><b>
 * 
* @param { ?}data
* @param { string} extCode
* @param { [string]} playerIds
*/ 
Spark.sendMessageByIdExt = function(data,  extCode,  playerIds){};


/** 
 * <b>DEPRECATED use Spark.message(extCode)</b><p><b>validity</b> All Scripts<p>Sends a ScriptMessage to one or more spark Players.<p>The 'data' attribute of the SparkMessage will match the data parameter supplied. Push notifications will be supressed for this message<p><b>params</b><p>data - the JSON Data to send.<p>playerIds - An array of player id strings to send the message to.<p><b>
 * 
* @param { ?}data
* @param { [string]} playerIds
*/ 
Spark.sendMessageByIdWithoutPush = function(data,  playerIds){};


/** 
 * <b>validity</b> All Scripts<p>Creates a SparkMessage object using the default configuration from the portal.<p>Providing an ext code allows different configurations to be used as th template.<p><b>params</b><p>extCode - (Optional) The extCode of a scriptMessageExtension, if null or not found the standard ScriptMessage configuration will be used.<p><b>returns</b><p>a SparkMessageobject<p><b>
 * 
* @param { string}extCode
*/ 
Spark.message = function(extCode){};


/** 
 * <b>validity</b> All Scripts<p>Saves a document to the named collection.<p><b>params</b><p>collectionName - the collection name to save the document to.<p>document - the document to save. If the document contains and _id field, and the collection already contains a document with the same _id it will be updated.<p><b>returns</b><p>true if the save was successful, false if there was an error<p><b>
 * 
* @param { string}collectionName
* @param { ?} document
*/ 
Spark.save = function(collectionName,  document){};


/** 
 * <b>validity</b> All Scripts<p>Removes a document or documents from the named collection based on the query.<p><b>params</b><p>collectionName - the collection name to remove the document from.<p>query - the query that determines what documents to remove<p><b>returns</b><p>true if the save was successful, false if there was an error<p><b>
 * 
* @param { string}collectionName
* @param { ?} query
*/ 
Spark.remove = function(collectionName,  query){};


/** 
 * <b>validity</b> All Scripts<p>Performs a query on the named collection using find (without a projection).<p>http://docs.mongodb.org/manual/reference/method/db.collection.find<p><b>params</b><p>collectionName - the collection to query<p>query - the mongo query. For details see http://docs.mongodb.org/manual/core/read-operations/<p><b>returns</b><p>The result of the query, can be a simple document or a list<p><b>
 * 
* @param { string}collectionName
* @param { ?} query
*/ 
Spark.find = function(collectionName,  query){};


/** 
 * <b>validity</b> All Scripts<p>Performs a query on the named collection using find (with a projection)<p>http://docs.mongodb.org/manual/reference/method/db.collection.find<p><b>params</b><p>collectionName - the collection to query<p>query - the mongo query. For details see http://docs.mongodb.org/manual/core/read-operations/<p>projection - the projection,<p><b>returns</b><p>The result of the query, can be a simple document or a list<p><b>
 * 
* @param { string}collectionName
* @param { ?} query
* @param { ?} projection
*/ 
Spark.find_14 = function(collectionName,  query,  projection){};


/** 
 * <b>validity</b> All Scripts<p>Locks a challenge for writing. Whilst the script 'owns' this lock no other script can modify the challenge<p>Useful for situations where there may be concurrent access required to a SparkChallengeObject.<p>Other scripts can continue to read the Challenge<p>If a Script gains a lock to the object, it will be released once the release method is called, or if the release method is not called, when the script terminates.<p><b>params</b><p>challenge - the challenge to lock<p><b>
 * 
* @param { SparkChallenge}challenge
*/ 
Spark.lock = function(challenge){};


/** 
 * <b>validity</b> All Scripts<p>Unlocks the challenge.<p>This makes it available for other scripts to acquire a lock on it.<p><b>params</b><p>challenge - the challenge to unlock<p><b>
 * 
* @param { SparkChallenge}challenge
*/ 
Spark.unlock = function(challenge){};


/** 
 * <b>validity</b> All Scripts<p>Creates a lock on an arbitrary key. Whilst the script 'owns' this lock no other script can lock on the same key, and will be blocked until the lock is released.<p>Useful for situations where there may be concurrent access required to an object or data.<p>Locks are reentrant and recursive, i.e. if you lock the same key twice, you will need to call unlockKey() twice to completely release the lock.<p>Alternatively, an unlockKeyFully() call will release the lock regardless of how many times it has been locked by this thread.<p>Locks will always be released fully when the script terminates.<p><b>params</b><p>lockKey - a unique identifier for the lock<p>tryMillis - if another thread has the lock, how long to block and attempt to acquire the lock before giving up<p><b>
 * 
* @param { string}lockName
* @param { number} tryMillis
*/ 
Spark.lockKey = function(lockName,  tryMillis){};


/** 
 * <b>validity</b> All Scripts<p>Releases a lock on the given key, assuming it is held by this thread.<p>This makes it available for other scripts to acquire a lock on it.<p>Note that locks are recursive, i.e. if you have locked twice on this key, you must unlock twice before other scripts can gain this lock.<p><b>params</b><p>lockKey - the key that was previously locked<p><b>
 * 
* @param { string}lockName
*/ 
Spark.unlockKey = function(lockName){};


/** 
 * <b>validity</b> All Scripts<p>Fully releases all locks on the given key, assuming they are held by this thread.<p>This makes it immediately available for other scripts to acquire a lock on it, regardless of how many times you have locked it previously.<p><b>params</b><p>lockKey - the key that was previously locked<p><b>
 * 
* @param { string}lockName
*/ 
Spark.unlockKeyFully = function(lockName){};


/** 
 * <b>validity</b> All Scripts<p>Allows the script to detect if there have been any script errors set during the request or response.<p><b>
 * 
*/ 
Spark.hasScriptErrors = function(){};


/** 
 * <b>validity</b> All Scripts<p>Allows an error to be added to either the request or a response being acted upon.<p>In the case of requests this will cause the request to be rejected. This is useful if you have some custom logic that needs to determine whether GameSparks should process the request.<p>The 'error' object of the Response or Message objects will contain an entry that matches the supplied parameters.<p><b>params</b><p>key - the key to the data<p>value - the data, can be either complex JSON or simple types<p><b>
 * 
* @param { string}key
* @param { ?} value
*/ 
Spark.setScriptError = function(key,  value){};


/** 
 * Gets the value of the script error for the given key.  In the case of response scripts this may have been set in the request.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { string}key
*/ 
Spark.getScriptError = function(key){};


/** 
 * Removes a value from a name value pair structure containing any script errors that have previously been set.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param { string}key
*/ 
Spark.removeScriptError = function(key){};


/** 
 * Removes all script errors that have been set<p><b>
 * 
*/ 
Spark.removeAllScriptErrors = function(){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a SparkLog interface<p><b>
 * 
*/ 
Spark.getLog = function(){};


/** 
 * <b>validity</b>Global Message Scripts<p>Messages are targeted to multiple players.<p>This method gives access to the ID's of all the target players.<p>This can be accessed in both Global Message Scripts and User Message Scripts<p>The ID's can in turn be used with getPlayer to access the player details<p><b>returns</b><p> An array of Id's<p><b>
 * 
*/ 
Spark.getPlayerIds = function(){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to post a LogEventRequest on behalf of the current player.<p>Can be useful to post a score to a global leaderboard when a score has been posted to a challenge.<p><b>params</b><p><b>
 * 
* @param { string}eventKey
* @param { ?} values
*/ 
Spark.logEvent = function(eventKey,  values){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to a SparkHttp interface<p><b>params</b><p>url - the URL of the service to connect to<p><b>
 * 
* @param { string}url
*/ 
Spark.getHttp = function(url){};


/** 
 * <b>validity</b> All Scripts<p>Allows a script to dismiss a given message. <p>Returns true if a message was dismissed. This method does not check if the message belongs to the current user.<p><b>params</b><p>messageId - the id of the message to dismiss<p><b>returns</b><p>true if the message was dismissed<p><b>
 * 
* @param { string}messageId
*/ 
Spark.dismissMessage = function(messageId){};


/** 
 * <b>validity</b> All Scripts<p>Gets a runtime collection by name, this collection has bot read and write access and can be interacted with using SparkMongoCollectionReadOnly and SparkMongoCollectionReadWrite methods.<p><b>params</b><p>collectionName - the name of the collection you wish to access<p><b>
 * 
* @param { string}collectionName
*/ 
Spark.runtimeCollection = function(collectionName){};


/** 
 * <b>validity</b> All Scripts<p>Gets a metadata collection by name, this collection is read only and can be queried using the methods defined in the SparkMongoCollectionReadOnly object.<p><b>params</b><p>collectionName - the name of the collection you wish to access<p><b>
 * 
* @param { string}collectionName
*/ 
Spark.metaCollection = function(collectionName){};


/** 
 * <b>validity</b> All Scripts<p>Provides access to file operations via a SparkFiles interface<p><b>
 * 
*/ 
Spark.getFiles = function(){};


/** 
 * <b>DEPRECATED use Spark.getFiles().uploadedXml(uploadId)</b><p><b>validity</b> All Scripts<p>Provides access to an uploaded file via a SparkXmlReader interface<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>
 * 
* @param { string}uploadId
*/ 
Spark.uploadedXml = function(uploadId){};


/** 
 * <b>DEPRECATED use Spark.getFiles().uploadedJson(uploadId)</b><p><b>validity</b> All Scripts<p>Provides access to an uploaded file via a JSON object<p><b>params</b><p>uploadId - the id of the uploaded file<p><b>returns</b><p>A JSON object<p><b>
 * 
* @param { string}uploadId
*/ 
Spark.uploadedJson = function(uploadId){};


/** 
 * <b>DEPRECATED use Spark.getFiles().downloadableXml(shortCode)</b><p><b>validity</b> All Scripts<p>Provides access to a downloadable file via a SparkXmlReader interface<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param { string}shortCode
*/ 
Spark.downloadableXml = function(shortCode){};


/** 
 * <b>DEPRECATED use Spark.getFiles().downloadableJson(shortCode)</b><p><b>validity</b> All Scripts<p>Provides access to a downloadable file via a JSON object<p><b>params</b><p>shortCode - the short code for the downloadable file<p><b>returns</b><p><b>
 * 
* @param { string}shortCode
*/ 
Spark.downloadableJson = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Send an email via the SendGrid email delivery provider<p><b>params</b><p>username - your SendGrid accounet username<p>password - your SendGrid account password<p><b>
 * 
* @param { string}username
* @param { string} password
*/ 
Spark.sendGrid = function(username,  password){};


/** 
 * <b>validity</b> All Scripts<p>Utility to schedule execution of a module in the future<p><b>
 * 
*/ 
Spark.getScheduler = function(){};


/** 
 * <b>validity</b> All Scripts<p>Utility to cache complex objects in memory<p><b>
 * 
*/ 
Spark.getCache = function(){};


/** 
 * <b>validity</b> All Scripts<p>Sends a Request to the platform, this mimics the process a client uses to send requests<p>The request is sent as the current player, if there is no current player the method will fail.<p><b>Cloud code attached to the request/response will not be executed.</b> Use the SparkRequests API if cloud code execution is required.<p>returns - The response as would be returned to the client<p><b>
 * 
* @param { ?}request
*/ 
Spark.sendRequest = function(request){};


/** 
 * <b>validity</b> All Scripts<p>Sends a Request to the platform, this mimics the process a client uses to send requests<p>The request is sent as the player identified by playerId, if there playerId is invalid the requst will fail.<p><b>Cloud code attached to the request/response will not be executed.</b> Use the SparkRequests API if cloud code execution is required.<p>returns - The response as would be returned to the client<p><b>
 * 
* @param { ?}request
* @param { string} playerId
*/ 
Spark.sendRequestAs = function(request,  playerId){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkRedis object<p><b>
 * 
*/ 
Spark.getRedis = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkLeaderboards object, used to access the leaderboards for this game.<p><b>
 * 
*/ 
Spark.getLeaderboards = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the client IP address of the current websocket connection (if any).<p><b>
 * 
*/ 
Spark.getClientIp = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns configuration information about the currently published game.<p><b>
 * 
*/ 
Spark.getConfig = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a configuration object for cloud-code scripts.<p><b>
 * 
*/ 
Spark.getSparkScriptOptions = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkTeams object, used to access the teams for this game.<p><b>
 * 
*/ 
Spark.getTeams = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkMultiplayer object, used to access the platform's multiplayer capabilities.<p><b>
 * 
*/ 
Spark.getMultiplayer = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkProperties object, used to access the Properties and Property Sets configured against a game.<p><b>
 * 
*/ 
Spark.getProperties = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkBulkScheduler object, used to perform operations on multiple players at once.<p><b>
 * 
*/ 
Spark.getBulkScheduler = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a reference to a SparkDigest object.<p><b>
 * 
*/ 
Spark.getDigester = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the type of the credential used for the current connection (if any).<p><b>
 * 
*/ 
Spark.getCredentialType = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the session ID of the current player (if any).<p><b>
 * 
*/ 
Spark.getSessionId = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a utility class to enable uploading and retrieval of uploadables from cloud code.<p><b>
 * 
*/ 
Spark.getUploadableUtils = function(){};


/** 
 * Terminates execution of the current script<p><b>
 * 
*/ 
Spark.exit = function(){};


/** 
 * Gets the value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { string}name
*/ 
Spark.getScriptData = function(name){};


/** 
 * Allows arbitrary data to be added to the object being acted upon.<p>Sets a value into a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p>The data is visible to the client<p>This data is sent to the player(s) in the 'scriptData' attribute of the Request, Response or Message object.<p>When scriptData is set to a request, it gets set against the response that will be returned to the player. This allows basic communication between request and response scripts.<p><b>params</b><p>name - The name in the name value pair<p>value - The value to set in the name value pair<p><b>
 * 
* @param { string}name
* @param { ?} value
*/ 
Spark.setScriptData = function(name,  value){};


/** 
 * Removes a value from a name value pair structure that allows custom data to be attached to the challenge. This data can either be complex JSON or simple values.<p><b>params</b><p>name - The name in the name value pair<p><b>
 * 
* @param { string}name
*/ 
Spark.removeScriptData = function(name){};


/** 
 * Removes all script data that has been set<p><b>
 * 
*/ 
Spark.removeAllScriptData = function(){};


/** 
 * Gets the number of milliseconds this script has left to run before a longRunningScriptError is thrown<p>
 * 
*/ 
Spark.getRemainingMilliseconds = function(){};


/** 
 * <b>validity</b> All Scripts<p>A JSON version of the object being scripted. Can be either a Request, Response or Message.<p>The structure of the JSON is as the Client either receives or sends it. Attributes can be read, but not changed<p><b>
 * 
*/ 
Spark.getData = function(){};


