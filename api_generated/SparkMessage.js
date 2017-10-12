function SparkMessage (type) {}

/** 
 * fn(value: bool) -> SparkMessage
 * <p> 
 * Sets the Send Via Socket option.<p>
 * 
*/ 
SparkMessage.setSendViaSocket = function(){};


/** 
 * fn(value: bool) -> SparkMessage
 * <p> 
 * Sets the Send As Push option.<p>
 * 
*/ 
SparkMessage.setSendAsPush = function(){};


/** 
 * fn(value: bool) -> SparkMessage
 * <p> 
 * Sets the Send As Push option.<p>
 * 
*/ 
SparkMessage.setSupressPushOnSocketSend = function(){};


/** 
 * fn(value: bool) -> SparkMessage
 * <p> 
 * Sets the Include In Push Count option.<p>
 * 
*/ 
SparkMessage.setIncludeInPushCount = function(){};


/** 
 * fn(hours: number) -> SparkMessage
 * <p> 
 * Sets the Time To Live (Hours) option.<p>
 * 
*/ 
SparkMessage.setExpireAfterHours = function(){};


/** 
 * fn(deviceTypes: [string]) -> SparkMessage
 * <p> 
 * Limits the message delivery to only the device types supplied.<p>
 * 
*/ 
SparkMessage.setDeviceTypes = function(){};


/** 
 * fn(data: ?) -> SparkMessage
 * <p> 
 * Sets the data to send.<p>
 * 
*/ 
SparkMessage.setMessageData = function(){};


/** 
 * fn(playerIds: [string]) -> SparkMessage
 * <p> 
 * Sets the playerId to send the message to.<p>
 * 
*/ 
SparkMessage.setPlayerIds = function(){};


/** 
 * fn()
 * <p> 
 * Sends the message.<p>
 * 
*/ 
SparkMessage.send = function(){};


