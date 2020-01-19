import pymongo  # package for working with MongoDB
client = pymongo.MongoClient("mongodb://192.168.99.100:27017/") # using this for docker 
db = client["customersdb"]
customers = db["customers"]

from neo4j import GraphDatabase
def write_query(message):
    from neo4j import GraphDatabase
    uri = "bolt://localhost:7687" # local neo4j installation
    driver = GraphDatabase.driver(uri, auth=("neo4j", "test"))
    with driver.session() as session:
        result = session.run("CREATE (a:Point {pointA:{name}})", name = message)


def insert_mongo(a, b):
    customers_list = [
        { "type": "LineString", "coordinates": [ a, b] },
    ]
    x = customers.insert_many(customers_list)


import xml.etree.ElementTree as ET
tree = ET.parse('91springboard Indiranagar to Banashankari.kml')
root = tree.getroot()
el = tree.findall('*/{http://www.opengis.net/kml/2.2}Placemark')
for i in el:
    for sub in i:
        # print(sub.tag)
        if str(sub.tag).find('Point') != -1:
            for subber in sub:
                print(subber.text)
                a,b,c = subber.text.split(',')
                insert_mongo(a,b)
                # write_query(subber.text)


# print list of the _id values of the inserted documents:
# print(x.inserted_ids)
for item in customers.find({'type': "LineString"}):
    # print(item)
    write_query(item['coordinates'])

