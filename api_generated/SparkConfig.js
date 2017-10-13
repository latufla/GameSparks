function SparkConfig (type) {}

/** 
 * <b>validity</b> All Scripts<p>Returns the stage (preview or live) the game is running on<p>
 * 
* @return {string}
*/ 
SparkConfig.getStage = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the apiKey of the game<p>
 * 
* @return {string}
*/ 
SparkConfig.getApiKey = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the Virtual Goods configured against the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getVirtualGoods = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the virtual good with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkVirtualGood}
*/ 
SparkConfig.getVirtualGood = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the Achievements configured against the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getAchievements = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the achievement with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkAchievement}
*/ 
SparkConfig.getAchievement = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the Segments configured against the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getSegments = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the segment with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkSegmentType}
*/ 
SparkConfig.getSegment = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the Teams configured against the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getTeams = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the team with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkTeamType}
*/ 
SparkConfig.getTeam = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the Challenges configured against the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getChallenges = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the challenge with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkChallengeType}
*/ 
SparkConfig.getChallenge = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns the downloadable with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkDownloadable}
*/ 
SparkConfig.getDownloadable = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of all the downloadables configured for this game<p>
 * 
* @return {[SparkDownloadable]}
*/ 
SparkConfig.getDownloadables = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the match configurations for the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getMatchConfigs = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the match configuration with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkMatchConfig}
*/ 
SparkConfig.getMatchConfig = function(shortCode){};


/** 
 * <b>validity</b> All Scripts<p>Returns a list of the custom currency configurations for the game<p>
 * 
* @return {?}
*/ 
SparkConfig.getCurrencies = function(){};


/** 
 * <b>validity</b> All Scripts<p>Returns the custom currency configuration with the supplied short code<p>
 * 
* @param {string}shortCode
* @return {SparkCurrency}
*/ 
SparkConfig.getCurrency = function(shortCode){};


