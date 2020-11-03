import React, { ReactNode } from 'react';
import EpiComponent from '../../EpiComponent';
import IContent from '../../Models/IContent';
import StringUtils from '../../Util/StringUtils';

export default class ComponentNotFound extends EpiComponent<IContent>
{
    public static displayName = 'Epi/Error/ComponentNotFound';

    public render(): ReactNode
    {
        let baseName : string = this.props.data.contentType.map((s) => {return StringUtils.SafeModelName(s); }).join("/");
        const name : string = this.props.contentType || "";
        if (name && name.length > 0 && name !== this.props.data.contentType.slice(0,1)[0]) {
            baseName = name + '/' + baseName;
        }
        return <div className="alert alert-danger text-center m-3" role="alert">Component app/Components/{ baseName } not found</div>
    }
}
