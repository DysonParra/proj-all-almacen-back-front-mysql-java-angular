/*
 * @fileoverview    {RemisionesComprasMaterialesContainerComponent}
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
import { RemisionesComprasMaterialesViewModel } from '../../model/remisiones-compras-materiales.model';
import { RemisionesComprasMaterialesFacade } from '../../facade/remisiones-compras-materiales.facade';

/**
 * TODO: Description of {@code RemisionesComprasMaterialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-compras-materiales-container',
    templateUrl: './remisiones-compras-materiales-container.component.html',
    standalone: false,
    styleUrls: ['./remisiones-compras-materiales-container.component.css']
})
export class RemisionesComprasMaterialesContainerComponent extends GenericContainerComponent<RemisionesComprasMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesComprasMaterialesViewModel,
        entityFacade: RemisionesComprasMaterialesFacade) {
        super(entityInstance, entityFacade);
    }

}
