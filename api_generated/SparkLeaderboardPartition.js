function SparkLeaderboardPartition (type) {}

/** 
 * fn() -> string
 * <p> 
 * Returns the description of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getDescription = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns the name of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getName = function(){};


/** 
 * fn() -> string
 * <p> 
 * Returns the shortCode of this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getShortCode = function(){};


/** 
 * fn() -> number
 * <p> 
 * Returns the total number of entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntryCount = function(){};


/** 
 * fn(identifier: string) -> number
 * <p> 
 * Returns the total number of entries in this leaderboard for the specified identifier.<p>The later can be the userId of a player or the id of a team.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntryCountForIdentifier = function(){};


/** 
 * fn() -> SparkLeaderboardCursor
 * <p> 
 * Returns a cursor over all the entries in this leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntries = function(){};


/** 
 * fn(count: number, offset: number) -> SparkLeaderboardCursor
 * <p> 
 * Returns a cursor over <b>count</b> entries in this leaderboard, starting at <b>offset</b>.<p><b>params</b><p>count - the number of entries over which to obtain a cursor.<p>offset - the number of entries to skip before the start of the cursor.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntries_6 = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Returns true if this leaderboard has or can have partitions.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isPartitioned = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Returns true if this leaderboard is a single partition of a parent leaderboard.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isPartition = function(){};


/** 
 * fn() -> [SparkLeaderboardPartition]
 * <p> 
 * Returns an array containing the partitions of this leaderboard if it is partitioned, otherwise an empty array is returned.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getPartitions = function(){};


/** 
 * fn()
 * <p> 
 * Deletes this leaderboard partition, removing it from the parent leaderboard and deleting the underling leaderboard data for this partition.<p><b>
 * 
*/ 
SparkLeaderboardPartition.drop = function(){};


/** 
 * fn(deleteRunningTotalData: bool)
 * <p> 
 * See #drop.  Additionally deletes the underlying running total data, resetting any record of players' scores.<p><b>
 * 
*/ 
SparkLeaderboardPartition.drop_11 = function(){};


/** 
 * fn()
 * <p> 
 * Archives this leaderboard partition.  Players will no longer be able to post new scores to this leaderboard, but the leaderboard is still available to view.<p>If the leaderboard partition has already been archived calling this has no effect.<p><b>
 * 
*/ 
SparkLeaderboardPartition.archive = function(){};


/** 
 * fn() -> bool
 * <p> 
 * Returns true if this partition has been archived.<p><b>
 * 
*/ 
SparkLeaderboardPartition.isArchived = function(){};


/** 
 * fn(identifier: string, customIdFilter: ?) -> SparkLeaderboardEntry[]
 * <p> 
 * Returns the array of leaderboard entries that correspond to the supplied identifier and customIdFilter<p>If the customIdFilter is null, the method returns all the entries in the leaderboard for the suplied identifier<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntriesForIdentifier = function(){};


/** 
 * fn(playerId: string, count: number) -> SparkLeaderboardCursor
 * <p> 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntriesFromPlayer = function(){};


/** 
 * fn(playerId: string, count: number, customIdFilter: ?) -> SparkLeaderboardCursor
 * <p> 
 * Returns a cursor over the leaderboard entries starting from the highest score of the supplied playerId and customIdFilter<p>If the customId filter is not an object with valid ID fields, it will return an empty cursor<p><b>
 * 
*/ 
SparkLeaderboardPartition.getEntriesFromPlayerForCustomId = function(){};


/** 
 * fn() -> [string]
 * <p> 
 * Returns the list of custom ID fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboardPartition.getIdFields = function(){};


/** 
 * fn() -> [string]
 * <p> 
 * Returns the list of fields that are defined on the leaderboard<p><b>
 * 
*/ 
SparkLeaderboardPartition.getScoreFields = function(){};


/** 
 * fn(identifier: string, deleteRunningTotals: bool) -> bool
 * <p> 
 * Deletes all entries from the leaderboard that correspond to this identifier. If your leaderboard has custom IDs set up, <p>it will delete the entries for all the custom IDs<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
*/ 
SparkLeaderboardPartition.deleteAllEntries = function(){};


/** 
 * fn(identifier: string, deleteRunningTotals: bool, customIdFilter: ?) -> bool
 * <p> 
 * Deletes the entries from the leaderboard that match the specified customIdFilter.<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for this leaderboard will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
*/ 
SparkLeaderboardPartition.deleteEntriesForCustomId = function(){};


/** 
 * fn(identifier: string, deleteRunningTotals: bool) -> bool
 * <p> 
 * <b>DEPRECATED use leaderboard.deleteAllEntries(identifier, deleteRunningTotals)<p> or leaderboard.deleteEntriesForCustomId(identifier, deleteRunningTotals, customIdFilter).</b><p>Deletes the entry from the leaderboard that correspond to this identifier.<p>This method is not supported for leaderboards with custom IDs and will throw an java.lang.UnsupportedOperationException<p>This method only works for realtime leaderboards<p>If deleteRunningTotals is true, all running total data for these entries will also be deleted<p>deleting running totals may affect other leaderbaords using the same running totals<p><b>
 * 
*/ 
SparkLeaderboardPartition.deleteEntry = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the property set associated with this leaderboard<p>
 * 
*/ 
SparkLeaderboardPartition.getPropertySet = function(){};


/** 
 * fn(score: ?) -> number
 * <p> 
 * Returns the rank a given score would be at on this Global leaderboard, without it actually being entered into the leaderboard.<p>Calling this on a Team or Social leaderboard will return null.<p><b>
 * 
*/ 
SparkLeaderboardPartition.getRankForScore = function(){};


/** 
 * fn(awardAchievements: bool)
 * <p> 
 * Drops the current leaderboard and it rebuilds it from the running totals.<p>The current leaderboard may not have valid ranks for the duration of this process.<p>You can only rebuild realtime leaderboards. You cannot rebuild partitioned leaderboards, you can only rebuild the individual partitions.<p>If the flag awardAchievements is set to true, at the end of the rebuild process the appropriate achievements will be awarded<p>Please use with care, because during the rebuild process any new data coming from the players might temporarily have incorrect ranks<p><b>
 * 
*/ 
SparkLeaderboardPartition.rebuildLeaderboard = function(){};


