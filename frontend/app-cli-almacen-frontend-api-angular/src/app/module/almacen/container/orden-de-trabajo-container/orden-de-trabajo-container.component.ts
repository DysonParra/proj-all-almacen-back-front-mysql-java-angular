/*
 * @fileoverview    {OrdenDeTrabajoContainerComponent}
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
import { OrdenDeTrabajoViewModel } from '../../model/orden-de-trabajo.model';
import { OrdenDeTrabajoFacade } from '../../facade/orden-de-trabajo.facade';

/**
 * TODO: Description of {@code OrdenDeTrabajoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-orden-de-trabajo-container',
    templateUrl: './orden-de-trabajo-container.component.html',
    standalone: false,
    styleUrls: ['./orden-de-trabajo-container.component.css']
})
export class OrdenDeTrabajoContainerComponent extends GenericContainerComponent<OrdenDeTrabajoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrdenDeTrabajoViewModel,
        entityFacade: OrdenDeTrabajoFacade) {
        super(entityInstance, entityFacade);
    }

}
