function SparkMessage (type) {}

/** 
 * Sets the Send Via Socket option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.setSendViaSocket = function(value){};


/** 
 * Sets the Send Via Socket option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setSendViaSocket = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.setSendAsPush = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setSendAsPush = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.setSupressPushOnSocketSend = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setSupressPushOnSocketSend = function(value){};


/** 
 * Sets the Include In Push Count option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.setIncludeInPushCount = function(value){};


/** 
 * Sets the Include In Push Count option.<p>
 * 
* @param {bool}value
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setIncludeInPushCount = function(value){};


/** 
 * Sets the Time To Live (Hours) option.<p>
 * 
* @param {number}hours
* @return {SparkMessage}
*/ 
SparkMessage.setExpireAfterHours = function(hours){};


/** 
 * Sets the Time To Live (Hours) option.<p>
 * 
* @param {number}hours
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setExpireAfterHours = function(hours){};


/** 
 * Limits the message delivery to only the device types supplied.<p>
 * 
* @param {[string]}deviceTypes
* @return {SparkMessage}
*/ 
SparkMessage.setDeviceTypes = function(deviceTypes){};


/** 
 * Limits the message delivery to only the device types supplied.<p>
 * 
* @param {[string]}deviceTypes
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setDeviceTypes = function(deviceTypes){};


/** 
 * Sets the data to send.<p>
 * 
* @param {?}data
* @return {SparkMessage}
*/ 
SparkMessage.setMessageData = function(data){};


/** 
 * Sets the data to send.<p>
 * 
* @param {?}data
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setMessageData = function(data){};


/** 
 * Sets the playerId to send the message to.<p>
 * 
* @param {[string]}playerIds
* @return {SparkMessage}
*/ 
SparkMessage.setPlayerIds = function(playerIds){};


/** 
 * Sets the playerId to send the message to.<p>
 * 
* @param {[string]}playerIds
* @return {SparkMessage}
*/ 
SparkMessage.prototype.setPlayerIds = function(playerIds){};


/** 
 * Sends the message.<p>
 * 
*/ 
SparkMessage.send = function(){};


/** 
 * Sends the message.<p>
 * 
*/ 
SparkMessage.prototype.send = function(){};


