/*
 * @fileoverview    {OrdenProduccionFacade}
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
import { OrdenProduccionViewModel } from '../model/orden-produccion.model';
import { OrdenProduccionState } from '../state/orden-produccion.state';
import { OrdenProduccionService } from '../service/orden-produccion.service';

/**
 * TODO: Description of {@code OrdenProduccionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class OrdenProduccionFacade extends GenericFacade<OrdenProduccionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: OrdenProduccionService,
        entityState: OrdenProduccionState) {
        super(entityService, entityState);
    }

}
