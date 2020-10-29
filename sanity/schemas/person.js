import { MdPerson as icon } from 'react-icons/md'

export default {
    name: 'person',
    title: 'SliceMasters',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the slicemasters',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'description',
            title: 'Slidescriptionug',
            type: 'text',
            description: 'Tell us about this person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        
    ],
}