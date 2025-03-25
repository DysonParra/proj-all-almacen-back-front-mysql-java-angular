/*
 * @fileoverview    {TipoInterlocutorComercialFacade}
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
import { TipoInterlocutorComercialViewModel } from '../model/tipo-interlocutor-comercial.model';
import { TipoInterlocutorComercialState } from '../state/tipo-interlocutor-comercial.state';
import { TipoInterlocutorComercialService } from '../service/tipo-interlocutor-comercial.service';

/**
 * TODO: Description of {@code TipoInterlocutorComercialFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TipoInterlocutorComercialFacade extends GenericFacade<TipoInterlocutorComercialViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TipoInterlocutorComercialService,
        entityState: TipoInterlocutorComercialState) {
        super(entityService, entityState);
    }

}
