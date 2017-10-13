function SparkMessage (type) {}

/** 
 * Sets the Send Via Socket option.<p>
 * 
* @param { bool}value
*/ 
SparkMessage.setSendViaSocket = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param { bool}value
*/ 
SparkMessage.setSendAsPush = function(value){};


/** 
 * Sets the Send As Push option.<p>
 * 
* @param { bool}value
*/ 
SparkMessage.setSupressPushOnSocketSend = function(value){};


/** 
 * Sets the Include In Push Count option.<p>
 * 
* @param { bool}value
*/ 
SparkMessage.setIncludeInPushCount = function(value){};


/** 
 * Sets the Time To Live (Hours) option.<p>
 * 
* @param { number}hours
*/ 
SparkMessage.setExpireAfterHours = function(hours){};


/** 
 * Limits the message delivery to only the device types supplied.<p>
 * 
* @param { [string]}deviceTypes
*/ 
SparkMessage.setDeviceTypes = function(deviceTypes){};


/** 
 * Sets the data to send.<p>
 * 
* @param { ?}data
*/ 
SparkMessage.setMessageData = function(data){};


/** 
 * Sets the playerId to send the message to.<p>
 * 
* @param { [string]}playerIds
*/ 
SparkMessage.setPlayerIds = function(playerIds){};


/** 
 * Sends the message.<p>
 * 
*/ 
SparkMessage.send = function(){};


