/*
 * @fileoverview    {RemisionesVentaContainerComponent}
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
import { RemisionesVentaViewModel } from '../../model/remisiones-venta.model';
import { RemisionesVentaFacade } from '../../facade/remisiones-venta.facade';

/**
 * TODO: Description of {@code RemisionesVentaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-venta-container',
    templateUrl: './remisiones-venta-container.component.html',
    standalone: false,
    styleUrls: ['./remisiones-venta-container.component.css']
})
export class RemisionesVentaContainerComponent extends GenericContainerComponent<RemisionesVentaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesVentaViewModel,
        entityFacade: RemisionesVentaFacade) {
        super(entityInstance, entityFacade);
    }

}
