/*
 * @overview        {UbicacionesFacade}
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
import { UbicacionesViewModel } from '../model/ubicaciones.model';
import { UbicacionesState } from '../state/ubicaciones.state';
import { UbicacionesService } from '../service/ubicaciones.service';

/**
 * TODO: Description of {@code UbicacionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class UbicacionesFacade extends GenericFacade<UbicacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: UbicacionesService,
        entityState: UbicacionesState) {
        super(entityService, entityState);
    }

}
