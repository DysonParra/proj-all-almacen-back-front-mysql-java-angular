/*
 * @fileoverview    {TipoListaMaterialFacade}
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
import { TipoListaMaterialViewModel } from '../model/tipo-lista-material.model';
import { TipoListaMaterialState } from '../state/tipo-lista-material.state';
import { TipoListaMaterialService } from '../service/tipo-lista-material.service';

/**
 * TODO: Description of {@code TipoListaMaterialFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TipoListaMaterialFacade extends GenericFacade<TipoListaMaterialViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TipoListaMaterialService,
        entityState: TipoListaMaterialState) {
        super(entityService, entityState);
    }

}
