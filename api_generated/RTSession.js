function RTSession (type) {}

/** 
 * fn(intervalId: number)
 * <p> 
 * Clears an interval using the id returned from a previous setInterval call<p>
 * 
*/ 
RTSession.clearInterval = function(){};


/** 
 * fn(timeoutId: number)
 * <p> 
 * Clears a timeout using the id returned from a previous setTimeout call<p>
 * 
*/ 
RTSession.clearTimeout = function(){};


/** 
 * fn() -> RTSession.RTLogger
 * <p> 
 * Gets the logger object. Log records are written to the GameSparks collection " realtime.log"<p>
 * 
*/ 
RTSession.getLogger = function(){};


/** 
 * fn() -> RTSession.RTDataBuilder
 * <p> 
 * Creates a new builder object to construct RTData objects<p>
 * 
*/ 
RTSession.newData = function(){};


/** 
 * fn() -> RTSession.RTPacketBuilder
 * <p> 
 * Creates a new builder object to construct RTPacket objects<p>
 * 
*/ 
RTSession.newPacket = function(){};


/** 
 * fn(opCode: number, callback: fn(packet: RTSession.RTPacket))
 * <p> 
 * Register a callback to be invoked when a packet with the given opCode is recieved. If this function does not return the supplied packet, the packet will not be sent to any players<p>
 * 
*/ 
RTSession.onPacket = function(){};


/** 
 * fn(callback: fn(player: RTSession.RTPlayer))
 * <p> 
 * Register a callback to be invoked when a player connects to the session<p>
 * 
*/ 
RTSession.onPlayerConnect = function(){};


/** 
 * fn(callback: fn(player: RTSession.RTPlayer))
 * <p> 
 * Register a callback to be invoked when a player disconnects from the session<p>
 * 
*/ 
RTSession.onPlayerDisconnect = function(){};


/** 
 * fn(callback: fn())
 * <p> 
 * Register a callback to be invoked when the session is shutdown.<p>This is 60 seconds after the last player disconnects.<p>
 * 
*/ 
RTSession.onSessionShutdown = function(){};


/** 
 * fn(peerId: number) -> RTSession.RTPlayer
 * <p> 
 * Gets a player by peerId<p>
 * 
*/ 
RTSession.getPlayer = function(){};


/** 
 * fn() -> [RTSession.RTPlayer]
 * <p> 
 * Gets all connected players<p>
 * 
*/ 
RTSession.getPlayers = function(){};


/** 
 * fn() -> string
 * <p> 
 * Gets the current sessionId<p>
 * 
*/ 
RTSession.getSessionId = function(){};


/** 
 * fn(callback: fn(), ms: number) -> number
 * <p> 
 * The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).<p>The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed<p>The ID value returned by setInterval() is used as the parameter for the clearInterval() method.<p>
 * 
*/ 
RTSession.setInterval = function(){};


/** 
 * fn(callback: fn(), ms: number) -> number
 * <p> 
 * Calls a function or evaluates an expression after a specified number of milliseconds.<p>
 * 
*/ 
RTSession.setTimeout = function(){};


/** 
 * fn() -> +RTSession.newRequest
 * <p> 
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


