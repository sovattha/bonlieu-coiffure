const forfaitFemme = {
  name: "forfaitFemme",
  title: "Forfait femme",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Ordre",
      type: "number",
    },
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "price1",
      title: "Prix courts",
      type: "number"
    },
    {
      name: "price2",
      title: "Prix mi-longs",
      type: "number"
    },
    {
      name: "price3",
      title: "Prix longs",
      type: "number"
    },
    {
      name: "otherText",
      title: "Autre texte",
      type: "string"
    },
  ]
}

export default forfaitFemme;