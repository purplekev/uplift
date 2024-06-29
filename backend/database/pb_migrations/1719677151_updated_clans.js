/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3cp6e0tcofvwu74")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhoqbxkc",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3cp6e0tcofvwu74")

  // remove
  collection.schema.removeField("jhoqbxkc")

  return dao.saveCollection(collection)
})
