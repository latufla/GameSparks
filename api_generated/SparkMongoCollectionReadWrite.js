function SparkMongoCollectionReadWrite (type) {}

/** 
 * Returns the number of documents in this collection<p><b>returns</b><p>the number of documents<p><b>
 * 
* @return {number}
*/ 
SparkMongoCollectionReadWrite.count = function(){};


/** 
 * Returns the number of documents that match the supplied query<p><b>returns</b><p>the number of documents<p><b>
 * 
* @param { ?}query
* @return {number}
*/ 
SparkMongoCollectionReadWrite.count_1 = function(query){};


/** 
 * Returns a list of distinct values for the given key in the collection<p><b>params</b><p>key - the key to use in the query<p><b>returns</b><p>an object array<p><b>
 * 
* @param { string}key
* @return {?}
*/ 
SparkMongoCollectionReadWrite.distinct = function(key){};


/** 
 * Returns a list of distinct values for the given key in the collection that match the supplied query<p><b>params</b><p>key - the key to use in the query<p>query - the Mongo query<p><b>returns</b><p>an object array<p><b>
 * 
* @param { string}key
* @param { ?} query
* @return {?}
*/ 
SparkMongoCollectionReadWrite.distinct_3 = function(key,  query){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param { ?}keys
*/ 
SparkMongoCollectionReadWrite.dropIndex = function(keys){};


/** 
 * Drops or removes the specified index from a collection.<p><b>params</b><p>name - the name of the index to drop.<p><b>
 * 
* @param { string}name
*/ 
SparkMongoCollectionReadWrite.dropIndexByName = function(name){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p><b>
 * 
* @param { ?}keys
*/ 
SparkMongoCollectionReadWrite.ensureIndex = function(keys){};


/** 
 * Creates an index on the specified fields if the index does not already exist.<p><b>params</b><p>keys - the index definition used in ensureIndex.<p>optionsIN - index options<p><b>
 * 
* @param { ?}keys
* @param { ?} optionsIN
*/ 
SparkMongoCollectionReadWrite.ensureIndex_7 = function(keys,  optionsIN){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection<p><b>params</b><p><b>
 * 
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadWrite.find = function(){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param { ?}query
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadWrite.find_9 = function(query){};


/** 
 * Returns a SparkMongoCursor of all documents in this collection that match the supplied query.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query -  a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param { ?}query
* @param { ?} fields
* @return {SparkMongoCursor}
*/ 
SparkMongoCollectionReadWrite.find_10 = function(query,  fields){};


/** 
 * Returns the first document from the collection according to natural order (which reflects the order of documents on the disk)<p><b>returns</b><p>A JSON object<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findOne = function(){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p><b>params</b><p>query - a Mongo query<p><b>
 * 
* @param { ?}query
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findOne_12 = function(query){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p><b>
 * 
* @param { ?}query
* @param { ?} fields
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findOne_13 = function(query,  fields){};


/** 
 * Returns one document that satisfies the specified query criteria.<p>If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk.<p>The returned documents only contain the fields supplied in the fieldsToReturn parameter. This reduces the document size when being returned.<p><b>params</b><p>query - a Mongo query<p>fields - the fields to return<p>orderBy - the order clause<p><b>
 * 
* @param { ?}query
* @param { ?} fields
* @param { ?} orderBy
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findOne_14 = function(query,  fields,  orderBy){};


/** 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false, sort=null<p><b>params</b><p>query - Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>update -  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { ?}query
* @param { ?} update
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findAndModify = function(query,  update){};


/** 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with fields=null, remove=false, returnNew=false, upsert=false<p><b>params</b><p>query - Specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>sort - Determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.<p>update -  Must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { ?}query
* @param { ?} sort
* @param { ?} update
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findAndModify_16 = function(query,  sort,  update){};


/** 
 * Atomically modifies and returns a single document. By default, the returned document does not include the modifications made on the update. To return the document with the modifications made on the update, use the returnNew option.<p><b>params</b><p>query - specifies the selection criteria for the modification. The query field employs the same query selectors as used in the find() method. Although the query may match multiple documents, findAndModify will only select one document to modify.<p>fields - the fields to return<p>sort - determines which document the operation will modify if the query selects multiple documents. findAndModify will modify the first document in the sort order specified by this argument.<p>remove - must specify either the remove or the update field in the findAndModify command. When true, removes the selected document. The default is false.<p>update -  must specify either the remove or the update field in the findAndModify command. The update field employs the same update operators or field: value specifications to modify the selected document.<p>returnNew - when true, returns the modified document rather than the original. The findAndModify method ignores the new option for remove operations. The default is false.<p>upsert - used in conjunction with the update field. When true, the findAndModify command creates a new document if the query returns no documents. The default is false.<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { ?}query
* @param { ?} fields
* @param { ?} sort
* @param { bool} remove
* @param { ?} update
* @param { bool} returnNew
* @param { bool} upsert
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findAndModify_17 = function(query,  fields,  sort,  remove,  update,  returnNew,  upsert){};


/** 
 * Calls findAndModify(query, fields, sort, remove, update, returnNew, upsert) with  fields=null, sort=null, remove=true, returnNew=false, upsert=false<p><b>params</b><p>query - a Mongo query<p><b>returns</b><p>a JSON object<p><b>
 * 
* @param { ?}query
* @return {?}
*/ 
SparkMongoCollectionReadWrite.findAndRemove = function(query){};


/** 
 * Inserts a document or documents into a collection.<p><b>params</b><p>documents - A document or array of documents to insert into the collection.<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
* @param { [?]}documents
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.insert = function(documents){};


/** 
 * <p>
 * 
* @param { ?}firstOp
* @param { [?]} additionalOps
* @return {?}
*/ 
SparkMongoCollectionReadWrite.aggregate = function(firstOp,  additionalOps){};


/** 
 * Generates the correct mongo update command to set and unset fields so the mongo record matches the newDocument.<p>This can greatly increase performance in documents where only a small amount of change has been made as only the required fields are modified.<p>If the existing document is null, the new document is inserted directly into the collection<p><b>params</b><p>existingDocument - A document perviously retrieved from the database. The _id field of this document will be used to determine which document to update. If the document passed has no _id the call will fail.<p>newDocument - The new state to persist in the database, and _id field in this document will be ignored.<p><b>returns</b><p>true if the operation was successful<p>
 * 
* @param { ?}existingDocument
* @param { ?} newDocument
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.applyChanges = function(existingDocument,  newDocument){};


/** 
 * Return a list of the indexes for this collection. Each object in the list is the "info document" from MongoDB<p><b>returns</b><p>list of index documents<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadWrite.getIndexInfo = function(){};


/** 
 * Gets the error (if there is one) from the previous operation on this connection.<p><b>returns</b><p>a JSON object with error and status information<p><b>
 * 
* @return {?}
*/ 
SparkMongoCollectionReadWrite.getLastError = function(){};


/** 
 * Updates an existing document or inserts a new document, depending on its document parameter.<p>If the document does not contain an _id field, then the save() method performs an insert. During the operation, mongo will add to the document the _id field and assign it a unique ObjectId.<p>If the document contains an _id field, then the save() method performs an upsert, querying the collection on the _id field. If a document does not exist with the specified _id value, the save() method performs an insert. If a document exists with the specified _id value, the save() method performs an update that replaces all fields in the existing document with the fields from the document.<p><b>params</b><p>document - the document to save<p><b>
 * 
* @param { ?}document
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.save = function(document){};


/** 
 * Removes any document from the collection that matches the supplied query.<p>Return a boolean indicating whether the remove was successful.<p><b>params</b><p>query - the query<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
* @param { ?}query
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.remove = function(query){};


/** 
 * Drop the collection<p><b>
 * 
*/ 
SparkMongoCollectionReadWrite.drop = function(){};


/** 
 * Calls update(query, update, upsert, multi) with upsert=false and multi=false<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
* @param { ?}query
* @param { ?} update
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.update = function(query,  update){};


/** 
 * Modifies an existing document or documents in a collection. The method can modify specific fields of existing document or documents or replace an existing document entirely, depending on the update parameter.<p>By default, the update() method updates a single document. If the multi option is set to true, the method updates all documents that match the query criteria.<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p>upsert - if set to true, creates a new document when no document matches the query criteria. The default value is false, which does not insert a new document when no match is found<p>multi - multi (boolean) Optional. If set to true, updates multiple documents that meet the query criteria. If set to false, updates one document. The default value is false. For additional information, see Multi Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
* @param { ?}query
* @param { ?} update
* @param { bool} upsert
* @param { bool} multi
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.update_28 = function(query,  update,  upsert,  multi){};


/** 
 * Calls update(query, update, upsert, multi) with upsert=false and multi=true<p><b>params</b><p>query - query (document) The selection criteria for the update. Use the same query selectors as used in the find() method<p>update - update (document) The modifications to apply. For details see Update Parameter<p><b>returns</b><p>true if the operation was successful<p><b>
 * 
* @param { ?}query
* @param { ?} update
* @return {bool}
*/ 
SparkMongoCollectionReadWrite.updateMulti = function(query,  update){};


