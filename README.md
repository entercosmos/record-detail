# RecordDetail

[![npm package][npm-badge]][npm]

Used for displaying a record in detail.	

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this record |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| data | Object | ✓ | Record data |
| fieldCount | Number | ✓ | Number of fields in the detail |
| fieldGetter | Function | ✓ | Return field data for a field at a given index `({index: int}): obj` |
| cellGetter | Function | ✓ | Return cell data for a given field `({fieldData: int}): obj` |
| fieldRenderer | Function | ✓ | Responsible for rendering a field given it's configuration: `({id: string, index: number, field: object}): jsx` [Learn more](#fieldRenderer) |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/record-detail.svg
[npm]: https://www.npmjs.org/@cmds/record-detail

