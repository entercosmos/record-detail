import {fromJS} from 'immutable'

export default fromJS({
    fieldsById: {
        fld1: {
            id: 'fld1',
            name: 'Single line text',
            typeId: 'singleLineText'
        },
        fld2: {
            id: 'fld2',
            name: 'Checkbox',
            typeId: 'checkbox'
        },
        fld3: {
            id: 'fld3',
            name: 'Attachment',
            typeId: 'attachment'
        },
        fld4: {
            id: 'fld4',
            name: 'Number',
            typeId: 'number',
            options: {
                numberFormatId: 'decimal',
                allowNegativeNumbers: false,
                precisionId: '2'
            }
        },
        fld5: {
            id: 'fld5',
            name: 'Link to another record',
            typeId: 'linkToAnotherRecord'
        },
        fld6: {
            id: 'fld6',
            name: 'Multiple select',
            typeId: 'multipleSelect',
            options: {
                coloredOptions: true,
                optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
                options: [
                    {
                        id: 'opt1',
                        colorId: 'blue.base',
                        name: 'Blue'
                    },
                    {
                        id: 'opt2',
                        colorId: 'green.base',
                        name: 'Green'
                    },
                    {
                        id: 'opt3',
                        colorId: 'red.base',
                        name: 'Red'
                    },
                    {
                        id: 'opt4',
                        colorId: 'yellow.base',
                        name: 'Yellow'
                    },
                    {
                        id: 'opt5',
                        colorId: 'indigo.base',
                        name: 'Indigo'
                    },
                    {
                        id: 'opt6',
                        colorId: 'purple.base',
                        name: 'Purple'
                    }
                ]
            }
        },
        fld7: {
            id: 'fld7',
            name: 'Single select',
            typeId: 'singleSelect',
            options: {
                coloredOptions: true,
                optionOrder: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
                options: [
                    {
                        id: 'opt1',
                        colorId: 'blue.base',
                        name: 'Blue'
                    },
                    {
                        id: 'opt2',
                        colorId: 'green.base',
                        name: 'Green'
                    },
                    {
                        id: 'opt3',
                        colorId: 'red.base',
                        name: 'Red'
                    },
                    {
                        id: 'opt4',
                        colorId: 'yellow.base',
                        name: 'Yellow'
                    },
                    {
                        id: 'opt5',
                        colorId: 'indigo.base',
                        name: 'Indigo'
                    },
                    {
                        id: 'opt6',
                        colorId: 'purple.base',
                        name: 'Purple'
                    }
                ]
            }
        },
        fld8: {
            id: 'fld8',
            name: 'Long text',
            typeId: 'longText'
        },
        fld9: {
            id: 'fld9',
            name: 'Collaborator',
            typeId: 'collaborator'
        },
        fld10: {
            id: 'fld10',
            name: 'Multiple collaborator',
            typeId: 'multipleCollaborator'
        },
        fld11: {
            id: 'fld11',
            name: 'Date',
            typeId: 'date'
        },
        fld12: {
            id: 'fld12',
            name: 'Created collaborator',
            typeId: 'createdCollaborator'
        },
        fld13: {
            id: 'fld13',
            name: 'Created time',
            typeId: 'createdTime'
        },
        fld14: {
            id: 'fld14',
            name: 'Updated time',
            typeId: 'updatedTime'
        }
    },
    cellsById: {
        'fld1': {
            text: 'Luke Skywalker'
        },
        'fld2': {
            checked: true
        },
        'fld3': {
            attachments: ['att1', 'att2', 'att3']
        },
        'fld4': {
            number: 32.25
        },
        'fld5': {
            records: [{
                id: 'rec1',
                name: 'Luke Skywalker'
            }, {
                id: 'rec2',
                name: 'Leia Organa'
            }, {
                id: 'rec3',
                name: 'Han Solo'
            }, {
                id: 'rec4',
                name: 'Jar Jar Binks'
            }]
        },
        'fld6': {
            optionIds: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']
        },
        'fld7': {
            optionId: 'opt5'
        },
        'fld8': {
            longText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        'fld9': {
            collaboratorId: 'col1'
        },
        'fld10': {
            collaboratorIds: ['col1', 'col2']
        },
        'fld11': {
            date: null
        }
    },
    attachmentsById: {
        att1: {
            id: 'att1',
            typeId: 'video/mp4',
            filename: 'Video',
            thumbnails: null,
            url: 'https://www.w3schools.com/html/mov_bbb.mp4'
        },
        att2: {
            id: 'att2',
            typeId: 'audio/mpeg',
            filename: 'Audio',
            thumbnails: null,
            url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
        },
        att3: {
            id: 'att3',
            typeId: 'image/jpeg',
            filename: `Image`,
            thumbnails: {
                small: {
                    url: 'https://source.unsplash.com/random/800x600?wanderlust'
                },
                medium: {
                    url: 'https://source.unsplash.com/random/800x600?wanderlust'
                },
                large: {
                    url: 'https://source.unsplash.com/random/800x600?wanderlust'
                },
            },
            url: 'https://source.unsplash.com/random/800x600?wanderlust'
        },
        att4: {
            id: 'att4',
            typeId: 'image/gif',
            filename: 'GIF',
            thumbnails: {
                small: {
                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                },
                medium: {
                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                },
                large: {
                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                },
            },
            url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
        }
    },
    fields: ['fld1', 'fld2', 'fld3', 'fld4', 'fld5', 'fld6', 'fld7', 'fld8', 'fld9', 'fld10', 'fld11', 'fld12', 'fld13', 'fld14']
})