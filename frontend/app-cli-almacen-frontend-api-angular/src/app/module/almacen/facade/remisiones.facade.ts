/*
 * @fileoverview    {RemisionesFacade}
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
import { RemisionesViewModel } from '../model/remisiones.model';
import { RemisionesState } from '../state/remisiones.state';
import { RemisionesService } from '../service/remisiones.service';

/**
 * TODO: Description of {@code RemisionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesFacade extends GenericFacade<RemisionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RemisionesService,
        entityState: RemisionesState) {
        super(entityService, entityState);
    }

}
