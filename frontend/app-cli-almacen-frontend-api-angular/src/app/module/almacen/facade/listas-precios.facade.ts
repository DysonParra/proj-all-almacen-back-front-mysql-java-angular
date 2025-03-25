/*
 * @fileoverview    {ListasPreciosFacade}
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
import { ListasPreciosViewModel } from '../model/listas-precios.model';
import { ListasPreciosState } from '../state/listas-precios.state';
import { ListasPreciosService } from '../service/listas-precios.service';

/**
 * TODO: Description of {@code ListasPreciosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ListasPreciosFacade extends GenericFacade<ListasPreciosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ListasPreciosService,
        entityState: ListasPreciosState) {
        super(entityService, entityState);
    }

}
