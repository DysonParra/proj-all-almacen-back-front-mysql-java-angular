/*
 * @fileoverview    {MmTmcdDescripcionesFacade}
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
import { MmTmcdDescripcionesViewModel } from '../model/mm-tmcd-descripciones.model';
import { MmTmcdDescripcionesState } from '../state/mm-tmcd-descripciones.state';
import { MmTmcdDescripcionesService } from '../service/mm-tmcd-descripciones.service';

/**
 * TODO: Description of {@code MmTmcdDescripcionesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MmTmcdDescripcionesFacade extends GenericFacade<MmTmcdDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MmTmcdDescripcionesService,
        entityState: MmTmcdDescripcionesState) {
        super(entityService, entityState);
    }

}
