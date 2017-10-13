function SparkLeaderboardPartition (type) {}

/** 
 * Returns the description of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getDescription = function(){};


/** 
 * Returns the name of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getName = function(){};


/** 
 * Returns the shortCode of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getShortCode = function(){};


/** 
 * Returns the total number of entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntryCount = function(){};


/** 
 * Returns the total number of entries in this leaderboard for the specified identifier.<p>The later can be the userId of a player or the id of a team.<p><b>
 * 
* @param { string}identifier
*/ 
SparkLeaderboardPartition.getEntryCountForIdentifier = function(identifier){};


/** 
 * Returns a cursor over all the entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntries = function(){};


/** 
 * Returns a cursor over <b>count</b> entries in this leaderboard, starting at <b>offset</b>.<p><b>params</b><p>count - the number of entries over which to obtain a cursor.<p>offset - the number of entries to skip before the start of the cursor.<p><b>
 * 
* @param { number}count
* @param { number} offset
*/ 
SparkLeaderboardPartition.getEntries_6 = function(count,  offset){};


/** 
 * Returns true if this leaderboard has or can have partitions.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isPartitioned = function(){};


/** 
 * Returns true if this leaderboard is a single partition of a parent leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isPartition = function(){};


/** 
 * Returns an array containing the partitions of this leaderboard if it is partitioned, otherwise an empty array is returned.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getPartitions = function(){};


/** 
 * Deletes this leaderboard partition, removing it from the parent leaderboard and deleting the underling leaderboard data for this partition.<p><b>
 * 
*/ 
SparkLeaderboardPartition.drop = function(){};


/** 
 * See #drop.  Additionally deletes the underlying running total data, resetting any record of players' scores.<p><b>
 * 
* @param { bool}deleteRunningTotalData
*/ 
SparkLeaderboardPartition.drop_11 = function(deleteRunningTotalData){};


/** 
 * Archives this leaderboard partition.  Players will no longer be able to post new scores to this leaderboard, but the leaderboard is still available to view.<p>If the leaderboard partition has already been archived calling this has no effect.<p><b>
 * 
*/ 
SparkLeaderboardPartition.archive = function(){};


/** 
 * Returns true if this partition has been archived.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isArchived = function(){};


/** 
 * Returns the array of leaderboard entries that correspond to the supplied identifier and customIdFilter<p>If the customIdFilter is null, the method returns all the entries in the leaderboard for the suplied identifier<p><b>
 * 
* @param { string}identifier
* @param { ?} customIdFilter
*/ 
SparkLeaderboardPartition.getEntriesForIdentifier = function(identifier,  customIdFilter){};


/** 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId<p><b>
 * 
* @param { string}playerId
* @param { number} count
*/ 
SparkLeaderboardPartition.getEntriesFromPlayer = function(playerId,  count){};


/** 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId and customIdFilter<p>If the customId filter is not an object with valid ID fields, it will return an empty cursor<p><b>
 * 
* @param { string}playerId
* @param { number} count
* @param { ?} customIdFilter
*/ 
SparkLeaderboardPartition.getEntriesFromPlayerForCustomId = function(playerId,  count,  customIdFilter){};


/** 
 * Returns the list of custom ID fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboardPartition.getIdFields = function(){};


/** 
 * Returns the list of fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboardPartition.getScoreFields = function(){};


/** 
 * Deletes all entries from the leaderboard that correspond to this identifier. If your leaderboard has custom IDs set up, <p>it will delete the entries for all the custom IDs<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
*/ 
SparkLeaderboardPartition.deleteAllEntries = function(identifier,  deleteRunningTotals){};


/** 
 * Deletes the entries from the leaderboard that match the specified customIdFilter.<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for this leaderboard will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
* @param { ?} customIdFilter
*/ 
SparkLeaderboardPartition.deleteEntriesForCustomId = function(identifier,  deleteRunningTotals,  customIdFilter){};


/** 
 * <b>DEPRECATED use leaderboard.deleteAllEntries(identifier, deleteRunningTotals)<p> or leaderboard.deleteEntriesForCustomId(identifier, deleteRunningTotals, customIdFilter).</b><p>Deletes the entry from the leaderboard that correspond to this identifier.<p>This method is not supported for leaderboards with custom IDs and will throw an java.lang.UnsupportedOperationException<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
* @param { string}identifier
* @param { bool} deleteRunningTotals
*/ 
SparkLeaderboardPartition.deleteEntry = function(identifier,  deleteRunningTotals){};


/** 
 * <b>validity</b> All Scripts<p>Returns the property set associated with this leaderboard<p>
 * 
*/ 
SparkLeaderboardPartition.getPropertySet = function(){};


/** 
 * Returns the rank a given score would be at on this Global leaderboard, without it actually being entered into the leaderboard.<p>Calling this on a Team or Social leaderboard will return null.<p><b>
 * 
* @param { ?}score
*/ 
SparkLeaderboardPartition.getRankForScore = function(score){};


/** 
 * Drops the current leaderboard and it rebuilds it from the running totals.<p>The current leaderboard may not have valid ranks for the duration of this process.<p>You can only rebuild realtime leaderboards. You cannot rebuild partitioned leaderboards, you can only rebuild the individual partitions.<p>If the flag awardAchievements is set to true, at the end of the rebuild process the appropriate achievements will be awarded<p>Please use with care, because during the rebuild process any new data coming from the players might temporarily have incorrect ranks<p><b>
 * 
* @param { bool}awardAchievements
*/ 
SparkLeaderboardPartition.rebuildLeaderboard = function(awardAchievements){};


