import { MdStore as icon } from 'react-icons/md'

export default {
    name: 'storeSettings',
    title: 'Settings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Store Name',
            type: 'string',
            description: 'Unique store'
        },
        {
            name: 'slicemasters',
            title: 'Slicemasters Currently Slicing',
            type: 'array',
            of: [{ type: 'reference', to: [{type: 'person'}] }]
        },
        {
            name: 'hotSlices',
            title: 'Hot Slises available in case',
            type: 'array',
            of: [{ type: 'reference', to: [{type: 'pizza'}] }]
        },
    ],
}