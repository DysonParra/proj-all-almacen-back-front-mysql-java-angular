/*
 * @fileoverview    {TiposDocumentosContainerComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { TiposDocumentosViewModel } from '../../model/tipos-documentos.model';
import { TiposDocumentosFacade } from '../../facade/tipos-documentos.facade';

/**
 * TODO: Description of {@code TiposDocumentosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos-container',
    templateUrl: './tipos-documentos-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos-container.component.css']
})
export class TiposDocumentosContainerComponent extends GenericContainerComponent<TiposDocumentosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosViewModel,
        entityFacade: TiposDocumentosFacade) {
        super(entityInstance, entityFacade);
    }

}
