/*
 * @overview        {MovimientosDetallesFacade}
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
import { MovimientosDetallesViewModel } from '../model/movimientos-detalles.model';
import { MovimientosDetallesState } from '../state/movimientos-detalles.state';
import { MovimientosDetallesService } from '../service/movimientos-detalles.service';

/**
 * TODO: Description of {@code MovimientosDetallesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MovimientosDetallesFacade extends GenericFacade<MovimientosDetallesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MovimientosDetallesService,
        entityState: MovimientosDetallesState) {
        super(entityService, entityState);
    }

}
