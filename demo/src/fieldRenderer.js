import React from 'react'
import attachment from './fieldRenderers/attachment'
import singleLineText from './fieldRenderers/singleLineText'
import checkbox from './fieldRenderers/checkbox'
import number from './fieldRenderers/number'
import multipleSelect from './fieldRenderers/multipleSelect'
import singleSelect from './fieldRenderers/singleSelect'
import longText from './fieldRenderers/longText'

export default ({recordId, fieldData, cellData, props}) => {

    const renderers = {
        singleLineText,
        checkbox,
        attachment,
        number,
        multipleSelect,
        longText,
        linkToAnotherRecord: () => (<div>Not supported yet.</div>),
        collaborator: () => (<div>Not supported yet.</div>),
        multipleCollaborator: () => (<div>Not supported yet.</div>),
        date: () => (<div>Not supported yet.</div>),
        createdCollaborator: () => (<div>Not supported yet.</div>),
        updatedTime: () => (<div>Not supported yet.</div>),
        createdTime: () => (<div>Not supported yet.</div>),
        singleSelect
    }

    const Renderer = renderers[fieldData.typeId]

    return (
        <Renderer
            recordId={recordId}
            fieldData={fieldData}
            cellData={cellData}
            props={props}
        />
    )
}