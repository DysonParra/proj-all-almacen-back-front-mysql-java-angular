/*
 * @fileoverview    {RemisionesVentaMaterialesContainerComponent}
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
import { RemisionesVentaMaterialesViewModel } from '../../model/remisiones-venta-materiales.model';
import { RemisionesVentaMaterialesFacade } from '../../facade/remisiones-venta-materiales.facade';

/**
 * TODO: Description of {@code RemisionesVentaMaterialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-remisiones-venta-materiales-container',
    templateUrl: './remisiones-venta-materiales-container.component.html',
    standalone: false,
    styleUrls: ['./remisiones-venta-materiales-container.component.css']
})
export class RemisionesVentaMaterialesContainerComponent extends GenericContainerComponent<RemisionesVentaMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RemisionesVentaMaterialesViewModel,
        entityFacade: RemisionesVentaMaterialesFacade) {
        super(entityInstance, entityFacade);
    }

}
