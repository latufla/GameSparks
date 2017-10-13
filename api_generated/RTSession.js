function RTSession (type) {}

/** 
 * Clears an interval using the id returned from a previous setInterval call<p>
 * 
* @param { number}intervalId
*/ 
RTSession.clearInterval = function(intervalId){};


/** 
 * Clears a timeout using the id returned from a previous setTimeout call<p>
 * 
* @param { number}timeoutId
*/ 
RTSession.clearTimeout = function(timeoutId){};


/** 
 * Gets the logger object. Log records are written to the GameSparks collection " realtime.log"<p>
 * 
*/ 
RTSession.getLogger = function(){};


/** 
 * Creates a new builder object to construct RTData objects<p>
 * 
*/ 
RTSession.newData = function(){};


/** 
 * Creates a new builder object to construct RTPacket objects<p>
 * 
*/ 
RTSession.newPacket = function(){};


/** 
 * Register a callback to be invoked when a packet with the given opCode is recieved. If this function does not return the supplied packet, the packet will not be sent to any players<p>
 * 
* @param { number}opCode
* @param { fn} callback
*/ 
RTSession.onPacket = function(opCode,  callback){};


/** 
 * Register a callback to be invoked when a player connects to the session<p>
 * 
* @param { fn}callback
*/ 
RTSession.onPlayerConnect = function(callback){};


/** 
 * Register a callback to be invoked when a player disconnects from the session<p>
 * 
* @param { fn}callback
*/ 
RTSession.onPlayerDisconnect = function(callback){};


/** 
 * Register a callback to be invoked when the session is shutdown.<p>This is 60 seconds after the last player disconnects.<p>
 * 
* @param { fn}callback
*/ 
RTSession.onSessionShutdown = function(callback){};


/** 
 * Gets a player by peerId<p>
 * 
* @param { number}peerId
*/ 
RTSession.getPlayer = function(peerId){};


/** 
 * Gets all connected players<p>
 * 
*/ 
RTSession.getPlayers = function(){};


/** 
 * Gets the current sessionId<p>
 * 
*/ 
RTSession.getSessionId = function(){};


/** 
 * The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).<p>The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed<p>The ID value returned by setInterval() is used as the parameter for the clearInterval() method.<p>
 * 
* @param { fn}callback
*/ 
RTSession.setInterval = function(callback){};


/** 
 * Calls a function or evaluates an expression after a specified number of milliseconds.<p>
 * 
* @param { fn}callback
*/ 
RTSession.setTimeout = function(callback){};


/** 
 * A builder for GameSparks requests
 * 
*/ 
RTSession.newRequest = function(){};


/** 
 * The javascript representation of an RTData object<p>This object allows you to inpect the RTData objects sent from a client<p>This object is immutable, to create a new one you should use RTSession.getRTDataBuilder()<p>
 * 
*/ 
RTSession.RTData = function(){};


/** 
 * A builder object to construct RTData objects<p>
 * 
*/ 
RTSession.RTDataBuilder = function(){};


/** 
 * Allows log records to be written to the realtime.log collection<p>
 * 
*/ 
RTSession.RTLogger = function(){};


/** 
 * An object representing a packet sent by a client<p>
 * 
*/ 
RTSession.RTPacket = function(){};


/** 
 * A builder object to construct RTPacket objects<p>
 * 
*/ 
RTSession.RTPacketBuilder = function(){};


/** 
 * An object representing a player<p>
 * 
*/ 
RTSession.RTPlayer = function(){};


