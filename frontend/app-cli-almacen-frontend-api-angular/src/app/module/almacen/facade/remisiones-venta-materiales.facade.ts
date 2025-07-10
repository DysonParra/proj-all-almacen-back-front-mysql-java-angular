/*
 * @overview        {RemisionesVentaMaterialesFacade}
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
import { RemisionesVentaMaterialesViewModel } from '../model/remisiones-venta-materiales.model';
import { RemisionesVentaMaterialesState } from '../state/remisiones-venta-materiales.state';
import { RemisionesVentaMaterialesService } from '../service/remisiones-venta-materiales.service';

/**
 * TODO: Description of {@code RemisionesVentaMaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesVentaMaterialesFacade extends GenericFacade<RemisionesVentaMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RemisionesVentaMaterialesService,
        entityState: RemisionesVentaMaterialesState) {
        super(entityService, entityState);
    }

}
