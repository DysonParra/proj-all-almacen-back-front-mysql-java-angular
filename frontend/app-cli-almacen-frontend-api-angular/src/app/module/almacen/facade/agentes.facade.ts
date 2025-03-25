/*
 * @fileoverview    {AgentesFacade}
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
import { AgentesViewModel } from '../model/agentes.model';
import { AgentesState } from '../state/agentes.state';
import { AgentesService } from '../service/agentes.service';

/**
 * TODO: Description of {@code AgentesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class AgentesFacade extends GenericFacade<AgentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: AgentesService,
        entityState: AgentesState) {
        super(entityService, entityState);
    }

}
