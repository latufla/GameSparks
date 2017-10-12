function SparkConfig (type) {}

/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the stage (preview or live) the game is running on<p>
 * 
*/ 
SparkConfig.getStage = function(){};


/** 
 * fn() -> string
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the apiKey of the game<p>
 * 
*/ 
SparkConfig.getApiKey = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the Virtual Goods configured against the game<p>
 * 
*/ 
SparkConfig.getVirtualGoods = function(){};


/** 
 * fn(shortCode: string) -> SparkVirtualGood
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the virtual good with the supplied short code<p>
 * 
*/ 
SparkConfig.getVirtualGood = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the Achievements configured against the game<p>
 * 
*/ 
SparkConfig.getAchievements = function(){};


/** 
 * fn(shortCode: string) -> SparkAchievement
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the achievement with the supplied short code<p>
 * 
*/ 
SparkConfig.getAchievement = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the Segments configured against the game<p>
 * 
*/ 
SparkConfig.getSegments = function(){};


/** 
 * fn(shortCode: string) -> SparkSegmentType
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the segment with the supplied short code<p>
 * 
*/ 
SparkConfig.getSegment = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the Teams configured against the game<p>
 * 
*/ 
SparkConfig.getTeams = function(){};


/** 
 * fn(shortCode: string) -> SparkTeamType
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the team with the supplied short code<p>
 * 
*/ 
SparkConfig.getTeam = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the Challenges configured against the game<p>
 * 
*/ 
SparkConfig.getChallenges = function(){};


/** 
 * fn(shortCode: string) -> SparkChallengeType
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the challenge with the supplied short code<p>
 * 
*/ 
SparkConfig.getChallenge = function(){};


/** 
 * fn(shortCode: string) -> SparkDownloadable
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the downloadable with the supplied short code<p>
 * 
*/ 
SparkConfig.getDownloadable = function(){};


/** 
 * fn() -> [SparkDownloadable]
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of all the downloadables configured for this game<p>
 * 
*/ 
SparkConfig.getDownloadables = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the match configurations for the game<p>
 * 
*/ 
SparkConfig.getMatchConfigs = function(){};


/** 
 * fn(shortCode: string) -> SparkMatchConfig
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the match configuration with the supplied short code<p>
 * 
*/ 
SparkConfig.getMatchConfig = function(){};


/** 
 * fn() -> ?
 * <p> 
 * <b>validity</b> All Scripts<p>Returns a list of the custom currency configurations for the game<p>
 * 
*/ 
SparkConfig.getCurrencies = function(){};


/** 
 * fn(shortCode: string) -> SparkCurrency
 * <p> 
 * <b>validity</b> All Scripts<p>Returns the custom currency configuration with the supplied short code<p>
 * 
*/ 
SparkConfig.getCurrency = function(){};


