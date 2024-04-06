const mentionsLegales = {
  name: "mentions-legales",
  title: "Mentions légales",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    }
  ]
}

export default mentionsLegales;