/*
 * @fileoverview    {MaterialesDescripcionesFacade}
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
import { MaterialesDescripcionesViewModel } from '../model/materiales-descripciones.model';
import { MaterialesDescripcionesState } from '../state/materiales-descripciones.state';
import { MaterialesDescripcionesService } from '../service/materiales-descripciones.service';

/**
 * TODO: Description of {@code MaterialesDescripcionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialesDescripcionesFacade extends GenericFacade<MaterialesDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MaterialesDescripcionesService,
        entityState: MaterialesDescripcionesState) {
        super(entityService, entityState);
    }

}
