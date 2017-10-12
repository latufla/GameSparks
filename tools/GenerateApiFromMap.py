# fast one
# do parsing improvements here

from tools.ApiMap import api_map

with open('tools/ApiMap.json', 'r') as myFile:
    data = myFile.read().replace('\n', '')

for packages in api_map:
    packageNames = packages.keys()
    for pName in packageNames:
        if pName == "!name" \
                or pName == "require" \
                or pName == "requireOnce" \
                or pName == "gs_load":
            continue

        f = open("api_generated/" + pName + ".js", "w+")
        f.write("function " + pName + " (type) {}" + "\n\n")
        for fName in packages[pName]:
            if fName == "!doc":
                continue

            func = packages[pName][fName]
            jsdoc = "/** \n"
            if "!type" in func:
                signature = func["!type"]
                signature = signature.replace("<br/>", "<p>")
                jsdoc += " * " + signature + "\n * <p> \n"

            if "!doc" in func:
                description = func["!doc"]
                description = description.replace("<br/>", "<p>")
                description = description.split("example", 1)[0]
                jsdoc += " * " + description + "\n * \n"

            jsdoc += "*/ \n"
            f.write(jsdoc)

            f.write(pName + "." + fName + " = function(){};" + "\n\n\n")

        f.close()
