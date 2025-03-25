/*
 * @fileoverview    {RemisionesVentaFacade}
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
import { RemisionesVentaViewModel } from '../model/remisiones-venta.model';
import { RemisionesVentaState } from '../state/remisiones-venta.state';
import { RemisionesVentaService } from '../service/remisiones-venta.service';

/**
 * TODO: Description of {@code RemisionesVentaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesVentaFacade extends GenericFacade<RemisionesVentaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RemisionesVentaService,
        entityState: RemisionesVentaState) {
        super(entityService, entityState);
    }

}
