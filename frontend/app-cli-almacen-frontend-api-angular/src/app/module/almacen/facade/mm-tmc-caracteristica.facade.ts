/*
 * @overview        {MmTmcCaracteristicaFacade}
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
import { MmTmcCaracteristicaViewModel } from '../model/mm-tmc-caracteristica.model';
import { MmTmcCaracteristicaState } from '../state/mm-tmc-caracteristica.state';
import { MmTmcCaracteristicaService } from '../service/mm-tmc-caracteristica.service';

/**
 * TODO: Description of {@code MmTmcCaracteristicaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MmTmcCaracteristicaFacade extends GenericFacade<MmTmcCaracteristicaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MmTmcCaracteristicaService,
        entityState: MmTmcCaracteristicaState) {
        super(entityService, entityState);
    }

}
