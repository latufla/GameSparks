# needs some time
# run once after new ApiRaw.js shipped

import demjson

with open('tools/ApiMap.json', 'r') as myFile:
    data = myFile.read().replace('\n', '')

api = demjson.decode(data)
