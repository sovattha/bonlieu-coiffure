const welcome = {
  name: "welcome",
  title: "Accueil",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    },
    {
      name: "message",
      title: "Message",
      type: "string"
    }
  ]
}

export default welcome;