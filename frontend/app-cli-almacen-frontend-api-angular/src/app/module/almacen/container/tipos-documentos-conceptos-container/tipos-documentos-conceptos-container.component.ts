/*
 * @overview        {TiposDocumentosConceptosContainerComponent}
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
import { TiposDocumentosConceptosViewModel } from '../../model/tipos-documentos-conceptos.model';
import { TiposDocumentosConceptosFacade } from '../../facade/tipos-documentos-conceptos.facade';

/**
 * TODO: Description of {@code TiposDocumentosConceptosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos-conceptos-container',
    templateUrl: './tipos-documentos-conceptos-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos-conceptos-container.component.css']
})
export class TiposDocumentosConceptosContainerComponent extends GenericContainerComponent<TiposDocumentosConceptosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosConceptosViewModel,
        entityFacade: TiposDocumentosConceptosFacade) {
        super(entityInstance, entityFacade);
    }

}
