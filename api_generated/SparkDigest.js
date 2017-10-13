function SparkDigest (type) {}

/** 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacMd5Base64 = function(key,  valueToDigest){};


/** 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacMd5Base64WithBase64Key = function(key,  valueToDigest){};


/** 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacMd5Hex = function(key,  valueToDigest){};


/** 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given hex encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacMd5HexWithHexKey = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha1Base64 = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha1Base64WithBase64Key = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha1Hex = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha1HexWithHexKey = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha256Base64 = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
* @param { string}base64Key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha256Base64WithBase64Key = function(base64Key,  valueToDigest){};


/** 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha256Hex = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha256HexWithHexKey = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha384Base64 = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha384Base64WithBase64Key = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha384Hex = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha384HexWithHexKey = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha512Base64 = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha512Base64WithBase64Key = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha512Hex = function(key,  valueToDigest){};


/** 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
* @param { string}key
* @param { string} valueToDigest
*/ 
SparkDigest.hmacSha512HexWithHexKey = function(key,  valueToDigest){};


/** 
 * Calculates the MD2 digest and returns the value as a a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.md2Base64 = function(data){};


/** 
 * Calculates the MD2 digest and returns the value as a 32 character hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.md2Hex = function(data){};


/** 
 * Calculates the MD5 digest and returns the value as a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.md5Base64 = function(data){};


/** 
 * Calculates the MD5 digest and returns the value as a 32 character hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.md5Hex = function(data){};


/** 
 * Calculates the SHA-1 digest and returns the value as a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha1Base64 = function(data){};


/** 
 * Calculates the SHA-1 digest and returns the value as a hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha1Hex = function(data){};


/** 
 * Calculates the SHA-256 digest and returns the value as a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha256Base64 = function(data){};


/** 
 * Calculates the SHA-256 digest and returns the value as a hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha256Hex = function(data){};


/** 
 * Calculates the SHA-384 digest and returns the value as a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha384Base64 = function(data){};


/** 
 * Calculates the SHA-384 digest and returns the value as a hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha384Hex = function(data){};


/** 
 * Calculates the SHA-512 digest and returns the value as a base64 encoded string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha512Base64 = function(data){};


/** 
 * Calculates the SHA-512 digest and returns the value as a hex string.<p>
 * 
* @param { string}data
*/ 
SparkDigest.sha512Hex = function(data){};


