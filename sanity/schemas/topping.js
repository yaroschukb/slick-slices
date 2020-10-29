import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'What is the name of the topping?',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            options: {
                layout: 'checkbox',
            },
        }, 
    ],
    preview: {
       select: {
           name: 'name',
           vegetarian: 'vegetarian',
           date: 'releaseDate'
       },
        prepare: ({name, vegetarian}) => {
            return {
                title: `${name} ${vegetarian ? '🌿':'' }`,
            }
        }
    }
}

