/*
 * @fileoverview    {EstadosRemisionesFacade}
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
import { EstadosRemisionesViewModel } from '../model/estados-remisiones.model';
import { EstadosRemisionesState } from '../state/estados-remisiones.state';
import { EstadosRemisionesService } from '../service/estados-remisiones.service';

/**
 * TODO: Description of {@code EstadosRemisionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class EstadosRemisionesFacade extends GenericFacade<EstadosRemisionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: EstadosRemisionesService,
        entityState: EstadosRemisionesState) {
        super(entityService, entityState);
    }

}
