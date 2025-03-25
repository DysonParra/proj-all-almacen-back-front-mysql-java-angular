/*
 * @fileoverview    {RemisionesComprasContainerComponent}
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
import { RemisionesComprasViewModel } from '../../model/remisiones-compras.model';
import { RemisionesComprasFacade } from '../../facade/remisiones-compras.facade';

/**
 * TODO: Description of {@code RemisionesComprasContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-compras-container',
    templateUrl: './remisiones-compras-container.component.html',
    standalone: false,
    styleUrls: ['./remisiones-compras-container.component.css']
})
export class RemisionesComprasContainerComponent extends GenericContainerComponent<RemisionesComprasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesComprasViewModel,
        entityFacade: RemisionesComprasFacade) {
        super(entityInstance, entityFacade);
    }

}
