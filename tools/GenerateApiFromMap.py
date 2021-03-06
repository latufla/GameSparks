# fast one
# do parsing improvements here
from tools.ApiMap import api_map
from collections import OrderedDict


def get_params(func_signature):
    all_params_str = func_signature.split("(")[1].split(")")[0]
    params_str_list = all_params_str.split(",")

    res = OrderedDict()
    for p in params_str_list:
        kv = p.split(": ")
        if len(kv) > 1:
            res[kv[0]] = kv[1]

    return res


def get_return_type(func_signature):
    ret_list = func_signature.split("-> ")
    if len(ret_list) > 1:
        return ret_list[1]

    return None


def get_method(method_json, is_static):
    jsdoc = "/** \n"
    if "!doc" in method_json:
        description = method_json["!doc"]
        description = description.replace("<br/>", "<p>")
        description = description.split("example", 1)[0]
        jsdoc += " * " + description + "\n * \n"

    params = {}
    if "!type" in method_json:
        signature = method_json["!type"]
        signature = signature.replace("<br/>", "<p>")
        # jsdoc += " * " + signature + "\n * <p> \n"

        params = get_params(signature)
        for k, v in params.items():
            jsdoc += "* @param {" + v + "}" + k + "\n"

        return_type = get_return_type(signature)
        if return_type is not None:
            jsdoc += "* @return {" + return_type + "}\n"

    jsdoc += "*/ \n"

    prototype = ""
    if not is_static:
        prototype = "prototype."

    func_str = pName + "." + prototype + fName + " = function("
    items = list(params.items())
    if len(items) > 0:
        for k, v in items[:-1]:
            func_str += k + ", "

        func_str += items[-1][0]

    func_str += "){};" + "\n\n\n"

    return jsdoc + func_str


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
            f.write(get_method(func, True))
            f.write(get_method(func, False))

        f.close()

