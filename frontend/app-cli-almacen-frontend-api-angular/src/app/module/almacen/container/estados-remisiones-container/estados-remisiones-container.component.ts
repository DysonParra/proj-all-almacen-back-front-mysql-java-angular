/*
 * @fileoverview    {EstadosRemisionesContainerComponent}
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
import { EstadosRemisionesViewModel } from '../../model/estados-remisiones.model';
import { EstadosRemisionesFacade } from '../../facade/estados-remisiones.facade';

/**
 * TODO: Description of {@code EstadosRemisionesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-estados-remisiones-container',
    templateUrl: './estados-remisiones-container.component.html',
    standalone: false,
    styleUrls: ['./estados-remisiones-container.component.css']
})
export class EstadosRemisionesContainerComponent extends GenericContainerComponent<EstadosRemisionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: EstadosRemisionesViewModel,
        entityFacade: EstadosRemisionesFacade) {
        super(entityInstance, entityFacade);
    }

}
