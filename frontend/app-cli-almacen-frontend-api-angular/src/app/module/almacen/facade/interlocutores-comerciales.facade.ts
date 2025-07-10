/*
 * @overview        {InterlocutoresComercialesFacade}
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
import { InterlocutoresComercialesViewModel } from '../model/interlocutores-comerciales.model';
import { InterlocutoresComercialesState } from '../state/interlocutores-comerciales.state';
import { InterlocutoresComercialesService } from '../service/interlocutores-comerciales.service';

/**
 * TODO: Description of {@code InterlocutoresComercialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class InterlocutoresComercialesFacade extends GenericFacade<InterlocutoresComercialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: InterlocutoresComercialesService,
        entityState: InterlocutoresComercialesState) {
        super(entityService, entityState);
    }

}
