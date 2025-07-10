/*
 * @overview        {BodegasFacade}
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
import { BodegasViewModel } from '../model/bodegas.model';
import { BodegasState } from '../state/bodegas.state';
import { BodegasService } from '../service/bodegas.service';

/**
 * TODO: Description of {@code BodegasFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class BodegasFacade extends GenericFacade<BodegasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: BodegasService,
        entityState: BodegasState) {
        super(entityService, entityState);
    }

}
