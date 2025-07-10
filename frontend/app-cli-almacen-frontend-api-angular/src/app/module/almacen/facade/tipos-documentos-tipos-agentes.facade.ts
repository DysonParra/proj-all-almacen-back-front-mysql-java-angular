/*
 * @overview        {TiposDocumentosTiposAgentesFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { TiposDocumentosTiposAgentesViewModel } from '../model/tipos-documentos-tipos-agentes.model';
import { TiposDocumentosTiposAgentesState } from '../state/tipos-documentos-tipos-agentes.state';
import { TiposDocumentosTiposAgentesService } from '../service/tipos-documentos-tipos-agentes.service';

/**
 * TODO: Description of {@code TiposDocumentosTiposAgentesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosTiposAgentesFacade extends GenericFacade<TiposDocumentosTiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TiposDocumentosTiposAgentesService,
        entityState: TiposDocumentosTiposAgentesState) {
        super(entityService, entityState);
    }

}
