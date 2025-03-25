/*
 * @fileoverview    {MovimientosFacade}
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
import { MovimientosViewModel } from '../model/movimientos.model';
import { MovimientosState } from '../state/movimientos.state';
import { MovimientosService } from '../service/movimientos.service';

/**
 * TODO: Description of {@code MovimientosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MovimientosFacade extends GenericFacade<MovimientosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MovimientosService,
        entityState: MovimientosState) {
        super(entityService, entityState);
    }

}
