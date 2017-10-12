import json
import requests
import shutil

project = '../project'
shutil.make_archive(project, 'zip', "../project")

apiKey = "E320358lvTVC"
acceptUrl = "https://config2.gamesparks.net/restv2/game/" + apiKey + "/admin/scripts/import/accept"
authorization = "Basic QWxleFZhc2lseWV2NjlAbWFpbC5ydTpwdXR0aGVndW5Eb3du"

headers = {
    # "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    "Authorization": authorization
}

body = {
    "apiKey": apiKey,
    "body": json.dumps({"selectedFiles": ["*"], "createSnapshot": False})
}

with open(project + ".zip", "rb") as file:
    files = {'file': file}
    r = requests.post(acceptUrl, headers=headers, files=files, data=body)

    print(r.text)