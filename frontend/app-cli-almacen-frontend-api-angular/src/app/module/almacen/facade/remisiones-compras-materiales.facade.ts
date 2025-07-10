/*
 * @overview        {RemisionesComprasMaterialesFacade}
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
import { RemisionesComprasMaterialesViewModel } from '../model/remisiones-compras-materiales.model';
import { RemisionesComprasMaterialesState } from '../state/remisiones-compras-materiales.state';
import { RemisionesComprasMaterialesService } from '../service/remisiones-compras-materiales.service';

/**
 * TODO: Description of {@code RemisionesComprasMaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesComprasMaterialesFacade extends GenericFacade<RemisionesComprasMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RemisionesComprasMaterialesService,
        entityState: RemisionesComprasMaterialesState) {
        super(entityService, entityState);
    }

}
