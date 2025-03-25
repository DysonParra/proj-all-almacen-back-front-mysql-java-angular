/*
 * @fileoverview    {ListasPreciosMaterialesContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { ListasPreciosMaterialesViewModel } from '../../model/listas-precios-materiales.model';
import { ListasPreciosMaterialesFacade } from '../../facade/listas-precios-materiales.facade';

/**
 * TODO: Description of {@code ListasPreciosMaterialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-listas-precios-materiales-container',
    templateUrl: './listas-precios-materiales-container.component.html',
    standalone: false,
    styleUrls: ['./listas-precios-materiales-container.component.css']
})
export class ListasPreciosMaterialesContainerComponent extends GenericContainerComponent<ListasPreciosMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ListasPreciosMaterialesViewModel,
        entityFacade: ListasPreciosMaterialesFacade) {
        super(entityInstance, entityFacade);
    }

}
