/*
 * @overview        {ListasPreciosContainerComponent}
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
import { ListasPreciosViewModel } from '../../model/listas-precios.model';
import { ListasPreciosFacade } from '../../facade/listas-precios.facade';

/**
 * TODO: Description of {@code ListasPreciosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-listas-precios-container',
    templateUrl: './listas-precios-container.component.html',
    standalone: false,
    styleUrls: ['./listas-precios-container.component.css']
})
export class ListasPreciosContainerComponent extends GenericContainerComponent<ListasPreciosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ListasPreciosViewModel,
        entityFacade: ListasPreciosFacade) {
        super(entityInstance, entityFacade);
    }

}
