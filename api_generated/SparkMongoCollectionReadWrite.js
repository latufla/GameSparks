function SparkMongoCollectionReadWrite (type) {}

/** 
 * fn() -> number
 * <p> 
 * Returns the number of documents in this collection<p><b>returns</b><p>the number of documents<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.count = function(){};


/** 
 * fn(query: ?) -> number
 * <p> 
 * Returns the number of documents that match the supplied query<p><b>returns</b><p>the number of documents<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.count_1 = function(){};


/** 
 * fn(key: string) -> ?
 * <p> 
 * Returns a list of distinct values for the given key in the collection<p><b>params</b><p>key - the key to use in the query<p><b>returns</b><p>an object array<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.distinct = function(){};


/** 
 * fn(key: string, query: ?) -> ?
 * <p> 
 * Returns a list of distinct values for the given key in the collection that match the supplied query<p><b>params</b><p>key - the key to use in the query<p>query - the Mongo query<p><b>returns</b><p>an object array<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.distinct_3 = function(){};


/** 
 * fn(keys: ?)
 * <p> 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.dropIndex = function(){};


/** 
 * fn(name: string)
 * <p> 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>name - the name of the index to drop.<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.dropIndexByName = function(){};


/** 
 * fn(keys: ?)
 * <p> 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.ensureIndex = function(){};


/** 
 * fn(keys: ?, optionsIN: ?)
 * <p> 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p>optionsIN - index options<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.ensureIndex_7 = function(){};


/** 
 * fn() -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection<p><b>params</b><p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.find = function(){};


/** 
 * fn(query: ?) -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query<p><b>params</b><p>query - a Mongo query<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.find_9 = function(){};


/** 
 * fn(query: ?, fields: ?) -> SparkMongoCursor
 * <p> 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query -  a Mongo query<p>fields - the fields to return<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.find_10 = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)<p><b>returns</b><p>A JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findOne = function(){};


/** 
 * fn(query: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p><b>params</b><p>query - a Mongo query<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findOne_12 = function(){};


/** 
 * fn(query: ?, fields: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findOne_13 = function(){};


/** 
 * fn(query: ?, fields: ?, orderBy: ?) -> ?
 * <p> 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p>orderBy - the order clause<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findOne_14 = function(){};


/** 
 * fn(query: ?, update: ?) -> ?
 * <p> 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false, sort=null<p><b>params</b><p>query - Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>update -  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findAndModify = function(){};


/** 
 * fn(query: ?, sort: ?, update: ?) -> ?
 * <p> 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false<p><b>params</b><p>query - Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>sort - Determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.<p>update -  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findAndModify_16 = function(){};


/** 
 * fn(query: ?, fields: ?, sort: ?, remove: bool, update: ?, returnNew: bool, upsert: bool) -> ?
 * <p> 
 * Atomically modifies and returns a single document. By default, the returned document does not include the modifications made on the update. To return the document with the modifications made on the update, use the returnNew option.<p><b>params</b><p>query - specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>fields - the fields to return<p>sort - determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.<p>remove - must specify either the remove or the update field in the findAndModify command. When true, removes the selected document. The default is false.<p>update -  must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p>returnNew - when true, returns the modified document rather than the original. The findAndModify method ignores the new option for remove operations. The default is false.<p>upsert - used in conjunction with the update field. When true, the findAndModify command creates a new document if the query returns no documents. The default is false.<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findAndModify_17 = function(){};


/** 
 * fn(query: ?) -> ?
 * <p> 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with  fields=null, sort=null, remove=true, returnNew=false, upsert=false<p><b>params</b><p>query - a Mongo query<p><b>returns</b><p>a JSON object<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.findAndRemove = function(){};


/** 
 * fn(documents: [?]) -> bool
 * <p> 
 * Inserts a document or documents into a collection.<p><b>params</b><p>documents - A document or array of documents to insert into the collection.<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.insert = function(){};


/** 
 * fn(firstOp: ?, additionalOps: [?]) -> ?
 * <p> 
 * <p>
 * 
*/ 
SparkMongoCollectionReadWrite.aggregate = function(){};


/** 
 * fn(existingDocument: ?, newDocument: ?) -> bool
 * <p> 
 * Generates the correct mongo update command to set and unset fields so the mongo record matches the newDocument.<p>This can greatly increase performance in documents where only a small amount of change has been made as only the required fields are modified.<p>If the existing document is null, the new document is inserted directly into the collection<p><b>params</b><p>existingDocument - A document perviously retrieved from the database. The _id field of this document will be used to determine which document to update. If the document passed has no _id the call will fail.<p>newDocument - The new state to persist in the database, and _id field in this document will be ignored.<p><b>returns</b><p>true if the operation was successful<p>
 * 
*/ 
SparkMongoCollectionReadWrite.applyChanges = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB<p><b>returns</b><p>list of index documents<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.getIndexInfo = function(){};


/** 
 * fn() -> ?
 * <p> 
 * Gets the error (if there is one) from the previous operation on this connection.<p><b>returns</b><p>a JSON object with error and status information<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.getLastError = function(){};


/** 
 * fn(document: ?) -> bool
 * <p> 
 * Updates an existing document or inserts a new document, depending on its document parameter.<p>If the document does not contain an _id field, then the save() method performs an insert. During the operation, mongo will add to the document the _id field and assign it a unique ObjectId.<p>If the document contains an _id field, then the save() method performs an upsert, querying the collection on the _id field. If a document does not exist with the specified _id value, the save() method performs an insert. If a document exists with the specified _id value, the save() method performs an update that replaces all fields in the existing document with the fields from the document.<p><b>params</b><p>document - the document to save<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.save = function(){};


/** 
 * fn(query: ?) -> bool
 * <p> 
 * Removes any document from the collection that matches the supplied query.<p>Return a boolean indicating whether the remove was successful.<p><b>params</b><p>query - the query<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.remove = function(){};


/** 
 * fn()
 * <p> 
 * Drop the collection<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.drop = function(){};


/** 
 * fn(query: ?, update: ?) -> bool
 * <p> 
 * Calls update(query, update, upsert, multi) with upsert=false and multi=false<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.update = function(){};


/** 
 * fn(query: ?, update: ?, upsert: bool, multi: bool) -> bool
 * <p> 
 * Modifies an existing document or documents in a collection. The method can modify specific fields of existing document or documents or replace an existing document entirely, depending on the update parameter.<p>By default, the update() method updates a single document. If the multi option is set to true, the method updates all documents that match the query criteria.<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p>upsert - if set to true, creates a new document when no document matches the query criteria. The default value is false, which does not insert a new document when no match is found<p>multi - multi (boolean) Optional. If set to true, updates multiple documents that meet the query criteria. If set to false, updates one document. The default value is false. For additional information, see Multi Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.update_28 = function(){};


/** 
 * fn(query: ?, update: ?) -> bool
 * <p> 
 * Calls update(query, update, upsert, multi) with upsert=false and multi=true<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.updateMulti = function(){};


