function SparkLeaderboard (type) {}

/** 
 * Returns the description of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.getDescription = function(){};


/** 
 * Returns the name of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.getName = function(){};


/** 
 * Returns the shortCode of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.getShortCode = function(){};


/** 
 * Returns the total number of entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.getEntryCount = function(){};


/** 
 * Returns the total number of entries in this leaderboard for the specified identifier.<p>The later can be the userId of a player or the id of a team.<p><b>
 * 
* @param { string}identifier
*/ 
SparkLeaderboard.getEntryCountForIdentifier = function(identifier){};


/** 
 * Returns a cursor over all the entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.getEntries = function(){};


/** 
 * Returns a cursor over <b>count</b> entries in this leaderboard, starting at <b>offset</b>.<p><b>params</b><p>count - the number of entries over which to obtain a cursor.<p>offset - the number of entries to skip before the start of the cursor.<p><b>
 * 
* @param { number}count
* @param { number} offset
*/ 
SparkLeaderboard.getEntries_6 = function(count,  offset){};


/** 
 * Returns true if this leaderboard has or can have partitions.<p><b>
 * 
*/ 
SparkLeaderboard.isPartitioned = function(){};


/** 
 * Returns true if this leaderboard is a single partition of a parent leaderboard.<p><b>
 * 
*/ 
SparkLeaderboard.isPartition = function(){};


/** 
 * Returns an array containing the partitions of this leaderboard if it is partitioned, otherwise an empty array is returned.<p><b>
 * 
*/ 
SparkLeaderboard.getPartitions = function(){};


/** 
 * Deletes the underlying data for this leaderboard, making it like new.<p><b>
 * 
*/ 
SparkLeaderboard.drop = function(){};


/** 
 * See #drop.  Additionally deletes the underlying running total data, resetting any record of players' scores.<p><b>
 * 
* @param { bool}deleteRunningTotalData
*/ 
SparkLeaderboard.drop_11 = function(deleteRunningTotalData){};


/** 
 * Returns the array of leaderboard entries that correspond to the supplied identifier and customIdFilter<p>If the customIdFilter is null, the method returns all the entries in the leaderboard for the suplied identifier<p><b>
 * 
* @param { string}identifier
* @param { ?} customIdFilter
*/ 
SparkLeaderboard.getEntriesForIdentifier = function(identifier,  customIdFilter){};


/** 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId<p><b>
 * 
* @param { string}playerId
* @param { number} count
*/ 
SparkLeaderboard.getEntriesFromPlayer = function(playerId,  count){};


/** 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId and customIdFilter<p>If the customId filter is not an object with valid ID fields, it will return an empty cursor<p><b>
 * 
* @param { string}playerId
* @param { number} count
* @param { ?} customIdFilter
*/ 
SparkLeaderboard.getEntriesFromPlayerForCustomId = function(playerId,  count,  customIdFilter){};


/** 
 * Returns the list of custom ID fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboard.getIdFields = function(){};


/** 
 * Returns the list of fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboard.getScoreFields = function(){};


/** 
 * Deletes all entries from the leaderboard that correspond to this identifier. If your leaderboard has custom IDs set up, <p>it will delete the entries for all the custom IDs<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
*/ 
SparkLeaderboard.deleteAllEntries = function(identifier,  deleteRunningTotals){};


/** 
 * Deletes the entries from the leaderboard that match the specified customIdFilter.<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for this leaderboard will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
* @param { ?} customIdFilter
*/ 
SparkLeaderboard.deleteEntriesForCustomId = function(identifier,  deleteRunningTotals,  customIdFilter){};


/** 
 * <b>DEPRECATED use leaderboard.deleteAllEntries(identifier, deleteRunningTotals)<p> or leaderboard.deleteEntriesForCustomId(identifier, deleteRunningTotals, customIdFilter).</b><p>Deletes the entry from the leaderboard that correspond to this identifier.<p>This method is not supported for leaderboards with custom IDs and will throw an java.lang.UnsupportedOperationException<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
*/ 
SparkLeaderboard.deleteEntry = function(identifier,  deleteRunningTotals){};


/** 
 * <b>validity</b> All Scripts<p>Returns the property set associated with this leaderboard<p>
 * 
*/ 
SparkLeaderboard.getPropertySet = function(){};


/** 
 * Returns the rank a given score would be at on this Global leaderboard, without it actually being entered into the leaderboard.<p>Calling this on a Team or Social leaderboard will return null.<p><b>
 * 
* @param { ?}score
*/ 
SparkLeaderboard.getRankForScore = function(score){};


/** 
 * Drops the current leaderboard and it rebuilds it from the running totals.<p>The current leaderboard may not have valid ranks for the duration of this process.<p>You can only rebuild realtime leaderboards. You cannot rebuild partitioned leaderboards, you can only rebuild the individual partitions.<p>If the flag awardAchievements is set to true, at the end of the rebuild process the appropriate achievements will be awarded<p>Please use with care, because during the rebuild process any new data coming from the players might temporarily have incorrect ranks<p><b>
 * 
* @param { bool}awardAchievements
*/ 
SparkLeaderboard.rebuildLeaderboard = function(awardAchievements){};


