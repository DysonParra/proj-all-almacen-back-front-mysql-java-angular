/*
 * @overview        {ListaDeMaterialesFacade}
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
import { ListaDeMaterialesViewModel } from '../model/lista-de-materiales.model';
import { ListaDeMaterialesState } from '../state/lista-de-materiales.state';
import { ListaDeMaterialesService } from '../service/lista-de-materiales.service';

/**
 * TODO: Description of {@code ListaDeMaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ListaDeMaterialesFacade extends GenericFacade<ListaDeMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ListaDeMaterialesService,
        entityState: ListaDeMaterialesState) {
        super(entityService, entityState);
    }

}
