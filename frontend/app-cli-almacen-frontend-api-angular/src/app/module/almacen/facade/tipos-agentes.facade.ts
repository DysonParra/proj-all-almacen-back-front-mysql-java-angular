/*
 * @fileoverview    {TiposAgentesFacade}
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
import { TiposAgentesViewModel } from '../model/tipos-agentes.model';
import { TiposAgentesState } from '../state/tipos-agentes.state';
import { TiposAgentesService } from '../service/tipos-agentes.service';

/**
 * TODO: Description of {@code TiposAgentesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposAgentesFacade extends GenericFacade<TiposAgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TiposAgentesService,
        entityState: TiposAgentesState) {
        super(entityService, entityState);
    }

}
