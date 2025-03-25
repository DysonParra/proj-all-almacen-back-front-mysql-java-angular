/*
 * @fileoverview    {GrupoInterlocutoresFacade}
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
import { GrupoInterlocutoresViewModel } from '../model/grupo-interlocutores.model';
import { GrupoInterlocutoresState } from '../state/grupo-interlocutores.state';
import { GrupoInterlocutoresService } from '../service/grupo-interlocutores.service';

/**
 * TODO: Description of {@code GrupoInterlocutoresFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class GrupoInterlocutoresFacade extends GenericFacade<GrupoInterlocutoresViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: GrupoInterlocutoresService,
        entityState: GrupoInterlocutoresState) {
        super(entityService, entityState);
    }

}
