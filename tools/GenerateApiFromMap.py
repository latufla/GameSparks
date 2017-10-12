# fast one
# do parsing improvements here

from tools.ApiMap import api_map

with open('tools/ApiMap.json', 'r') as myFile:
    data = myFile.read().replace('\n', '')

for a in api_map:
    keys = a.keys()
    for k in keys:
        if k == "!name" \
                or k == "require" \
                or k == "requireOnce" \
                or k == "gs_load":
            continue

        f = open("api_generated/" + k + ".js", "w+")
        f.write("function " + k + " (type) {}" + "\n\n")
        for v in a[k]:
            if v == "!doc":
                continue

            info = a[k][v]
            infoStr = "/** \n"
            if "!type" in info:
                type = info["!type"]
                type = type.replace("<br/>", "<p>")
                infoStr += " * " + type + "\n * <p> \n"

            if "!doc" in info:
                doc = info["!doc"]
                doc = doc.replace("<br/>", "<p>")
                doc = doc.split("example", 1)[0]
                infoStr += " * " + doc + "\n * \n"

            infoStr += "*/ \n"
            f.write(infoStr)

            f.write(k + "." + v + " = function(){};" + "\n\n\n")

        f.close()
