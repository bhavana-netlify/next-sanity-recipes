export default {
 name: "ingredients",
 title: "Ingredients",
 type: "document",
 fields: [
     {
         name: "name",
         title: "Ingredient Name",
         type: "string"
     },
     {
         name: "image",
         title: "image",
         type: "image",
         option: {
             hotspot: true
         }
     },
     {
         name: "notes",
         title: "notes",
         type: "text"
     }
 ]  
}