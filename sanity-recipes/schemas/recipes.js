export default{
    name: "recipes",
    title: "Recipes",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Recipe name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }

        },
        {
            name: "chef",
            title: "Chef",
            type: "reference",
            to: {type: "chef" }
        },
        {
            name: "mainImage",
            title: "recipe main image",
            type: "image",
            options: {hotspot: true}
        },
        {
            name: "ingredients",
            title: "ingredients",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "ingredient",
                            title: "ingredient",
                            type: "reference",
                            to: [{type: "ingredients"}]
                        },
                        {
                            name: "wholeNumber",
                            title: "Whole Number",
                            type: "number"
                        },
                        {
                            name: "fraction",
                            title: "Fraction",
                            type: "string",
                            options: {
                                list: ["1/2", "1/4", "1/3", "3/4", "2/3"]
                            }
                        },
                        {
                            name: "units",
                            title: "Units",
                            type: "string",
                            options: {
                                list: ["gms", "cups", "Tbsp", "tsp"]
                            }
                        }
                    ]
                }
            ]
        }
    ]
}