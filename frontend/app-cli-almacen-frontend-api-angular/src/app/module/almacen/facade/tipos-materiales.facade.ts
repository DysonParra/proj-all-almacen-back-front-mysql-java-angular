/*
 * @fileoverview    {TiposMaterialesFacade}
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
import { TiposMaterialesViewModel } from '../model/tipos-materiales.model';
import { TiposMaterialesState } from '../state/tipos-materiales.state';
import { TiposMaterialesService } from '../service/tipos-materiales.service';

/**
 * TODO: Description of {@code TiposMaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposMaterialesFacade extends GenericFacade<TiposMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TiposMaterialesService,
        entityState: TiposMaterialesState) {
        super(entityService, entityState);
    }

}
