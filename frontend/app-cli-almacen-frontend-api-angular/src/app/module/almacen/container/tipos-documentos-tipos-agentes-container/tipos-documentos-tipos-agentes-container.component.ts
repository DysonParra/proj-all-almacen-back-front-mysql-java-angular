/*
 * @overview        {TiposDocumentosTiposAgentesContainerComponent}
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
import { TiposDocumentosTiposAgentesViewModel } from '../../model/tipos-documentos-tipos-agentes.model';
import { TiposDocumentosTiposAgentesFacade } from '../../facade/tipos-documentos-tipos-agentes.facade';

/**
 * TODO: Description of {@code TiposDocumentosTiposAgentesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-documentos-tipos-agentes-container',
    templateUrl: './tipos-documentos-tipos-agentes-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-documentos-tipos-agentes-container.component.css']
})
export class TiposDocumentosTiposAgentesContainerComponent extends GenericContainerComponent<TiposDocumentosTiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposDocumentosTiposAgentesViewModel,
        entityFacade: TiposDocumentosTiposAgentesFacade) {
        super(entityInstance, entityFacade);
    }

}
