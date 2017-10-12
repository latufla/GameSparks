function SparkRedis (type) {}

/** 
 * fn(key: string, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/append">http://redis.io/commands/append</a><p>
 * 
*/ 
SparkRedis.append = function(){};


/** 
 * fn(key: string, start: number, end: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/bitcount">http://redis.io/commands/bitcount</a><p>
 * 
*/ 
SparkRedis.bitcount = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/bitcount">http://redis.io/commands/bitcount</a><p>
 * 
*/ 
SparkRedis.bitcount_2 = function(){};


/** 
 * fn(op: string, destKey: string, srcKeys: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/bitop">http://redis.io/commands/bitop</a><p>
 * 
*/ 
SparkRedis.bitop = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/decr">http://redis.io/commands/decr</a><p>
 * 
*/ 
SparkRedis.decr = function(){};


/** 
 * fn(key: string, integer: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/decrBy">http://redis.io/commands/decrBy</a><p>
 * 
*/ 
SparkRedis.decrBy = function(){};


/** 
 * fn(keys: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/del">http://redis.io/commands/del</a><p>
 * 
*/ 
SparkRedis.del = function(){};


/** 
 * fn(key: string) -> bool
 * <p> 
 * See <a href="http://redis.io/commands/exists">http://redis.io/commands/exists</a><p>
 * 
*/ 
SparkRedis.exists = function(){};


/** 
 * fn(key: string, seconds: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/expire">http://redis.io/commands/expire</a><p>
 * 
*/ 
SparkRedis.expire = function(){};


/** 
 * fn(key: string, unixTime: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/expireAt">http://redis.io/commands/expireAt</a><p>
 * 
*/ 
SparkRedis.expireAt = function(){};


/** 
 * fn() -> string
 * <p> 
 * See <a href="http://redis.io/commands/flushdb">http://redis.io/commands/flushdb</a><p>
 * 
*/ 
SparkRedis.flushdb = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/get">http://redis.io/commands/get</a><p>
 * 
*/ 
SparkRedis.get = function(){};


/** 
 * fn(key: string, offset: number) -> bool
 * <p> 
 * See <a href="http://redis.io/commands/getbit">http://redis.io/commands/getbit</a><p>
 * 
*/ 
SparkRedis.getbit = function(){};


/** 
 * fn(key: string, startOffset: number, endOffset: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/getrange">http://redis.io/commands/getrange</a><p>
 * 
*/ 
SparkRedis.getrange = function(){};


/** 
 * fn(key: string, fields: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hdel">http://redis.io/commands/hdel</a><p>
 * 
*/ 
SparkRedis.hdel = function(){};


/** 
 * fn(key: string, field: string) -> bool
 * <p> 
 * See <a href="http://redis.io/commands/hexists">http://redis.io/commands/hexists</a><p>
 * 
*/ 
SparkRedis.hexists = function(){};


/** 
 * fn(key: string, field: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/hget">http://redis.io/commands/hget</a><p>
 * 
*/ 
SparkRedis.hget = function(){};


/** 
 * fn(key: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/hgetAll">http://redis.io/commands/hgetAll</a><p>
 * 
*/ 
SparkRedis.hgetAll = function(){};


/** 
 * fn(key: string, field: string, value: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hincrBy">http://redis.io/commands/hincrBy</a><p>
 * 
*/ 
SparkRedis.hincrBy = function(){};


/** 
 * fn(key: string, field: string, increment: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hincrByFloat">http://redis.io/commands/hincrByFloat</a><p>
 * 
*/ 
SparkRedis.hincrByFloat = function(){};


/** 
 * fn(key: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/hkeys">http://redis.io/commands/hkeys</a><p>
 * 
*/ 
SparkRedis.hkeys = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hlen">http://redis.io/commands/hlen</a><p>
 * 
*/ 
SparkRedis.hlen = function(){};


/** 
 * fn(key: string, fields: [string]) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/hmget">http://redis.io/commands/hmget</a><p>
 * 
*/ 
SparkRedis.hmget = function(){};


/** 
 * fn(key: string, hash: ?) -> string
 * <p> 
 * See <a href="http://redis.io/commands/hmset">http://redis.io/commands/hmset</a><p>
 * 
*/ 
SparkRedis.hmset = function(){};


/** 
 * fn(key: string, field: string, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hset">http://redis.io/commands/hset</a><p>
 * 
*/ 
SparkRedis.hset = function(){};


/** 
 * fn(key: string, field: string, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/hsetnx">http://redis.io/commands/hsetnx</a><p>
 * 
*/ 
SparkRedis.hsetnx = function(){};


/** 
 * fn(key: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/hvals">http://redis.io/commands/hvals</a><p>
 * 
*/ 
SparkRedis.hvals = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/incr">http://redis.io/commands/incr</a><p>
 * 
*/ 
SparkRedis.incr = function(){};


/** 
 * fn(key: string, integer: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/incrBy">http://redis.io/commands/incrBy</a><p>
 * 
*/ 
SparkRedis.incrBy = function(){};


/** 
 * fn(key: string, increment: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/incrByFloat">http://redis.io/commands/incrByFloat</a><p>
 * 
*/ 
SparkRedis.incrByFloat = function(){};


/** 
 * fn(pattern: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/keys">http://redis.io/commands/keys</a><p>
 * 
*/ 
SparkRedis.keys = function(){};


/** 
 * fn(key: string, index: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/lindex">http://redis.io/commands/lindex</a><p>
 * 
*/ 
SparkRedis.lindex = function(){};


/** 
 * fn(key: string, where: string, pivit: string, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/linsert">http://redis.io/commands/linsert</a><p>
 * 
*/ 
SparkRedis.linsert = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/llen">http://redis.io/commands/llen</a><p>
 * 
*/ 
SparkRedis.llen = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/lpop">http://redis.io/commands/lpop</a><p>
 * 
*/ 
SparkRedis.lpop = function(){};


/** 
 * fn(key: string, strings: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/lpush">http://redis.io/commands/lpush</a><p>
 * 
*/ 
SparkRedis.lpush = function(){};


/** 
 * fn(key: string, strings: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/lpushx">http://redis.io/commands/lpushx</a><p>
 * 
*/ 
SparkRedis.lpushx = function(){};


/** 
 * fn(key: string, start: number, end: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/lrange">http://redis.io/commands/lrange</a><p>
 * 
*/ 
SparkRedis.lrange = function(){};


/** 
 * fn(key: string, count: number, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/lrem">http://redis.io/commands/lrem</a><p>
 * 
*/ 
SparkRedis.lrem = function(){};


/** 
 * fn(key: string, index: number, value: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/lset">http://redis.io/commands/lset</a><p>
 * 
*/ 
SparkRedis.lset = function(){};


/** 
 * fn(key: string, start: number, end: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/ltrim">http://redis.io/commands/ltrim</a><p>
 * 
*/ 
SparkRedis.ltrim = function(){};


/** 
 * fn(keys: [string]) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/mget">http://redis.io/commands/mget</a><p>
 * 
*/ 
SparkRedis.mget = function(){};


/** 
 * fn(keysvalues: [string]) -> string
 * <p> 
 * See <a href="http://redis.io/commands/mset">http://redis.io/commands/mset</a><p>
 * 
*/ 
SparkRedis.mset = function(){};


/** 
 * fn(keysvalues: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/msetnx">http://redis.io/commands/msetnx</a><p>
 * 
*/ 
SparkRedis.msetnx = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/persist">http://redis.io/commands/persist</a><p>
 * 
*/ 
SparkRedis.persist = function(){};


/** 
 * fn(key: string, milliseconds: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/pexpire">http://redis.io/commands/pexpire</a><p>
 * 
*/ 
SparkRedis.pexpire = function(){};


/** 
 * fn(key: string, millisecondsTimestamp: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/pexpireAt">http://redis.io/commands/pexpireAt</a><p>
 * 
*/ 
SparkRedis.pexpireAt = function(){};


/** 
 * fn(key: string, milliseconds: number, value: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/psetex">http://redis.io/commands/psetex</a><p>
 * 
*/ 
SparkRedis.psetex = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/pttl">http://redis.io/commands/pttl</a><p>
 * 
*/ 
SparkRedis.pttl = function(){};


/** 
 * fn(oldkey: string, newkey: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/rename">http://redis.io/commands/rename</a><p>
 * 
*/ 
SparkRedis.rename = function(){};


/** 
 * fn(oldkey: string, newkey: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/renamenx">http://redis.io/commands/renamenx</a><p>
 * 
*/ 
SparkRedis.renamenx = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/rpop">http://redis.io/commands/rpop</a><p>
 * 
*/ 
SparkRedis.rpop = function(){};


/** 
 * fn(srckey: string, dstkey: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/rpoplpush">http://redis.io/commands/rpoplpush</a><p>
 * 
*/ 
SparkRedis.rpoplpush = function(){};


/** 
 * fn(key: string, strings: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/rpush">http://redis.io/commands/rpush</a><p>
 * 
*/ 
SparkRedis.rpush = function(){};


/** 
 * fn(key: string, strings: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/rpushx">http://redis.io/commands/rpushx</a><p>
 * 
*/ 
SparkRedis.rpushx = function(){};


/** 
 * fn(key: string, members: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/sadd">http://redis.io/commands/sadd</a><p>
 * 
*/ 
SparkRedis.sadd = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/scard">http://redis.io/commands/scard</a><p>
 * 
*/ 
SparkRedis.scard = function(){};


/** 
 * fn(keys: [string]) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/sdiff">http://redis.io/commands/sdiff</a><p>
 * 
*/ 
SparkRedis.sdiff = function(){};


/** 
 * fn(dstkey: string, keys: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/sdiffstore">http://redis.io/commands/sdiffstore</a><p>
 * 
*/ 
SparkRedis.sdiffstore = function(){};


/** 
 * fn(key: string, value: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/getSet">http://redis.io/commands/getSet</a><p>
 * 
*/ 
SparkRedis.getSet = function(){};


/** 
 * fn(key: string, value: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
*/ 
SparkRedis.set = function(){};


/** 
 * fn(key: string, value: string, nxxx: string, expx: string, time: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
*/ 
SparkRedis.set_61 = function(){};


/** 
 * fn(key: string, value: string, nxxx: string, expx: string, time: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
*/ 
SparkRedis.set_62 = function(){};


/** 
 * fn(key: string, value: string, nxxx: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
*/ 
SparkRedis.set_63 = function(){};


/** 
 * fn(key: string, offset: number, value: bool) -> bool
 * <p> 
 * See <a href="http://redis.io/commands/setbit">http://redis.io/commands/setbit</a><p>
 * 
*/ 
SparkRedis.setbit = function(){};


/** 
 * fn(key: string, seconds: number, value: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/setex">http://redis.io/commands/setex</a><p>
 * 
*/ 
SparkRedis.setex = function(){};


/** 
 * fn(key: string, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/setnx">http://redis.io/commands/setnx</a><p>
 * 
*/ 
SparkRedis.setnx = function(){};


/** 
 * fn(key: string, offset: number, value: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/setrange">http://redis.io/commands/setrange</a><p>
 * 
*/ 
SparkRedis.setrange = function(){};


/** 
 * fn(keys: [string]) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/sinter">http://redis.io/commands/sinter</a><p>
 * 
*/ 
SparkRedis.sinter = function(){};


/** 
 * fn(dstkey: string, keys: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/sinterstore">http://redis.io/commands/sinterstore</a><p>
 * 
*/ 
SparkRedis.sinterstore = function(){};


/** 
 * fn(key: string, member: string) -> bool
 * <p> 
 * See <a href="http://redis.io/commands/sismember">http://redis.io/commands/sismember</a><p>
 * 
*/ 
SparkRedis.sismember = function(){};


/** 
 * fn(key: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/smembers">http://redis.io/commands/smembers</a><p>
 * 
*/ 
SparkRedis.smembers = function(){};


/** 
 * fn(srckey: string, dstkey: string, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/smove">http://redis.io/commands/smove</a><p>
 * 
*/ 
SparkRedis.smove = function(){};


/** 
 * fn(key: string, dstkey: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/sort">http://redis.io/commands/sort</a><p>
 * 
*/ 
SparkRedis.sort = function(){};


/** 
 * fn(key: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/sort">http://redis.io/commands/sort</a><p>
 * 
*/ 
SparkRedis.sort_74 = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/spop">http://redis.io/commands/spop</a><p>
 * 
*/ 
SparkRedis.spop = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/srandmember">http://redis.io/commands/srandmember</a><p>
 * 
*/ 
SparkRedis.srandmember = function(){};


/** 
 * fn(key: string, count: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/srandmember">http://redis.io/commands/srandmember</a><p>
 * 
*/ 
SparkRedis.srandmember_77 = function(){};


/** 
 * fn(key: string, members: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/srem">http://redis.io/commands/srem</a><p>
 * 
*/ 
SparkRedis.srem = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/strlen">http://redis.io/commands/strlen</a><p>
 * 
*/ 
SparkRedis.strlen = function(){};


/** 
 * fn(key: string, start: number, end: number) -> string
 * <p> 
 * See <a href="http://redis.io/commands/substr">http://redis.io/commands/substr</a><p>
 * 
*/ 
SparkRedis.substr = function(){};


/** 
 * fn(keys: [string]) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/sunion">http://redis.io/commands/sunion</a><p>
 * 
*/ 
SparkRedis.sunion = function(){};


/** 
 * fn(dstkey: string, keys: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/sunionstore">http://redis.io/commands/sunionstore</a><p>
 * 
*/ 
SparkRedis.sunionstore = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/ttl">http://redis.io/commands/ttl</a><p>
 * 
*/ 
SparkRedis.ttl = function(){};


/** 
 * fn(key: string) -> string
 * <p> 
 * See <a href="http://redis.io/commands/type">http://redis.io/commands/type</a><p>
 * 
*/ 
SparkRedis.type = function(){};


/** 
 * fn(key: string, score: number, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zadd">http://redis.io/commands/zadd</a><p>
 * 
*/ 
SparkRedis.zadd = function(){};


/** 
 * fn(key: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zcard">http://redis.io/commands/zcard</a><p>
 * 
*/ 
SparkRedis.zcard = function(){};


/** 
 * fn(key: string, min: string, max: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zcount">http://redis.io/commands/zcount</a><p>
 * 
*/ 
SparkRedis.zcount = function(){};


/** 
 * fn(key: string, min: number, max: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zcount">http://redis.io/commands/zcount</a><p>
 * 
*/ 
SparkRedis.zcount_88 = function(){};


/** 
 * fn(key: string, score: number, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zincrby">http://redis.io/commands/zincrby</a><p>
 * 
*/ 
SparkRedis.zincrby = function(){};


/** 
 * fn(dstkey: string, sets: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zinterstore">http://redis.io/commands/zinterstore</a><p>
 * 
*/ 
SparkRedis.zinterstore = function(){};


/** 
 * fn(key: string, start: number, end: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrange">http://redis.io/commands/zrange</a><p>
 * 
*/ 
SparkRedis.zrange = function(){};


/** 
 * fn(key: string, min: number, max: number, offset: number, count: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrangeByScore = function(){};


/** 
 * fn(key: string, min: string, max: string, offset: number, count: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrangeByScore_93 = function(){};


/** 
 * fn(key: string, min: number, max: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrangeByScore_94 = function(){};


/** 
 * fn(key: string, min: string, max: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrangeByScore_95 = function(){};


/** 
 * fn(key: string, min: string, max: string, offset: number, count: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrangeByScoreWithScores = function(){};


/** 
 * fn(key: string, min: string, max: string) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrangeByScoreWithScores_97 = function(){};


/** 
 * fn(key: string, min: number, max: number, offset: number, count: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrangeByScoreWithScores_98 = function(){};


/** 
 * fn(key: string, min: number, max: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrangeByScoreWithScores_99 = function(){};


/** 
 * fn(key: string, start: number, end: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrangeWithScores">http://redis.io/commands/zrangeWithScores</a><p>
 * 
*/ 
SparkRedis.zrangeWithScores = function(){};


/** 
 * fn(key: string, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zrank">http://redis.io/commands/zrank</a><p>
 * 
*/ 
SparkRedis.zrank = function(){};


/** 
 * fn(key: string, members: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zrem">http://redis.io/commands/zrem</a><p>
 * 
*/ 
SparkRedis.zrem = function(){};


/** 
 * fn(key: string, start: number, end: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zremrangeByRank">http://redis.io/commands/zremrangeByRank</a><p>
 * 
*/ 
SparkRedis.zremrangeByRank = function(){};


/** 
 * fn(key: string, start: string, end: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zremrangeByScore">http://redis.io/commands/zremrangeByScore</a><p>
 * 
*/ 
SparkRedis.zremrangeByScore = function(){};


/** 
 * fn(key: string, start: number, end: number) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zremrangeByScore">http://redis.io/commands/zremrangeByScore</a><p>
 * 
*/ 
SparkRedis.zremrangeByScore_105 = function(){};


/** 
 * fn(key: string, start: number, end: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrevrange">http://redis.io/commands/zrevrange</a><p>
 * 
*/ 
SparkRedis.zrevrange = function(){};


/** 
 * fn(key: string, max: string, min: string, offset: number, count: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScore = function(){};


/** 
 * fn(key: string, max: string, min: string) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScore_108 = function(){};


/** 
 * fn(key: string, max: number, min: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScore_109 = function(){};


/** 
 * fn(key: string, max: number, min: number, offset: number, count: number) -> [string]
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScore_110 = function(){};


/** 
 * fn(key: string, max: number, min: number, offset: number, count: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScoreWithScores = function(){};


/** 
 * fn(key: string, max: number, min: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScoreWithScores_112 = function(){};


/** 
 * fn(key: string, max: string, min: string, offset: number, count: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScoreWithScores_113 = function(){};


/** 
 * fn(key: string, max: string, min: string) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
*/ 
SparkRedis.zrevrangeByScoreWithScores_114 = function(){};


/** 
 * fn(key: string, start: number, end: number) -> ?
 * <p> 
 * See <a href="http://redis.io/commands/zrevrangeWithScores">http://redis.io/commands/zrevrangeWithScores</a><p>
 * 
*/ 
SparkRedis.zrevrangeWithScores = function(){};


/** 
 * fn(key: string, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zrevrank">http://redis.io/commands/zrevrank</a><p>
 * 
*/ 
SparkRedis.zrevrank = function(){};


/** 
 * fn(key: string, member: string) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zscore">http://redis.io/commands/zscore</a><p>
 * 
*/ 
SparkRedis.zscore = function(){};


/** 
 * fn(dstkey: string, sets: [string]) -> number
 * <p> 
 * See <a href="http://redis.io/commands/zunionstore">http://redis.io/commands/zunionstore</a><p>
 * 
*/ 
SparkRedis.zunionstore = function(){};


