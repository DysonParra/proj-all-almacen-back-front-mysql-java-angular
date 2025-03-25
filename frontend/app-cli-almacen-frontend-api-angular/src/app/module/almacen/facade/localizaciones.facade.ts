/*
 * @fileoverview    {LocalizacionesFacade}
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
import { LocalizacionesViewModel } from '../model/localizaciones.model';
import { LocalizacionesState } from '../state/localizaciones.state';
import { LocalizacionesService } from '../service/localizaciones.service';

/**
 * TODO: Description of {@code LocalizacionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class LocalizacionesFacade extends GenericFacade<LocalizacionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: LocalizacionesService,
        entityState: LocalizacionesState) {
        super(entityService, entityState);
    }

}
