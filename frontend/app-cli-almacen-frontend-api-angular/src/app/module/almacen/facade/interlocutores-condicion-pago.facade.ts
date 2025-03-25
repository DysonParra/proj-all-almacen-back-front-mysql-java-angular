/*
 * @fileoverview    {InterlocutoresCondicionPagoFacade}
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
import { InterlocutoresCondicionPagoViewModel } from '../model/interlocutores-condicion-pago.model';
import { InterlocutoresCondicionPagoState } from '../state/interlocutores-condicion-pago.state';
import { InterlocutoresCondicionPagoService } from '../service/interlocutores-condicion-pago.service';

/**
 * TODO: Description of {@code InterlocutoresCondicionPagoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class InterlocutoresCondicionPagoFacade extends GenericFacade<InterlocutoresCondicionPagoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: InterlocutoresCondicionPagoService,
        entityState: InterlocutoresCondicionPagoState) {
        super(entityService, entityState);
    }

}
