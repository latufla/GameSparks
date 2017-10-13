function SparkRedis (type) {}

/** 
 * See <a href="http://redis.io/commands/append">http://redis.io/commands/append</a><p>
 * 
* @param { string}key
* @param { string} value
* @return {number}
*/ 
SparkRedis.append = function(key,  value){};


/** 
 * See <a href="http://redis.io/commands/bitcount">http://redis.io/commands/bitcount</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {number}
*/ 
SparkRedis.bitcount = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/bitcount">http://redis.io/commands/bitcount</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.bitcount_2 = function(key){};


/** 
 * See <a href="http://redis.io/commands/bitop">http://redis.io/commands/bitop</a><p>
 * 
* @param { string}op
* @param { string} destKey
* @param { [string]} srcKeys
* @return {number}
*/ 
SparkRedis.bitop = function(op,  destKey,  srcKeys){};


/** 
 * See <a href="http://redis.io/commands/decr">http://redis.io/commands/decr</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.decr = function(key){};


/** 
 * See <a href="http://redis.io/commands/decrBy">http://redis.io/commands/decrBy</a><p>
 * 
* @param { string}key
* @param { number} integer
* @return {number}
*/ 
SparkRedis.decrBy = function(key,  integer){};


/** 
 * See <a href="http://redis.io/commands/del">http://redis.io/commands/del</a><p>
 * 
* @param { [string]}keys
* @return {number}
*/ 
SparkRedis.del = function(keys){};


/** 
 * See <a href="http://redis.io/commands/exists">http://redis.io/commands/exists</a><p>
 * 
* @param { string}key
* @return {bool}
*/ 
SparkRedis.exists = function(key){};


/** 
 * See <a href="http://redis.io/commands/expire">http://redis.io/commands/expire</a><p>
 * 
* @param { string}key
* @param { number} seconds
* @return {number}
*/ 
SparkRedis.expire = function(key,  seconds){};


/** 
 * See <a href="http://redis.io/commands/expireAt">http://redis.io/commands/expireAt</a><p>
 * 
* @param { string}key
* @param { number} unixTime
* @return {number}
*/ 
SparkRedis.expireAt = function(key,  unixTime){};


/** 
 * See <a href="http://redis.io/commands/flushdb">http://redis.io/commands/flushdb</a><p>
 * 
* @return {string}
*/ 
SparkRedis.flushdb = function(){};


/** 
 * See <a href="http://redis.io/commands/get">http://redis.io/commands/get</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.get = function(key){};


/** 
 * See <a href="http://redis.io/commands/getbit">http://redis.io/commands/getbit</a><p>
 * 
* @param { string}key
* @param { number} offset
* @return {bool}
*/ 
SparkRedis.getbit = function(key,  offset){};


/** 
 * See <a href="http://redis.io/commands/getrange">http://redis.io/commands/getrange</a><p>
 * 
* @param { string}key
* @param { number} startOffset
* @param { number} endOffset
* @return {string}
*/ 
SparkRedis.getrange = function(key,  startOffset,  endOffset){};


/** 
 * See <a href="http://redis.io/commands/hdel">http://redis.io/commands/hdel</a><p>
 * 
* @param { string}key
* @param { [string]} fields
* @return {number}
*/ 
SparkRedis.hdel = function(key,  fields){};


/** 
 * See <a href="http://redis.io/commands/hexists">http://redis.io/commands/hexists</a><p>
 * 
* @param { string}key
* @param { string} field
* @return {bool}
*/ 
SparkRedis.hexists = function(key,  field){};


/** 
 * See <a href="http://redis.io/commands/hget">http://redis.io/commands/hget</a><p>
 * 
* @param { string}key
* @param { string} field
* @return {string}
*/ 
SparkRedis.hget = function(key,  field){};


/** 
 * See <a href="http://redis.io/commands/hgetAll">http://redis.io/commands/hgetAll</a><p>
 * 
* @param { string}key
* @return {[string]}
*/ 
SparkRedis.hgetAll = function(key){};


/** 
 * See <a href="http://redis.io/commands/hincrBy">http://redis.io/commands/hincrBy</a><p>
 * 
* @param { string}key
* @param { string} field
* @param { number} value
* @return {number}
*/ 
SparkRedis.hincrBy = function(key,  field,  value){};


/** 
 * See <a href="http://redis.io/commands/hincrByFloat">http://redis.io/commands/hincrByFloat</a><p>
 * 
* @param { string}key
* @param { string} field
* @param { number} increment
* @return {number}
*/ 
SparkRedis.hincrByFloat = function(key,  field,  increment){};


/** 
 * See <a href="http://redis.io/commands/hkeys">http://redis.io/commands/hkeys</a><p>
 * 
* @param { string}key
* @return {[string]}
*/ 
SparkRedis.hkeys = function(key){};


/** 
 * See <a href="http://redis.io/commands/hlen">http://redis.io/commands/hlen</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.hlen = function(key){};


/** 
 * See <a href="http://redis.io/commands/hmget">http://redis.io/commands/hmget</a><p>
 * 
* @param { string}key
* @param { [string]} fields
* @return {[string]}
*/ 
SparkRedis.hmget = function(key,  fields){};


/** 
 * See <a href="http://redis.io/commands/hmset">http://redis.io/commands/hmset</a><p>
 * 
* @param { string}key
* @param { ?} hash
* @return {string}
*/ 
SparkRedis.hmset = function(key,  hash){};


/** 
 * See <a href="http://redis.io/commands/hset">http://redis.io/commands/hset</a><p>
 * 
* @param { string}key
* @param { string} field
* @param { string} value
* @return {number}
*/ 
SparkRedis.hset = function(key,  field,  value){};


/** 
 * See <a href="http://redis.io/commands/hsetnx">http://redis.io/commands/hsetnx</a><p>
 * 
* @param { string}key
* @param { string} field
* @param { string} value
* @return {number}
*/ 
SparkRedis.hsetnx = function(key,  field,  value){};


/** 
 * See <a href="http://redis.io/commands/hvals">http://redis.io/commands/hvals</a><p>
 * 
* @param { string}key
* @return {[string]}
*/ 
SparkRedis.hvals = function(key){};


/** 
 * See <a href="http://redis.io/commands/incr">http://redis.io/commands/incr</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.incr = function(key){};


/** 
 * See <a href="http://redis.io/commands/incrBy">http://redis.io/commands/incrBy</a><p>
 * 
* @param { string}key
* @param { number} integer
* @return {number}
*/ 
SparkRedis.incrBy = function(key,  integer){};


/** 
 * See <a href="http://redis.io/commands/incrByFloat">http://redis.io/commands/incrByFloat</a><p>
 * 
* @param { string}key
* @param { number} increment
* @return {number}
*/ 
SparkRedis.incrByFloat = function(key,  increment){};


/** 
 * See <a href="http://redis.io/commands/keys">http://redis.io/commands/keys</a><p>
 * 
* @param { string}pattern
* @return {[string]}
*/ 
SparkRedis.keys = function(pattern){};


/** 
 * See <a href="http://redis.io/commands/lindex">http://redis.io/commands/lindex</a><p>
 * 
* @param { string}key
* @param { number} index
* @return {string}
*/ 
SparkRedis.lindex = function(key,  index){};


/** 
 * See <a href="http://redis.io/commands/linsert">http://redis.io/commands/linsert</a><p>
 * 
* @param { string}key
* @param { string} where
* @param { string} pivit
* @param { string} value
* @return {number}
*/ 
SparkRedis.linsert = function(key,  where,  pivit,  value){};


/** 
 * See <a href="http://redis.io/commands/llen">http://redis.io/commands/llen</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.llen = function(key){};


/** 
 * See <a href="http://redis.io/commands/lpop">http://redis.io/commands/lpop</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.lpop = function(key){};


/** 
 * See <a href="http://redis.io/commands/lpush">http://redis.io/commands/lpush</a><p>
 * 
* @param { string}key
* @param { [string]} strings
* @return {number}
*/ 
SparkRedis.lpush = function(key,  strings){};


/** 
 * See <a href="http://redis.io/commands/lpushx">http://redis.io/commands/lpushx</a><p>
 * 
* @param { string}key
* @param { [string]} strings
* @return {number}
*/ 
SparkRedis.lpushx = function(key,  strings){};


/** 
 * See <a href="http://redis.io/commands/lrange">http://redis.io/commands/lrange</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {[string]}
*/ 
SparkRedis.lrange = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/lrem">http://redis.io/commands/lrem</a><p>
 * 
* @param { string}key
* @param { number} count
* @param { string} value
* @return {number}
*/ 
SparkRedis.lrem = function(key,  count,  value){};


/** 
 * See <a href="http://redis.io/commands/lset">http://redis.io/commands/lset</a><p>
 * 
* @param { string}key
* @param { number} index
* @param { string} value
* @return {string}
*/ 
SparkRedis.lset = function(key,  index,  value){};


/** 
 * See <a href="http://redis.io/commands/ltrim">http://redis.io/commands/ltrim</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {string}
*/ 
SparkRedis.ltrim = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/mget">http://redis.io/commands/mget</a><p>
 * 
* @param { [string]}keys
* @return {[string]}
*/ 
SparkRedis.mget = function(keys){};


/** 
 * See <a href="http://redis.io/commands/mset">http://redis.io/commands/mset</a><p>
 * 
* @param { [string]}keysvalues
* @return {string}
*/ 
SparkRedis.mset = function(keysvalues){};


/** 
 * See <a href="http://redis.io/commands/msetnx">http://redis.io/commands/msetnx</a><p>
 * 
* @param { [string]}keysvalues
* @return {number}
*/ 
SparkRedis.msetnx = function(keysvalues){};


/** 
 * See <a href="http://redis.io/commands/persist">http://redis.io/commands/persist</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.persist = function(key){};


/** 
 * See <a href="http://redis.io/commands/pexpire">http://redis.io/commands/pexpire</a><p>
 * 
* @param { string}key
* @param { number} milliseconds
* @return {number}
*/ 
SparkRedis.pexpire = function(key,  milliseconds){};


/** 
 * See <a href="http://redis.io/commands/pexpireAt">http://redis.io/commands/pexpireAt</a><p>
 * 
* @param { string}key
* @param { number} millisecondsTimestamp
* @return {number}
*/ 
SparkRedis.pexpireAt = function(key,  millisecondsTimestamp){};


/** 
 * See <a href="http://redis.io/commands/psetex">http://redis.io/commands/psetex</a><p>
 * 
* @param { string}key
* @param { number} milliseconds
* @param { string} value
* @return {string}
*/ 
SparkRedis.psetex = function(key,  milliseconds,  value){};


/** 
 * See <a href="http://redis.io/commands/pttl">http://redis.io/commands/pttl</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.pttl = function(key){};


/** 
 * See <a href="http://redis.io/commands/rename">http://redis.io/commands/rename</a><p>
 * 
* @param { string}oldkey
* @param { string} newkey
* @return {string}
*/ 
SparkRedis.rename = function(oldkey,  newkey){};


/** 
 * See <a href="http://redis.io/commands/renamenx">http://redis.io/commands/renamenx</a><p>
 * 
* @param { string}oldkey
* @param { string} newkey
* @return {number}
*/ 
SparkRedis.renamenx = function(oldkey,  newkey){};


/** 
 * See <a href="http://redis.io/commands/rpop">http://redis.io/commands/rpop</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.rpop = function(key){};


/** 
 * See <a href="http://redis.io/commands/rpoplpush">http://redis.io/commands/rpoplpush</a><p>
 * 
* @param { string}srckey
* @param { string} dstkey
* @return {string}
*/ 
SparkRedis.rpoplpush = function(srckey,  dstkey){};


/** 
 * See <a href="http://redis.io/commands/rpush">http://redis.io/commands/rpush</a><p>
 * 
* @param { string}key
* @param { [string]} strings
* @return {number}
*/ 
SparkRedis.rpush = function(key,  strings){};


/** 
 * See <a href="http://redis.io/commands/rpushx">http://redis.io/commands/rpushx</a><p>
 * 
* @param { string}key
* @param { [string]} strings
* @return {number}
*/ 
SparkRedis.rpushx = function(key,  strings){};


/** 
 * See <a href="http://redis.io/commands/sadd">http://redis.io/commands/sadd</a><p>
 * 
* @param { string}key
* @param { [string]} members
* @return {number}
*/ 
SparkRedis.sadd = function(key,  members){};


/** 
 * See <a href="http://redis.io/commands/scard">http://redis.io/commands/scard</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.scard = function(key){};


/** 
 * See <a href="http://redis.io/commands/sdiff">http://redis.io/commands/sdiff</a><p>
 * 
* @param { [string]}keys
* @return {[string]}
*/ 
SparkRedis.sdiff = function(keys){};


/** 
 * See <a href="http://redis.io/commands/sdiffstore">http://redis.io/commands/sdiffstore</a><p>
 * 
* @param { string}dstkey
* @param { [string]} keys
* @return {number}
*/ 
SparkRedis.sdiffstore = function(dstkey,  keys){};


/** 
 * See <a href="http://redis.io/commands/getSet">http://redis.io/commands/getSet</a><p>
 * 
* @param { string}key
* @param { string} value
* @return {string}
*/ 
SparkRedis.getSet = function(key,  value){};


/** 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
* @param { string}key
* @param { string} value
* @return {string}
*/ 
SparkRedis.set = function(key,  value){};


/** 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
* @param { string}key
* @param { string} value
* @param { string} nxxx
* @param { string} expx
* @param { number} time
* @return {string}
*/ 
SparkRedis.set_61 = function(key,  value,  nxxx,  expx,  time){};


/** 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
* @param { string}key
* @param { string} value
* @param { string} nxxx
* @param { string} expx
* @param { number} time
* @return {string}
*/ 
SparkRedis.set_62 = function(key,  value,  nxxx,  expx,  time){};


/** 
 * See <a href="http://redis.io/commands/set">http://redis.io/commands/set</a><p>
 * 
* @param { string}key
* @param { string} value
* @param { string} nxxx
* @return {string}
*/ 
SparkRedis.set_63 = function(key,  value,  nxxx){};


/** 
 * See <a href="http://redis.io/commands/setbit">http://redis.io/commands/setbit</a><p>
 * 
* @param { string}key
* @param { number} offset
* @param { bool} value
* @return {bool}
*/ 
SparkRedis.setbit = function(key,  offset,  value){};


/** 
 * See <a href="http://redis.io/commands/setex">http://redis.io/commands/setex</a><p>
 * 
* @param { string}key
* @param { number} seconds
* @param { string} value
* @return {string}
*/ 
SparkRedis.setex = function(key,  seconds,  value){};


/** 
 * See <a href="http://redis.io/commands/setnx">http://redis.io/commands/setnx</a><p>
 * 
* @param { string}key
* @param { string} value
* @return {number}
*/ 
SparkRedis.setnx = function(key,  value){};


/** 
 * See <a href="http://redis.io/commands/setrange">http://redis.io/commands/setrange</a><p>
 * 
* @param { string}key
* @param { number} offset
* @param { string} value
* @return {number}
*/ 
SparkRedis.setrange = function(key,  offset,  value){};


/** 
 * See <a href="http://redis.io/commands/sinter">http://redis.io/commands/sinter</a><p>
 * 
* @param { [string]}keys
* @return {[string]}
*/ 
SparkRedis.sinter = function(keys){};


/** 
 * See <a href="http://redis.io/commands/sinterstore">http://redis.io/commands/sinterstore</a><p>
 * 
* @param { string}dstkey
* @param { [string]} keys
* @return {number}
*/ 
SparkRedis.sinterstore = function(dstkey,  keys){};


/** 
 * See <a href="http://redis.io/commands/sismember">http://redis.io/commands/sismember</a><p>
 * 
* @param { string}key
* @param { string} member
* @return {bool}
*/ 
SparkRedis.sismember = function(key,  member){};


/** 
 * See <a href="http://redis.io/commands/smembers">http://redis.io/commands/smembers</a><p>
 * 
* @param { string}key
* @return {[string]}
*/ 
SparkRedis.smembers = function(key){};


/** 
 * See <a href="http://redis.io/commands/smove">http://redis.io/commands/smove</a><p>
 * 
* @param { string}srckey
* @param { string} dstkey
* @param { string} member
* @return {number}
*/ 
SparkRedis.smove = function(srckey,  dstkey,  member){};


/** 
 * See <a href="http://redis.io/commands/sort">http://redis.io/commands/sort</a><p>
 * 
* @param { string}key
* @param { string} dstkey
* @return {number}
*/ 
SparkRedis.sort = function(key,  dstkey){};


/** 
 * See <a href="http://redis.io/commands/sort">http://redis.io/commands/sort</a><p>
 * 
* @param { string}key
* @return {[string]}
*/ 
SparkRedis.sort_74 = function(key){};


/** 
 * See <a href="http://redis.io/commands/spop">http://redis.io/commands/spop</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.spop = function(key){};


/** 
 * See <a href="http://redis.io/commands/srandmember">http://redis.io/commands/srandmember</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.srandmember = function(key){};


/** 
 * See <a href="http://redis.io/commands/srandmember">http://redis.io/commands/srandmember</a><p>
 * 
* @param { string}key
* @param { number} count
* @return {[string]}
*/ 
SparkRedis.srandmember_77 = function(key,  count){};


/** 
 * See <a href="http://redis.io/commands/srem">http://redis.io/commands/srem</a><p>
 * 
* @param { string}key
* @param { [string]} members
* @return {number}
*/ 
SparkRedis.srem = function(key,  members){};


/** 
 * See <a href="http://redis.io/commands/strlen">http://redis.io/commands/strlen</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.strlen = function(key){};


/** 
 * See <a href="http://redis.io/commands/substr">http://redis.io/commands/substr</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {string}
*/ 
SparkRedis.substr = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/sunion">http://redis.io/commands/sunion</a><p>
 * 
* @param { [string]}keys
* @return {[string]}
*/ 
SparkRedis.sunion = function(keys){};


/** 
 * See <a href="http://redis.io/commands/sunionstore">http://redis.io/commands/sunionstore</a><p>
 * 
* @param { string}dstkey
* @param { [string]} keys
* @return {number}
*/ 
SparkRedis.sunionstore = function(dstkey,  keys){};


/** 
 * See <a href="http://redis.io/commands/ttl">http://redis.io/commands/ttl</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.ttl = function(key){};


/** 
 * See <a href="http://redis.io/commands/type">http://redis.io/commands/type</a><p>
 * 
* @param { string}key
* @return {string}
*/ 
SparkRedis.type = function(key){};


/** 
 * See <a href="http://redis.io/commands/zadd">http://redis.io/commands/zadd</a><p>
 * 
* @param { string}key
* @param { number} score
* @param { string} member
* @return {number}
*/ 
SparkRedis.zadd = function(key,  score,  member){};


/** 
 * See <a href="http://redis.io/commands/zcard">http://redis.io/commands/zcard</a><p>
 * 
* @param { string}key
* @return {number}
*/ 
SparkRedis.zcard = function(key){};


/** 
 * See <a href="http://redis.io/commands/zcount">http://redis.io/commands/zcount</a><p>
 * 
* @param { string}key
* @param { string} min
* @param { string} max
* @return {number}
*/ 
SparkRedis.zcount = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zcount">http://redis.io/commands/zcount</a><p>
 * 
* @param { string}key
* @param { number} min
* @param { number} max
* @return {number}
*/ 
SparkRedis.zcount_88 = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zincrby">http://redis.io/commands/zincrby</a><p>
 * 
* @param { string}key
* @param { number} score
* @param { string} member
* @return {number}
*/ 
SparkRedis.zincrby = function(key,  score,  member){};


/** 
 * See <a href="http://redis.io/commands/zinterstore">http://redis.io/commands/zinterstore</a><p>
 * 
* @param { string}dstkey
* @param { [string]} sets
* @return {number}
*/ 
SparkRedis.zinterstore = function(dstkey,  sets){};


/** 
 * See <a href="http://redis.io/commands/zrange">http://redis.io/commands/zrange</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {[string]}
*/ 
SparkRedis.zrange = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
* @param { string}key
* @param { number} min
* @param { number} max
* @param { number} offset
* @param { number} count
* @return {[string]}
*/ 
SparkRedis.zrangeByScore = function(key,  min,  max,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
* @param { string}key
* @param { string} min
* @param { string} max
* @param { number} offset
* @param { number} count
* @return {[string]}
*/ 
SparkRedis.zrangeByScore_93 = function(key,  min,  max,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
* @param { string}key
* @param { number} min
* @param { number} max
* @return {[string]}
*/ 
SparkRedis.zrangeByScore_94 = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScore">http://redis.io/commands/zrangeByScore</a><p>
 * 
* @param { string}key
* @param { string} min
* @param { string} max
* @return {[string]}
*/ 
SparkRedis.zrangeByScore_95 = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { string} min
* @param { string} max
* @param { number} offset
* @param { number} count
* @return {?}
*/ 
SparkRedis.zrangeByScoreWithScores = function(key,  min,  max,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { string} min
* @param { string} max
* @return {?}
*/ 
SparkRedis.zrangeByScoreWithScores_97 = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { number} min
* @param { number} max
* @param { number} offset
* @param { number} count
* @return {?}
*/ 
SparkRedis.zrangeByScoreWithScores_98 = function(key,  min,  max,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrangeByScoreWithScores">http://redis.io/commands/zrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { number} min
* @param { number} max
* @return {?}
*/ 
SparkRedis.zrangeByScoreWithScores_99 = function(key,  min,  max){};


/** 
 * See <a href="http://redis.io/commands/zrangeWithScores">http://redis.io/commands/zrangeWithScores</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {?}
*/ 
SparkRedis.zrangeWithScores = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zrank">http://redis.io/commands/zrank</a><p>
 * 
* @param { string}key
* @param { string} member
* @return {number}
*/ 
SparkRedis.zrank = function(key,  member){};


/** 
 * See <a href="http://redis.io/commands/zrem">http://redis.io/commands/zrem</a><p>
 * 
* @param { string}key
* @param { [string]} members
* @return {number}
*/ 
SparkRedis.zrem = function(key,  members){};


/** 
 * See <a href="http://redis.io/commands/zremrangeByRank">http://redis.io/commands/zremrangeByRank</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {number}
*/ 
SparkRedis.zremrangeByRank = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zremrangeByScore">http://redis.io/commands/zremrangeByScore</a><p>
 * 
* @param { string}key
* @param { string} start
* @param { string} end
* @return {number}
*/ 
SparkRedis.zremrangeByScore = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zremrangeByScore">http://redis.io/commands/zremrangeByScore</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {number}
*/ 
SparkRedis.zremrangeByScore_105 = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zrevrange">http://redis.io/commands/zrevrange</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {[string]}
*/ 
SparkRedis.zrevrange = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
* @param { string}key
* @param { string} max
* @param { string} min
* @param { number} offset
* @param { number} count
* @return {[string]}
*/ 
SparkRedis.zrevrangeByScore = function(key,  max,  min,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
* @param { string}key
* @param { string} max
* @param { string} min
* @return {[string]}
*/ 
SparkRedis.zrevrangeByScore_108 = function(key,  max,  min){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
* @param { string}key
* @param { number} max
* @param { number} min
* @return {[string]}
*/ 
SparkRedis.zrevrangeByScore_109 = function(key,  max,  min){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScore">http://redis.io/commands/zrevrangeByScore</a><p>
 * 
* @param { string}key
* @param { number} max
* @param { number} min
* @param { number} offset
* @param { number} count
* @return {[string]}
*/ 
SparkRedis.zrevrangeByScore_110 = function(key,  max,  min,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { number} max
* @param { number} min
* @param { number} offset
* @param { number} count
* @return {?}
*/ 
SparkRedis.zrevrangeByScoreWithScores = function(key,  max,  min,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { number} max
* @param { number} min
* @return {?}
*/ 
SparkRedis.zrevrangeByScoreWithScores_112 = function(key,  max,  min){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { string} max
* @param { string} min
* @param { number} offset
* @param { number} count
* @return {?}
*/ 
SparkRedis.zrevrangeByScoreWithScores_113 = function(key,  max,  min,  offset,  count){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeByScoreWithScores">http://redis.io/commands/zrevrangeByScoreWithScores</a><p>
 * 
* @param { string}key
* @param { string} max
* @param { string} min
* @return {?}
*/ 
SparkRedis.zrevrangeByScoreWithScores_114 = function(key,  max,  min){};


/** 
 * See <a href="http://redis.io/commands/zrevrangeWithScores">http://redis.io/commands/zrevrangeWithScores</a><p>
 * 
* @param { string}key
* @param { number} start
* @param { number} end
* @return {?}
*/ 
SparkRedis.zrevrangeWithScores = function(key,  start,  end){};


/** 
 * See <a href="http://redis.io/commands/zrevrank">http://redis.io/commands/zrevrank</a><p>
 * 
* @param { string}key
* @param { string} member
* @return {number}
*/ 
SparkRedis.zrevrank = function(key,  member){};


/** 
 * See <a href="http://redis.io/commands/zscore">http://redis.io/commands/zscore</a><p>
 * 
* @param { string}key
* @param { string} member
* @return {number}
*/ 
SparkRedis.zscore = function(key,  member){};


/** 
 * See <a href="http://redis.io/commands/zunionstore">http://redis.io/commands/zunionstore</a><p>
 * 
* @param { string}dstkey
* @param { [string]} sets
* @return {number}
*/ 
SparkRedis.zunionstore = function(dstkey,  sets){};


