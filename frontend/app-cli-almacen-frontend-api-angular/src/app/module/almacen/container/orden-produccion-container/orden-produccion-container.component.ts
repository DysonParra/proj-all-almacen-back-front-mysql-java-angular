/*
 * @fileoverview    {OrdenProduccionContainerComponent}
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
import { OrdenProduccionViewModel } from '../../model/orden-produccion.model';
import { OrdenProduccionFacade } from '../../facade/orden-produccion.facade';

/**
 * TODO: Description of {@code OrdenProduccionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-orden-produccion-container',
    templateUrl: './orden-produccion-container.component.html',
    standalone: false,
    styleUrls: ['./orden-produccion-container.component.css']
})
export class OrdenProduccionContainerComponent extends GenericContainerComponent<OrdenProduccionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrdenProduccionViewModel,
        entityFacade: OrdenProduccionFacade) {
        super(entityInstance, entityFacade);
    }

}
