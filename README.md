# RecordDetail

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/record-detail.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for displaying a record in detail.	

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this record |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| fields | Array | ✓ | List of Field objects. [Learn more](#field) |
| visibleFieldOrder | Array | ✓ | A list of ids for the fields that need to be displayed and in which order |
| fieldRenderer | Function | ✓ | Responsible for rendering a field given it's configuration: `({id: string, index: number, field: object}): jsx` [Learn more](#fieldRenderer) |

#### fieldRenderer

Responsible for rendering a field given it's configuration.

```jsx harmony
import SingleLineTextField from '@cmds/single-line-text-field'
// import all other fields that need to be supported...

const renderers = {
    singleLineText: ({props}) => (
        <SingleLineTextField
            {...props}
            text={'Luke Skywalker'}
            onChange={({id, text}) => {
                
                // store new value
            }}
        />
    ),
    // and all other fields that need to be supported
}

function fieldRenderer({id, index, field, props}) {

    const renderer = renderers[field.typeId]
    
    if (!renderer) {
        throw new Error(`Renderer for typeId '${field.typeId}' not found`)
    }
    
    /**
     * Note — props already contains properties
     * related to the context in which the field
     * gets rendered.
     * 
     * {
     *      id: 'fld1', // the field's id
     *      contextId: 'recordDetail',
     *      roleId: 'editor'
     * }
     */
    
    return renderer({ 
        id, 
        field,
        props
    })
}
```

#### Field

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the field |
| name | String | ✓ | Name describing the field |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/record-detail.svg
[npm]: https://www.npmjs.org/@cmds/record-detail

