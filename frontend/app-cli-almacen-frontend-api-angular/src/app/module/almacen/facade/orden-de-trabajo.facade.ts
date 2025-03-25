/*
 * @fileoverview    {OrdenDeTrabajoFacade}
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
import { OrdenDeTrabajoViewModel } from '../model/orden-de-trabajo.model';
import { OrdenDeTrabajoState } from '../state/orden-de-trabajo.state';
import { OrdenDeTrabajoService } from '../service/orden-de-trabajo.service';

/**
 * TODO: Description of {@code OrdenDeTrabajoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class OrdenDeTrabajoFacade extends GenericFacade<OrdenDeTrabajoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: OrdenDeTrabajoService,
        entityState: OrdenDeTrabajoState) {
        super(entityService, entityState);
    }

}
