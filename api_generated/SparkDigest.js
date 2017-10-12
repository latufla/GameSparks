function SparkDigest (type) {}

/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacMd5Base64 = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacMd5Base64WithBase64Key = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacMd5Hex = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacMD5 Message Authentication Code (MAC) as a hex string (lowercase) for the given hex encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacMd5HexWithHexKey = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha1Base64 = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha1Base64WithBase64Key = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha1Hex = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA1 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha1HexWithHexKey = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha256Base64 = function(){};


/** 
 * fn(base64Key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha256Base64WithBase64Key = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha256Hex = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA256 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha256HexWithHexKey = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha384Base64 = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha384Base64WithBase64Key = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha384Hex = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA384 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha384HexWithHexKey = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha512Base64 = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as a base64 encoded string for the given base64 encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha512Base64WithBase64Key = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given key and value.<p>
 * 
*/ 
SparkDigest.hmacSha512Hex = function(){};


/** 
 * fn(key: string, valueToDigest: string) -> string
 * <p> 
 * Returns a HmacSHA512 Message Authentication Code (MAC) as hex string (lowercase) for the given hex encoded key and value.<p>
 * 
*/ 
SparkDigest.hmacSha512HexWithHexKey = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the MD2 digest and returns the value as a a base64 encoded string.<p>
 * 
*/ 
SparkDigest.md2Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the MD2 digest and returns the value as a 32 character hex string.<p>
 * 
*/ 
SparkDigest.md2Hex = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the MD5 digest and returns the value as a base64 encoded string.<p>
 * 
*/ 
SparkDigest.md5Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the MD5 digest and returns the value as a 32 character hex string.<p>
 * 
*/ 
SparkDigest.md5Hex = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-1 digest and returns the value as a base64 encoded string.<p>
 * 
*/ 
SparkDigest.sha1Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-1 digest and returns the value as a hex string.<p>
 * 
*/ 
SparkDigest.sha1Hex = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-256 digest and returns the value as a base64 encoded string.<p>
 * 
*/ 
SparkDigest.sha256Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-256 digest and returns the value as a hex string.<p>
 * 
*/ 
SparkDigest.sha256Hex = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-384 digest and returns the value as a base64 encoded string.<p>
 * 
*/ 
SparkDigest.sha384Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-384 digest and returns the value as a hex string.<p>
 * 
*/ 
SparkDigest.sha384Hex = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-512 digest and returns the value as a base64 encoded string.<p>
 * 
*/ 
SparkDigest.sha512Base64 = function(){};


/** 
 * fn(data: string) -> string
 * <p> 
 * Calculates the SHA-512 digest and returns the value as a hex string.<p>
 * 
*/ 
SparkDigest.sha512Hex = function(){};


