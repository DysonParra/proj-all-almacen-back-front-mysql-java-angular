/*
 * @overview        {ListasPreciosMaterialesFacade}
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
import { ListasPreciosMaterialesViewModel } from '../model/listas-precios-materiales.model';
import { ListasPreciosMaterialesState } from '../state/listas-precios-materiales.state';
import { ListasPreciosMaterialesService } from '../service/listas-precios-materiales.service';

/**
 * TODO: Description of {@code ListasPreciosMaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ListasPreciosMaterialesFacade extends GenericFacade<ListasPreciosMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ListasPreciosMaterialesService,
        entityState: ListasPreciosMaterialesState) {
        super(entityService, entityState);
    }

}
