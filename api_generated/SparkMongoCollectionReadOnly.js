function SparkMongoCollectionReadOnly (type) {}

/** 
 * fn() -> number
 * <p> 
 * Returns the number of documents in this collection<p><b>returns</b><p>the number of documents<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.count = function(){};


/** 
 * fn(query: ?) -> number
 * <p> 
 * Returns the number of documents that match the supplied query<p><b>returns</b><p>the number of documents<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.count_1 = function(){};


/** 
 * fn(key: string) -> ?
 * <p> 
 * Returns a list of distinct values for the given key in the collection<p><b>params</b><p>key - the key to use in the query<p><b>returns</b><p>an object array<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.distinct = function(){};


/** 
 * fn(key: string, query: ?) -> ?
 * <p> 
 * Returns a list of distinct values for the given key in the collection that match the supplied query<p><b>params</b><p>key - the key to use in the query<p>query - the Mongo query<p><b>returns</b><p>an object array<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.distinct_3 = function(){};


/** 
 * fn(keys: ?)
 * <p> 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.dropIndex = function(){};


/** 
 * fn(name: string)
 * <p> 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>name - the name of the index to drop.<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.dropIndexByName = function(){};


/** 
 * fn(keys: ?)
 * <p> 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.ensureIndex = function(){};


/** 
 * fn(keys: ?, optionsIN: ?)
 * <p> 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p>optionsIN - index options<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.ensureIndex_7 = function(){};


/** 
 * fn() -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection<p><b>params</b><p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.find = function(){};


/** 
 * fn(query: ?) -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query<p><b>params</b><p>query - a Mongo query<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.find_9 = function(){};


/** 
 * fn(query: ?, fields: ?) -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query -  a Mongo query<p>fields - the fields to return<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.find_10 = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)<p><b>returns</b><p>A JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.findOne = function(){};


/** 
 * fn(query: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p><b>params</b><p>query - a Mongo query<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.findOne_12 = function(){};


/** 
 * fn(query: ?, fields: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.findOne_13 = function(){};


/** 
 * fn(query: ?, fields: ?, orderBy: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p>orderBy - the order clause<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.findOne_14 = function(){};


/** 
 * fn(firstOp: ?, additionalOps: [?]) -> ?
 * <p> 
 * <p>
 * 
*/ 
SparkMongoCollectionReadOnly.aggregate = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB<p><b>returns</b><p>list of index documents<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.getIndexInfo = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Gets the error (if there is one) from the previous operation on this connection.<p><b>returns</b><p>a JSON object with error and status information<p><b>
 * 
*/ 
SparkMongoCollectionReadOnly.getLastError = function(){};


