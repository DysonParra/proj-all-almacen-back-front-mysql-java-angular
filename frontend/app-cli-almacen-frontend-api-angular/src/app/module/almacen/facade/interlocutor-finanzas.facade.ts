/*
 * @fileoverview    {InterlocutorFinanzasFacade}
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
import { InterlocutorFinanzasViewModel } from '../model/interlocutor-finanzas.model';
import { InterlocutorFinanzasState } from '../state/interlocutor-finanzas.state';
import { InterlocutorFinanzasService } from '../service/interlocutor-finanzas.service';

/**
 * TODO: Description of {@code InterlocutorFinanzasFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class InterlocutorFinanzasFacade extends GenericFacade<InterlocutorFinanzasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: InterlocutorFinanzasService,
        entityState: InterlocutorFinanzasState) {
        super(entityService, entityState);
    }

}
