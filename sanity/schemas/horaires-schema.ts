const horaire = {
  name: "horaire",
  title: "Horaires",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Ordre",
      type: "number",
    },
    {
      name: "dayOfWeek",
      title: "Jour de la semaine",
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    },
  ]
}

export default horaire;