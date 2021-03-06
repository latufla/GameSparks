function SparkMongoCollectionReadOnly (type) {}

/** 
 * Returns the number of documents in this collection<p><b>returns</b><p>the number of documents<p><b>
 * 
* @return {number}
*/ 
SparkMongoCollectionReadOnly.count = function(){};


/** 
 * Returns the number of documents in this collection<p><b>returns</b><p>the number of documents<p><b>
 * 
* @return {number}
*/ 
SparkMongoCollectionReadOnly.prototype.count = function(){};


/** 
 * Returns the number of documents that match the supplied query<p><b>returns</b><p>the number of documents<p><b>
 * 
* @param {?}query
* @return {number}
*/ 
SparkMongoCollectionReadOnly.count_1 = function(query){};


/** 
 * Returns the number of documents that match the supplied query<p><b>returns</b><p>the number of documents<p><b>
 * 
* @param {?}query
* @return {number}
*/ 
SparkMongoCollectionReadOnly.prototype.count_1 = function(query){};


/** 
 * Returns a list of distinct values for the given key in the collection<p><b>params</b><p>key - the key to use in the query<p><b>returns</b><p>an object array<p><b>
 * 
* @param {string}key
* @return {?}
*/ 
SparkMongoCollectionReadOnly.distinct = function(key){};


/** 
 * Returns a list of distinct values for the given key in the collection<p><b>params</b><p>key - the key to use in the query<p><b>returns</b><p>an object array<p><b>
 * 
* @param {string}key
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.distinct = function(key){};


/** 
 * Returns a list of distinct values for the given key in the collection that match the supplied query<p><b>params</b><p>key - the key to use in the query<p>query - the Mongo query<p><b>returns</b><p>an object array<p><b>
 * 
* @param {string}key
* @param {?} query
* @return {?}
*/ 
SparkMongoCollectionReadOnly.distinct_3 = function(key,  query){};


/** 
 * Returns a list of distinct values for the given key in the collection that match the supplied query<p><b>params</b><p>key - the key to use in the query<p>query - the Mongo query<p><b>returns</b><p>an object array<p><b>
 * 
* @param {string}key
* @param {?} query
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.distinct_3 = function(key,  query){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param {?}keys
*/ 
SparkMongoCollectionReadOnly.dropIndex = function(keys){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param {?}keys
*/ 
SparkMongoCollectionReadOnly.prototype.dropIndex = function(keys){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>name - the name of the index to drop.<p><b>
 * 
* @param {string}name
*/ 
SparkMongoCollectionReadOnly.dropIndexByName = function(name){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>name - the name of the index to drop.<p><b>
 * 
* @param {string}name
*/ 
SparkMongoCollectionReadOnly.prototype.dropIndexByName = function(name){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param {?}keys
*/ 
SparkMongoCollectionReadOnly.ensureIndex = function(keys){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param {?}keys
*/ 
SparkMongoCollectionReadOnly.prototype.ensureIndex = function(keys){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p>optionsIN - index options<p><b>
 * 
* @param {?}keys
* @param {?} optionsIN
*/ 
SparkMongoCollectionReadOnly.ensureIndex_7 = function(keys,  optionsIN){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p>optionsIN - index options<p><b>
 * 
* @param {?}keys
* @param {?} optionsIN
*/ 
SparkMongoCollectionReadOnly.prototype.ensureIndex_7 = function(keys,  optionsIN){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection<p><b>params</b><p><b>
 * 
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.find = function(){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection<p><b>params</b><p><b>
 * 
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.prototype.find = function(){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param {?}query
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.find_9 = function(query){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param {?}query
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.prototype.find_9 = function(query){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query -  a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param {?}query
* @param {?} fields
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.find_10 = function(query,  fields){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query -  a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param {?}query
* @param {?} fields
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadOnly.prototype.find_10 = function(query,  fields){};


/** 
 * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)<p><b>returns</b><p>A JSON object<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.findOne = function(){};


/** 
 * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)<p><b>returns</b><p>A JSON object<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.findOne = function(){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param {?}query
* @return {?}
*/ 
SparkMongoCollectionReadOnly.findOne_12 = function(query){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param {?}query
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.findOne_12 = function(query){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param {?}query
* @param {?} fields
* @return {?}
*/ 
SparkMongoCollectionReadOnly.findOne_13 = function(query,  fields){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param {?}query
* @param {?} fields
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.findOne_13 = function(query,  fields){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p>orderBy - the order clause<p><b>
 * 
* @param {?}query
* @param {?} fields
* @param {?} orderBy
* @return {?}
*/ 
SparkMongoCollectionReadOnly.findOne_14 = function(query,  fields,  orderBy){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p>orderBy - the order clause<p><b>
 * 
* @param {?}query
* @param {?} fields
* @param {?} orderBy
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.findOne_14 = function(query,  fields,  orderBy){};


/** 
 * <p>
 * 
* @param {?}firstOp
* @param {[?]} additionalOps
* @return {?}
*/ 
SparkMongoCollectionReadOnly.aggregate = function(firstOp,  additionalOps){};


/** 
 * <p>
 * 
* @param {?}firstOp
* @param {[?]} additionalOps
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.aggregate = function(firstOp,  additionalOps){};


/** 
 * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB<p><b>returns</b><p>list of index documents<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.getIndexInfo = function(){};


/** 
 * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB<p><b>returns</b><p>list of index documents<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.getIndexInfo = function(){};


/** 
 * Gets the error (if there is one) from the previous operation on this connection.<p><b>returns</b><p>a JSON object with error and status information<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.getLastError = function(){};


/** 
 * Gets the error (if there is one) from the previous operation on this connection.<p><b>returns</b><p>a JSON object with error and status information<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadOnly.prototype.getLastError = function(){};


