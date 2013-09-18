import os
import os.path
from xml.etree.ElementTree import Element, ElementTree, parse

DEBUG_MODE = True

svgns = "{http://www.w3.org/2000/svg}"
xlinkns = "{http://www.w3.org/1999/xlink}"

output = Element(
    svgns + "svg",
    {},
    height="768",
    width="1024",
    version="1.1",
    style="background-color:black",
    onload="initialize()",
)

scripts = ["slick.js","startup.js","script.js"]
if DEBUG_MODE:
    for script_name in scripts:
        output.append(Element(svgns + "script",{xlinkns+"href":script_name}))
else:
    for script_name in scripts:
        with open(script_name,"rt") as f:
            script_element = Element(svgns + "script")
            script_element.text = f.read()
            output.append(script_element)

defs = Element(svgns + "defs",{"id":"resources"})

for filename in os.listdir("resources"):
    if not filename.endswith(".svg"): continue
    print("Parsing " + filename + "...")
    for child in parse(os.path.join("resources",filename)).getroot():
        if child.tag.startswith(svgns):
            defs.append(child)

output.append(defs)

ElementTree(output).write("talk.svg")
