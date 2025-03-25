/*
 * @fileoverview    {RemisionesComprasFacade}
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
import { RemisionesComprasViewModel } from '../model/remisiones-compras.model';
import { RemisionesComprasState } from '../state/remisiones-compras.state';
import { RemisionesComprasService } from '../service/remisiones-compras.service';

/**
 * TODO: Description of {@code RemisionesComprasFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesComprasFacade extends GenericFacade<RemisionesComprasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RemisionesComprasService,
        entityState: RemisionesComprasState) {
        super(entityService, entityState);
    }

}
